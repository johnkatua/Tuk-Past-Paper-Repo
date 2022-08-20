import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  papers: [],
  status: 'idle',
  error: null
}

export const paperSlice = createSlice({
  name: 'papers',
  initialState,
  reducers: {
    paperAdded: {
      reducer(state, action) {
        state.papers.push(action.payload);
      },
    },
    paperUpdated(state, action) {
      const { id, name } = action.payload;
      const existingPaper = state.papers.find(paper => paper.id === id);
      if (existingPaper) {
        existingPaper.name = name;
      }
    }
  }
});

export const { paperAdded, paperUpdated } = paperSlice.actions;

export default paperSlice.reducer;

export const selectAllPapers = state => state.papers;

export const selectPaperById = (state, paperId) => {
  return state.papers.find(paper => paper.id === paperId)
};

export const fetchPapers = createAsyncThunk('papers/fetchPapers', async () => {
  const response = await client.get('http://localhost:4001/paper/getAllPapers');
  return response.data
})