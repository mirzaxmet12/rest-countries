import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Country {
    name: { common: string, nativeName: { [key: string]: { common: string } } },
    cca3: string,
    borders?: string[],
    flags: { png: string, svg: string },
    region: string,
    subregion: string,
    currencies: { [key: string]: { symbol: string, name: string } },
    languages: { [key: string]: string },
    tld: string[],
    population: number,
    capital: string
}

export interface Countries {
    countries: Country[],
    loading: boolean,
    error: string | null,
    searchCountry: string,
    regionFilter: string,
}

const initialState: Countries = {
    countries: [],
    loading: false,
    error: null,
    searchCountry: '',
    regionFilter: '',
}
const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        countriesRequest(state) {
            state.loading = true;
        },
        countriesSuccess(state, action: PayloadAction<Country[]>) {
            state.loading = false;
            state.countries = action.payload;
        },
        countriesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setSearchCountry(state, action: PayloadAction<string>) {
            state.searchCountry = action.payload;
        },
        setRegionFilter(state, action: PayloadAction<string>) {
            state.regionFilter = action.payload;
        },
    },
});

export const { countriesRequest, countriesFailure, countriesSuccess, setRegionFilter, setSearchCountry } = countriesSlice.actions;

export default countriesSlice.reducer;