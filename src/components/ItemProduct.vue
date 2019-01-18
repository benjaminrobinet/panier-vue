<template>
    <div class="product-wrapper">
        <div class="product">
            <div class="img-wrapper">
                <img :src="item.photo" alt="">
            </div>
            <div class="content">
                <div class="title">{{ item.nom }}</div>
                <div class="price">{{ item.prix }}€</div>
                <div class="desc">{{ item.description }}</div>
                <div class="button-wrapper">
                    <button v-on:click="addToPanier"><span>Ajouter au panier</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .product-wrapper {
        width: 25%;
        padding: 1%;
    }
    .product{
        display: flex;
        flex-direction: column;
        height: 100%;
        /*border: 1px solid black;*/
        box-shadow: 0 2px 8px 0 #949494;
        border-radius: 10px;
        overflow: hidden;
        /*padding: 5px;*/

        .img-wrapper{
            position: relative;
            width: 100%;
            height: 150px;
            overflow: hidden;

            img{
                position: absolute;
                width: 100%;
                height: auto;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .content{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            .title{
                font-weight: 500;
                margin: 10px 0;
            }

            .price{
                text-align: right;
                margin: 10px 0;
            }

            .button-wrapper{
                text-align: center;
            }
        }
    }
</style>

<script>
    import axiosWrapper from "@/modules/axiosWrapper";

    export default {
        name: "ItemPanier",
        props: ['item', 'panier'],
        data() {
            return {};
        },
        methods: {
            addToPanier() {
                this.$emit('update:panier', this.$props.item);
            }
        }
    }
</script>