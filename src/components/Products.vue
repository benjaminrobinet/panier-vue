<template>
    <div id="products">
        <item-product v-for="item in products" :item="item" :key="item.id" :panier="panier"></item-product>
    </div>
</template>

<script>
    import ItemProduct from "@/components/ItemProduct";

    export default {
        name: "Products",
        props: ['products', 'panier'],
        components: {ItemProduct},
        methods: {}
    }
</script>

<style scoped lang="scss">
    #products{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>