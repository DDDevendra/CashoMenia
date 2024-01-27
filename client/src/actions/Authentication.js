
export const login = (userToken) =>({
    type:'LOGIN',
    payload:userToken
})

export const logout = ()=>({
    type:'LOGOUT'
})