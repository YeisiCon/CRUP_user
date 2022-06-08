import { useState } from "react";

export default (state, action) => {
  const { type, payload } = action;

  if (type == "READ_USER") {
    console.log("reducer", payload);

    return {
      ...state,
      user: payload.user,
      status: payload.status,
    };
  } else if (type == "ADD_USER") {
    const user = [...state.user];
    user.push(payload.user);
    return {
      ...state,
      user,
      status: payload.status,
    };
  } else if (type == "UPDATE_USER") {
    const userIndex = state.user.findIndex(
      (user) => user.id === payload.id
    );
    const update = { ...state };
    update.user.splice(userIndex, 1, payload);
    return {
      ...update,
    };

  } else if (type == "DELETE_USER") {
    console.log("idReducer", payload);
    const deleteUser = [...state.user];
    const result = deleteUser.filter((ele) => ele.id !== payload );
    console.log("yeisi", result);
    return {
      ...state,
      user: result,
      status: true,
    };
  } else {
  }
};
