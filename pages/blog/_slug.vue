<template>
  <div class="container-post">
    <nuxt-link to="/" style="text-decoration:none;color: #3399ff;letter-spacing: 0.4px;">
      Strona główna
    </nuxt-link>
    <div class="post-head" style="margin-top: 20px;">
      <h1 class="title">
        {{post.attributes.title}}
      </h1>
      <div class="date">
          {{post.attributes.date}}
      </div>
      <div class="icon-bar">
        <div style="margin-top: 26px;height:40px;">
          <a href="https://www.linkedin.com/in/anna-maciejewska-7847b0163/" target="_blank" class="social-icons">
            <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
          </a>
          <a href="https://www.instagram.com/fizjonaturalnie/" target="_blank" class="social-icons">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
          <a href="https://www.facebook.com/fizjonaturalnie/" target="_blank" class="social-icons">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </a>
        </div>
      </div>
      <div style="text-align: center;margin-top:20px;margin-bottom: 20px;">
         <img :src="post.attributes.image" v-if="post.attributes.image" style="width: 100%;">
      </div>
      <div>
        <!-- <div class="tags">
          <span v-for="tag in post.attributes.tags" :key="tag.id">
            <nuxt-link :to="'/tag/'+tag">
              \#{{tag}}
            </nuxt-link>
          </span>
        </div> -->
      </div>
    </div>
    <div class="content" v-html="post.html"></div>
    <div class="other-posts-button-section">
      <nuxt-link to="/#posty" class="other-posts-button">
        Inne posty
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      let post = await import(`~/content/${params.slug}.md`);
      return { post }
    },
    head() {
      return {
        title: this.post.attributes.title + ' | fizjonaturalnie.pl',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.attributes.short
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.post.attributes.title + ' | fizjonaturalnie.pl'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.post.attributes.short
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://fizjonaturalnie.pl/' + this.post.attributes.image
          }
        ],
        link: [{
          rel: 'canonical',
          href: 'https://fizjonaturalnie.pl/blog' + this.post.attributes.slug
        }]
      }
    }
  }
</script>

<style>
.container-post {
  margin: auto;
  max-width: 740px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.content {
  letter-spacing: 0.4px;
  line-height: 1.6;
  font-size: 16.4px;
}
.content ul {
  list-style: none;
}
.content ul li {
  position: relative;
}
.content ul li::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: #f06292;
  position: absolute;
  top: 10px;
  left: -18px;
}
.content a {
  color: #f06292;
  text-decoration: none;
  transition: color 0.2s ease;
}
.content a:hover {
  color: #3399ff;
  transition: color 0.2s ease;
}
.content p img {
  max-width: 740px;
}
.title {
  text-align: left;
}
.date {
  margin-bottom: 20px;
  margin-top: 10px;
  color: #808080;
  font-size: 14px;
  font-weight: bold;
}
.other-posts-button-section {
  margin-top: 80px;
  text-align: center;
}
.other-posts-button {
  text-decoration: none;
  color: #f06292;
  letter-spacing: 1px;
  transition: letter-spacing 0.2s ease;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba( 0, 0, 0, 0.19) !important;
}
.other-posts-button:hover {
  opacity: 0.7;
  letter-spacing: 1.2px;
  transition: letter-spacing 0.2s ease;
}

.social-icons {
  color:#000;font-size:24px;margin-left:10px;margin-right:10px;
}
.social-icons:hover {
  color: #808080;
  transition: color 0.3s ease;
}

.icon-bar {
  position: fixed;
  top: 50%;
  transform: translateY(-100%);
  left: 10px;
}
.icon-bar a {
  display: block;
  padding: 4px;
}

@media only screen and (max-width: 890px) {
  .icon-bar {
    position: relative;
    left: 0;
    text-align: center;
    transform: translateY(0);
  }
  .icon-bar a {
    display: inline;
  }
}

@media only screen and (max-width: 800px) {
  .container-post {
    padding-left: 20px;
    padding-right: 20px;
  }
} 
@media only screen and (max-width: 600px) {
  .container-post {
    padding-left: 10px;
    padding-right: 10px;
  }
  .content p img {
    max-width: 100%;
  }
  .title {
    text-align: center;
    font-size: 26px;
  }
  .date {
    text-align: center;
  }
  .other-posts-button-section {
    margin-top: 60px;
  }
}
</style>