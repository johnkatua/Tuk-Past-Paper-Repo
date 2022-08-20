import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const paperSlice = createSlice({});

export const { paperAdded, paperUpdated } = paperSlice.actions;

export default paperSlice.reducer;

export const selectAllPapers = state => state.papers;

export const selectPaperById = (state, paperId) => {
  return state.papers.find(paper => paper.id === paperId)
};