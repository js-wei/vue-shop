<template lang="html">
    <div class="content">
        <h2>你好呀</h2>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
</style>
<script>
    import vHead from '../common/header.vue'
    export default {
        data(){
            return{
                show:true
            }
        },
        props:{
            title:''
        },
        components:{
            vHead
        }
    }
</script>