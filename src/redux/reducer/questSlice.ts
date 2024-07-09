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

interface CreateQuestPayload {
  communityId?: string;
  questData?: Omit<Quest, 'community'>;
}


export const createQuest = createAsyncThunk(
  'quests/createQuest',
  async ({ communityId, questData }: CreateQuestPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/communities/${communityId}/quests`,
        questData
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // If the error has a response from the server, return that message
        return rejectWithValue(error.response.data.message || 'Failed to create quest');
      }
      // If it's not an Axios error or doesn't have a response, return a generic message
      return rejectWithValue('An error occurred while creating the quest');
    }
  }
);

export const createQuest1 = createAsyncThunk(
  'quests/createQuest',
  async ( newQuest: Quest, { rejectWithValue } ) =>
  {
    console.log(newQuest)
    try {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL}/quest/`, newQuest );
      // console.log(response)
      return response.data;
    } catch ( err )
    {
      console.log(err)
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
      .addCase(createQuest1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuest1.fulfilled, (state, action) => {
        state.loading = false;
        state.quests.push(action.payload);
      })
      .addCase(createQuest1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default questSlice.reducer;