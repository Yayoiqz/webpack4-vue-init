<template>
    <div class="home-title">
        <h1-title
            :title-text="'这里是首页'"></h1-title>
    </div>
</template>

<script>
import H1Title from '@@/Title';
export default {
    name: 'home',
    components: {
        H1Title
    }
}
</script>

<style lang="less" scoped>
.home-title {
    padding-top: 20px;
}
</style>