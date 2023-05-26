<script setup>
  import { ref, inject } from 'vue';
  
  const { deleteItem } = inject('dialog');
  const { filterList } = inject('search');

  const delItem = (index) => {
      api.alert({ message: '确认要删除当前信息吗？' }).then(result => {
          console.log('alert', result)
          const { response } = result;
          if (response === 1) {
              deleteItem(index)
          }
      })
    //   deleteItem(index)
  }

  const onItemClick = (item) => {
      api.open(item.url);
  }

</script>
<template>
  <div>
    <h2 v-show="filterList.length === 0" class="no-item">暂无数据</h2>
    <div class="items">
        <div v-for="(item, index) in filterList" :key="index" @click="onItemClick(item)" class="read-item">
            <img :src="item.screenshot" alt="">
            <h2>{{ item.title }}</h2> 
            <button @click="delItem">X</button>   
        </div>
    </div>
  </div>
</template>

<style lang="stylus">
    .no-item
        color silver
        width 100%
        text-align center
        position absolute
        top 280px
    .items 
        .read-item 
            display flex
            align-items center
            align-content center
            border-bottom 2px solid lightgray 
            background #fafafa
            border-left 10px solid lightgray 
            --webkit-user-select none 
            position relative
            padding 10px
            img 
                width 20%
                margin-right 25px
                border 1px solid #cccccc
            &:hover
                background #eeeeee
            &:hover button
                display flex
            &.selected
                border-left-color dodgerblue 
            button
                position absolute
                display none
                right 10px
                top 10px
                width 30px
                height 30px
                background #f44336
                border none 
                border-radius 15px
                color white
                font-size 16px
                cursor pointer 
                justify-content center
                align-items center
                padding 0

</style>
