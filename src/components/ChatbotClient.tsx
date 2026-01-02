'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles, Cpu, ChevronRight, CircleUser, MessageCircle, MessageCircleCode, MessageCircleX, MessageSquareDashed, MessageSquareDot, MessageSquareDiff, MessageSquareMore } from 'lucide-react';

interface Message {
    text: string;
    isBot: boolean;
}

export default function ChatbotClient() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "System Online. I am the QuotaDoctor Intelligence Unit. How may I optimize your revenue operations?", isBot: true }
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
            const response = await fetch('https://leadlockerai.app.n8n.cloud/webhook/05eea566-1b6b-4dbe-bd92-037e9b62c438', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.text();
            setMessages(prev => [...prev, { text: data, isBot: true }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: "Connection error. Re-establishing link...", isBot: true }]);
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
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="pointer-events-auto mb-6 w-[360px] md:w-[420px] h-[650px] max-h-[80vh] flex flex-col bg-[#030303]/80 backdrop-blur-3xl border border-white/5 rounded-[2rem] shadow-[0_0_50px_-10px_rgba(50,130,184,0.3)] overflow-hidden relative"
                    >
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#3282B8]/10 to-transparent pointer-events-none" />

                        {/* Header */}
                        <div className="relative p-6 border-b border-white/5 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative w-2 h-2">
                                    <span className="absolute inset-0 rounded-full bg-[#3282B8] animate-ping" />
                                    <span className="relative block w-2 h-2 rounded-full bg-[#3282B8]" />
                                </div>
                                <span className="font-mono text-xs tracking-widest text-[#BBE1FA]/60 uppercase">System Active</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="group p-2 rounded-full hover:bg-white/5 transition-colors"
                            >
                                <X className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
                            {messages.map((message, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    key={index}
                                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] group ${message.isBot ? '' : 'flex flex-col items-end'}`}>
                                        {message.isBot && (
                                            <div className="flex items-center gap-2 mb-2 opacity-50">
                                                <CircleUser className="w-3 h-3 text-[#3282B8]" />
                                                <span className="text-[10px] font-mono text-[#3282B8]">QuotaDoctor</span>
                                            </div>
                                        )}
                                        <div
                                            className={`p-4 text-sm leading-relaxed relative ${message.isBot
                                                ? 'text-[#BBE1FA]/90 bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm'
                                                : 'text-white bg-[#3282B8] rounded-2xl rounded-tr-sm shadow-[0_5px_20px_-5px_rgba(50,130,184,0.4)]'
                                                }`}
                                        >
                                            {message.text}
                                            {!message.isBot && (
                                                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex gap-1 pl-4">
                                        <span className="w-1 h-1 bg-[#3282B8] rounded-full animate-[bounce_1s_infinite_-0.2s]" />
                                        <span className="w-1 h-1 bg-[#3282B8] rounded-full animate-[bounce_1s_infinite_-0.1s]" />
                                        <span className="w-1 h-1 bg-[#3282B8] rounded-full animate-[bounce_1s_infinite]" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#030303]/50 backdrop-blur-md border-t border-white/5">
                            <div className="relative flex items-center bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden focus-within:border-[#3282B8]/50 transition-colors">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="w-full bg-transparent py-4 pl-4 pr-12 text-sm text-white placeholder-white/20 focus:outline-none font-mono"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim() || isLoading}
                                    className="absolute right-2 p-2 bg-[#3282B8] rounded-xl text-white hover:bg-[#205a85] disabled:opacity-0 disabled:scale-75 transition-all shadow-lg shadow-[#3282B8]/20"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Orb Trigger */}
            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto relative group w-16 h-16 flex items-center justify-center focus:outline-none"
            >
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full border border-[#3282B8]/30 scale-100 group-hover:scale-110 transition-transform duration-500" />

                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border-t border-r border-[#3282B8] opacity-50 animate-[spin_4s_linear_infinite]" />

                {/* Core Orb */}
                <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#030303]' : 'bg-[#3282B8] shadow-[0_0_40px_rgba(50,130,184,0.6)]'}`}>
                    <AnimatePresence mode='wait'>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X className="w-5 h-5 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <MessageSquareMore className="w-5 h-5 text-white animate-pulse" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>
        </div>
    );
}