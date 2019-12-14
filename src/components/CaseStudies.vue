<template>
  <div>
    <NavContent></NavContent>
    <!-- <section class="innner-page-banner-section recruit-section top container-fluid">
      <div class="container z-imdex5">
        <div class="content-div text-center row-fluid-wrapper">
          <h1 class="short-description">About Us</h1>
        </div>
      </div>
    </section> -->
    <section class="innner-page-banner-section recruit-section container-fluid top">
      <div class="container z-imdex5">
        <div class="content-div text-center">
          <h1 class="short-description">Contact Us</h1>
          <div class="detail-div short-description">
            <h3>Get in touch with one of us today to start streamlining you HR processes across Asia</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="content-wrapper-banner">
      <div class="container">
          <div class="page-title text-center">
            <h1>Being the best HR teams in Asia</h1>
            <p>Pak Lok Elite Headhunting Consultant Limited helps HR teams across Asia to realize their potential and transform their HR functions by streamlining traditional HR processes and providing market-leading HR outsourcing solutions.Learn about our clients' experience in communication and how to overcome their HR challenges.</p>
          </div>
          <!-- <div class="swiper-container Cascading-banner">
              <div class="swiper-wrapper">
                <div class="swiper-slide Cascading-text">
                  <div class="text-content">
                    <span>
                        <i class="text-icon"></i>
                        In the relationship with Eurasian Bole, trust is a big thing, which was established in the early days of our communication.
                        <i class="text-icon right"></i>
                      </span>
                  </div>
                  <div class="warper-img">
                    <img src="../assets/images/moncler.png">
                    <span>Moncler</span>
                  </div>
                </div>
                <div class="swiper-slide Cascading-text">
                  <div class="text-content">
                    <span>
                        <i class="text-icon"></i>
                        I recommend recommending Youcao to other companies that want to outsource their salary... It is important to have someone who can work closely with us and adapt to change.
                        <i class="text-icon right"></i>
                        </span>
                  </div>
                  <div class="warper-img">
                    <img src="../assets/images/Education.png">
                    <span>Nord Anglia Education</span>
                  </div>
                </div>
                <div class="swiper-slide Cascading-text">
                  <div class="text-content">
                    <span>
                        <i class="text-icon"></i>
                        Youcai Bole payroll outsourcing service eliminates this manual management, providing more time and a more cost-effective solution. 
                        <i class="text-icon right"></i>
                    </span>
                  </div>
                  <div class="warper-img">
                    <img src="../assets/images/Emirates.png">
                    <span>Emirates</span>
                  </div>
                </div>
              </div>
          </div> -->
          <div class="workplace">
            <div class="left-images"></div>
            <div class="right-textbg">
              <h2 class="text-center">Pak Lok Elite Headhunting Consultant Limited</h2>
              <p class="">Pak Lok Elite Headhunting Consultant Limited is a leading recruitment. We also provide payroll outsourcing service and supports 15 countries in the Asia Pacific region. If you would like to develop a team in Asia or are interested in exploring the idea of payroll outsourcing and recruitment, please feel free to contact us.</p>
            </div>
          </div>
      </div>
    </section>
    <section>
        <div class="container-wrapper">
          <div class="text-center">
            <h1>KEEP IN TOUCH</h1>
            <form>
              <div class="form-item">
                <div class="form-list">
                  <p>Your name</p>
                  <input type="text" v-model="formMess.name">
                </div>
                <div class="form-list">
                  <p>Email</p>
                  <input type="text" v-model="formMess.email">
                </div>
                <div class="form-list" style="width:100%;margin-right:0;">
                  <p>country</p>
                  <input type="text" v-model="formMess.country">
                </div>
                <!-- <div class="form-list">
                  <p>Query type</p>
                  <input type="text" v-model="formMess.queerytype">
                </div> -->
                <div class="form-list problems">
                  <p>Suggestions</p>
                  <textarea v-model="formMess.problems"></textarea>
                </div>
                <div class="Submission">
                  <p>Submission Terms: By clicking "Submit", you agree to have read and accept our Terms and Conditions and Privacy Policy.</p>
                </div>
                <div class="form-list btn-center">
                  <a href="javascript:;" @click="onSubmit()" class="btn-submit">submit</a>
                </div>
              </div>
            </form>
          </div>
        </div>
    </section>
    <Footer-Share></Footer-Share>
  </div>
</template>

<script>
// import axios from 'axios';
 
import NavContent from "./NavContent";
import FooterShare from "./FooterShare";
export default {
  name: "CaseStudies",
  components: {
    NavContent,
    FooterShare
  },
  data() {
    return {
      formMess: {
        name: '',
        email: '',
        country: '',
        queerytype: '',
        problems: ''
      },
      checkdata:[
            {
                inspect: "", // 待检测的字段
                msg: '姓名', // 空值返回的提示
            },
            // {
            //     inspect: "",
            //     msg: '手机号',
            //     reg: '^[1][3,4,5,7,8][0-9]{9}$'
            // },
            {
                inspect: "",
                msg: '邮箱',
                reg: '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
            },
            {
                inspect: "", // 待检测的字段
                msg: '城市', // 空值返回的提示
            },
            {
                inspect: "", // 待检测的字段
                msg: '类型', // 空值返回的提示
            },
            {
                inspect: "", // 待检测的字段
                msg: '其他问题', // 空值返回的提示
            }
        ]
    };
  },
   methods: {
    onSubmit() {
      /* json格式提交： */
      // let formData = JSON.stringify(this.formMess);
 
      /* formData格式提交： */
      let formData = new FormData();
      for(var key in this.formMess){
        formData.append(key,this.formMess[key]);
      }
    axios({
	    method:"post",
	    url:"xxxxxxx",
	    headers: {
		  "Content-Type": "multipart/form-data"
	    },
	    withCredentials:true,
	    data:formData
	  }).then((res)=>{
            console.log(res);
        });
    }
  }
};
</script>
