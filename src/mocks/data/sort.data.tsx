import { ISortOption } from "@/interfaces/ISortOption"

export const SORTOPTION_DATA: ISortOption[] = [
    { label: 'Liên quan', value: 'relevant' },
    { label: 'Bán chạy', value: 'bestselling' },
    { label: 'Mới nhất', value: 'newest' },
    { label: 'Nổi bật', value: 'featured' },
];

export const PRICESORT_DATA: ISortOption[] = [
    { label: 'Giá: Thấp → Cao', value: 'asc' },
    { label: 'Giá: Cao → Thấp', value: 'desc' },
]