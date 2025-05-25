"use client";
import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';

interface ProductGridProps {
    products: IProduct[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
            {products.map(product => (
                <ProductCard key={product.id} item={product} />
            ))}
        </div>
    );
};

export default ProductGrid