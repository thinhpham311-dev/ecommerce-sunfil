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