<template>
    <div>
        <header class="main-header">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">
                            <img src="../assets/images/logo.png" width="300" alt="Links International">
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div class="head-lang">
                            <div class="wpml-ls-sidebars-language-sw wpml-ls wpml-ls-legacy-dropdown js-wpml-ls-legacy-dropdown">
                                <div id="google_translate_element"></div>
                            </div>
                        </div>
                        <ul id="main-menu" class="sm sm-blue">
                            <li class="menu-item">
                                <router-link :to="{path:'/'}" @click.native="flushCom" active-class="active" exact>
                                    Home page
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{path:'/CaseStudies'}" @click.native="flushCom" active-class="active">
                                    Contact Us
                                </router-link>
                            </li>
                            <!-- <li class="menu-item">
                                <router-link :to="{path:'/Blogs'}" @click.native="flushCom" active-class="active">
                                    Jobs
                                </router-link>
                            </li> -->
                            <li class="menu-item">
                                <router-link :to="{path:'/Aboutus'}" @click.native="flushCom" active-class="active">
                                    About Us
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                </div>
                <!-- /.container-fluid -->
            </nav>
        </header>
        <div class="right-message-div">
			<div class="inner-div">
				<div class="dropdown wechat" @click="showToggle" @mouseover="wechatmouseOver" @mouseleave="wechatmouseLeave">
					<a class="dropdown-btn" href="javascript:;">
						<i class="fa"></i>
					</a>
				</div>
				<div class="dropdown telegram">
					<a class="dropdown-btn" href="https://dailytelegram.org/" target="_blank">
						<i class="fa"></i>
					</a>
				</div>
				<div class="dropdown qq_icon">
					<a class="dropdown-btn" href="tencent://Message/?Uin=2222122687&amp;websiteName=q-zone.qq.com&amp;Menu=yes" target="_blank">
						<i class="fa"></i>
					</a>
				</div>
                <div class="wechat-img" style="display:none;" v-show="chatShow">
                    <!-- <img src="../assets/images/wechat-img.png"> -->
                </div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"NavContent",
    data() {
        return {
             chatShow: false,
        }
    },
    methods: {
        flushCom(){
            this.$router.go(0);
        },
        // 移入
        wechatmouseOver() {
            $('.wechat-img').show();
        },
        // 移出
        wechatmouseLeave() {
            $('.wechat-img').hide();
        },
        showToggle(){
            this.chatShow = !this.chatShow;
        }
    }
}
</script>
<style lang="css">
.wechat-img{
    position: absolute;
    left: -140px;
    bottom: 53px;
}
</style>