'use client';

import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';
import { Carousel } from '@/components/ui';

interface ProductSlideProps {
    products: IProduct[];
}

const ProductSlide: React.FC<ProductSlideProps> = ({ products }) => {
    return (
        <div className="relative lg:p-10 p-6">
            <Carousel breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1536: { slidesPerView: 5 },
            }} slidesPerView={2}>
                {products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductSlide;
