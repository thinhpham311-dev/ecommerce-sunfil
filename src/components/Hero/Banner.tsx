'use client';

import Image from 'next/image';
import { IBanner } from '@/interfaces/IBanner';

interface IBannerProps {
    image: IBanner
}


const Banner: React.FC<IBannerProps> = ({ image }) => {
    const {
        type = 'split',
        title,
        subtitle,
        description,
        cta,
        imageUrl,
    } = image;

    if (type === 'image-only') {
        return <section className="w-full  ">
            <div className="w-full">
                <Image
                    src={imageUrl ?? "/images/not-found/banner-not-found.png"}
                    alt={title || 'Banner'}
                    width={1920}
                    height={800}
                    priority={true}
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    }
    if (type === 'centered') {
        return <section className="w-full  md:py-24">
            <div className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-4">
                {subtitle && <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>}
                {title && <h1 className="text-4xl font-bold">{title}</h1>}
                {description && <p className="text-muted-foreground">{description}</p>}
                {cta && <div className="mt-4">{cta}</div>}
            </div>
        </section>
    }
    {/* Type: split */ }
    if (type === 'split') {
        <section className="w-full  md:py-24">
            <div className="flex flex-col items-center justify-between gap-6 md:gap-12 md:flex-row">
                <div className="flex-1 text-center md:text-left space-y-4 px-4">
                    {subtitle && <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>}
                    {title && <h1 className="text-4xl font-bold">{title}</h1>}
                    {description && <p className="text-muted-foreground">{description}</p>}
                    {cta && <div className="mt-4">{cta}</div>}
                </div>

                <div className="flex-1 px-4">
                    <Image
                        src={imageUrl ?? "/images/not-found/banner-not-found.png"}
                        alt={title || 'Hero Image'}
                        width={800}
                        height={600}
                        priority={true}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>

        </section >
    }

};

export default Banner;
