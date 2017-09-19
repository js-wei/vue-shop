<template>
    <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="4.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="1.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="2.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="3.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="4.jpg" /></a></div>
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="1.jpg" /></a></div>
        </div>
    </div>
</template>
<style>
    @import "./static/style/base";

</style>
<script>
    export default {
        data(){
            return{
                images:[]
            }
        },
        mounted() {
            const gallery = document.querySelector('.mui-slider');
            gallery.slider({
                interval:5e3
            });
        }
    }
</script>