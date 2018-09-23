<template>
  <div class="container">
    <div class="search">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="logo">
        </router-link>
      </div>
      <input type="text" placeholder="Search" v-model="searchInput">
    </div>

    <div v-if="gifs[0]">
      <paginate name="gifs" :list="gifs" :per="12" class="gifs">

        <gif v-for="(index, key) in paginated('gifs')" :gif="index" :key="key"></gif>

      </paginate>

      <paginate-links v-if="shownPaginate" for="gifs" :limit="2" :show-step-links="true"></paginate-links>
    </div>
    <div v-else>
      <div v-if="gif404.images" class="error-img-wrapper">
        <img :src="gif404.images.fixed_width.url" alt="Not_found">
        <span>Gifs not found</span>
      </div>
    </div>
  </div>
</template>

<script>
    import gif from './gif.vue'


    export default {
        name: 'Search',
        components: {
            gif
        },
        data () {
            return {
                searchInput: '',
                paginate: ['gifs'],
                shownPaginate: true
            }
        },
        computed: {
            gifs: function() {
                return this.$store.getters.getGifs
            },
            gif404: function() {
                return this.$store.getters.getRand404
            }
        },
        methods: {
            fetchGifs(){
                const search = this.searchInput
                if (search.length > 0) {
                    this.$store.dispatch('fetchGifs', {
                        search
                    })
                } else {
                    this.$store.dispatch('fetchRandomGifs');
                }
            }
        },
        watch: {
            searchInput: {
                handler: function () {
                    this.fetchGifs()
                },
                deep: true
            }
        },
        mounted: function(){
            this.$store.dispatch('fetchRandom404');
            this.$store.dispatch('fetchRandomGifs');
        }
    }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 30px;
    min-height: 100vh;
  }

  .search {
    display: flex;
    justify-content: space-between;

    input {
      width: 80%;
      padding: 5px 20px;
      font-size: 21px;
      border: 1px solid #cccccc;
      border-radius: 3px;
    }
  }

  .logo {
    width: 100px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .gifs {
    display: flex;
    flex-wrap: wrap;
    transition: all 0.5s;
    margin: 0 -15px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

  .row {
    margin: 0 -15px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .paginate-links {
    font-size: 22px !important;

    a {
      font-size: 22px;
    }
  }

  .error-img-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    height: 300px;
    margin: 30px auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 30px;
    }

    span {
      margin-bottom: 30px;
      font-size: 22px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }


</style>
