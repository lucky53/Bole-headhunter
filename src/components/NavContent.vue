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
                            <img src="../assets/images/logo.png" width="278px" height="75" alt="Links International">
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
                                <router-link :to="{name:'Content'}" @click.native="flushCom" active-class="active" exact>
                                    Home page
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name:'CaseStudies'}" @click.native="flushCom" active-class="active">
                                    Case Studies
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name:'Blogs'}" @click.native="flushCom" active-class="active">
                                    Blogs
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link :to="{name:'Aboutus'}" @click.native="flushCom" active-class="active">
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
				<div class="dropdown wechat">
					<a class="dropdown-btn" href="https://web.wechat.com/" target="_blank">
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
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"NavContent",
    methods: {
        flushCom(){
            this.$router.go(0);
        }
    }
}
</script>