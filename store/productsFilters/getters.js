export default {
    getFilters: (state) => {
        console.log("GET FILTERS", state);
        return state.filters || [];
    }
}
