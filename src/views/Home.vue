<template>
    <div class="container">
        <Panier :panier="panier"></Panier>
        <item-product v-for="item in products" :item="item" :panier="panier"></item-product>
    </div>
</template>

<style lang="scss">
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /*justify-content: flex-start;*/
        /*align-items: stretch;*/
    }
    button {
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background-color: darken(#26d6ff, 10%);
        border: none;
        width: auto;
        padding: 10px 20px;
        margin: 20px 0;

        span {
            position: relative;
            z-index: 2;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
            font-weight: 700;
        }

        &::before{
            z-index: 1;
            content: '';
            background-color: darken(#26d6ff, 20%);
            top: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            transition: top 0.1s ease-out;
        }

        &:hover::before{
            top: 0;
        }
    }
</style>
<script>
// @ is an alias to /src

import axiosWrapper from "@/modules/axiosWrapper";
import ItemProduct from "@/components/ItemProduct";
import Panier from "@/components/Panier";


export default {
    name: 'home',
    components: {ItemProduct, Panier},
    data() {
        return {
            page: 1,
            field: 'nom',
            sort: 'asc',
            panier: [],
            products: []
        }
    },
    methods: {
        loadProducts() {
            let url = 'products?page=' + this.page + '&sort=' + this.sort + '&field=' + this.field;
            axiosWrapper.get(url).then(response => {
                this.products = response.data;
            }).catch(err => {
                console.log(err);
            });
        },
        loadPanier(){
            let url = 'cart';
            axiosWrapper.get(url).then(resp => {
                console.log(resp);
                this.panier = resp.data === null ? [] : resp.data;
            }).catch(err => {
                console.log(err);
            });
        }
    },
    mounted() {
        this.loadProducts();
        this.loadPanier();
    }
}
</script>
