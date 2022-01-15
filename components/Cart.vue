<template>
    <div>
        <div v-for="item in $store.state.cart" :key="item.id">
            <div>
                {{item.image}}
            </div>
            <h3>{{item.title}}</h3>
            <h4>{{item.price}} €</h4>
            <button>Remove Item</button>
        </div>
        <div>
            <button>Empty Cart</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cart",
}
</script>