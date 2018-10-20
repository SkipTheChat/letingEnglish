export const setIsAuthenticated = ({ commit },data) => {
    commit('setIsAuthenticated',data);
};

export const setUser = ({ commit },data) => {
    commit('setUser',data);
};

export const setScore = ({ commit },data) => {
    commit('setScore',data);
};



export const clearCurrentState = ({ commit }) => {
    commit('setUser',null);
    commit('setIsAuthenticated',false);
};

