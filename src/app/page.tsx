"use client";

import Breadcrumb from "@/components/shared/Breadcrumb";

export default function Home() {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} className="py-5" />
    </div>
  );
}
