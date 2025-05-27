import { INavLinkItem } from "@/interfaces/INavLinkItem"
import { ClockIcon, HandIcon, CarTranferIcon, ProcessIcon, TelephoneIcon, SmartPhoneIcon } from "@/constants/icons.constant"

export const CONTACTMENU_DATA: INavLinkItem[] = [
    {
        text: "Hotline: 0283 760 760",
        href: "/hotline",
        icon: <TelephoneIcon />
    },
    {
        text: "Tải ứng dụng",
        href: "/download",
        icon: <SmartPhoneIcon />
    },
]

export const MAINMENU_DATA: INavLinkItem[] = [
    {
        text: "Về chúng tôi",
        href: "/about-us",
    },
    {
        text: "Bài viết",
        href: "/blog",
    },
    {
        text: "Catalog",
        href: "/catalog",
    },
    {
        text: "Liên hệ",
        href: "/contact",
    }
]

export const SUPPORTMENU_DATA: INavLinkItem[] = [
    {
        text: "Hỗ trợ 24/7",
        href: "/support",
        icon: <ClockIcon />
    },
    {
        text: "Miễn phí vận chuyển",
        href: "/free-ship",
        icon: <HandIcon />
    },
    {
        text: "Giao hàng nhanh 2h",
        href: "/tranform-2h",
        icon: <CarTranferIcon />
    },
    {
        text: "30 ngày đổi trả",
        href: "/response",
        icon: <ProcessIcon />
    }
]