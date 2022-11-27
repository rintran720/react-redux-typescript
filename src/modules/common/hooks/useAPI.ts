import { useCallback, useState } from 'react';
import { APIResponse } from '~/types/index';

export interface RequestIntoAPIHook<T, R = T> {
	request: Promise<T>;
	transform?: (res: T) => R;
}

function useAPI<T = any, R = T>({ request, transform }: RequestIntoAPIHook<T, R>) {
	const [res, setRes] = useState<APIResponse<R>>({
		loading: false,
		data: null,
		error: null,
	});

	const call = useCallback(
		(callback?: (cbParams?: R) => void) => {
			setRes({ loading: true, error: null, data: null });
			request
				.then((response) => {
					if (response) {
						const data = transform ? transform(response) : (response as R);
						setRes({ loading: false, data, error: null });
						callback?.(data);
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

export default useAPI;
