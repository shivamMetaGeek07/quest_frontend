import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Quest } from './questSlice';

// Define interfaces for Twitter and Discord info
export interface ITwitterInfo {
  twitterId?: string;
  username?: string;
  profileImageUrl?: string;
  oauthToken?: string;
  oauthTokenSecret?: string;
}

export interface IDiscordInfo {
  discordId?: string;
  username?: string;
  profileImageUrl?: string;
  accessToken: string;
  refreshToken: string;
  guilds?: string[];
}

// Define an interface for the User schema
export interface IUser {
  googleId: string;
  displayName: string;
  email: string;
  role: string;
  image: string;
  rank: string;
  quest: Quest[];
  twitterInfo?: ITwitterInfo;
  discordInfo?: IDiscordInfo;
}

// Define the initial state interface
interface UserState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

// Set the initial state
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Define async thunks


  
export const fetchUserData = createAsyncThunk(
  'login/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`, {
          withCredentials: true, // Ensure credentials are included in the request
        });
        const data=response.data;
        return data;
      } catch (err) {
        return rejectWithValue('Failed to fetch user data');
      }
    }
  );

// Create the slice
const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
       // fetchUserData handles fetching user profile data
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
     ;
  },
});

export default userSlice.reducer;