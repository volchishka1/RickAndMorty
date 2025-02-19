import { useEffect, useState } from 'react';
import { loadAllCharacter } from '@root/store/api-actions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@root/hooks/useAppSelector';

export function useFetchCharacters() {
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState<number>(1);

  //get characters from store

  const data = useAppSelector((state) => state.toolkit.characters);

  //Function for loading next page with characters

  const onEndReached = () => {
    setPage(page + 1);
  };

  // setData(prevData => [...prevData, ...res.results]).

  useEffect(() => {
    dispatch(loadAllCharacter(page));
  }, [page]);

  useEffect(() => {
    setCharacters((prevState) => [...prevState, ...data]);
  }, [data]);

  return { characters, onEndReached };
}
