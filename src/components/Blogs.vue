<template>
  <div>
    <NavContent></NavContent>
    <section class="blogspage-section paddingTB100">
      <div class="container">
        <div class="content-div">
          <div class="post-item">
            <div class="post-header">
              <div class="hs-featured-image-wrapper">
                <a href="javascript:;" class="hs-featured-image-link">
                  <img  src="../assets/images/uploads/blogs1.jpg"  class="hs-featured-image" />
                </a>
              </div>
            </div>
            <div class="post-body clearfix">
              <h2><a href="javascript:;">In Asia, most growing companies have made shocking mistakes.</a></h2>
              <p>The US-China trade war has been shaking the global economy for over a year, causing unrest in businesses around the world. Singapore is no exception to this, seeing an impact to the economy from the US-China trade wars with lowered demands.</p>
            </div>
          </div>
          <div class="post-item">
            <div class="post-header">
              <div class="hs-featured-image-wrapper">
                <a href="javascript:;" class="hs-featured-image-link">
                  <img  src="../assets/images/uploads/blogs2.jpg"  class="hs-featured-image" />
                </a>
              </div>
            </div>
            <div class="post-body clearfix">
              <h2><a href="javascript:;">Best of Two Worlds? An HR Solution Too Good to Be True</a></h2>
              <p>You're the owner of a growing business, and you have an important decision to make, what will you choose?</p>
            </div>
          </div>
          <div class="post-item">
            <div class="post-header">
              <div class="hs-featured-image-wrapper">
                <a href="javascript:;" class="hs-featured-image-link">
                  <img  src="../assets/images/uploads/blogs3.jpg"  class="hs-featured-image" />
                </a>
              </div>
            </div>
            <div class="post-body clearfix">
              <h2><a href="javascript:;">Advice for Graduates: Choosing the Right Internship for You</a></h2>
              <p>This time last year would have felt incredibly different if you’re a recent university graduate. For many, time comes to a standstill after the big ceremony. Your first thought might be ‘how on earth are am I supposed to start my career?’</p>
            </div>
          </div>
          <div class="post-item">
            <div class="post-header">
              <div class="hs-featured-image-wrapper">
                <a href="javascript:;" class="hs-featured-image-link">
                  <img  src="../assets/images/uploads/blogs4.jpg"  class="hs-featured-image" />
                </a>
              </div>
            </div>
            <div class="post-body clearfix">
              <h2><a href="javascript:;">Time Management Skills. How to be More Efficient at Work</a></h2>
              <p>Do you waste time at work? A finding published by Microsoft found that people have a shorter attention span than goldfish, at an average of 8 seconds. Some days, it feels even shorter than that.</p>
            </div>
          </div>
          <div class="loading-more">
            <a href="javascript:;" @click="lade-list" class="loade-btn">lade more</a>
          </div>
        </div>
      </div>
    </section>
    <Footer-Share></Footer-Share>
  </div>
</template>
<script>
import NavContent from "./NavContent";
import FooterShare from "./FooterShare";
export default {
  name: "Blogs",
  components: {
    NavContent,
    FooterShare
  },
  data() {
    return {};
  }
};
</script>