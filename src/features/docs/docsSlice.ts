import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DocType = {
  id: number;
  title: string;
  body: string;
};

type StateType = {
  items: DocType[];
  error: Error | null;
  isLoading: boolean;
};

const initialState: StateType = {
  items: [
    {
      id: 1,
      title: "My First Doc",
      body: "interesting we can do collaboration"
    }
  ],
  error: null,
  isLoading: false
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<DocType[]>) => {
          state.items = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getProducts.rejected, (state, action) => {
        console.log("something gone wrong", state, action.payload);
        state.error = action.error as Error;
        state.isLoading = false;
      });
  }
});

export const { add, remove } = docsSlice.actions;
export const docsReducer = docsSlice.reducer;

/**
 * returns thunk - something like action
 * 
 * @returns [
  {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },

 */
export const getProducts = createAsyncThunk("docs/getProducts", async () => {
  // return payload

  // faking with posts for docs
  const response = await fetch("https://jsonplaceholder.typicode.com/pos");

  if (!response.ok) {
    throw new Error(
      "Something has gone terribly wrong while getting the docs!!!!!"
    );
  }

  return await response.json();
});
