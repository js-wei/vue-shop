<template>
    <footer class="mui-row">
        <nav class="mui-bar mui-bar-tab">
            <a id="defaultTab" class="mui-tab-item mui-active" home="yes" href="tab-webview-subpage-about.html">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">
                    首页
                </span>
            </a>
            <a class="mui-tab-item" href="tab-webview-subpage-chat.html">
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                <span class="mui-tab-label">店铺</span>
            </a>
            <a class="mui-tab-item" href="tab-webview-subpage-find.html">
                <span class="mui-icon mui-icon-eye"></span>
                <span class="mui-tab-label">发现</span>
            </a>
            <a class="mui-tab-item" href="tab-webview-subpage-cart.html">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge mui-badge-warning">4</span>
				</span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="tab-webview-subpage-setting.html">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">我的</span>
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