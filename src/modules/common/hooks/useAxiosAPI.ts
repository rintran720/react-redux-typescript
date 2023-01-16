import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { APIResponse } from '~/types/index';
import { axiosTransform } from '~/utils/transforms';
import { RequestIntoAPIHook } from './useAPI';

function useAxiosAPI<T>({ request }: RequestIntoAPIHook<AxiosResponse<T>, T>) {
  const [res, setRes] = useState<APIResponse<T>>({
    loading: false,
    data: null,
    error: null,
  });

  const call = useCallback(
    (callback?: (cbParams?: T) => void) => {
      setRes({ loading: true, error: null, data: null });
      request
        .then((response) => {
          if (response) {
            const data = axiosTransform<T>(response);
            setRes({ loading: false, data, error: null });
            callback?.(data);
          }
        })
        .catch((error) => {
          setRes({ loading: false, data: null, error });
        });
    },
    [request],
  );

  return [call, res.data, res.loading, res.error] as const;
}

export default useAxiosAPI;
