// 登陆后更改isAuthenticated状态
export const setIsAuthenticated = (state,data) => {
    state.isAuthenticated = data;
}

// 登陆后更改用户信息
export const setUser = (state,data) => {
    state.user = data;
} 

export const setScore = (state,data) => {
    state.score = data;
} 
