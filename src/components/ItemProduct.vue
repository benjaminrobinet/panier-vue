<template>
    <div class="product-wrapper">
        <div class="product">
            <div class="img-wrapper">
                <img :src="item.photo" alt="">
            </div>
            <div class="content">
                <div class="top">
                    <div class="title">{{ item.nom }}</div>
                    <div class="price">{{ item.prix }}€</div>
                </div>
                <div class="desc">{{ item.description }}</div>
                <div class="button-wrapper">
                    <button class="black" v-on:click="$parent.$emit('update:panier', item)"><span>Ajouter au panier</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .product-wrapper {
        width: 33.33vw;
    }
    .product{
        display: flex;
        flex-direction: column;
        height: 100%;
        border-left: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        overflow: hidden;
        /*padding: 5px;*/

        .img-wrapper{
            position: relative;
            width: 33.33vw;
            height: 33.33vw;
            overflow: hidden;
            background-color: #fff;

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
            color: #2f2f2f;

            .top{
                font-size: 14px;

                .title{
                    font-weight: 500;
                    margin: 10px 0;
                    display: inline-block;
                    text-transform: uppercase;
                }

                .price{
                    margin: 10px 0;
                    display: inline-block;
                    color: #575757;

                    &::before{
                        content: '-';
                        display: inline-block;
                        margin: 0 4px;
                    }
                }
            }

            .desc {
                color: #818181;
                font-size: 12px;
            }

            .button-wrapper{
                text-align: left;
            }
        }
    }
</style>

<script>
    export default {
        name: "ItemPanier",
        props: ['item', 'panier'],
        data() {
            return {};
        },
        methods: {
        }
    }
</script>