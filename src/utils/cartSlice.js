const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // RTK uses immer behind the scene.
      // Either we can return the new state or mutate the state in the newer redux.
      // But in older(vanilla) redux we cannot directlt mutate the state the we need to create the copy the of the state and then return that. 
      state.items.push(action.payload)
    },
    removeItems: (state) => {
      state.items.pop()
    },
    clearcart: (state) => {
      // we cannot do state = 0 because it will only modify the local state of that function.
      // or we can use return { items: [] }to modify the original state
      state.items.length = 0;
    }
  }
});

export const { addItems, removeItems, clearcart } = cartSlice.actions;

export default cartSlice.reducer;