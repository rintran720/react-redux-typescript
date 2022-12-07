import { useCallback, useState } from 'react';
import Axios from '~/api/manual/axios';
import { bookActions } from '~/store/book/book.slice';
import { useAppDispatch } from '~/store/config';
import { APIResponse, Book } from '~/types/index';

const bookAPI = {
  useGetBook: () => {
    const [res, setRes] = useState<APIResponse<Book[]>>({
      loading: false,
      data: null,
      error: null,
    });
    const dispatch = useAppDispatch();

    const call = useCallback(
      (callback?: () => void) => {
        setRes({ loading: true, error: null, data: null });
        Axios.get<Book[]>('book')
          .then((response) => {
            if (response.data) {
              setRes({ loading: false, data: response.data, error: null });
              dispatch(bookActions.setBooks(response.data));
              callback?.();
            }
          })
          .catch((error) => setRes({ loading: false, data: null, error }));
      },
      [dispatch],
    );

    return [call, res.data, res.loading, res.error] as const;
  },
};

export default bookAPI;
