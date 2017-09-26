<template>
    <div id="app">
        <transition mode="out-in">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>
<script>


    export default {
        name: 'app',
        data () {
            return {
                title:'活动',
                isBack: false,
                loading:{
                    show:false,
                    type:1,
                    msg:'努力加载中...',
                    mask:true,
                    isAnimation:false,
                },
            }
        },
        components:{

        },
        methods:{

        },
        mounted(){
          
        },

    }
</script>
<style lang="scss">

</style>
