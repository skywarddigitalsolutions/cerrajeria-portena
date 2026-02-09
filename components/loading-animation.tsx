"use client";

import { useEffect, useState } from "react";

export function LoadingAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // Start fade out after animation completes
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);

        // Remove from DOM after fade out
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-foreground transition-opacity duration-500 ${isAnimating ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="relative">
                {/* Lock body */}
                <svg
                    width="120"
                    height="140"
                    viewBox="0 0 120 140"
                    className="lock-container"
                >
                    {/* Lock shackle (top part) */}
                    <path
                        d="M 35 40 Q 35 15, 60 15 Q 85 15, 85 40 L 85 60"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="lock-shackle"
                    />

                    {/* Lock body */}
                    <rect
                        x="25"
                        y="60"
                        width="70"
                        height="60"
                        rx="8"
                        fill="hsl(var(--accent))"
                        className="lock-body"
                    />

                    {/* Keyhole */}
                    <circle
                        cx="60"
                        cy="85"
                        r="8"
                        fill="hsl(var(--foreground))"
                        className="keyhole"
                    />
                    <rect
                        x="56"
                        y="85"
                        width="8"
                        height="15"
                        fill="hsl(var(--foreground))"
                        className="keyhole-slot"
                    />
                </svg>

                {/* Key */}
                <svg
                    width="80"
                    height="30"
                    viewBox="0 0 80 30"
                    className="key absolute top-[50px] left-[100px]"
                >
                    {/* Key head (circular part) */}
                    <circle
                        cx="15"
                        cy="15"
                        r="12"
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--primary-foreground))"
                        strokeWidth="2"
                    />
                    <circle
                        cx="15"
                        cy="15"
                        r="5"
                        fill="hsl(var(--foreground))"
                    />

                    {/* Key shaft */}
                    <rect
                        x="25"
                        y="12"
                        width="45"
                        height="6"
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--primary-foreground))"
                        strokeWidth="2"
                    />

                    {/* Key teeth */}
                    <rect x="50" y="8" width="4" height="4" fill="hsl(var(--primary))" />
                    <rect x="58" y="8" width="4" height="6" fill="hsl(var(--primary))" />
                    <rect x="66" y="8" width="4" height="4" fill="hsl(var(--primary))" />
                </svg>

                {/* Loading text */}
                <p className="loading-text mt-8 text-center text-sm font-medium text-primary-foreground">
                    Cerrajería Porteña
                </p>
            </div>

            <style jsx>{`
        .lock-shackle {
          animation: shackle-open 0.6s ease-in-out 1.2s forwards;
          transform-origin: 35px 60px;
        }

        .key {
          animation: key-insert 1.2s ease-in-out forwards;
        }

        .loading-text {
          animation: text-fade 0.8s ease-in-out 0.4s both;
        }

        @keyframes key-insert {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateX(-85px) rotate(0deg);
          }
          70% {
            transform: translateX(-85px) rotate(90deg);
          }
          100% {
            transform: translateX(-85px) rotate(90deg);
          }
        }

        @keyframes shackle-open {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-30deg);
          }
        }

        @keyframes text-fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
