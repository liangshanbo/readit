<script setup>
    import { provide, ref, computed } from 'vue';
    import SearchBar from './SearchBar.vue';
    import Dialog from './Dialog.vue';
    import List from './List.vue';

    const list = ref([]);
    const editList = (item) => {
        list.value.push(item);
    }

    const visible = ref(false);
    const changeVisible = (value) => {
        visible.value = value;
    }

    const keyword = ref('');
    const updateKeyword = (value) => {
        keyword.value = value;
    }

    const filterList = computed(() => {
        if (keyword.value) {
            return list.value.filter(item => item.url.includes(keyword.value));
        } else {
            return list.value;
        }
    })

    provide('search', {
        editList,
        filterList,
        updateKeyword,
    });

    provide('dialog', { 
        visible, 
        changeVisible, 
        deleteItem: (index) => {
            list.value.splice(index, 1);
        }
    });

</script>

<template>
    <div>
        <h1>我是Home</h1>
        <SearchBar />
        <List />
        <Dialog />
    </div>
</template>

