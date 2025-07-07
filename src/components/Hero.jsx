import React from "react";
export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[#f6f4fb]">
            {/* Left Text Content */}
            <div className="max-w-xl mb-12 md:mb-0">
                <p className="text-sm text-red-500 font-semibold mb-2 uppercase">New Ghost Browser</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Isolate Your <br /> Identities.
                </h1>
                <p className="text-gray-500 text-lg mb-6">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="bg-[#5D5FEF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4b4dd0] transition duration-200">
                    Download Now
                </button>
            </div>

            {/* Right Image Content */}
            <div className="flex justify-center">
                <img
                    src=""
                    alt="Hero Illustration"
                    className="max-w-[400px] w-full"
                />
            </div>
        </section>
    );
}
