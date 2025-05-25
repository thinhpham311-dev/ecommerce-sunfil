

export type Category = {
    id: string;
    name: string;
    slug: string;

}
export type Brand = {
    id: string;
    name: string;
    slug: string;
}

export type Origin = {
    id: string;
    name: string;
    slug: string;
}

export interface IProduct {
    id: string;
    name: string;
    category: string;
    brand: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    imageUrl: string;
    isHotDeal: boolean;
    origin: string;
}