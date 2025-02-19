import { useEffect, useState } from 'react';
import { loadAllCharacter } from '@root/store/api-actions.ts';
import { useDispatch, useSelector } from 'react-redux';

export function useFetchCharacters() {
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState<number>(1);

  const data = useSelector((state) => state.toolkit.characters);

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
