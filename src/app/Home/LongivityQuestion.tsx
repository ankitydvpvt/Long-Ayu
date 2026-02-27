'use client';

import React, { useState, useEffect } from 'react';

const LongivityQuestion = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed right-0 top-1/4 z-50">
            <a
                href="/Contact"
                rel="noopener noreferrer"
            >
                <button
                    className={`flex items-center gap-3 bg-[#2e403b] text-white p-3 rounded-l-full shadow-xl transition-all duration-500 hover:bg-[#3a524c] ${show
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                        }`}
                >
                    <div className="leading-tight text-left">
                        <p className="text-sm font-semibold">
                            Any Longevity Question?
                        </p>
                        <p className="text-xs text-green-200">
                            Freely Ask 💬
                        </p>
                    </div>
                </button>
            </a>
        </div>
    );
};

export default LongivityQuestion;