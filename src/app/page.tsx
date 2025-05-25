"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import FeaturedSection from "@/components/FeaturedSection";
import SideNav from "@/components/SideNav";
import { PRODUCTS_DATA } from "@/data/product.data";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
  ];

  return (
    <section className="container px-4 py-6 flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} className="p-0" />
      <div className="grid 2xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 grid-cols-1 gap-5">
        <div className="2xl:col-span-12 lg:col-span-10 md:col-span-8 col-span-1">
          hero slide
        </div>
        <div className="2xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1">
          <SideNav />
        </div>
        <div className="2xl:col-span-10 lg:col-span-8 md:col-span-6 col-span-1">
          <ProductGrid products={PRODUCTS_DATA} />
        </div>
      </div>
      <FeaturedSection />
    </section>
  );
}
