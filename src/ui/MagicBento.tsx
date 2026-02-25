'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
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
        color: '#2f423d',
        title: 'Telomere',
        description: 'Cellular aging biomarker analysis with predictive longevity insights',
        label: 'Telomere',
        image: '/telomere.avif',
        link: 'https://forms.gle/3MvbmNDnchWiKaLXA',
        gradient: 'linear-gradient(145deg, #2f423d 0%, #1e2d29 100%)'
    },
    {
        color: '#2f423d',
        title: 'Calcium',
        description: 'Bone strength optimization & cellular signaling pathways',
        label: 'Calcium',
        image: '/Calcium.avif',
        link: 'https://forms.gle/RyHpk1Bdyz62arbm6',
        gradient: 'linear-gradient(145deg, #2f423d 0%, #1e2d29 100%)'
    },
    {
        color: '#2f423d',
        title: 'Digestion',
        description: 'Advanced gut microbiome analysis and digestive health mapping',
        label: 'Digestion',
        image: '/digestion.avif',
        link: 'https://forms.gle/HntyKikeV8nszFpw8',
        gradient: 'linear-gradient(145deg, #2f423d 0%, #1e2d29 100%)'
    },
    {
        color: '#2f423d',
        title: 'Iron',
        description: 'Oxygen transport efficiency and metabolic performance tracking',
        label: 'Iron',
        image: '/iron.avif',
        link: 'https://forms.gle/9RZkGnuFZzmJUV4K6',
        gradient: 'linear-gradient(145deg, #2f423d 0%, #1e2d29 100%)'
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
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
                    background: 'rgba(47, 66, 61, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderColor: 'rgba(229, 176, 43, 0.2)',
                };
            case 'gradient':
                return {
                    background: card.gradient || `linear-gradient(145deg, #2f423d, #1e2d29)`,
                    borderColor: 'rgba(229, 176, 43, 0.3)',
                };
            default:
                return {
                    backgroundColor: card.color || '#2f423d',
                    borderColor: '#e5b02b',
                };
        }
    }, [variant]);

    return (
        <div
            ref={sectionRef}
            className="bento-section min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
        >
            {/* Animated background grid - updated color */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ '--grid-color': '#e5b02b' } as React.CSSProperties} />

            {/* Floating particles - updated to gold */}
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
                            backgroundColor: '#e5b02b',
                            opacity: 0.3
                        }}
                    />
                ))}
            </div>

            <div className="grid gap-6 px-20  w-full relative z-10">
                {/* Section header with new colors */}
                <div className="text-center mb-8">
                    <div className="text-4xl font-bold md:text-5xl  mb-4">
                        <span className="bg-amber-300 text-transparent bg-clip-text">
                            Advanced Biomarkers
                        </span>
                    </div>
                    <p className="text-[#e5b02b]/70 text-lg max-w-2xl mx-auto">
                        Explore our comprehensive panel of precision health metrics
                    </p>
                </div>

                <div className="card-responsive grid gap-6">
                    {cardData.map((card, index) => {
                        const baseClassName = `card group relative flex flex-col justify-between aspect-[4/3] min-h-[240px] w-full p-6 rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${enableBorderGlow ? 'card--border-glow' : ''
                            } ${variant === 'glass' ? 'backdrop-blur-xl' : ''}`;

                        const cardStyle = {
                            ...getCardVariantStyles(card),
                            color: '#fff',
                            boxShadow: `0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(229, 176, 43, 0.1) inset`
                        } as React.CSSProperties;

                        const content = (
                            <>
                                {/* Full width background image */}
                                {card.image && (
                                    <div className="absolute inset-0 w-full h-full -z-10">
                                        <Image
                                            src={card.image}
                                            alt={card.title || ''}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Dark overlay for better text visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2f423d]/80 via-[#2f423d]/40 to-transparent" />
                                    </div>
                                )}

                                {/* Animated gradient overlay - updated to gold */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#e5b02b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Corner accents - updated to gold */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#e5b02b]/50 rounded-tl-xl" />
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#e5b02b]/50 rounded-br-xl" />

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>

                                <div className="card__header flex justify-between items-start gap-3 relative z-10">
                                    <span className="card__label text-sm font-medium px-3 py-1.5 rounded-full bg-[#2f423d]/50 backdrop-blur-sm border border-[#e5b02b]/30 text-[#e5b02b]">
                                        {card.label}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#e5b02b]/10 flex items-center justify-center border border-[#e5b02b]/30">
                                        <svg className="w-4 h-4 text-[#e5b02b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="card__content relative z-10">
                                    <h3 className={`card__title font-light text-xl mb-2 text-white ${textAutoHide ? 'line-clamp-1' : ''}`}>
                                        {card.title}
                                    </h3>

                                    <p className={`card__description text-sm text-[#e5b02b]/80 leading-relaxed ${textAutoHide ? 'line-clamp-2' : ''}`}>
                                        {card.description}
                                    </p>

                                    {/* Interactive indicator - updated to gold */}
                                    <div className="mt-4 flex items-center text-xs text-[#e5b02b] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                                    if (el) cardsRef.current[index] = el;
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
                                    if (el) cardsRef.current[index] = el;
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
            background: linear-gradient(135deg, #1a2a25 0%, #2f423d 100%);
            }

            .bg-grid-pattern {
            background-image: 
                linear-gradient(rgba(229, 176, 43, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(229, 176, 43, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            }

            .card-responsive {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            }

            @media (min-width: 640px) {
            .card-responsive {
                grid-template-columns: repeat(2, 1fr);
            }
            }

            @media (min-width: 1024px) {
            .card-responsive {
                grid-template-columns: repeat(4, 1fr);
            }

            .card-responsive .card:nth-child(3) {
                grid-column: span 2;
                grid-row: span 2;
                aspect-ratio: 2/1.5;
            }

            .card-responsive .card:nth-child(4) {
                grid-column: 1 / span 2;
                grid-row: 2 / span 2;
                aspect-ratio: 2/1.5;
            }
            }

            .card {
            transform-style: preserve-3d;
            will-change: transform;
            }

            .card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(145deg, rgba(229, 176, 43, 0.5), rgba(47, 66, 61, 0.5));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
            }

            .card:hover::before {
            opacity: 1;
            }

            .card--border-glow {
            box-shadow: 
                0 10px 30px -10px rgba(229, 176, 43, 0.3),
                0 0 0 1px rgba(229, 176, 43, 0.2) inset;
            }

            .card--border-glow:hover {
            box-shadow: 
                0 20px 40px -10px rgba(229, 176, 43, 0.5),
                0 0 0 2px rgba(229, 176, 43, 0.3) inset;
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