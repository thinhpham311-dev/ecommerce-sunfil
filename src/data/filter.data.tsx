import { IFilter } from "@/interfaces/IFilters";

export const FILTER_DATA: IFilter = {
    groups: {
        category: {
            title: 'Danh mục',
            options: [
                { slug: 'loc-gio-dong-co-air-filter', title: 'Lọc gió Động cơ - Air Filter', checked: false },
                { slug: 'loc-nhien-lieu-fuel-filter', title: 'Lọc Nhiên Liệu - Fuel Filter', checked: false },
                { slug: 'bo-loc-dau', title: 'Bộ lọc dầu', checked: false },
                { slug: 'chua-phan-loai', title: 'Chưa phân loại', checked: false },
                { slug: 'khac', title: 'Khác', checked: false },
            ],
        },
        priceRange: {
            title: 'Khoảng giá',
            options: [
                { slug: 'under-100k', title: 'Dưới 100,000đ', checked: true },
                { slug: '100k-300k', title: '100,000 đ - 300,000 đ', checked: false },
                { slug: '300k-500k', title: '300,000 đ - 500,000 đ', checked: false },
                { slug: 'up-500k', title: 'Trên 500,000 đ', checked: false },
            ],
        },
        brand: {
            title: 'Thương hiệu',
            options: [
                { slug: 'bosch', title: 'Bosch', checked: false },
                { slug: 'asakashi', title: 'Asakashi', checked: false },
                { slug: 'huyndai', title: 'Huyndai', checked: false },

            ],
        },
        year: {
            title: 'Năm sản xuất',
            options: [
                { slug: '2021', title: '2021', checked: false },
                { slug: '2020', title: '2020', checked: false },
                { slug: '2019', title: '2019', checked: false },
                { slug: '2018', title: '2018', checked: false },

            ],
        },
        origin: {
            title: 'Xuất xứ',
            options: [
                { slug: 'duc', title: 'Đức', checked: false },
                { slug: 'nhat-ban', title: 'Nhật Bản', checked: false },
                { slug: 'trung-quoc', title: 'Trung Quốc', checked: false },

            ],
        },


    },
};
