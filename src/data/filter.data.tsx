import { IFilter } from "@/types/filters";

export const FILTER_DATA: IFilter = {
    groups: {
        category: {
            title: 'Danh mục',
            options: [
                { slug: 'loc-gio-dong-co-air-filter', title: 'Lọc gió động cơ', checked: false },
                { slug: 'loc-nhien-lieu-fuel-filter', title: 'Lọc nhiên liệu', checked: false },
                { slug: 'bo-loc-dau', title: 'Bộ lọc dầu', checked: false },
                { slug: 'chua-phan-loai', title: 'Chưa phân loại', checked: false },
                { slug: 'khac', title: 'Khác', checked: false },
            ],
        },
        priceRange: {
            title: 'Khoảng giá',
            options: [
                { slug: 'under-100k', title: 'Dưới 100k', checked: false },
                { slug: '100k-200k', title: '100k - 200k', checked: false },
                { slug: 'over-200k', title: 'Trên 200k', checked: false },
            ],
        },
        brand: {
            title: 'Thương hiệu',
            options: [
                { slug: 'bosch', title: 'Bosch', checked: false },
                { slug: 'asakashi', title: 'Asakashi', checked: false },
            ],
        },
        origin: {
            title: 'Xuất xứ',
            options: [
                { slug: 'duc', title: 'Đức', checked: false },
                { slug: 'nhat-ban', title: 'Nhật Bản', checked: false },
            ],
        },
        color: {
            title: 'Màu sắc',
            options: [
                { slug: 'do', title: 'Đỏ', checked: false },
                { slug: 'xanh', title: 'Xanh', checked: false },
            ],
        },

    },
};
