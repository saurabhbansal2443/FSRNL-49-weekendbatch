import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      let obj = action.payload; // wholeData
      let objId = obj.id;
      let existingObj = state.items.find(
        (cartObj) => cartObj.dataObj.id == objId
      );

      if (existingObj) {
        existingObj.quantity = existingObj.quantity + 1;
      } else {
        let cartObj = { dataObj: obj, quantity: 1 };
        state.items.push(cartObj);
      }
    },
    removeCart: (state, action) => {
      let id = action.payload; // id
      let itemIdx = state.items.findIndex(
        (cartObj) => cartObj.dataObj.id == id
      );
      state.items.splice(itemIdx, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementQuantity: (state, action) => {
      let id = action.payload;
      let existingObj = state.items.find((cartObj) => cartObj.dataObj.id == id);

      existingObj.quantity = existingObj.quantity + 1;
    },
    decrementQuantity: (state, action) => {
      let id = action.payload;
      let existingObj = state.items.find((cartObj) => cartObj.dataObj.id == id);

      if (existingObj.quantity == 1) {
        let itemIdx = state.items.findIndex(
          (cartObj) => cartObj.dataObj.id == id
        );
        state.items.splice(itemIdx, 1);
      } else {
        existingObj.quantity = existingObj.quantity - 1;
      }
    },
    sortAscending: (state, action) => {
        state.items.sort((a,b)=> a.dataObj.price - b.dataObj.price);
    },
    sortDescending: (state, action) => {
        state.items.sort((a,b)=> b.dataObj.price - a.dataObj.price);
    },
  },
});

export let {
  addCart,
  removeCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  sortAscending,
  sortDescending,
} = cartSlice.actions;

export default cartSlice.reducer;
