<template>
    <footer class="footer" v-if="show">
        <nav>
            <router-link :class="(current==m.href)?'active':''"  :to="m.href" v-for="(m,i) in menu">
                <span class="mui-icon" :class="m.icon"></span>
                <span class="mui-tab-label">{{m.title}}</span>
            </router-link>
        </nav>
    </footer>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .footer{
        position:fixed;
        bottom:0px !important;
        height:55px;
        background-color:nth($baseColor,1);
        nav{
            width:100vw;
            border-top:1px solid lighten(nth($baseColor,2),90%);
            padding-top:.5rem;
            a{
                display: block;
                float: left;
                text-align: center;
                width:100vw;
                color:lighten(nth($baseColor,2),50%);
                span{
                    display:block;
                }
                &.active{
                    color:nth($baseColor,3);
                }
            }
        }
    }
</style>
<script>
    export default {
        props:{
            menu:Array,
            current:String,
            show:{
                type:Boolean,
                default:true
            }
        },
        methods:{
        },
        mounted(){
            let a = document.querySelectorAll('nav>a'),
                l = a.length,
                width = 100/l+'%';
            for (let i=0;i<l;i++){
                a[i].style.width = width;
            }
        }
    }
</script>