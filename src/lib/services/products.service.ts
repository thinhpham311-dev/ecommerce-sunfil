import ApiService from "./api.service"
import { ISortOption } from "@/interfaces/ISortOption"
import { IProduct } from "@/interfaces/IProduct";

interface IApiResponse {
    data: IProduct[];
}
export async function apiGetProductsList(data: ISortOption): Promise<IApiResponse> {
    return ApiService.fetchData({
        url: '/product/list',
        method: 'POST',
        data
    })
}

