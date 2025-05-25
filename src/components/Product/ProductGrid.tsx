"use client";
import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';

interface ProductGridProps {
    products: IProduct[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
            {products.map(product => (
                <div key={product.id} className="col-span-1" >
                    <ProductCard item={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductGrid