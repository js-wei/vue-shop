<template>
    <footer class="mui-row" v-if="show">
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item" :class="i==0?'mui-active':''" :href="m.href"  v-for="(m,i) in menu">
                <span class="mui-icon" :class="m.icon"></span>
                <span class="mui-tab-label">{{m.title}}</span>
            </a>
        </nav>
    </footer>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .mui-bar-tab .mui-tab-item.mui-active{
        color:nth($baseColor,3);
    }
</style>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{

        },
        props:{
            title:String,
            menu:Array,
            show:{
                type:Boolean,
                default:true
            }
        },
        created(){

        }
    }
</script>