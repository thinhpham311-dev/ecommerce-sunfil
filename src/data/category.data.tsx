import { ICategory } from "@/interfaces/ICategory"

export const CATEGORY_DATA: ICategory[] = [
    {
        id: "cat_loc_dau",
        name: "Bộ Lọc Dầu",
        icon: "icon_loc_dau.png",
        url: "/bo-loc-dau",
        sub_categories: []
    },
    {
        id: "cat_loc_khong_khi",
        name: "Bộ Lọc Không Khí",
        icon: "icon_loc_khong_khi.png",
        url: "/bo-loc-khong-khi",
        sub_categories: [
            {
                id: "sub_loc_khong_khi_loai_1",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_1.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-1"
            },
            {
                id: "sub_loc_khong_khi_loai_2",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_2.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-2"
            },
            {
                id: "sub_loc_khong_khi_loai_3",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_3.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-3"
            },
            {
                id: "sub_loc_khong_khi_loai_4",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_4.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-4"
            },
            {
                id: "sub_loc_khong_khi_loai_5",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_5.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-5"
            },
            {
                id: "sub_loc_khong_khi_loai_6",
                name: "Bộ lọc gió",
                icon: "icon_loc_gio_6.png",
                url: "/bo-loc-khong-khi/loc-gio-loai-6"
            },
            {
                id: "sub_loc_khong_khi_ben_trai_2",
                name: "Bộ Lọc Không Khí",
                icon: "icon_loc_khong_khi_ben_trai_2.png",
                url: "/bo-loc-khong-khi/khong-khi-ben-trai-2"
            },
            {
                id: "sub_loc_khong_khi_ben_trai_3",
                name: "Bộ Lọc Không Khí",
                icon: "icon_loc_khong_khi_ben_trai_3.png",
                url: "/bo-loc-khong-khi/khong-khi-ben-trai-3"
            }
        ]
    },
    {
        id: "cat_loc_nhien_lieu",
        name: "Bộ Lọc Nhiên Liệu",
        icon: "icon_loc_nhien_lieu.png",
        url: "/bo-loc-nhien-lieu",
        sub_categories: [
            {
                id: "sub_loc_nhien_lieu_ben_trai_2",
                name: "Bộ Lọc Nhiên Liệu",
                icon: "icon_loc_nhien_lieu_ben_trai_2.png",
                url: "/bo-loc-nhien-lieu/nhien-lieu-ben-trai-2"
            }
        ]
    },
    {
        id: "cat_loc_trong_cabin",
        name: "Bộ Lọc Trong Cabin",
        icon: "icon_loc_trong_cabin.png",
        url: "/bo-loc-trong-cabin",
        sub_categories: [
            {
                id: "sub_loc_trong_cabin_ben_trai_2",
                name: "Bộ Lọc Trong Cabin",
                icon: "icon_loc_trong_cabin_ben_trai_2.png",
                url: "/bo-loc-trong-cabin/trong-cabin-ben-trai-2"
            }
        ]
    }
]