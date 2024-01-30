// reducers/authReducer.js
let userState = {
  isAuthenticated: false,
  userToken: null,
  userName: '',
};

const authReducer = (state = userState, action) => {
  switch (action.type) {

    
    case "LOGIN":
    console.log(action,userState.userToken);
      return {
        ...state,
        isAuthenticated: true,
        userToken: action.payload.userToken,
        userName: action.payload.userName,
      };



    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        userToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
