import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DocType = {
  id: number;
  title: string;
  body: string;
};

type StateType = {
  items: DocType[];
};

const initialState: StateType = {
  items: [
    {
      id: 1,
      title: "My First Doc",
      body: "interesting we can do collaboration"
    }
  ]
};

const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DocType>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<DocType["id"]>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = docsSlice.actions;
export const docsReducer = docsSlice.reducer;
