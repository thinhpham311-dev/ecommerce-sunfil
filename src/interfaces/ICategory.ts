export interface ISubCategory {
    id: string;
    name: string;
    icon?: string;
    url?: string;
}

export interface ICategory {
    id: string;
    name: string;
    icon?: string;
    url: string;
    sub_categories: ISubCategory[];
}
