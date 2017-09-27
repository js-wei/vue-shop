<template>
    <div class="feedback">
        <v-head :title="title" :isSlotRight="isSlotRight">
            <div slot="header-right">
                <button type="button" class="upload" @click="submit">提交</button>
            </div>
        </v-head>
        <div class="feedback-content">
            <textarea id="content" placeholder="必填,详细反馈" v-model="content"></textarea>
            <input type="text" placeholder="联系方式:QQ或者电话">
            <div class="feedback-photo">
                <i class="fa fa-3x fa-camera"></i>
                上传图片
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .feedback-content{
        text-align:center;
        textarea,input{
            width:95vw;
            font-size:1.5rem;
            color:lighten(nth($baseColor,2),60%);
            &::placeholder{
                font-size:1.2rem;
            }
        }
        textarea{
            margin-top:1.2rem;
            height:120px;
        }
        .feedback-photo{
            width:20vw;
            height:auto;
            background-color:lighten(nth($baseColor,2),60%);
            padding:4px;
            margin-left:12px;
            color:nth($baseColor,1);
            text-align:center;
            i{
                display:block;
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'

    export default {
        data(){
            return{
                title:'意见反馈',
                isSlotRight:true,
                content:''
            }
        },
        components:{
            vHead
        },
        methods:{
            submit(){

            }
        },
        mounted(){
            const gallery = document.querySelector('.feedback'),
                header = document.querySelector('header');
            if (header && gallery) {
                gallery.style.marginTop = header.clientHeight + "px";
            }
        }
    }
</script>