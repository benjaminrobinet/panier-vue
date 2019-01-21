<template>
    <div class="container">
        <panier v-on:update:clear-panier="clearPanier" :panier="panier"></panier>
        <products v-on:update:panier="addToPanier" v-on:next-page="nextPage" v-on:prev-page="prevPage" :page="page" :panier="panier" :products="products"></products>
    </div>
</template>

<script>
import Products from "@/components/Products";
import Panier from "@/components/Panier";

import axiosWrapper from "@/modules/axiosWrapper";

export default {
    name: 'home',
    components: {Products, Panier},
    data() {
        return {
            page: 1,
            field: 'nom',
            sort: 'asc',
            panier: [],
            products: [],
            waiting: false
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
                this.panier = resp.data === null ? [] : resp.data;
            }).catch(err => {
                console.log(err);
            });
        },
        addToPanier(item){
            let url = 'cart/' + item.id;
            axiosWrapper.post(url).then(resp => {
                this.panier = resp.data;
            }).catch(err => {
                console.log(err);
            });
        },
        clearPanier(){
            let url = 'cart';
            axiosWrapper.delete(url).then(resp => {
                this.panier = [];
            }).catch(err => {
                console.log(err);
            });
        },
        nextPage(){
            if(this.waiting){
                return;
            }
            this.waiting = true;
            let url = 'products?page=' + (this.page + 1) + '&sort=' + this.sort + '&field=' + this.field;
            axiosWrapper.get(url).then(response => {
                if(response.data.length > 0){
                    this.page += 1;
                    this.products = response.data;
                }
                this.waiting = false;
            }).catch(err => {
                console.log(err);
            });
        },
        prevPage(){
            if(this.page <= 1 || this.waiting){
                return;
            }
            this.waiting = true;
            let url = 'products?page=' + (this.page - 1) + '&sort=' + this.sort + '&field=' + this.field;
            axiosWrapper.get(url).then(response => {
                if(response.data.length > 0){
                    this.page -= 1;
                    this.products = response.data;
                }
                this.waiting = false;
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
<style lang="scss">
    .container{
        position: relative;
        min-height: 100%;
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

        &.black{
            background-color: #1b1b1b;
            &::before{
                background-color: lighten(#000, 30%);
            }
        }
    }
</style>
