import {createSlice} from '@reduxjs/toolkit';

const CategoryData = createSlice({
  name: 'values',
  initialState: [
    {
      // id: null,
      name: null,
      icon: null,
      color: null,
      expenses: [
        {
          // id: null,
          title: null,
          description: null,
          location: null,
          total: null,
          status: null,
        },
      ],
    },
  ],
  reducers: {
    setCategory: (state, action) => {
      // state.initialState.id = action.payload?.id;
      state.name = action.payload?.name;
      state.icon = action.payload?.icon;
      state.color = action.payload?.color;
      // state.initialState.expenses.id = action.payload?.id;
      state.expenses.title = action.payload?.title;
      state.expenses.description = action.payload?.description;
      state.expenses.location = action.payload?.location;
      state.expenses.total = action.payload?.total;
      state.expenses.status = action.payload?.status;
    },
  },
});

export const {setCategory} = CategoryData.actions;

export default CategoryData.reducer;
