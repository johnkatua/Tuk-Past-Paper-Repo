import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validatePaperDetails } from "../../helpers/validation";

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
    const response = await axios.get(
      "http://localhost:4001/paper/getAllPapers",
      { params: { limit: limit, page: page } }
    );
    return response.data;
  }
);

export const addPaper = createAsyncThunk(
  "papers/addPaper",
  async (values, { rejectWithValue }) => {
    try {
      await validatePaperDetails(values)
      const response = await axios.post(
        "http://localhost:4001/paper/createPaper",
        values
      );
      return response.data;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
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
    builder.addCase(addPaper.fulfilled, (state, action) => {
      state.papers.push(action.payload.data);
    });
    builder.addCase(addPaper.rejected, (state) => {
      state.error = action.payload;
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
