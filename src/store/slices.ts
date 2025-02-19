import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
  episodes: [],
  character: 0,
  isCharacter: false,
  isLoading: true,
  valueItem: '',
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    saveCharacters: (state, action) => {
      state.characters = action.payload;
    },
    saveEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    setCharacterId: (state, action) => {
      state.character = action.payload;
    },
    setIsCharacter: (state, action) => {
      state.isCharacter = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setValueItem: (state, action) => {
      state.valueItem = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  setValueItem,
  setIsLoading,
  setIsCharacter,
  saveCharacters,
  setCharacterId,
  saveEpisodes,
} = toolkitSlice.actions;
