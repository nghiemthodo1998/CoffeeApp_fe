import axiosInstance from '../../lib/configureAxios';
import {
  CategoryType,
  GetProductRequest,
  ProductType,
} from './productServices.type';

export class ProductServices {
  async getCategories(): Promise<CategoryType[]> {
    return (await axiosInstance.get('/categories')).data;
  }

  async getProducts(params: GetProductRequest): Promise<ProductType[]> {
    return (await axiosInstance.get('/products', {params})).data;
  }

  async getProductDetail(params: {productId: string}): Promise<ProductType> {
    return (await axiosInstance.get(`/products/${params.productId}`)).data;
  }

  async updateProductFavorite(params: {productId: string}): Promise<{
    success: boolean;
    favorite: boolean;
  }> {
    return (await axiosInstance.put(`/products/favorite/${params.productId}`))
      .data;
  }
}
