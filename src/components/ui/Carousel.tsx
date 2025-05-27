'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReactNode } from 'react';
import { Button } from "@/components/ui"
import { AltRightIcon, AltLeftIcon } from "@/constants/icons.constant"

interface CarouselProps {
    children: ReactNode[];
    slidesPerView?: number;
    breakpoints?: Record<number, { slidesPerView: number }>;
    spaceBetween?: number;
    showNavigation?: boolean;
    navPosition?: string; // ví dụ: "top-1/2"
    navClassName?: string; // bổ sung class như left/right spacing
}


const Carousel: React.FC<CarouselProps> = ({
    children,
    slidesPerView,
    breakpoints,
    spaceBetween = 20,
    showNavigation = true,
}) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={breakpoints}
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div className="h-full w-full">
                            {child}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <>
                    <CarouselNavButton direction="prev" />
                    <CarouselNavButton direction="next" />
                </>
            )}
        </div>
    );
};


interface CarouselNavButtonProps {
    direction: 'prev' | 'next';
    position?: string; // Tailwind positioning, e.g., "top-1/2 left-2"
    iconColor?: string;
    iconSize?: number;
    strokeWidth?: number;
    className?: string;
}

const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
    direction,
    iconColor = 'black',
    iconSize = 24,
    strokeWidth = 0.5,
}) => {
    const isPrev = direction === 'prev';
    const baseClass = isPrev ? 'swiper-button-prev-custom' : 'swiper-button-next-custom';
    const sidePosition = isPrev ? '-left-5' : '-right-5';
    const Icon = isPrev ? AltLeftIcon : AltRightIcon;

    return (
        <Button
            rounded="Full"
            variant="secondary"
            size="icon"
            className={`absolute transform -translate-y-1/2 aspect-square z-50 top-1/2 hover:bg-secondary ${sidePosition} ${baseClass}`}
            aria-label={isPrev ? 'Previous' : 'Next'}
        >
            <Icon size={iconSize} strokeWidth={strokeWidth} color={iconColor} />
        </Button>
    );
};
export { Carousel, CarouselNavButton };

