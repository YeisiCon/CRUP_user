import { useColorScheme } from "@mui/material";
import { useReducer, useState } from "react";
import UserContext from "./user.context";
import UserReducer from "./user.reducer";

const UserState = (props) => {
  const initialState = {
    user: [],
    status: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);


  const addUser = (data) => {
    dispatch({ type: "ADD_USER", payload:{status :true , user: data} });
  };
  const readUser = () => {
    dispatch({ type: "READ_USER", payload: {status :true , user: initialState.user}   });
  
  };
  const updateUser = (id, data) => {
    const newData ={
      id,
      ...data
    }
    console.log(newData)
   dispatch({ type: "UPDATE_USER", payload: newData });
  };
  const deleteUser = (id) => {
    console.log("idState",id)
    dispatch({ type: "DELETE_USER", payload: id});
    };
 

  const value = {
    user: state.user,
    status: state.status,
    readUser,
    updateUser,
    deleteUser,
    addUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
export default UserState;
