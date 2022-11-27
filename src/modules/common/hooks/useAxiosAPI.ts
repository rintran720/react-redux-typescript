import { useCallback, useState } from 'react';
import { APIResponse } from '~/types/index';
import { axiosTransform } from '~/api/manual/axios';
import { AxiosResponse } from 'axios';
import { RequestIntoAPIHook, voidCallback } from './useAPI';

function useAxiosAPI<T = any>({ request }: RequestIntoAPIHook<AxiosResponse<T>, T>) {
	const [res, setRes] = useState<APIResponse<T>>({
		loading: false,
		data: null,
		error: null,
	});

	const call = useCallback(
		(callback: (cbParams?: any) => void = voidCallback, ...params: any[]) => {
			setRes({ loading: true, error: null, data: null });
			request(params)
				.then((response) => {
					if (response) {
						setRes({ loading: false, data: axiosTransform<T>(response), error: null });
						callback();
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
