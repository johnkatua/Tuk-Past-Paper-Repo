import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  papers: [],
  favPapers: [],
  status: "idle",
  currentPage: 1,
  totalPages: 0,
  error: null,
};

export const fetchPapers = createAsyncThunk(
  "papers/fetchPapers",
  async (myParams) => {
    const { page, limit } = myParams;
    const response = await axios.get(
      "http://localhost:4001/paper/getAllPapers",
      { params: { limit: limit, page: page } }
    );
    return response.data;
  }
);

export const fetchFavoritePapers = createAsyncThunk(
  "papers/fetchFavoritePapers",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:4001/fav/getAllFav/${userId}`
    );
    return response.data;
  }
);

export const paperSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    paperAdded: {
      reducer(state, action) {
        state.papers.push(action.payload);
      },
    },
    paperUpdated(state, action) {
      const { id, name } = action.payload;
      const existingPaper = state.papers.find((paper) => paper.id === id);
      if (existingPaper) {
        existingPaper.name = name;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPapers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.papers = action.payload.data;
      state.currentPage = +action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(fetchFavoritePapers.fulfilled, (state, action) => {
      state.status = 'success';
      state.favPapers = action.payload;
    });
  },
});

export const { paperAdded, paperUpdated } = paperSlice.actions;

export default paperSlice.reducer;

export const selectAllPapers = (state) => state.papers;
export const selectFavPapers = (state) => state.favPapers;

export const selectPaperById = (state, paperId) => {
  return state.papers.find((paper) => paper.id === paperId);
};
