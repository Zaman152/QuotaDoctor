"use client";
import { Play, Star, Folder, Phone, PhoneOff } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { RetellWebClient } from "retell-client-js-sdk";

const agentId = process.env.NEXT_PUBLIC_RETTELL_AGENT_ID;
const apiKey = process.env.NEXT_PUBLIC_RETTELL_API_KEY;

export default function Nomisscalls() {

    const [isCallActive, setIsCallActive] = useState(false);
    const [callStatus, setCallStatus] = useState('');
    const retellWebClientRef = useRef(null);

    // Initialize Retell Web Client
    useEffect(() => {
        retellWebClientRef.current = new RetellWebClient();

        // Set up event listeners
        retellWebClientRef.current.on("call_started", () => {
            console.log("Call started");
            setCallStatus("Call started");
            setIsCallActive(true);
        });

        retellWebClientRef.current.on("call_ended", () => {
            console.log("Call ended");
            setCallStatus("Call ended");
            setIsCallActive(false);
        });

        retellWebClientRef.current.on("agent_start_talking", () => {
            console.log("Agent started talking");
            setCallStatus("Agent is talking...");
        });

        retellWebClientRef.current.on("agent_stop_talking", () => {
            console.log("Agent stopped talking");
            setCallStatus("Listening...");
        });

        retellWebClientRef.current.on("error", (error) => {
            console.error("Call error:", error);
            setCallStatus(`Error: ${error.message}`);
            setIsCallActive(false);
        });

        retellWebClientRef.current.on("update", (update) => {
            console.log("Call update:", update);
        });
    }, []);

    const takeDemoCall = async () => {
        
        if (!agentId) {
            console.error('NEXT_PUBLIC_RETTELL_AGENT_ID is not defined');
            alert('Agent ID is not configured. Please check your environment variables.');
            return;
        }
        
        if (!apiKey) {
            console.error('NEXT_PUBLIC_RETTELL_API_KEY is not defined');
            alert('API Key is not configured. Please check your environment variables.');
            return;
        }

        if (isCallActive) {
            alert('A call is already in progress');
            return;
        }
        
        try {
            setCallStatus("Creating call...");
            
            const response = await fetch('https://api.retellai.com/v2/create-web-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    agent_id: agentId,
                }),
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                alert(`API Error: ${JSON.stringify(errorData)}`);
                setCallStatus("");
                return;
            }
            
            const data = await response.json();
            console.log('Call created:', data);
            
            // Start the call using the access token
            setCallStatus("Connecting...");
            await retellWebClientRef.current.startCall({
                accessToken: data.access_token,
            });
            
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.message}`);
            setCallStatus("");
            setIsCallActive(false);
        }
    }

    const endCall = async () => {
        if (retellWebClientRef.current) {
            retellWebClientRef.current.stopCall();
            setCallStatus("Call ended");
            setIsCallActive(false);
        }
    }
    
    return (
        <div id="get-started" className="min-h-screen bg-gray-50">
            {/* Dark Header Bar */}
            <div className="bg-gray-800 h-2 w-full"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-blue-500 rounded-lg p-2 mr-3">
                            <span className="text-white text-2xl">⚡</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Eclipse Technologies Alternative: Eclipse Technologies vs MissNoCalls in Epic Bot Battle
                        </h1>
                    </div>

                    <p className="text-center text-lg text-gray-700">
                        Examine other best options in the market and see how{' '}
                        <span className="font-bold">Eclipse Technologies</span> compares with{' '}
                        <a href="#" className="text-blue-600 hover:underline font-semibold">MissNoCalls</a>:
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-16">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                        {/* Video Thumbnail/Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4 hover:bg-red-700 transition-colors cursor-pointer">
                                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    🔥 Voiceflow vs MissNoCalls Upfront - Epic Bot Battles 🔥
                                </h3>
                                <div className="text-white/80 text-sm">Watch on YouTube</div>
                            </div>
                        </div>

                        {/* Overlay decoration */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-4 left-4 text-white/20 text-6xl">🤖</div>
                            <div className="absolute bottom-4 right-4 text-white/20 text-6xl">⚡</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                            <Star className="w-8 h-8 text-yellow-500 mr-3" fill="currentColor" />
                            Try MissNoCalls Today
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            MissNoCalls wins this battle hands down. It&apos;s more flexible, budget-friendly, and global than Eclipse Technologies.
                            Whether you&apos;re a small company or a big enterprise, MissNoCalls is ready to help you grow. Plus, its
                            commitment to customer satisfaction ensures you&apos;ll always have the support you need.
                        </p>

                        <div className="bg-gray-50 rounded-xl p-6 mb-8">
                            <p className="text-xl font-semibold text-gray-900">
                                Try MissNoCalls today.{' '}
                                <button onClick={takeDemoCall} disabled={isCallActive} className={`${isCallActive ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:underline cursor-pointer'}`}>Book a demo</button>{' '}
                                to see how it can change the way you do business.
                            </p>
                            
                            {/* Call Status Display */}
                            {callStatus && (
                                <div className={`mt-4 p-4 rounded-lg ${isCallActive ? 'bg-green-100 border-2 border-green-500' : 'bg-blue-100'}`}>
                                    <p className="text-lg font-semibold text-gray-900 flex items-center justify-center">
                                        {isCallActive && <Phone className="w-5 h-5 mr-2 animate-pulse text-green-600" />}
                                        {callStatus}
                                    </p>
                                    {isCallActive && (
                                        <button 
                                            onClick={endCall}
                                            className="mt-3 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 inline-flex items-center mx-auto"
                                        >
                                            <PhoneOff className="w-5 h-5 mr-2" />
                                            End Call
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center">
                            <span className="mr-2">➕</span>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <Folder className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="text-sm font-semibold text-gray-700">Epic Bot Battles</span>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="mr-2">‹</span>
                            <a href="#" className="hover:underline">Convin Review, Pricing and Alternative</a>
                        </div>
                        <div className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="mr-2">›</span>
                            <a href="#" className="hover:underline">Pixel Calls Review, Pricing and Alternative</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}