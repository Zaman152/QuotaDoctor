"use client";
import { Star, Phone, PhoneOff, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { RetellWebClient } from "retell-client-js-sdk";
import ElectricBorder from '@/components/ElectricBorder';
import CallPopup from '@/components/CallPopup';

const receptionistAgentId = process.env.NEXT_PUBLIC_RETTELL_AGENT_ID;
const sdrAgentId = "agent_a53228875f4f60dc0481757995";
const apiKey = process.env.NEXT_PUBLIC_RETTELL_API_KEY;

export default function Nomisscalls() {

    // Left section (MissNoCalls) state
    const [isCallActive, setIsCallActive] = useState(false);
    const [callStatus, setCallStatus] = useState('');
    const retellWebClientRef = useRef(null);

    // Right section (QuotaDoctor) state
    const [isCallActive2, setIsCallActive2] = useState(false);
    const [callStatus2, setCallStatus2] = useState('');
    const retellWebClientRef2 = useRef(null);

    // Initialize Retell Web Clients
    useEffect(() => {
        // Initialize first client (MissNoCalls)
        retellWebClientRef.current = new RetellWebClient();

        retellWebClientRef.current.on("call_started", () => {
            console.log("Call 1 started");
            setCallStatus("Call started");
            setIsCallActive(true);
        });

        retellWebClientRef.current.on("call_ended", () => {
            console.log("Call 1 ended");
            setCallStatus("Call ended");
            setIsCallActive(false);
        });

        retellWebClientRef.current.on("agent_start_talking", () => {
            console.log("Agent 1 started talking");
            setCallStatus("Agent is talking...");
        });

        retellWebClientRef.current.on("agent_stop_talking", () => {
            console.log("Agent 1 stopped talking");
            setCallStatus("Listening...");
        });

        retellWebClientRef.current.on("error", (error) => {
            console.error("Call 1 error:", error);
            setCallStatus(`Error: ${error.message}`);
            setIsCallActive(false);
        });

        retellWebClientRef.current.on("update", (update) => {
            console.log("Call 1 update:", update);
        });

        // Initialize second client (QuotaDoctor)
        retellWebClientRef2.current = new RetellWebClient();

        retellWebClientRef2.current.on("call_started", () => {
            console.log("Call 2 started");
            setCallStatus2("Call started");
            setIsCallActive2(true);
        });

        retellWebClientRef2.current.on("call_ended", () => {
            console.log("Call 2 ended");
            setCallStatus2("Call ended");
            setIsCallActive2(false);
        });

        retellWebClientRef2.current.on("agent_start_talking", () => {
            console.log("Agent 2 started talking");
            setCallStatus2("Agent is talking...");
        });

        retellWebClientRef2.current.on("agent_stop_talking", () => {
            console.log("Agent 2 stopped talking");
            setCallStatus2("Listening...");
        });

        retellWebClientRef2.current.on("error", (error) => {
            console.error("Call 2 error:", error);
            setCallStatus2(`Error: ${error.message}`);
            setIsCallActive2(false);
        });

        retellWebClientRef2.current.on("update", (update) => {
            console.log("Call 2 update:", update);
        });
    }, []);

    const takeDemoCall = async () => {

        if (!receptionistAgentId) {
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
                    agent_id: receptionistAgentId,
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

    const takeDemoCall2 = async () => {

        if (!sdrAgentId) {
            console.error('SDR Agent ID is not defined');
            alert('SDR Agent ID is not configured.');
            return;
        }

        if (!apiKey) {
            console.error('NEXT_PUBLIC_RETTELL_API_KEY is not defined');
            alert('API Key is not configured. Please check your environment variables.');
            return;
        }

        if (isCallActive2) {
            alert('A call is already in progress');
            return;
        }

        try {
            setCallStatus2("Creating call...");

            const response = await fetch('https://api.retellai.com/v2/create-web-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    agent_id: sdrAgentId,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                alert(`API Error: ${JSON.stringify(errorData)}`);
                setCallStatus2("");
                return;
            }

            const data = await response.json();
            console.log('Call 2 created:', data);

            // Start the call using the access token
            setCallStatus2("Connecting...");
            await retellWebClientRef2.current.startCall({
                accessToken: data.access_token,
            });

        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.message}`);
            setCallStatus2("");
            setIsCallActive2(false);
        }
    }

    const endCall2 = async () => {
        if (retellWebClientRef2.current) {
            retellWebClientRef2.current.stopCall();
            setCallStatus2("Call ended");
            setIsCallActive2(false);
        }
    }

    return (
        <div id="get-started" className="bg-[#0A0A0F]">
            {/* Dark Header Bar */}
            <div className="bg-[#16213E] h-2 w-full"></div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Two Side-by-Side CTA Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* LEFT SECTION - MissNoCalls */}
                    <ElectricBorder color="#3282B8" borderRadius={16}>
                        <div className="bg-[#16213E] rounded-2xl shadow-xl pt-8 px-8 pb-6 md:pt-12 md:px-12 md:pb-8 h-full flex flex-col min-h-[800px]">
                            <div className="text-center flex-1 flex flex-col justify-between">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                                    <Star className="w-8 h-8 text-[#3282B8] mr-3" fill="currentColor" />
                                    Try MissNoCalls Today
                                </h2>

                                <div className="flex-1">
                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-8">
                                        MissNoCalls wins this battle hands down. It&apos;s more flexible, budget-friendly, and global than many legacy solutions. Whether you&apos;re a small company or a big enterprise, MissNoCalls is ready to help you grow with AI-powered reception that never misses a call.
                                    </p>

                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-4">
                                        <strong className="text-white">24/7 availability. Zero missed opportunities. 100% professional.</strong>
                                    </p>

                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-8">
                                        We&apos;re your virtual receptionist that works around the clock. No hiring costs. No training time. Just reliable support that scales with your business.
                                    </p>

                                    <div className="bg-[#1A1A2E] border border-[#0F4C75]/30 rounded-xl p-6 mb-8">
                                        <p className="text-xl font-semibold text-white">
                                            <button onClick={takeDemoCall} disabled={isCallActive} className={`${isCallActive ? 'text-[#BBE1FA]/40 cursor-not-allowed' : 'text-[#3282B8] hover:text-[#BBE1FA] hover:underline cursor-pointer'}`}>Book a demo</button>{' '}
                                            today to see how it can transform the way you handle calls and grow your customer relationships.
                                        </p>

                                        {/* Call Status Display Removed - utilizing CallPopup */}
                                    </div>
                                </div>

                                <button onClick={takeDemoCall} disabled={isCallActive} className="bg-[#3282B8] hover:bg-[#0F4C75] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(50,130,184,0.5)] inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed mx-auto">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </ElectricBorder>

                    {/* RIGHT SECTION - QuotaDoctor */}
                    <ElectricBorder color="#3282B8" borderRadius={16}>
                        <div className="bg-[#16213E] rounded-2xl shadow-xl pt-8 px-8 pb-6 md:pt-12 md:px-12 md:pb-8 h-full flex flex-col min-h-[800px]">
                            <div className="text-center flex-1 flex flex-col justify-between">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                                    <Star className="w-8 h-8 text-[#3282B8] mr-3" fill="currentColor" />
                                    Stop Missing Quota. Start Scaling Revenue.
                                </h2>

                                <div className="flex-1">
                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-8">
                                        If your sales team is working hard but not hitting numbers, it&apos;s not a people problem—it&apos;s a systems problem. QuotaDoctor diagnoses exactly where deals are falling apart and builds the coaching, playbooks, and automation your team needs to close consistently.
                                    </p>

                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-4">
                                        <strong className="text-white">3x average win rate improvement. $92M+ revenue impact. 250+ reps coached.</strong>
                                    </p>

                                    <p className="text-lg text-[#BBE1FA] leading-relaxed mb-8">
                                        We&apos;re fractional VP Sales leadership for companies ready to scale. No $200K salary. No guesswork. Just measurable results.
                                    </p>

                                    <div className="bg-[#1A1A2E] border border-[#0F4C75]/30 rounded-xl p-6 mb-8">
                                        <p className="text-xl font-semibold text-white">
                                            Book your free{' '}
                                            <button onClick={takeDemoCall2} disabled={isCallActive2} className={`${isCallActive2 ? 'text-[#BBE1FA]/40 cursor-not-allowed' : 'text-[#3282B8] hover:text-[#BBE1FA] hover:underline cursor-pointer'}`}>AI Audit</button>.
                                            We&apos;ll analyze your numbers, identify the bottlenecks, and show you exactly how we can help.
                                        </p>

                                        {/* Call Status Display Removed - utilizing CallPopup */}
                                    </div>
                                </div>

                                <button onClick={takeDemoCall2} disabled={isCallActive2} className="bg-[#3282B8] hover:bg-[#0F4C75] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(50,130,184,0.5)] inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed mx-auto">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </ElectricBorder>

                </div>

            </div>


            {/* Call Popups */}
            <CallPopup
                isOpen={isCallActive}
                agentName="MissNoCalls Agent"
                status={callStatus}
                onEndCall={endCall}
            />
            <CallPopup
                isOpen={isCallActive2}
                agentName="QuotaDoctor Agent"
                status={callStatus2}
                onEndCall={endCall2}
            />
        </div >
    );
}