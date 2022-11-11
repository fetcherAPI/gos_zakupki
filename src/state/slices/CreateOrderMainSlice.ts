import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrderService } from "../../services/AuthService";

type ListItemType = {
  value: string;
  label: string;
};

interface Interface {
  queryStatus?: string;
  buyingFormatsList: Array<ListItemType>;
  orderView: Array<ListItemType>;
  error: any;
}

const initialState: Interface = {
  buyingFormatsList: [],
  orderView: [],
  error: "",
};

export const takeBuyingFormatList = createAsyncThunk(
  "buyingFormat/send",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CreateOrderService.getListOfFormatBuying();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const takeOrderViewList = createAsyncThunk(
  "orderView/send",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CreateOrderService.getListOfOrderView();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const CreateOrderMainSlice = createSlice({
  name: "CrateOrderMain",
  initialState,
  reducers: {
    setBuyingFormatsList(state, action) {
      state.buyingFormatsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(takeBuyingFormatList.pending, (state) => {
        state.queryStatus = "pending";
      })
      .addCase(takeBuyingFormatList.fulfilled, (state, action) => {
        state.queryStatus = "resolve";
        state.buyingFormatsList = action.payload;
      })
      .addCase(takeBuyingFormatList.rejected, (state, action: any) => {
        state.queryStatus = "rejected";
        state.error = action.payload;
        state.buyingFormatsList = [
          {
            value: "500",
            label: "Сервер не отвечает",
          },
        ];
      });
    builder
      .addCase(takeOrderViewList.pending, (state) => {
        state.queryStatus = "pending";
      })
      .addCase(takeOrderViewList.fulfilled, (state, action) => {
        state.queryStatus = "resolve";
        state.orderView = action.payload;
      })
      .addCase(takeOrderViewList.rejected, (state, action: any) => {
        state.queryStatus = "rejected";
        state.error = action.payload;
        state.orderView = [
          {
            value: "500",
            label: "Сервер не отвечает",
          },
        ];
      });
  },
});

export const { setBuyingFormatsList } = CreateOrderMainSlice.actions;

export default CreateOrderMainSlice.reducer;