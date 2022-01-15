export const state = () => ({
    products: [],
    cart: []

})

export const getters = {
    getSectionProducts: state => (section) => {
        return state.products.filter(product => product.category === section)
    },
    getProduct: state =>(id)=>{ 
        return state.products.find(product =>
            product.id === parseInt(id)
        )
    }
}

export const mutations = {
    saveProducts(state, products) {
        state.products = products
    },
    addToCart(state, item){
        state.cart.push(item)
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
