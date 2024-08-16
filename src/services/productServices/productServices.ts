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
}
