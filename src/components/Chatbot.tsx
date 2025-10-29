'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    isBot: boolean;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! How can I help you today?", isBot: true }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('https://higllc.app.n8n.cloud/webhook/05eea566-1b6b-4dbe-bd92-037e9b62c438', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.text();
            setMessages(prev => [...prev, { text: data, isBot: true }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: "Sorry, I couldn't process your request.", isBot: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300"
                    aria-label="Open chat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            ) : (
                <div className="w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
                    <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
                        <h3 className="font-medium">Chat Support</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className={`max-w-[80%] p-3 rounded-lg ${
                                    message.isBot 
                                        ? 'bg-gray-100 text-gray-800' 
                                        : 'bg-blue-600 text-white'
                                }`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                                    Typing...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim() || isLoading}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}