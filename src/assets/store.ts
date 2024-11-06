import { useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TeamInfo } from "@types";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    loading: true,
    teamId: "",
    data: {},
  } as {
    loading: boolean;
    teamId: string;
    data: TeamInfo;
  },
  reducers: {
    setState: (state: any, { payload }: PayloadAction<{ [key: string]: boolean | string | TeamInfo }>) => Object.keys(payload).forEach((key) => (state[key] = payload[key])),
  },
});

export const store = configureStore({
  reducer: stateSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const { setState } = stateSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
