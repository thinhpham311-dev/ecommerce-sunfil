import BaseService from './base.service';

interface ApiResponse<T> {
    data: T;
    status?: number;
    message?: string;
}

interface ApiError {
    message: string;
    status?: number;
    code?: string;
}

const ApiService = {
    async fetchData<T>(param: object): Promise<T> {
        try {
            const response: ApiResponse<T> = await BaseService(param);
            return response.data;
        } catch (error) {
            if (isApiError(error)) {
                throw new Error(error.message);
            }
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('An unknown error occurred');
        }
    }
};

function isApiError(error: unknown): error is ApiError {
    return typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as ApiError).message === 'string';
}

export default ApiService;