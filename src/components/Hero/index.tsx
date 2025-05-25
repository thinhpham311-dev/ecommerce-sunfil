'use client';

import { IBanner } from '@/interfaces/IBanner';
import { Carousel } from '@/components/ui';
import Banner from "./Banner"

interface HeroImagesProps {
    heroImages: IBanner[];
}

const Hero: React.FC<HeroImagesProps> = ({ heroImages }) => {
    return (
        <div className="relative">
            <Carousel breakpoints={{
                480: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1536: { slidesPerView: 1 },
            }}
                slidesPerView={1}
                showNavigation={false}>
                {heroImages.map((item) => (
                    <Banner key={item.id} image={item} />
                ))}
            </Carousel>
        </div >
    );
};

export default Hero;
