import { useCallback, useState } from 'react';
import { APIResponse } from '~/types/index';

export interface RequestIntoAPIHook<T, R> {
	request: (params: any) => Promise<T>;
	transform?: (res: T) => R;
}

function useAPI<T = any, R = any>({ request, transform }: RequestIntoAPIHook<T, R>) {
	const [res, setRes] = useState<APIResponse<R>>({
		loading: false,
		data: null,
		error: null,
	});

	const call = useCallback(
		(callback: () => void = voidCallback, ...params: any[]) => {
			setRes({ loading: true, error: null, data: null });
			request(params)
				.then((response) => {
					console.log(response);
					if (response) {
						setRes({ loading: false, data: transform ? transform(response) : (response as R), error: null });
						callback();
					}
				})
				.catch((error) => {
					setRes({ loading: false, data: null, error });
				});
		},
		[request, transform],
	);

	return [call, res.data, res.loading, res.error] as const;
}

export function voidCallback() {
	// nothing
}
export default useAPI;
