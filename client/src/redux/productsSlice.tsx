import { createSlice } from '@reduxjs/toolkit';

interface Init {
    isLoading: boolean;
    products: IProduct[];
}

const initialState: Init = {
    isLoading: false,
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
    },
});

export const { setLoading } = productSlice.actions;
export default productSlice.reducer;
