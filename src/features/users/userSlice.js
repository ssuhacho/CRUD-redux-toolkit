import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: "1", name: "Suha", email: "ssuhacho@yahoo.com" },
    { id: "2", name: "John", email: "john@yahoo.com" },
  ];

  const userSlice = createSlice({
      name: 'users',
      initialState,
      reducers:{
          addUser: (state, action) => {
              state.push(action.payload);
          }
      }
  });

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
