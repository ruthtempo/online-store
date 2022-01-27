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
      totalCost += product.price * product.quantity;
    });
    //total with 2 decimals
    return Math.round(totalCost * 100)/100;
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

  addToCart(state, {item, quantity}) {
  // Create a new property "quantity" for the elements that are pushed in the cart
    item['quantity'] = quantity
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
      fetchedCart.forEach(fetchedItem => {
        let index = state.cart.find(localItem => localItem.id == fetchedItem.id);
        if (index > -1) {
          state.cart[index].quantity += fetchedItem.quantity;
        } else {
          state.cart.push(fetchedItem);
        }
      });
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
  },
  removeFromFavorites(state, item){
    state.favorites= state.favorites.filter(product=> product.id!== item.id)
  },
  increaseQuantity(state,{item, quantity}){
    //check in cart and find element by id
    let itemo = state.cart.find(product =>product.id === item.id)
    //increase quantity property
    itemo.quantity += quantity 
    //copy of array so vue can detect deep nested changes
    state.cart = state.cart.slice()
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
    //THIS COULD BE AN OPTION FOR REDIRECTING TO PAGE SIGN-UP IF NOT LOGGED IN.
    // INSTEAD I USED A NUXT-LINK CONDITIONAL IN TEMPLATE OF ADDTOFAVORITES
    // if(!context.getters.isLoggedIn){
    //   this.$router.push('/sign-up')
    // } else 
    if(context.state.favorites.some(product => product.id === item.id)){
        context.commit("removeFromFavorites", item);
    }else{
        context.commit("addToFavorites",item);
    }
  }, 
  //if in the cart already, increase quantity. if not, add to cart
  addOrIncrease(context, {item, quantity}){
    if(context.state.cart.some(product=> product.id === item.id)){
      context.commit("increaseQuantity", {item, quantity})
    }else{
      context.commit("addToCart", {item, quantity})
    }
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
