import { ISortListOption, ISortPriceOption } from "@/interfaces/ISortOption"

export const SORTOPTION_DATA: ISortListOption[] = [
    { label: 'Liên quan', value: 'relevant' },
    { label: 'Bán chạy', value: 'bestselling' },
    { label: 'Mới nhất', value: 'newest' },
    { label: 'Nổi bật', value: 'featured' },
];

export const PRICESORT_DATA: ISortPriceOption[] = [
    { label: 'Giá: Thấp → Cao', value: 'asc' },
    { label: 'Giá: Cao → Thấp', value: 'desc' },
]