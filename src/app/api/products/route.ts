import { NextRequest, NextResponse } from 'next/server'
import { PRODUCTS_DATA } from '@/mocks/data/product.data'
import sortBy from '@/utils/sortBy'
import paginate from '@/utils/paginate'
import wildCardSearch from '@/utils/wildCardSearch'
import { IProduct } from '@/interfaces/IProduct'

export async function POST(req: NextRequest) {
    const { pageIndex, pageSize, sort, query } = await req.json()
    const { key, order } = sort

    let data = [...PRODUCTS_DATA]
    let total = data.length

    const isStringKey = key === 'name' || key === 'category';
    const isNumberKey = key === 'price';

    if (isStringKey) {
        data.sort(
            sortBy<IProduct>(
                key,
                order === 'desc',
                (value) => (value as string).toUpperCase()
            )
        );
    } else if (isNumberKey) {
        data.sort(
            sortBy<IProduct>(
                key,
                order === 'desc',
                (value) => value as number
            )
        );
    }

    if (query) {
        data = wildCardSearch(data, query)
        total = data.length
    }

    const paginated = paginate(data, pageSize, pageIndex)

    return NextResponse.json({
        data: paginated,
        total,
    })
}
