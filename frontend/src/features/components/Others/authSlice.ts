import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axiosConfig';

// Typage des données d'authentification
interface AuthState {
  user: { email: string } | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Actions async pour login et register
export const login = createAsyncThunk('auth/login', async (credentials: { email: string, password: string }) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
});

export const register = createAsyncThunk('auth/register', async (newUser: { email: string, password: string }) => {
  const response = await axiosInstance.post('/auth/register', newUser);
  localStorage.setItem('token', response.data.token);
  return response.data;
});

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user; 
        state.token = action.payload.token; 
        state.status = 'succeeded';
        state.error = null; 
      })
      .addCase(login.rejected, (state, action) => {
        if (action.error.message?.includes('404')) {
          state.error = "Utilisateur non trouvé";
        } else if (action.error.message?.includes('401')) {
          state.error = "Mot de passe incorrect";
        } else {
          state.error = action.error.message || "Échec de la connexion";
        }
        state.status = 'failed';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user; 
        state.token = action.payload.token;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message || "Échec de l'inscription";
        state.status = 'failed';
      });
  }
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
