<template>
    <h1 class="h1-title">{{ titleText }}</h1>
</template>

<script>
export default {
    name: 'title',
    props: {
        titleText: {
            type: String,
            default: '默认标题'
        }
    }
}
</script>

<style lang="less" scoped>
.h1-title {
    color: #000000;
}
</style>