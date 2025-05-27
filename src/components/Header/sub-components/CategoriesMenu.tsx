'use client';

import React from "react"
import { TabsProvider, TabList, TabItem, TabContent, TabPanel, Card, CardContent } from '@/components/ui';
import { ICategory } from "@/interfaces/ICategory";
import CategoryCard from "./CategoryCard"

interface ICategoriesMenuProps {
    categories: ICategory[]
    children?: React.ReactNode
}

const CategoriesMenu: React.FC<ICategoriesMenuProps> = ({ categories, children }) => {
    return (
        <Card className="lg:min-w-[1400px] mx-auto container p-0">
            <CardContent className="p-3">
                <TabsProvider defaultTab={categories[0]?.id} type="hover">
                    <div className="grid 2xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-5">
                        <div className="2xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-1">
                            <TabList>
                                {categories?.map((cat) => (
                                    <TabItem key={cat.id} tabKey={cat.id}>
                                        <CategoryCard hasSubmenu title={cat.name} id={cat.id} image={cat.icon} _h={40} _w={40} />
                                    </TabItem>
                                ))}
                            </TabList>
                        </div>
                        <div className="2xl:col-span-9 lg:col-span-8 md:col-span-6 col-span-1 grid gap-5">
                            <TabContent>
                                {categories?.map((cat) => (
                                    <TabPanel key={cat.id} tabKey={cat.id}>
                                        {cat.sub_categories.length === 0 ? (
                                            <div className="flex items-center justify-center bg-white h-[230px] w-full">
                                                <p>Không có danh mục con.</p>
                                            </div>
                                        ) : (
                                            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                                                {cat.sub_categories.slice(0, 5).map((sub) => (
                                                    <CategoryCard
                                                        key={sub.id}
                                                        title={sub.name}
                                                        image={sub.icon}
                                                        _h={70}
                                                        _w={70}
                                                        className="border bg-white hover:bg-secondary hover:text-primary"
                                                    />
                                                ))}

                                                {cat.sub_categories.length > 5 && (
                                                    <div>
                                                        <CategoryCard
                                                            title="Xem thêm"
                                                            image="/images/categories/show-more-dot-icon.svg"
                                                            _h={70}
                                                            _w={70}
                                                            className="border bg-white hover:bg-secondary hover:text-primary"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </TabPanel>
                                ))}
                            </TabContent>
                            {children}
                        </div>
                    </div>
                </TabsProvider>
            </CardContent>
        </Card>
    );
};

export default CategoriesMenu;
