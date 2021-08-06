export default {
    addToCart({ commit }, product) {
        try {
            commit('Add_To_Cart_Commit', product)
        }
        catch (ex) { }
    },
}
