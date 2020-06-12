export const state = () =>({
  restaurantList: [],
  hasMoreRestaurant: true
});

export const mutations = {
  loadRestaurants(state, payload) {
    console.log("SIze: " + payload.length)
    if (payload.length < 20) {
      state.hasMoreRestaurant = false;
    }
    state.restaurantList = state.restaurantList.concat(payload);
  }

};

export const actions = {
  loadRestaurants({ commit }, payload) {
    let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb29sZWVAb2dxY29ycC5jb20iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcklkIjoiNWVkOWU0MmEwMzI1MmEwODVmMzUwY2I3IiwiaXNzIjoiYW5qYWpycWh0IiwiaWF0IjoxNTkxMzM4MDY4LCJleHAiOjE1OTQ5MzgwNjh9.ldfhbvzv3Y19DF-fxg1dkY4x22Duwvz88B9ifzvrYpU'
    let pageSize = 20;

    this.$axios.get('http://localhost:8080/restaurants', {
      params: {
        page: payload.page,
        pageSize: pageSize
      },
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => {
      commit('loadRestaurants', res.data);
    }).catch(() => {
    });
  }
}
