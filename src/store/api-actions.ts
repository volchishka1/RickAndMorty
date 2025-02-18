import { ThunkActionResult } from '@root/type/action.ts';
import { saveCharacters } from '@root/store/slices.ts';

export const loadAllCharacter =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://rickandmortyapi.com/api/character/`;
    api
      .get(apiUrl)
      .then((response) => {
        const resCharacters = response.data.results;
        dispatch(saveCharacters(resCharacters));
      })
      .catch((error) => error);
  };
