<template>
    <div id="products">
        <div class="products-wrapper">
            <item-product v-for="item in products" :item="item" :key="item.id" :panier="panier"></item-product>
        </div>
        <div class="pagination">
            <div class="prev" v-on:click="prevPage">&lt;</div>
            <div class="current">{{ page }}</div>
            <div class="next" v-on:click="nextPage">&gt;</div>
        </div>
    </div>
</template>

<script>
    import ItemProduct from "@/components/ItemProduct";

    export default {
        name: "Products",
        props: ['products', 'panier', 'page'],
        components: {ItemProduct},
        methods: {
            nextPage(){
                this.$emit('next-page');
            },
            prevPage(){
                this.$emit('prev-page');
            }
        }
    }
</script>

<style scoped lang="scss">
    #products{
        .products-wrapper{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .pagination {
            display: flex;
            justify-content: center;
            flex-direction: row;
            margin: 10px 0;

            div {
                padding: 10px;
                font-weight: 700;

            }

            .next, .prev{
                cursor: pointer;
                text-transform: uppercase;
            }

            .current{
                margin: 0 10px;
            }

        }
    }

</style>