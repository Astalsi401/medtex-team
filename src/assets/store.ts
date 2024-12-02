import { useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TeamInfo } from "@types";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    loading: true,
    lang: "zh",
    data: {},
    error: null,
  } as {
    loading: boolean;
    lang: "zh" | "en";
    data: TeamInfo;
    error: string | null;
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
export const pageTexts = {
  eventTime: { zh: "2024.12.03(二)-12.04(三)", en: "2024.12.03(Tue)-12.04(Wed)" },
  eventLocation: { zh: "台北寒舍艾美酒店3F翡翠珍珠廳", en: "3F, Ballroom, Le Méridien Taipei" },
  established: { zh: "成立時間", en: "Year Founded" },
  fundingAmount: { zh: "累積募資額", en: "Total Funding Raised" },
  annualRevenue: { zh: "年營收", en: "Annual Revenue" },
  currentFundingRound: { zh: "募資輪次", en: "Current Funding Round" },
  currentFundingAmount: { zh: "本輪募資額", en: "Amount Raised In This Round" },
  postMoneyValuation: { zh: "投後估值", en: "Post-Money Valuation" },
  leadInvestor: { zh: "主要投資人", en: "Lead Investors" },
  keyInvestmentHighlights: { zh: "投資亮點", en: "Key Investment Highlights" },
  coreTechnology: { zh: "關鍵技術", en: "Core Technology" },
  targetMarket: { zh: "目標市場", en: "Target Market" },
  coreProductDevelopmentStage: { zh: "核心產品與進度", en: "Core Product Development Stage" },
  marketed: { zh: "已取證", en: "Marketed" },
  markets: { zh: "取證國家", en: "Markets" },
  milestonesForThisRound: { zh: "募資里程目標", en: "Milestones For This Round" },
  viewStartupCompanyList: { zh: "查看所有新創團隊", en: "View Startup Company List" },
  applyForMeeting: { zh: "申請商洽", en: "Apply For Meeting" },
};
