"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import FeaturedSection from "@/components/FeaturedSection"
import SideNav from "@/components/SideNav"

export default function Home() {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
  ];

  return (
    <div className="container px-4">
      <Breadcrumb items={breadcrumbItems} className="py-5" />
      <div className="grid 2xl:grid-col-12 lg:grid-cols-10 md:grid-cols-8 grid-col-1 gap-5">
        <div className="2xl:col-span-12 lg:col-span-10 md:col-span-8 col-span-1">
          hero slide
        </div>
        <div className="2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1">
          <SideNav />
        </div>
        <div className="2xl:col-span-4 lg:col-span-3 md:col-span-2 col-span-1">
          product grid list
        </div>
      </div>
      <FeaturedSection />
    </div>
  );
}
