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
  getUser: (state) => {
    return state.user;
  },
  // Responsive layout
  getSideNavStatus: (state) => {
    return state.sideNav;
  },
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
  emptyFavorites(state) {
    state.favorites = [];
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
};
