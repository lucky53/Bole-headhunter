<template>
  <div>
    <footer class="main-footer">
      <div class="paddingTB100">
        <div class="container">
          <div class="wrapper" id="wrapper-footer-full">
            <div class="" id="footer-full-content" tabindex="-1">
              <div class="row">
                <div class="col-md-3 left footer-section">
                  <h4>Our Company<a href="javascript:;" class="mob-FM-toggle visible-xs"><i class="fa fa-plus" aria-hidden="true"></i></a></h4>
                  <div class="row footer-menu">
                    <div class="col-sm-12">
                      <div class="menu-footer-menu-1-container">
                        <ul id="menu-footer-menu-1" class="menu">
                          <li class="menu-item">
                            <router-link :to="{path:'/Aboutus'}" @click.native="flushCom" active-class="active" exact>
                              About Us
                            </router-link>
                          </li>
                          <li class="menu-item">
                            <router-link :to="{path:'/CaseStudies'}" @click.native="flushCom" active-class="active">
                              Join Us
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mid footer-section">
                  <h4>Services<a href="javascript:;" class="mob-FM-toggle visible-xs"><i class="fa fa-plus" aria-hidden="true"></i></a></h4>
                  <div class="row footer-menu">
                    <div class="col-sm-6">
                      <div class="menu-footer-menu-2-container">
                        <ul id="menu-footer-menu-2" class="menu">
                          <li id="menu-item-1935" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1935">
                            <a href="javasceipt:;">Payroll Outsourcing</a></li>
                          <li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76">
                            <a href="javasceipt:;">Job Search</a></li>
                          <li id="menu-item-779" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-779">
                            <a href="javasceipt:;">Visa Application</a></li>
                          <li id="menu-item-75" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                            <a href="javasceipt:;">Branding</a></li>
                          <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                            <a href="javasceipt:;">Recruitment</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="menu-footer-menu-3-container">
                        <ul id="menu-footer-menu-3" class="menu">
                          <li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80">
                            <a href="javasceipt:;">Secondment/BPO</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 right footer-section">
                  <h4>Expertise &amp; Resources
                    <a href="javascript:;" class="mob-FM-toggle visible-xs"><i class="fa fa-plus" aria-hidden="true"></i></a>
                  </h4>
                  <div class="row footer-menu">
                    <div class="col-sm-6">
                      <div class="menu-footer-menu-4-container">
                        <ul id="menu-footer-menu-4" class="menu">
                          <li id="menu-item-1998" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1998">
                            <a rel="noopener noreferrer" href="javasceipt:;">Jlogs</a>
                          </li>
                          <li id="menu-item-2950" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1998">
                            <a rel="noopener noreferrer" href="javasceipt:;">HR Portal</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right-div">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left-copy">Pak Lok Elite Copyright @ 2020 All Rights Reserved</div>
              <div  class="left-copy">License number 61260</div>
            </div>
            <div class="col-md-6">
              <div class="social-icon">
                <a href="https://www.facebook.com/hongkonglinks/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/links-recruitment-limited/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://twitter.com/Links_Asia" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/channel/UCP2KATJ3GpMitQ1B3pBuAkw" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="https://web.wechat.com/" target="_blank"><i class="fa fa-weixin" aria-hidden="true"></i></a>
                <a href="https://www.glassdoor.com.hk/Overview/Working-at-Links-International-EI_IE1009549.11,30.htm?countryRedirect=true" target="_blank"><img src="../assets/images/glassdoor.svg" width="15" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterShare"
}
</script>