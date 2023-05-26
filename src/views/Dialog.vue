<script setup>
  import { ref, inject } from 'vue';
  
  const url = ref('https://www.baidu.com');
  const { visible, changeVisible } = inject('dialog');
  const { editList } = inject('search');

  const hide = () => {
      changeVisible(false);
  }

  const addClick = () => {
      if (!url.value) {
          alert('请输入URL地址')
      } else {
          api.sendURL(url.value).then(result => {
            editList({ ...result, url: url.value });
            hide();
          });
      }
  }

</script>
<template>
  <div class="dialog-wrap" v-show="visible">
    <div class="content">
        <div class="input">
            <input type="text" v-model="url" placeholder="请输入网址..." name="" id="">
        </div>
        <div class="btns">
            <button @click="addClick">添加</button>
            <button @click="hide">取消</button>
        </div>
    </div>
  </div>
</template>

<style lang="stylus">
    .dialog-wrap
        top 0
        left 0
        right 0
        bottom 0
        display flex
        position absolute
        align-items center
        justify-content center
        background rgba(0, 0, 0, 0.8)
        .content 
            width 100%
            padding 0 20px
            input
                height 30px
                width 100%
                outline none 
                margin-bottom 10px
                font-size 12px
            .btns
                button
                    height 30px
                    margin-right 10px
                    font-size 12px
                    padding 0 20px

</style>
