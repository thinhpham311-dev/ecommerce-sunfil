'use client';

import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';
import { Carousel } from '@/components/ui';

interface ProductSlideProps {
    products: IProduct[];
}

const ProductSlide: React.FC<ProductSlideProps> = ({ products }) => {
    return (
        <div className="relative">
            <Carousel>
                {products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductSlide;
