import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { extraReducersBuilder } from "./apiReducer";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // read token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// -------------------- RESPONSE INTERCEPTOR --------------------
// let isRefreshing = false;
// let refreshQueue: any[] = [];

// function processQueue(token: string) {
//   refreshQueue.forEach((cb) => cb(token));
//   refreshQueue = [];
// }

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If unauthorized (401) and not retried yet
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       if (!isRefreshing) {
//         isRefreshing = true;

//         try {
//           const res = await axios.post("/auth/refresh"); // refresh API
//           const newToken = res.data?.accessToken;

//           // Save new token in cookies for 7 days
//           Cookies.set("token", newToken, { expires: 7 });

//           isRefreshing = false;
//           processQueue(newToken);
//         } catch (err) {
//           isRefreshing = false;
//           return Promise.reject(err);
//         }
//       }

//       // Queue the requests until the token is refreshed
//       return new Promise((resolve) => {
//         refreshQueue.push((newToken: string) => {
//           originalRequest.headers.Authorization = "Bearer " + newToken;
//           resolve(axios(originalRequest));
//         });
//       });
//     }

//     return Promise.reject(error);
//   }
// );

const initialState: any = {
  user: null,
};

export const initializeAuth = createAsyncThunk(
  "/auth/initialize",
  (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token") || null;
      let user = null;
      let profile = null;

      const storedUser = localStorage.getItem("user");
      const storedProfile = localStorage.getItem("profile");

      if (storedUser) {
        try {
          user = JSON.parse(storedUser);
        } catch (e) {
          console.warn("Failed to parse user from localStorage", e);
        }
      }
      if (storedProfile) {
        try {
          profile = JSON.parse(storedProfile);
        } catch (e) {
          console.warn("Failed to parse profile from localStorage", e);
        }
      }

      return { token, user, profile };
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to initialize auth");
    }
  }
);

export const signUp = createAsyncThunk(
  "/auth/signUp",
  async (bodyData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/register`, bodyData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signIn = createAsyncThunk(
  "/auth/signIn",
  async (bodyData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/login`, bodyData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "/get/user",
  async (bodyData: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`auth/profile`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "/user/logout",
  async (bodyData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/logout`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "/auth/refreshToken",
  async (bodyData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`auth/refresh`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: { ...initialState },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        initializeAuth.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.user = action.payload.user;
          axios.defaults.headers.common["Authorization"] = action.payload.token
            ? `Bearer ${action.payload.token}`
            : "";
        }
      )
      .addCase(initializeAuth.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong during auth init";
      });
    extraReducersBuilder(builder); // Keep this if you're using shared extra reducers
  },
});

export const { setUser } = apiSlice.actions;

export const apiReducer = apiSlice.reducer;
