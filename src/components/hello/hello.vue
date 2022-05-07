<!--  -->
<template>
    <div class="hello">{{msg}}</div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: '你好'
        };
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>
<style lang='less' scoped>
.hello {
    color: red;
}
</style>