<template>
  <div class="container-post">
    <nuxt-link to="/" style="text-decoration:none;">
      Strona główna
    </nuxt-link>
    <div class="post-head" style="margin-top: 20px;">
      <h1>
        {{post.attributes.title}}
      </h1>
      <img :src="post.attributes.image" v-if="post.attributes.image">
      <div>
        <div class="date">
          {{post.attributes.date}}
        </div>
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
        title: this.post.attributes.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.post.attributes.short
        }],
        link: [{
          rel: 'canonical',
          href: 'https://derkinzi.de' + this.post.attributes.slug
        }]
      }
    }
  }
</script>

<style>
.container-post {
  margin: auto;
  max-width: 740px;
}
.content {
  letter-spacing: 0.4px;
  line-height: 1.6;
  font-size: 16.4px;
}
.date {
  margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  .container-post {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>