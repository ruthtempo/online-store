export const state = () => ({
    products: [],
    user: null
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
    onAuthStateChangedMutation(state, { authUser, claims }) {
        if(!authUser) {
            state.user = null
        } else {
            const { email } = authUser
            state.user = { email }
        }
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
