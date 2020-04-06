<template>
  <div class="container-post">
    <nuxt-link to="/" style="text-decoration:none;color: #3399ff;letter-spacing: 0.4px;">
      Strona główna
    </nuxt-link>
    <div class="post-head" style="margin-top: 20px;">
      <h1>
        {{post.attributes.title}}
      </h1>
      <div class="date">
          {{post.attributes.date}}
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
.date {
  margin-bottom: 20px;
  margin-top: 10px;
  color: #808080;
  font-size: 14px;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .container-post {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>