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
          },
          editUser: (state, action) => {
              const { id, name, email } = action.payload;
              const existingUser = state.find(user => user.id === id);
              if (existingUser) {
                  existingUser.name = name;
                  existingUser.email = email;
              }
          }
      }
  });

export const {addUser, editUser} = userSlice.actions;
export default userSlice.reducer;
