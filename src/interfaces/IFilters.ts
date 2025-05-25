


export interface FilterOption {
    slug: string;
    title: string;
    checked: boolean;
}

export interface IFilterGroup {
    title: string;
    options: {
        slug: string;
        title: string;
        checked: boolean;
    }[];
}

export interface IFilter {
    groups: {
        [key: string]: {
            title: string;
            options: {
                slug: string;
                title: string;
                checked: boolean;
            }[];
        };
    };
}
