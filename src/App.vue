<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "assets/style/scss/default";

    body, html{
        position: relative;
        min-height: 100%;
    }
    body{
        margin: 0;
        padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2f2f2f;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    *{
        box-sizing: border-box;
    }
</style>
