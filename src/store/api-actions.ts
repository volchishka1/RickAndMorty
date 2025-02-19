import { ThunkActionResult } from '@root/type/action.ts';
import { saveCharacters, setIsLoading } from '@root/store/slices.ts';

export const loadAllCharacter =
  (page: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
    api
      .get(apiUrl)
      .then((response) => {
        const resCharacters = response.data.results;
        dispatch(saveCharacters(resCharacters));
        dispatch(setIsLoading(false));
      })
      .catch((error) => error);
  };
