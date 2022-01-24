// STATE
export const state = () => ({
  products: [],
  user: null,
  cart: [],
  sideNav: false,
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
  getSideNavStatus: (state) => {
    return state.sideNav;
  },
  getFavorite: state=>(item)=>{
    return state.favorites.some(product => product.id === item.id)
  }
};

// MUTATIONS
export const mutations = {
  saveProducts(state, products) {
    state.products = products;
  },
  onAuthStateChangedMutation(state, { authUser, claims }) {
    if (!authUser) {
      state.user = null;
    } else {
      const { email } = authUser;
      state.user = { email };
    }
  },
  addToCart(state, item) {
    //create a new property "quantity" for the elements that are pushed in the cart
    item['quantity']=1
    state.cart.push(item);
  },
  removeItem(state, item) {
    state.cart = state.cart.filter((product) => product.id !== item.id);
  },
  emptyCart(state) {
    state.cart = [];
  },
  setSideNav(state) {
    state.sideNav = !state.sideNav;
  },
  addToFavorites(state, item) {
    state.favorites.push(item);
    console.log(state.favorites);
  },
  removeFromFavorites(state, item){
    state.favorites= state.favorites.filter(product=> product.id!== item.id)
  },
  increaseQuantity(state,item){
    //check in cart and find element by id
    let itemo = state.cart.find(product =>product.id === item.id)
    //increase quantity property
    itemo.quantity ++
  }
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
    if(context.state.favorites.some(product=> product.id === item.id)){
        context.commit("removeFromFavorites", item)
    }else{
        context.commit("addToFavorites",item)
    }
  }, 
  //if in the cart already, increase quantity. if not, add to cart
  addOrIncrease(context, item){
    if(context.state.cart.some(product=> product.id === item.id)){
      context.commit("increaseQuantity", item)
    }else{
      context.commit("addToCart", item)
    }
  }
};
