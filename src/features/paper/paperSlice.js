import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  papers: [],
  status: "idle",
  currentPage: 1,
  totalPages: 0,
  error: null,
};

export const fetchPapers = createAsyncThunk(
  "papers/fetchPapers",
  async (myParams) => {
    const { page, limit } = myParams;
    console.log(myParams);
    const response = await axios.get(
      "http://localhost:4001/paper/getAllPapers",
      { params: { limit: limit, page: page } }
    );
    console.log(response.data);
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
      console.log(action.payload.currentPage);
      state.status = "succeeded";
      state.papers = state.papers.concat(action.payload);
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const { paperAdded, paperUpdated } = paperSlice.actions;

export default paperSlice.reducer;

export const selectAllPapers = (state) => state.papers;

export const selectPaperById = (state, paperId) => {
  return state.papers.find((paper) => paper.id === paperId);
};
