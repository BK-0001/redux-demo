import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DocType = {
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
    }
  }
});

export const { add } = docsSlice.actions;
export const docsReducer = docsSlice.reducer;
