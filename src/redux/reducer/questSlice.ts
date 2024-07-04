import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Reward {
  type: string;
  value: number;
}

export interface Quest {
  title: string;
  description: string;
  type: string;
  status: string;
  rewards: Reward[];
}

interface QuestState {
  quests: Quest[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestState = {
  quests: [],
  loading: false,
  error: null,
};

export const createQuest = createAsyncThunk(
  'quests/createQuest',
  async (newQuest: Quest, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/quest/`, newQuest);
      return response.data;
    } catch (err) {
      return rejectWithValue('Failed to create quest');
    }
  }
);

const questSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuest.fulfilled, (state, action) => {
        state.loading = false;
        state.quests.push(action.payload);
      })
      .addCase(createQuest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default questSlice.reducer;