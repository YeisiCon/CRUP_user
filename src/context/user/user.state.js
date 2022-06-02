import { useColorScheme } from "@mui/material";
import { useReducer, useState } from "react";
import UserContext from "./user.context";
import UserReducer from "./user.reducer";

const UserState = (props) => {
  const { users, setUsers } = useState({
    id: "",
    name: "",
    lastName: "",
    gender: "",
  });

  const initialState = {
    user: users,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const readUser =()=>{
      dispatch({type:"READ_USER", payload:{ ...users}})
  }

  const value = {
    user: state.user,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
export default UserState;
