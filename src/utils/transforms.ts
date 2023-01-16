import { AxiosResponse } from 'axios';

export function axiosTransform<T>(axiosResponse: AxiosResponse<T>) {
  return axiosResponse.data;
}
