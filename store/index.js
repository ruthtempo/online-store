export const state = () => ({
    products: []
})

export const getters = {
    getSectionProducts: state => (section) => {
        return state.products.filter(product => product.category === section)
    }
}

export const mutations = {
    saveProducts(state, products) {
        state.products = products
}
}

export const actions = {
    fetchProducts(context) {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            context.commit("saveProducts", response)
            }
        )
    }
}
