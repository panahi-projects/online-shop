export default {
    Add_To_Cart_Commit(state, product) {
        debugger
        if (state.cart) {
            let productExistInCart = state.cart.find(p => p.id == product.id);
            if (!productExistInCart) {
                let newProduct = {
                    ...product,
                    count: 1
                }
                delete newProduct.stock
                state.cart.push(newProduct);
            }
            else {
                productExistInCart.count += 1;
            }
        }
        console.log("state:", state.cart);
    }
}