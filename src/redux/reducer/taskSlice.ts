import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// common for both
interface ITaskBase extends Document {
  _id: string;
  category: 'Actions' | 'Answers' | 'Social' | 'On-chain action';
  creator: string;
}

// Interface for visit
export interface IVisite extends ITaskBase {
  visitLink: string;
}

// Interface for Poll
export interface IPoll extends ITaskBase {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Interface for quiz
export interface IQuiz extends ITaskBase {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Interface for invite
export interface IInvite extends ITaskBase {
  inviteLink: string;
  invitee?: string[];
}

// Combined type
export type TaskOrPoll = IVisite | IPoll | IQuiz | IInvite;

// Define the state interface
interface TaskState {
  tasks: TaskOrPoll[];
  currentTask: TaskOrPoll | [];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: TaskState = {
  tasks: [],
  currentTask: [],
  loading: false,
  error: null,
};

// API base URL
const API_BASE_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/task`;

// Async thunks
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch tasks');
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  'tasks/fetchById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch task');
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/create',
  async (task: Partial<TaskOrPoll>, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_BASE_URL, task);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create task');
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/update',
  async ({ id, task }: { id: string; task: Partial<TaskOrPoll> }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update task');
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue('Failed to delete task');
    }
  }
);

// Create the slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all tasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskOrPoll[] | any>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch task by ID
      .addCase(fetchTaskById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<TaskOrPoll | any>) => {
        state.loading = false;
        state.currentTask = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create task
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<TaskOrPoll | any>) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update task
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<TaskOrPoll | any>) => {
        state.loading = false;
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete task
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string | any>) => {
        state.loading = false;
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default taskSlice.reducer;