import { ReactNode } from "react";

type BannerType = 'split' | 'centered' | 'image-only';


export interface IBanner {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    cta?: ReactNode;
    type?: BannerType;
    className?: string;
}