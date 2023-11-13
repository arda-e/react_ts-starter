import axios from '../axios'
import { PaginationRequest } from '../api.interfaces'
import { ProductWithId, ProductWithIdAndTimeStamp } from './Product.schema'

export const ProductApi = {
  findAll: ({ page, limit }: PaginationRequest) => {
    return axios.post<ProductWithIdAndTimeStamp[]>('/products', { page, limit })
  },
  findOne: () => {
    return axios.post<ProductWithId>('/products/:id')
  },
  // create: (data: Product) => {
  //   return axios.post<ProductWithIdAndTimeStamp>('/products', data)
  // },
  // delete: () => {
  //   return axios.delete<ProductWithIdAndTimeStamp>('/products/:id')
  // },
  // update: () => {
  //   return axios.put<ProductWithIdAndTimeStamp>('/products/:id')
  // }
}
