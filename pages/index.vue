<template>
  <div class="container">
    <div style="">
      <div class="about-section">
        <img :src="profileImage" alt="Anna Maciejewska - zdjęcie profilowe" class="profile-image">
        <div>
          <h2>
            Cześć!
          </h2>
          <p class="about-me">
            Nazywam się Anna Maciejewska i na co dzień studiuję fizjoterapię w formie jednolitych studiów magisterskich na Akademii Wychowania Fizycznego we Wrocławiu. Interesuję się szeroko pojętą rehabilitacją ruchową, fizjoterapią uroginekologiczną i okołoporodową oraz dietetyką. Kieruję się podejściem holistycznym.  
          </p>
          <div class="hashtag-section">
            <div class="hashtag-item">
              <span class="hashtag">
                #zdrowie
              </span>
            </div>
            <div class="hashtag-item">
              <span class="hashtag">
                #fizjoterapia
              </span>
            </div>
            <div class="hashtag-item">
              <span class="hashtag">
                #sukces
              </span>
            </div>
          </div>
          <div class="citation-section">
            <p class="citation">
              "Ci, którzy myślą, że nie mają czasu na sport, prędzej czy później <br> będą musieli znaleźć czas na chorobę"
            </p>
            <p style="margin-top:10px;font-weight: bold;">
              Edward Stanley
            </p>
          </div>
        </div>
      </div>
      <div class="posts-section">
        <h2 style="color:#526488;" id="posty">
          Posty:
        </h2>
        <div v-for="post in posts" :key="post.attributes.title" class="posts-list">
          <h2 class="post-title-h2">
            <nuxt-link :to="'/blog' + post.attributes.slug" class="post-title">
              {{post.attributes.title}}
            </nuxt-link>
          </h2>

          <p style="margin-top: 6px;font-size: 12px;color: #526488;">
            {{ post.attributes.date }}
          </p>
              
          <p style="padding-top: 10px;color: #526488;">
            {{ post.attributes.short }}
          </p>

          <p style="padding-top: 14px;">
            <nuxt-link :to="'/blog' + post.attributes.slug" class="read-more">
              Czytaj więcej
            </nuxt-link>
          </p>
        </div>
      </div>
      <div class="contact-section">
        <h2 style="color:#526488;">
          Kontakt
        </h2>
        <div style="margin-top: 26px;">
          <a href="mailto:maciejewska2606@gmail.com" style="color: #f06292;text-decoration: none;padding-top: 20px;">
            maciejewska2606@gmail.com
          </a>
        </div>
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
      imports.sort((a,b) => 
        {return b.attributes.number - a.attributes.number }
      )
      return { posts: imports }
    },
    data() {
      return {
        profileImage
      }
    },
    head() {
      return {
        title: 'fizjonaturalnie.pl | Anna Maciejewska',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Zapraszam do śledzenia mojej strony internetowej. Obserwuj bieżące wpisy w temacie zdrowia i fizjoterapii.'
          },
          {
            name: 'keywords',
            content: 'fizjoterapia, fitness, sport, zdrowie, blog'
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: 'fizjonaturalnie.pl | Anna Maciejewska'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://fizjonaturalnie.pl'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'Zapraszam na moją stronę fizjonaturalnie.pl - jest tutaj blog poruszający tematykę fizjoterapii, zdrowia i sportu.'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://fizjonaturalnie.pl/fizjonaturalnie-blog-logo.PNG'
          },
          {
            hid: 'twitter:image',
            property: 'twitter:image',
            content: 'https://fizjonaturalnie.pl/fizjonaturalnie-blog-logo.PNG'
          }
        ]
      }
    }
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
.posts-list {
  margin-top: 30px;
  padding-bottom: 28px;
  border-bottom: 1px solid #eaeaea;
}
.posts-list:last-child {
  border-bottom: none;
  margin-bottom: 0;
}
.hashtag {
  font-size: 24px;
  color: #3399ff;
  font-style: italic;
  transition: letter-spacing 0.5s ease;
  cursor: default;
  letter-spacing: 1px;
}
.hashtag:hover {
  letter-spacing: 2px;
  transition: letter-spacing 0.5s ease;
}
.citation-section {
  margin-top: 80px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  padding-top: 14px;
  padding-bottom: 14px;
}
.citation {
  font-size: 24px;
  font-style: italic;
}
.post-title {
  color: #f06292;
  text-decoration:none;
  transition: color 0.2s ease;
}
.post-title:hover {
  color: #3399ff;
  transition: color 0.2s ease;
}
.read-more {
  color: #f06292;text-decoration: none;
  transition: color 0.2s ease;
}
.read-more:hover {
  color: #3399ff;
  transition: color 0.2s ease;
}
.contact-section {
  margin-bottom: 80px;
  text-align: center;
}
.hashtag-item {
  width: 33.33%;text-align:center;
}
.hashtag-section {
  display:flex;margin-top:60px;
}
.social-icons {
  color:#000;font-size:24px;margin-left:10px;margin-right:10px;
}
.social-icons:hover {
  color: #808080;
  transition: color 0.3s ease;
}

@media only screen and (max-width: 960px) {
  .container {
    margin-top: 40px;
    margin-left: 25px;
    margin-right: 25px;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .profile-image {
    width: 100%;
  }
  .hashtag-section {
    display: block;
  }
  .hashtag-item {
    width: 100%;
  }
  .hashtag-item:nth-child(1), .hashtag-item:nth-child(2) {
    margin-bottom: 10px;
  }
  .post-title-h2 {
    font-size: 20px;
  }
  .citation {
    font-size: 20px;
  }
  .citation br {
    display: none;
  }
  .posts-section {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .contact-section {
    margin-top: 60px;
    margin-bottom: 40px;
  }
}
</style>
