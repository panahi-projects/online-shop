export default {
    addToFilters({ commit }, filters) {
        try {
            commit('Add_To_Filter_Commit', filters)
        }
        catch (ex) { }
    },
}
