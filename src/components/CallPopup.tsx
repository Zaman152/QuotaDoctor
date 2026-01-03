import React from 'react';
import { Phone, PhoneOff, Mic, Activity } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

interface CallPopupProps {
    isOpen: boolean;
    agentName: string;
    status: string;
    onEndCall: () => void;
}

export default function CallPopup({ isOpen, agentName, status, onEndCall }: CallPopupProps) {
    if (!isOpen) return null;

    const isAgentTalking = status === "Agent is talking...";
    const isListening = status === "Listening..." || status === "User started talking"; // varying statuses, simplify check

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
                onClick={onEndCall} // Optional: close on backdrop click? Maybe safer not to for calls.
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                <ElectricBorder color={isAgentTalking ? "#3282B8" : "#22c55e"} speed={2} chaos={isAgentTalking ? 0.3 : 0.1}>
                    <div className="bg-[#16213E] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden relative">

                        {/* Background Ambience */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#3282B8]/10 to-transparent pointer-events-none" />

                        {/* Agent Avatar / Icon */}
                        <div className="relative mb-8 mt-4">
                            {/* Ripple Effect Circles */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#3282B8]/20 rounded-full transition-all duration-700 ${isAgentTalking ? 'scale-150 opacity-40 animate-pulse' : 'scale-100 opacity-20'}`} />
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3282B8]/10 rounded-full transition-all duration-1000 delay-75 ${isAgentTalking ? 'scale-125 opacity-30 animate-pulse' : 'scale-100 opacity-10'}`} />

                            {/* Main Icon Circle */}
                            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-full border border-[#3282B8]/50 flex items-center justify-center shadow-[0_0_30px_rgba(50,130,184,0.3)]">
                                {isAgentTalking ? (
                                    <Activity className="w-10 h-10 text-[#3282B8] animate-bounce" />
                                ) : (
                                    <Mic className="w-10 h-10 text-[#3282B8]" />
                                )}
                            </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="text-2xl font-bold text-white mb-2">{agentName}</h3>

                        <div className="flex items-center justify-center space-x-2 mb-8 bg-[#0A0A0F]/50 px-4 py-2 rounded-full border border-[#3282B8]/20">
                            <span className={`w-2 h-2 rounded-full ${status.includes("Error") ? "bg-red-500" : "bg-green-500 animate-pulse"}`} />
                            <p className="text-[#BBE1FA] font-medium min-w-[120px]">{status}</p>
                        </div>

                        {/* End Call Button */}
                        <button
                            onClick={onEndCall}
                            className="group relative inline-flex items-center justify-center px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 rounded-xl bg-red-500/10 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                            <div className="flex items-center relative z-10 text-red-500 group-hover:text-red-400 font-bold text-lg">
                                <PhoneOff className="w-5 h-5 mr-3" />
                                End Call
                            </div>
                        </button>

                    </div>
                </ElectricBorder>
            </div>
        </div>
    );
}
