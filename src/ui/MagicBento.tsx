'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export interface BentoCardProps {
    color?: string;
    title?: string;
    description?: string;
    label?: string;
    image?: string;
    link?: string;
    gradient?: string;
    icon?: React.ReactNode;
}

export interface BentoProps {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
    variant?: 'default' | 'glass' | 'gradient';
}

const MOBILE_BREAKPOINT = 768;

// Updated card data with new color scheme
const cardData: BentoCardProps[] = [
    {
        color: '#d1a22d', // Yellow/gold background
        title: 'Telomere',
        description: 'Click for Telomere Download',
        label: 'Telomere',
        image: '/telomere.avif',
        link: 'https://forms.gle/3MvbmNDnchWiKaLXA',
        gradient: 'linear-gradient(145deg, #d1a22d 0%, #b3891f 100%)'
    },
    {
        color: '#d1a22d', // Yellow/gold background
        title: 'Calcium',
        description: 'Click for Calcium rich food Download',
        label: 'Calcium',
        image: '/Calcium.avif',
        link: 'https://forms.gle/RyHpk1Bdyz62arbm6',
        gradient: 'linear-gradient(145deg, #d1a22d 0%, #b3891f 100%)'
    },
    {
        color: '#d1a22d', // Yellow/gold background
        title: 'Digestion',
        description: 'Click for Digestion time Download',
        label: 'Digestion',
        image: '/digestion.avif',
        link: 'https://forms.gle/HntyKikeV8nszFpw8',
        gradient: 'linear-gradient(145deg, #d1a22d 0%, #b3891f 100%)'
    },
    {
        color: '#d1a22d', // Yellow/gold background
        title: 'Iron',
        description: 'Click for Iron rich food Download',
        label: 'Iron',
        image: '/iron.avif',
        link: 'https://forms.gle/9RZkGnuFZzmJUV4K6',
        gradient: 'linear-gradient(145deg, #d1a22d 0%, #b3891f 100%)'
    }
];

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
    textAutoHide = true,
    enableBorderGlow = true,
    variant = 'gradient',
}) => {
    const isMobile = useMobileDetection();
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || isMobile) return;

        const cards = cardsRef.current.filter(Boolean);

        cards.forEach((card) => {
            if (!card) return;

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.4,
                    ease: 'power2.out'
                });

                // Magnetic effect for inner elements
                const innerElements = card.querySelectorAll('.card__header, .card__content');
                innerElements.forEach((el) => {
                    const rect = el.getBoundingClientRect();
                    const elX = e.clientX - rect.left;
                    const elY = e.clientY - rect.top;

                    gsap.to(el, {
                        x: (elX - rect.width / 2) * 0.1,
                        y: (elY - rect.height / 2) * 0.1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.3)'
                });

                const innerElements = card.querySelectorAll('.card__header, .card__content');
                innerElements.forEach((el) => {
                    gsap.to(el, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                });
            };

            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, [isMobile]);

    const getCardVariantStyles = useCallback((card: BentoCardProps) => {
        switch (variant) {
            case 'glass':
                return {
                    background: 'rgba(209, 162, 45, 0.7)', // #d1a22d with transparency
                    backdropFilter: 'blur(12px)',
                    borderColor: 'rgba(52, 64, 61, 0.2)', // #34403d border
                };
            case 'gradient':
                return {
                    background: card.gradient || `linear-gradient(145deg, #d1a22d, #b3891f)`, // Yellow/gold gradient
                    borderColor: 'rgba(52, 64, 61, 0.3)', // #34403d border
                };
            default:
                return {
                    backgroundColor: card.color || '#d1a22d', // #d1a22d background
                    borderColor: '#34403d', // #34403d border
                };
        }
    }, [variant]);

    return (
        <div
            ref={sectionRef}
            className="bento-section  w-full min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
        >
            {/* Animated background grid - using #34403d */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ '--grid-color': '#34403d' } as React.CSSProperties} />

            {/* Floating particles - using #34403d */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`,
                            backgroundColor: '#34403d', // #34403d particles
                            opacity: 0.2
                        }}
                    />
                ))}
            </div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Section header with new colors */}
                <div className="text-center mb-12">
                    <div className="text-4xl font-bold md:text-5xl mb-4">
                        <span className="text-[#34403d]"> {/* #34403d text */}
                            Instagram Youtube GiveAways
                        </span>
                    </div>
                    <p className="text-[#34403d]/70 text-lg max-w-2xl mx-auto"> {/* #34403d text */}

                    </p>
                </div>

                {/* Updated grid with all cards same size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((card, index) => {
                        const baseClassName = `card group relative flex flex-col justify-between w-full aspect-[3/4] p-6 rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${enableBorderGlow ? 'card--border-glow' : ''
                            } ${variant === 'glass' ? 'backdrop-blur-xl' : ''}`;

                        const cardStyle = {
                            ...getCardVariantStyles(card),
                            color: '#34403d', // Text color #34403d
                            boxShadow: `0 20px 40px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(52, 64, 61, 0.1) inset`
                        } as React.CSSProperties;

                        const content = (
                            <>
                                {/* Full width background image */}
                                {card.image && (
                                    <div className="absolute inset-0 w-full h-full  -z-10">
                                        <Image
                                            src={card.image}
                                            alt={card.title || ''}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        {/* #d1a22d overlay for better text visibility */}
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#d1a22d]/90 via-[#d1a22d]/50 to-[#d1a22d]/30" /> */}
                                    </div>
                                )}

                                {/* Animated gradient overlay - using #34403d */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#34403d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Corner accents - using #34403d */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#34403d]/30 rounded-tl-xl" />
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#34403d]/30 rounded-br-xl" />

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>

                                <div className="card__header flex justify-between items-start gap-3 relative z-10">
                                    <span className="card__label text-sm font-medium px-3 py-1.5 rounded-full bg-[#34403d]/10 backdrop-blur-sm border border-[#34403d]/30 text-[#34403d]">
                                        {card.label}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#34403d]/10 flex items-center justify-center border border-[#34403d]/30">
                                        <svg className="w-4 h-4 text-[#34403d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="card__content relative z-10">
                                    <h3 className={`card__title  text-xl mb-2 text-black font-bold  ${textAutoHide ? 'line-clamp-1' : ''}`}>
                                        {card.title}
                                    </h3>

                                    <p className={`card__description text-sm text-black bg-[#cba558]/70 text-center rounded-full leading-relaxed ${textAutoHide ? 'line-clamp-2' : ''}`}>
                                        {card.description}
                                    </p>

                                    {/* Interactive indicator - using #34403d */}
                                    <div className="mt-4 flex items-center text-xs text-[#34403d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Learn more</span>
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        );

                        return card.link ? (
                            <Link
                                key={index}
                                href={card.link}
                                target="_blank"
                                className={baseClassName}
                                style={cardStyle}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                            >
                                {content}
                            </Link>
                        ) : (
                            <div
                                key={index}
                                className={baseClassName}
                                style={cardStyle}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>
                {`
            .bento-section {
  background: linear-gradient(
    135deg,
    #705302 0%,
    #f3ba1d 50%,
    #f5ce67 100%
  );
}

            .bg-grid-pattern {
            background-image: 
                linear-gradient(rgba(244, 190, 59, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(244, 190, 59, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            }

            .card {
            transform-style: preserve-3d;
            will-change: transform;
            aspect-ratio: 3/4;
            }


            .card:hover::before {
            opacity: 1;
            }

            .line-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            }

            .line-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            }

            @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-20px) translateX(10px);
                opacity: 0.6;
            }
            50% {
                transform: translateY(10px) translateX(-10px);
                opacity: 0.3;
            }
            75% {
                transform: translateY(20px) translateX(5px);
                opacity: 0.6;
            }
            }

            .animate-float {
            animation: float linear infinite;
            }
            `}
            </style>
        </div>
    );
};

export default MagicBento;