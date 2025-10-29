import React from 'react';

export default function CommentForm() {
    return (
        <div id="contact" className="px-4 py-24">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-purple-200 text-sm font-medium backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
                        Contact
                    </div>
                    <h2 className="section-title mt-4">Get in Touch</h2>
                    <p className="section-description mt-4">We'd love to hear from you. Tell us a bit about your needs.</p>
                </div>

                <div className="p-[1px] rounded-2xl" style={{background:"linear-gradient(135deg, rgba(139,92,246,0.35), rgba(59,130,246,0.35))"}}>
                    <div className="rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.30)]">
                        <form className="space-y-5">
                            {/* Comment Box */}
                            <textarea
                                className="w-full rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] min-h-[150px]"
                                placeholder="Write your comment here..."
                                required
                            />

                            {/* Name Input */}
                            <input
                                type="text"
                                className="w-full rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                                placeholder="Name *"
                                required
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                className="w-full rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                                placeholder="Email *"
                                required
                            />

                            {/* Website Input (Optional) */}
                            <input
                                type="url"
                                className="w-full rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                                placeholder="Website"
                            />

                            {/* Save Info Checkbox */}
                            <div className="flex items-center space-x-2">
                                <input
                                    id="saveInfo"
                                    type="checkbox"
                                    className="h-4 w-4 text-purple-400 bg-white/5 border-white/20 rounded focus:ring-[#8B5CF6]"
                                />
                                <label htmlFor="saveInfo" className="text-sm text-gray-300">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full py-3 rounded-xl font-semibold"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
