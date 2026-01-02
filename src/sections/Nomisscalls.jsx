"use client";
import { Star, Phone, PhoneOff, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { RetellWebClient } from "retell-client-js-sdk";
import ElectricBorder from '@/components/ElectricBorder';

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
        <div id="get-started" className="bg-[#0A0A0F]">
            {/* Dark Header Bar */}
            <div className="bg-[#16213E] h-2 w-full"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">

                {/* CTA Section */}
                <ElectricBorder color="#3282B8" borderRadius={16}>
                    <div className="bg-[#16213E] rounded-2xl shadow-xl p-8 md:p-12 h-full">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                                <Star className="w-8 h-8 text-[#3282B8] mr-3" fill="currentColor" />
                                Try MissNoCalls Today
                            </h2>

                            <p className="text-lg text-[#BBE1FA] leading-relaxed mb-8">
                                MissNoCalls wins this battle hands down. It&apos;s more flexible, budget-friendly, and global than many legacy solutions — QuotaDoctor focuses on measurable revenue outcomes and fractional leadership.
                                Whether you&apos;re a small company or a big enterprise, MissNoCalls is ready to help you grow. Plus, its
                                commitment to customer satisfaction ensures you&apos;ll always have the support you need.
                            </p>

                            <div className="bg-[#1A1A2E] border border-[#0F4C75]/30 rounded-xl p-6 mb-8">
                                <p className="text-xl font-semibold text-white">
                                    Try MissNoCalls today.{' '}
                                    <button onClick={takeDemoCall} disabled={isCallActive} className={`${isCallActive ? 'text-[#BBE1FA]/40 cursor-not-allowed' : 'text-[#3282B8] hover:text-[#BBE1FA] hover:underline cursor-pointer'}`}>Book a demo</button>{' '}
                                    to see how it can change the way you do business.
                                </p>

                                {/* Call Status Display */}
                                {callStatus && (
                                    <div className={`mt-4 p-4 rounded-lg ${isCallActive ? 'bg-[#3282B8]/20 border-2 border-[#3282B8]' : 'bg-[#1A1A2E] border border-[#0F4C75]/30'}`}>
                                        <p className="text-lg font-semibold text-white flex items-center justify-center">
                                            {isCallActive && <Phone className="w-5 h-5 mr-2 animate-pulse text-[#3282B8]" />}
                                            {callStatus}
                                        </p>
                                        {isCallActive && (
                                            <button
                                                onClick={endCall}
                                                className="mt-3 bg-[#3282B8] hover:bg-[#0F4C75] text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 inline-flex items-center mx-auto"
                                            >
                                                <PhoneOff className="w-5 h-5 mr-2" />
                                                End Call
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button onClick={takeDemoCall} disabled={isCallActive} className="bg-[#3282B8] hover:bg-[#0F4C75] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(50,130,184,0.5)] inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                                <Zap className="w-5 h-5 mr-2" />
                                Get Started
                            </button>
                        </div>
                    </div>
                </ElectricBorder>

            </div>
        </div>
    );
}