import { getDatabase, ref, set } from "firebase/database";

// STATE
export const state = () => ({
  sideNav: false,
  products: [],
  cart: [],
  user: null,
  currentUser: {},
  favorites: [],
});

// GETTERS
export const getters = {
  getSectionProducts: (state) => (section) => {
    return state.products.filter((product) => product.category === section);
  },
  getProduct: (state) => (id) => {
    return state.products.find((product) => product.id === parseInt(id));
  },
  getTotal: (state) => {
    let totalCost = 0;
    state.cart.forEach((product) => {
      totalCost += product.price;
    });
    return totalCost;
  },
  getCart: (state) => {
    return state.cart;
  },
  getCurrentUser: (state) => {
    return state.currentUser;
  },
  isLoggedIn: (state) => {
    return !!state.currentUser.id;
  },
  // Responsive layout
  getSideNavStatus: (state) => {
    return state.sideNav;
  },
  getFavorite: state=>(item)=>{
    return state.favorites.some(product => product.id === item.id)
  }
};

// MUTATIONS
export const mutations = {
  // Populate the products array
  saveProducts(state, products) {
    state.products = products;
  },
  // Cart mutations
  addToCart(state, item) {
    state.cart.push(item);
  },
  removeItem(state, item) {
    state.cart = state.cart.filter((product) => product.id !== item.id);
  },
  emptyCart(state) {
    state.cart = [];
  },
  concatCarts(state, fetchedCart) {
    if (Array.isArray(fetchedCart)) {
      state.cart = state.cart.concat(fetchedCart);
    }
  },
  // Auth
  onAuthStateChangedMutation(state, { authUser, claims }) {
    if (!authUser) {
      state.user = null;
    } else {
      const { email, uid } = authUser;
      state.user = { email, uid };
    }
  },
  // currentUser 
  setCurrentUser(state, userObject) {
    state.currentUser = userObject;
  },
  clearCurrentUser(state) {
    state.currentUser = {};
  },
  // Responsive layout (sideNav switcher)
  setSideNav(state) {
    state.sideNav = !state.sideNav;
  },
  // Favorites mutations
  addToFavorites(state, item) {
    state.favorites.push(item);
    console.log(state.favorites);
  },
  removeFromFavorites(state, item){
    state.favorites= state.favorites.filter(product=> product.id!== item.id)
  },
  emptyFavorites(state) {
    state.favorites = [];
  },
  concatFavorites(state, fetchedFavorites) {
    if (Array.isArray(fetchedFavorites)) {
      state.favorites = state.favorites.concat(fetchedFavorites);
    }
  },
};

// ACTIONS
export const actions = {
  fetchProducts(context) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        context.commit("saveProducts", response);
      });
  },
  toggleSideNav({ commit }) {
    commit("setSideNav");
  },
  toggleFavorites(context, item){
    //THIS COULD BE AN OPTION FOR REDIRECTING TO PAGE SIGN-IN IF NOT LOGGED IN.
    // INSTEAD I USED A NUXT-LINK CONDITIONAL IN TEMPLATE OF ADDTOFAVORITES
    // if(!context.getters.isLoggedIn){
    //   this.$router.push('/sign-in')
    // } else 
    if(context.state.favorites.some(product => product.id === item.id)){
        context.commit("removeFromFavorites", item);
    }else{
        context.commit("addToFavorites",item);
    }
    context.dispatch("updateDatabaseFavorites");
  },
  updateDatabaseCart() {
    const db = getDatabase();
    const cartToSend = [...this.state.cart];
    set(ref(db, 'users/' + this.state.currentUser.id + '/cart'), cartToSend);
  },
  updateDatabaseFavorites() {
    const db = getDatabase();
    const favsToSend = [...this.state.favorites];
    set(ref(db, 'users/' + this.state.currentUser.id + '/favorites'), favsToSend);
  }
};
