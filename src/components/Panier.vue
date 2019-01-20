<template>
    <div class="panier" ref="panier">
        <div class="panier-toggle" v-on:click="togglePanier = !togglePanier">
            <div class="bar" ref="bar1"></div>
            <div class="bar" ref="bar2"></div>
            <div class="bar" ref="bar3"></div>
            <div class="count">{{ panierCount }}</div>
        </div>
        <div class="content" v-if="togglePanier">
            <ul>
                <li v-for="item in panier">{{ item }}</li>
            </ul>
        </div>
        <div class="buttons-wrapper">
            <button v-on:click="$emit('update:clear-panier')"><span>Vider le panier</span></button>
            <button v-on:click=""><span>Commander</span></button>
        </div>
    </div>
</template>

<script>
    import {TimelineMax} from "gsap";

    export default {
        name: "Panier",
        props: ['panier'],
        data(){
            return {
                togglePanier: false
            }
        },
        methods: {},
        computed: {
            panierCount(){
                return this.$props.panier.reduce((accu, cval) => {
                    accu += cval.qte;
                    return accu;
                }, 0);
            },
        },
        watch: {
            togglePanier: function(show){
                const { bar1, bar2, bar3, panier } = this.$refs;
                let tl = new TimelineMax();

                // document.body.style.overflow = (show) ? 'hidden' : '';

                if(show){
                    tl.to(bar1, 0.2, {css: {transform: "translateY(-50%) rotate(45deg)", top: "50%"}, ease: Power4.easeOut, force3D: true}, 0);
                    tl.to(bar2, 0.2, {css: {left: "-100%", opacity: 0}, ease: Linear.easeNone, force3D: true}, 0);
                    tl.to(bar3, 0.2, {css: {transform: "translateY(50%) rotate(-45deg)", bottom: "50%"}, ease: Power4.easeOut, force3D: true}, 0);
                    tl.to(panier, 0.4, {css: {right: "0"}, ease: Power2.easeOut, force3D: true}, 0)
                } else {
                    tl.to(bar1, 0.2, {css: {transform: "rotate(0deg)", top: "10px"}, ease: Power4.easeOut, force3D: true}, 0);
                    tl.fromTo(bar2, 0.2, {css: {right: "100%", left: "auto", opacity: 0}}, {css: {left: "7.5px", opacity: 1}, ease: Linear.easeNone, force3D: true}, 0);
                    tl.to(bar3, 0.2, {css: {transform: "rotate(0deg)", bottom: "10px"}, ease: Power4.easeOut, force3D: true}, 0);
                    tl.to(panier, 0.4, {css: {right: "-100%"}, ease: Power2.easeOut, force3D: true}, 0)
                }

                tl.play();
            },
        }
    }
</script>

<style scoped lang="scss">
    .panier{
        height: 100%;
        width: 50%;
        position: fixed;
        top: 0;
        right: -100%;
        min-width: 350px;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 99;
    }
    .content{
        color: #fff;
        padding: 60px 0;
        min-height: 100%;
    }
    .buttons-wrapper{
        position: absolute;
        left: 0px;
        bottom: 10px;
        button{
            margin: 10px 20px;
        }
    }
    .panier-toggle {
        background-color: #000;
        width: 40px;
        height: 40px;
        padding: 10px;
        position: fixed;
        z-index: 99;
        top: 20px;
        right: 20px;
        cursor: pointer;
        /*overflow: hidden;*/

        .bar{
            left: 7.5px;
            width: 25px;
            height: 3px;
            background-color: #fff;
            position: absolute;
            transform-origin: center center;
        }

        .bar:nth-of-type(1){
            top: 10px;
        }
        .bar:nth-of-type(2){
            top: 50%;
            transform: translateY(-50%);
        }
        .bar:nth-of-type(3){
            bottom: 10px;
        }

        .count{
            position: absolute;
            bottom: -10px;
            left: -10px;
            border-radius: 50%;
            background-color: red;
            padding: 5px 10px;
            color: #fff;
            font-size: 10px;
            font-weight: 700;
        }
    }
</style>