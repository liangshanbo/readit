<script setup>
    import { ref, inject } from 'vue';
    
    const { changeVisible } = inject('dialog');
    const { updateKeyword } = inject('search');

    const showDialog = () => {
        changeVisible(true);
    }

    const search = (e) => {
        updateKeyword(e.target.value);
    }

</script>

<template>
    <div class="search-container">
        <div class="button" @click="showDialog">+</div>
        <div class="input">
            <input @input="search" type="text" placeholder="请输入关键字..." name="" id="">
        </div>
    </div>
</template>
<style lang="stylus">
    div.search-container
     height 60px
     background #d3d3d3
     display  flex
     align-items center
     justify-content center
     padding-left 10px
     .button 
        width 40px
        height 40px
        background-color #1e90ff
        border-radius 5px
        font-size 30px
        font-weight bold
        color #ffffff
        cursor default
        display flex
        align-items center
        justify-content center
        padding-bottom 5px
    .input
        flex  1 
        height 36px
        padding 0 10px
        input 
            width 100%
            height 100%
            border 1px solid #cccccc
            border-radius 5px
</style>


