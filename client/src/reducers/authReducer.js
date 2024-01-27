// reducers/authReducer.js
const userState = {
    isAuthenticated: false,
    userToken: null,
    name:null
    
  };
  
  const authReducer = (state = userState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          userToken: action.payload,
          name:'dev'
        
        };
      case 'LOGOUT':
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
  