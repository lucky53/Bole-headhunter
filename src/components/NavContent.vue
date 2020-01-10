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
                                <div class="goog-te-gadget-simple">
                                    <div v-on:click="showTagetext">选择语言<span aria-hidden="true" style="color: rgb(155, 155, 155);">▼</span></div>
                                </div>
                                <div class="select-btn" v-show="chatShowtext">
                                    <a href="index.html" class="select-list"><div style="white-space: nowrap;"><span class="indicator">›</span><span class="text">英语</span></div></a>
                                    <a href="/zhCN/index.html" class="select-list"><div style="white-space: nowrap;"><span class="indicator">›</span><span class="text">中文(繁体)</span></div></a>
                                </div>
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
				<div class="dropdown wechat" v-on:click="showToggle" @mouseover="wechatmouseOver" @mouseleave="wechatmouseLeave">
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
                chatShowtext: false,
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
            },
            showTagetext(){
                this.chatShowtext = !this.chatShowtext;
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
.head-lang{
    position: relative;
}
.goog-te-gadget-simple,.select-list {
    padding: 3px 0px!important;
    min-width: 110px;
    max-width: 120px;
    text-align: center;
    border: 1px solid #fad18a;
    background: transparent;
    border-radius: 16px;
    cursor: pointer;
    zoom: 1;
    font-size: 10pt;
    color: #fff;
    display: inline-block;
}
.select-btn{
    position: absolute;
    top: 30px;
    left: 0;
}
.select-list{
    text-decoration: none;
    width: 110px;
    margin-top: 5px;
    color: #fff;
    display: block;
    padding: 2px 10px;
    min-width: 90px;
    border: 1px solid #fad18a;
    background: rgba(0,0,0,.8);
    border-radius: 16px;
    color: #fff;
}
.select-list:hover{
    color: #fff;
}
</style>