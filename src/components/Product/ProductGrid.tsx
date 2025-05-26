"use client";
import ProductCard from './ProductCard';
import { IProduct } from '@/interfaces/IProduct';

interface ProductGridProps {
    products: IProduct[];
    columns?: {
        base?: number;      // grid-cols-{n}
        md?: number;        // md:grid-cols-{n}
        lg?: number;        // lg:grid-cols-{n}
        xl?: number;        // xl:grid-cols-{n}
        '2xl'?: number;     // 2xl:grid-cols-{n}
    };
}

const getGridClass = (columns?: ProductGridProps['columns']) => {
    const breakpoints = ['base', 'md', 'lg', 'xl', '2xl'] as const;
    const gridClasses = breakpoints.map(bp => {
        const col = columns?.[bp];
        if (!col) {
            return '';
        }
        return bp === 'base'
            ? `grid-cols-${col}`
            : `${bp}:grid-cols-${col}`;
    });
    return gridClasses.join(' ').trim();
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns }) => {
    const gridClass = getGridClass(columns);

    return (
        <div className={`grid ${gridClass} gap-5`}>
            {products.map(product => (
                <div key={product.id} className="col-span-1">
                    <ProductCard item={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
