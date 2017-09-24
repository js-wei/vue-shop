<template>
    <div class="popup">
        <transition name="fade"
                    enter-active-class="fadeDownBig"
                    leave-active-class="fadeUpBig">
            <div class="modal animated" v-show="modal.show" translate="fadeIn">
                <div class="modal-body">
                    <div class="modal-header" v-show="modal.isHeader">
                        <h4>{{ modal.title }}</h4>
                    </div>
                    <div class="modal-content">
                        <div>
                            <slot name="modal-content">内容区域</slot>
                        </div>
                    </div>
                    <div class="modal-footer" v-show="modal.isFooter">
                        <input class="btn blue" type="button" v-model="modal.yes" @click="ok" />
                        <input class="btn" type="button" v-model="modal.cancel" @click="cancel" />
                    </div>
                </div>
            </div>
       </transition>
       <div class="modal-backdrop"></div>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .modal{
        width: 80vw;
        position:fixed;
        top:30%;
        left:10%;
        z-index:999;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
        .modal-body{
            .modal-header {
                color: #fff;
                background:nth($baseColor,3);
                border-radius: 6px 6px 0 0;
                padding: 15px;
                border-bottom: 1px solid nth($baseColor,3);
                h4{
                    font-size:1.5rem;
                    font-weight:normal;
                }
            }
            .modal-content{
                padding: 1.3rem .8rem;
                height:auto;
                overflow:hidden;
                line-height:1.5em;
                font-size:1.2rem;
            }
            .modal-footer {
                padding: 15px;
                text-align: right;
                border-top: 1px solid #e5e5e5;
                .btn {
                    border: 1px solid #d1d1d1;
                    border-radius: 3px;
                    background-color: #f7f7f7;
                    background: -webkit-gradient(linear, 0 0, 0 100%, from(#f7f7f7),
                            to(#f2f2f2));
                    background: -moz-gradient(linear, 0 0, 0 100%, from(#f7f7f7),
                            to(#f2f2f2));
                    background: -o-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
                    background: -ms-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
                    height: auto;
                    padding:.2rem 1.2rem;
                    cursor: pointer;
                    line-height: 28px;
                    display: inline-block;
                    color: #666666;
                    margin-right: 5px;
                    outline: none;
                }
                .blue {
                    border: 1px solid nth($baseColor,3);
                    background-color: nth($baseColor,3);
                    background: -webkit-gradient(linear, 0 0, 0 100%, from(lighten(nth($baseColor,3),10%)),
                            to(nth($baseColor,3)));
                    background: -moz-gradient(linear, 0 0, 0 100%, from(lighten(nth($baseColor,3),10%)),
                            to(#5e9fa1));
                    background: -o-gradient(linear, 0 0, 0 100%, from(lighten(nth($baseColor,3),10%)),
                            to(nth($baseColor,3)));
                    background: -ms-gradient(linear, 0 0, 0 100%, from(lighten(nth($baseColor,3),10%)),
                            to(nth($baseColor,3)));
                    color: #FFFFFF;
                }
            }
        }
    }
    .modal-backdrop{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 998;
        background-color: rgba(0,0,0,.3);
    }
</style>
<script>
    export default {
        data(){
            return{

            }
        },
        props: {
            modal:Object
        },
        computed: {

        },
        methods: {
            ok () {
                document.querySelector('.popup').style.display='none';
                this.$emit("ok",this);
            },
            cancel () {
                document.querySelector('.popup').style.display='none';
                this.$emit("cancel",'cancel');
            }
        }
    }
</script>