import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favPapers: [],
  status: 'idle',
  error: null
};

export const fetchFavoritePapers = createAsyncThunk(
  "favPapers/fetchFavoritePapers",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:4001/fav/getAllFav/${userId}`
    );
    return response.data;
  }
);

export const addPaperToFav = createAsyncThunk("favPapers/addPaperToFav", async (values, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:4001/fav/addFavPaper", values);
    return response.data;
  } catch (error) {
    toast.error(error.response ? error.response.data.msg : error.message);
    return rejectWithValue(error.response.data.msg);
  }
});

export const favSlice = createSlice({
  name: "favPapers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFavoritePapers.fulfilled, (state, action) => {
      state.status = 'success',
      state.favPapers = action.payload;
    });
    builder.addCase(addPaperToFav.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addPaperToFav.fulfilled, (state, action) => {
      state.status = 'success';
      state.favPapers = state.favPapers.push(action.payload);
    });
    builder.addCase(addPaperToFav.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  }
});

export default favSlice.reducer;

