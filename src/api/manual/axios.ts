import axios, { AxiosResponse } from 'axios';
import { API_URL } from '~/utils/env';
import { getAccessToken } from '~/utils/localStorage';

const Axios = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

Axios.interceptors.request.use(
  async function ({ headers, ...config }) {
    const token = await getAccessToken();
    return {
      ...config,
      headers: {
        ...(headers as any),
        authorization: `Bearer ${token}`,
      },
    };
  },
  (e) => Promise.reject(e),
);

// Axios.interceptors.response.use((res) => {
//   const { data, status } = res;

//   if (status > 399) {
//     throw new Error(data?.message || 'Oops...');
//   }
//   return data;
// });

export default Axios;

export function axiosTransform<T>(axiosResponse: AxiosResponse<T>) {
  return axiosResponse.data;
}
