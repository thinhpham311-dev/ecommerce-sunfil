"use client";

import { PRODUCTS_DATA } from "@/data/product.data";
import { HEROIMAGES_DATA } from "@/data/hero.data";
import { FILTER_DATA } from "@/data/filter.data"
import Breadcrumb from "@/components/ui/Breadcrumb";
import Feature from "@/components/Feature";
import ProductFilter from "@/components/Product/ProductFilter";
import ProductGrid from "@/components/Product/ProductGrid";
import ProductSlide from "@/components/Product/ProductSlide"
import ProductHeader from "@/components/Product/ProductHeader";
import Hero from "@/components/Hero";

export default function Home() {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
  ];

  return (
    <section className="container px-4 py-6 flex flex-col gap-5">
      <div className="grid 2xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-5">
        <div className="2xl:col-span-12 lg:col-span-10 md:col-span-8 col-span-1 ">
          <Breadcrumb items={breadcrumbItems} className="p-0" />
        </div>
        <div className="2xl:col-span-12 lg:col-span-10 md:col-span-8 col-span-1 rounded-lg overflow-hidden">
          <section className="bg-primary-base md:gap-0 gap-3">
            <Hero heroImages={HEROIMAGES_DATA} />
            <ProductSlide products={PRODUCTS_DATA} />
          </section>
        </div>
        <div className="2xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1">
          <ProductFilter filtersList={FILTER_DATA} />
        </div>
        <div className="2xl:col-span-10 lg:col-span-8 md:col-span-6 col-span-1">
          <ProductHeader title="Danh sách sản phẩm" />
          <ProductGrid products={PRODUCTS_DATA} />
        </div>
      </div>
      <Feature />
    </section >
  );
}
