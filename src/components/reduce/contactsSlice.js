import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addCont, deleteCont } from "./operations";

const contactSlise = createSlice({
    name: "contacts",
    initialState:  {
        contacts: [],
        isLoading: false,
        error: null,
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.error = null;
        state.isLoading = false;
      }) 
      .addCase(addCont.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteCont.fulfilled, (state, action) => {
          state.isLoading = false;
         state.error = null;
          const index = state.contacts.findIndex(
            task => task.id === action.payload.id)
         state.contacts.splice(index, 1);
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addCont.pending, deleteCont.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addCont.rejected, deleteCont.rejected),(state, action) => {
       state.isLoading = false;
       state.error = action.payload;
      })
 
  }
})

export const contactsReducer = contactSlise.reducer
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlise.actions


