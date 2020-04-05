<template>
  <div class="container">
    <div style="">
      <div class="about-section">
        <img :src="profileImage" alt="" class="profile-image">
        <div>
          <h2>Cześć!</h2>
          <p class="about-me">
            Nazywam się Anna Maciejewska i na co dzień studiuję fizjoterapię 
            w formie jednolitych studiów magisterskich na Akademii Wychowania Fizycznego 
            we Wrocławiu. W przyszłości chcę specjalizować się w uroginekologii. 
            Bardzo lubię czytać książki o różnej tematyce. Oprócz tego pracuję w jednym z punktów
            sieci Yves Rocher, a dzięki temu rozwijam swoje zainteresowania w tematyce roślinnej
            pielęgnacji ciała.
          </p>
          <div style="display:flex;margin-top:60px;">
            <div style="width: 33.33%;text-align:center;">
               <span class="hashtag">#fizjoterapia</span>
            </div>
            <div style="width: 33.33%;text-align:center;">
              <span class="hashtag">#zdrowie</span>
            </div>
            <div style="width: 33.33%;text-align:center;">
              <span class="hashtag">#fitness</span>
            </div>
          </div>
        </div>
      </div>
      <div class="posts-section">
        <h2 style="color:#526488;">Posty:</h2>
        <div v-for="post in posts" :key="post.attributes.title" style="margin-top: 30px;">
          <h2>
            <nuxt-link :to="'/blog' + post.attributes.slug" style="color: #f06292;text-decoration:none;">
              {{post.attributes.title}}
            </nuxt-link>
          </h2>
              
          <p style="padding-top: 10px;color: #526488;">
            {{ post.attributes.short }}
          </p>

          <p style="padding-top: 14px;">
            <nuxt-link :to="'/blog' + post.attributes.slug" style="color: #f06292;text-decoration: none;">
              Czytaj więcej
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import profileImage from './../assets/images/hero.jpg'

  export default {
    async asyncData() {
      const resolve = await require.context('~/content/', true, /\.md$/)
      let imports = resolve.keys().map((key) => resolve(key))
      // sort by date
    //   imports.sort((a, b) =>
    //     moment(b.attributes.date, 'DD/MM/YYYY').diff(moment(a.attributes.date, 'DD/MM/YYYY'))
    //   )
        console.log(imports)
      return { posts: imports }
    },
    data() {
      return {
        profileImage
      }
    },
  }
</script>

<style>
body {
  background-color: #fafafa;
}
.container {
  margin: 0 auto;
  max-width: 800px;
  margin-top: 80px;
}
.about-section {
  text-align: center;
  padding: 10px;
  color: #526488;
}
.about-me {
  letter-spacing: 1px;
  line-height: 1.8;
  padding-top: 20px;
}
.profile-image {
  max-width: 440px;
  margin-bottom: 40px;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.posts-section {
  margin-top: 80px;
  margin-bottom: 80px;
}
.hashtag {
  font-size: 24px;
  color: #3399ff;
  font-style: italic;
}
</style>
