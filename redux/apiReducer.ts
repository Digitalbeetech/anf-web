import toast from "react-hot-toast";
import { getUser, signIn, signUp } from "./apiSlice";
import Cookies from "js-cookie";

export const extraReducersBuilder = (builder: any) => {
  builder

    // Sign Up
    .addCase(signUp.pending, (state: any, action: any) => {
      state.status = "loading";
    })
    .addCase(signUp.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.error = null;
      Cookies.set("token", action?.payload?.accessToken, { expires: 365 });
      toast.success(action?.payload?.message);
    })
    .addCase(signUp.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.error = action?.payload?.meta?.message;
      toast.error(action?.payload?.meta?.message);
    })

    // Sign In
    .addCase(signIn.pending, (state: any, action: any) => {
      state.status = "loading";
    })
    .addCase(signIn.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.error = null;
      toast.success(action?.payload?.message);
      Cookies.set("token", action?.payload?.accessToken, { expires: 365 });
      state.user = action?.payload?.user;
    })
    .addCase(signIn.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.error = action?.payload?.meta?.message;
      toast.error(action?.payload?.meta?.message);
    })

    // Get User
    .addCase(getUser.pending, (state: any, action: any) => {
      state.status = "loading";
    })
    .addCase(getUser.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.error = null;
      state.user = action?.payload?.user;
      localStorage.setItem("user", JSON.stringify(action?.payload?.user));
    })
    .addCase(getUser.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.error = action?.payload?.meta?.message;
      toast.error(action?.payload?.meta?.message);
    });
};
