import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
  characterItem: [],
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
    setCharacterItem: (state, action) => {
      state.characterItem = action.payload;
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
  setCharacterItem,
  setValueItem,
  setIsLoading,
  setIsCharacter,
  saveCharacters,
  setCharacterId,
} = toolkitSlice.actions;
