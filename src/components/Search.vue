<template>
  <div class="container">
    <div class="search">
      <div class="logo">
        <router-link to="/">
          <img src="assets/logo.png" alt="logo">
        </router-link>
      </div>
      <input type="text" placeholder="Search" v-model="searchInput">
    </div>

    <div class="gifs">
      <gif v-for="(index, key) in gifs" :gif="index" :key="key"></gif>
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
                searchInput: ''
            }
        },
        computed: {
          gifs() {
              return this.$store.getters.getGifs
          }
        },
        methods: {
          fetchGifs(){
              const search = this.searchInput;
              if (search.length > 0) {
                  this.$store.dispatch('fetchGifs', {
                      search
                  })
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
        }
    }
</script>

<style lang="scss" scoped>

  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 30px;
  }

  .search {
    display: flex;
    justify-content: space-between;

    input {
      width: 80%;
      padding: 5px 20px;
      font-size: 21px;
    }
  }

  .logo {
    &:first-child {
      background-color: royalblue;
    }
  }

  .gifs {
 //   display: flex;

    .gif {
      float: left;
      width: 25%;

      .gif__image {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
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
</style>
