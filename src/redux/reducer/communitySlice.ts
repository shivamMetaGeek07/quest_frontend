import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CommunityData {
  _id: string;
  title: string;
  description?: string;
  count_of_members?: number;
  logo: string;
  ecosystem: string[];
  category: string[];
  quests?: string[];
  members?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface CommunityState {
  data: CommunityData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CommunityState = {
  data: null,
  loading: false,
  error: null,
};

// fetch the community by id
export const fetchCommunity = createAsyncThunk(
  'community/fetchCommunity',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/community/${id}`);
      return response.data.community;
    } catch (err) {
      return rejectWithValue('Failed to fetch community data');
    }
  }
);

// create a community;
export const createCommunity = createAsyncThunk(
  'community/createCommunity',
  async (communityData: {title: string;
    description: string;
    logo: string;
    category: string[];
    ecosystem: string[];
  }, { rejectWithValue } ) =>
  {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/community/`,
        communityData
      );
      // console.log(response.data)
      return response.data.community;
    } catch (err) {
      return rejectWithValue('Failed to create community');
    }
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default communitySlice.reducer;