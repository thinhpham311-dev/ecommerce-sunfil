"use client";
import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';
import { GridProvider, InfiniteLoader } from '@/components/ui';

interface ProductGridProps {
    products: IProduct[];
}

const LoadingComponent = () => {
    return <p>loading...</p>
}

const ProductGrid: React.FC<ProductGridProps> = ({
    products
}) => {
    return (
        <GridProvider
            mode='auto'
            initialHasMore={true}
            loadingComponent={<LoadingComponent />}
            threshold={0.8}
        >
            <div
                className={`grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 overflow-y-auto `}
            >
                {products.map((product) => (
                    <div key={product.id} className="col-span-1">
                        <ProductCard item={product} />
                    </div>
                ))}
            </div>

            <InfiniteLoader />
        </GridProvider>
    );
};

export default ProductGrid;
