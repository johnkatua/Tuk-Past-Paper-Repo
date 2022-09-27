import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { validateFacultyDetails } from "../../helpers/validation";

const initialState = {
  faculties: [],
  faculty: null,
  status: "idle",
  error: null,
};

export const fetchFaculties = createAsyncThunk(
  "faculty/fetchFaculties",
  async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:4001/faculty/getAllFaculties",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const createFaculty = createAsyncThunk(
  "faculty/createFaculty",
  async (values, { rejectWithValue }) => {
    try {
      await validateFacultyDetails(values);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4001/faculty/createFaculty",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

export const updateFaculty = createAsyncThunk(
  "faculty/updateFaculty",
  async ({id, values}, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:4001/faculty/updateFaculty/${id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return { id, values };
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
)

export const deleteFaculty = createAsyncThunk(
  "faculty/deleteFaculty",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:4001/faculty/deleteFaculty/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { id };
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const facultySlice = createSlice({
  name: "faculty",
  initialState,
  reducers: {
    getSelectedFaculty: (state, action) => {
      state.faculty = action.payload;
    },
    resetFaculty: (state) => {
      state.faculty = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload.data;
    });
    builder.addCase(createFaculty.fulfilled, (state, action) => {
      state.faculties.push(action.payload.data);
    });
    builder.addCase(createFaculty.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateFaculty.fulfilled, (state, action) => {
      const existingFaculty = state.faculties.find(faculty => faculty._id === action.payload.id);
      if (existingFaculty) {
        state.faculties = state.faculties.push(action.payload.values)
      }
    });
    builder.addCase(deleteFaculty.fulfilled, (state, action) => {
      state.faculties = state.faculties.filter(
        (faculty) => faculty._id !== action.payload.id
      );
    });
  },
});

export default facultySlice.reducer;

export const getFacultyStatus = (state) => state.faculty.status;

export const { getSelectedFaculty, resetFaculty } = facultySlice.actions;
