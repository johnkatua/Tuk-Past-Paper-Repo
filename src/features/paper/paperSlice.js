import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validatePaperDetails } from "../../helpers/validation";
import { toast } from "react-toastify";

const initialState = {
  papers: [],
  status: "idle",
  paper: null,
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

export const createPaper = createAsyncThunk(
  "papers/createPaper",
  async (values, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:4001/paper/createPaper",
        values,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        }
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
    getSelectedPaper: (state, action) => {
      state.paper = action.payload
    },
    resetPaper: (state) => {
      state.paper = null;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPapers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.papers = action.payload.data;
      state.currentPage = +action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(createPaper.fulfilled, (state, action) => {
      state.papers.push(action.payload.data);
    });
    builder.addCase(createPaper.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { getSelectedPaper, resetPaper } = paperSlice.actions;

export default paperSlice.reducer;

export const selectAllPapers = (state) => state.papers;

