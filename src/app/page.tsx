"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import FeaturedSection from "@/components/FeaturedSection"

export default function Home() {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} className="py-5" />
      <FeaturedSection />
    </div>
  );
}
