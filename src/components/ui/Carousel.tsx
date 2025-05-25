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
}


const Carousel: React.FC<CarouselProps> = ({
    children,
    slidesPerView = 2,
    breakpoints = {
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1536: { slidesPerView: 5 },
    },
    spaceBetween = 20,
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
                <CarouselPrevButton />
                <CarouselNextButton />
            </Swiper>
        </div>
    );
};


const CarouselPrevButton = () => {
    return (
        <Button
            rounded="full"
            variant="secondary"
            size="icon"
            className="swiper-button-prev-custom aspect-square absolute top-1/2 left-2 z-10 transform -translate-y-1/2"
            aria-label="Previous"
        >
            <span className=''>
                <AltLeftIcon size={24} strokeWidth={0.5} color="black" />
            </span>
        </Button>
    );
};


const CarouselNextButton = () => {
    return (
        <Button
            rounded="full"
            variant="secondary"
            size="icon"
            className="swiper-button-next-custom aspect-square absolute top-1/2 right-2 z-10 transform -translate-y-1/2"
            aria-label="Next"
        >
            <AltRightIcon size={24} strokeWidth={0.5} color="black" />
        </Button>
    );
};


export { Carousel, CarouselPrevButton, CarouselNextButton };

