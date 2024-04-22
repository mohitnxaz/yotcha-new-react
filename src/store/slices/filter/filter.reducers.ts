import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyListCardProps } from "../../../types";
import {
  getFilteredListingsAsync,
  getFilterOptionsAsync,
  getPagninatedResultsAsync,
} from "./filterThunk";

export interface TopFilterValuesTypes {
  address: string;
  min_price: number | null;
  max_price: number | null;
  property_type: string;
}
export interface FilterValuesTypes {
  address: string;
  offset: number;
  limit: number;
  property_type: string;
  propertySubType: any[];
  min_price: number | null;
  max_price: number | null;
  propertyStatus: string[];
  bed_room: number[];
  bath_room: number[];
  min_size: number | null;
  max_size: number | null;
  min_psf: number | null;
  max_psf: number | null;
  lease_term: number[];
  max_build_year: any;
  min_build_year: any;
  furnished_status:
    | "FULLY_FURNISHED"
    | "PARTIAL_FURNISHED"
    | "UNFURNISHED"
    | null;
  amenity_id: number[];
  property_name: string;
  sort: "PRICE" | "CREATED_AT" | "UPDATED AT" | "AREA" | "PSF" | null;
  order: "DESC" | "ASC" | null;
}

export interface FilterValuesTypes2 {
  address: string;
  offset: number;
  limit: number;
  property_type: [];
  propertySubType: any[];
  min_price: number | null;
  max_price: number | null;
  propertyStatus: string[];
  bed_room: number[];
  bath_room: number[];
  min_size: number | null;
  max_size: number | null;
  min_psf: number | null;
  max_psf: number | null;
  lease_term: number[];
  max_build_year: any;
  min_build_year: any;
  furnished_status:
    | "FULLY_FURNISHED"
    | "PARTIAL_FURNISHED"
    | "UNFURNISHED"
    | null;
  amenity_id: number[];
  property_name: string;
  sort: "PRICE" | "CREATED_AT" | "UPDATED AT" | "AREA" | "PSF" | null;
  order: "DESC" | "ASC" | null;
}

export interface FilterState {
  filteredData: {
    total: number | null;
    properties: PropertyListCardProps[];
  };

  filterValues: FilterValuesTypes2;

  selectedFilters: FilterValuesTypes;

  topFilters: TopFilterValuesTypes;

  loading: boolean;
  error: string | null;
}

const initialState: FilterState = {
  filteredData: {
    total: null,
    properties: [],
  },

  //to show all available options to the user (comes from backend)
  filterValues: {
    property_name: "",
    offset: 0,
    limit: 10,
    address: "",
    property_type: [],
    propertySubType: [],
    min_price: 0,
    max_price: 0,
    propertyStatus: [],
    bed_room: [],
    bath_room: [],
    min_size: 0,
    max_size: 0,
    min_psf: 0,
    max_psf: 0,
    lease_term: [],
    max_build_year: null,
    min_build_year: null,
    furnished_status: null,
    amenity_id: [],
    sort: null,
    order: null,
  },
  topFilters: {
    address: "",
    property_type: "",
    min_price: 0,
    max_price: 0,
  },
  //to track the options that are selected so that we can apply this in filter query
  selectedFilters: {
    offset: 0,
    limit: 10,
    address: "",
    property_name: "",
    property_type: "",
    propertySubType: [],
    min_price: 0,
    max_price: 0,
    propertyStatus: [],
    bed_room: [],
    bath_room: [],
    min_size: 0,
    max_size: 0,
    min_psf: 0,
    max_psf: 0,
    lease_term: [],
    max_build_year: null,
    min_build_year: null,
    furnished_status: null,
    amenity_id: [],
    sort: null,
    order: null,
  },
  loading: false,
  error: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // getFilteredListings: (state, action: PayloadAction<any>) => {
    //   state.filteredData = action.payload;
    // },

    // getPaginatedResults: (state, action: any) => {
    //   try {
    //     state.filteredData.properties = [
    //       ...state.filteredData.properties,
    //       ...action.payload,
    //     ];
    //   } catch (e) {
    //     console.log("pagnation redux error", e);
    //   }
    // },

    setFilterFields: (
      state,
      action: PayloadAction<Partial<FilterValuesTypes>>
    ) => {
      state.selectedFilters = { ...state.selectedFilters, ...action.payload };
      state.loading = true;
    },

    setTopFilterFields: (
      state,
      action: PayloadAction<Partial<FilterValuesTypes>>
    ) => {
      state.topFilters = { ...state.topFilters, ...action.payload };
    },

    transferTopFiltersToSelectedFilters: (state) => {
      const { address, min_price, max_price, property_type } = state.topFilters;

      state.selectedFilters = {
        ...state.selectedFilters,
        address,
        min_price,
        max_price,
        property_type,
      };
      console.log("");
    },

    clearFilters: (state) => {
      state.selectedFilters = { ...initialState.selectedFilters };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilterOptionsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilterOptionsAsync.fulfilled, (state, action) => {
        const [propertyTypeData, featuresData, propertySubTypeData] =
          action.payload;
        state.filterValues = {
          ...state.filterValues,
          property_type: propertyTypeData,
          propertySubType: propertySubTypeData,
          amenity_id: featuresData,
        };
        state.loading = false;
      })
      .addCase(getFilterOptionsAsync.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
    builder
      .addCase(getFilteredListingsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilteredListingsAsync.fulfilled, (state, action) => {
        state.filteredData = action.payload;
        state.loading = false;
      })
      .addCase(getFilteredListingsAsync.rejected, (state, action) => {
        state.error = "Some error occured while fetch data";
        state.loading = false;
      });
    builder
      .addCase(getPagninatedResultsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPagninatedResultsAsync.fulfilled, (state, action) => {
        state.filteredData.properties = [
          ...state.filteredData.properties,
          ...action.payload.properties,
        ];
        state.filteredData.total = action.payload.total;
        state.loading = false;
      })
      .addCase(getPagninatedResultsAsync.rejected, (state, action) => {
        state.error = "Some error occured while fetch more data";
        state.loading = false;
      });
    // Handle other async thunks similarly
  },
});

export const {
  clearFilters,
  setFilterFields,
  setTopFilterFields,
  transferTopFiltersToSelectedFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
