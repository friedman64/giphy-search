<template>
    <div class="container">
        <div class="single-gif-page">
            <div v-if="gifInfo.images" class="gif-wrapper">
                <img :src="gifInfo.images.original.url" alt="gif">
            </div>
            <div v-else>
                Something get wrong...
            </div>
            <div v-if="gifInfo.username" class="user">
                <a :href="gifInfo.user.profile_url" target="_blank">
                    <img :src="gifInfo.user.avatar_url" class="user__avatar" alt="avatar">
                    <div>{{gifInfo.user.display_name}}</div>
                </a>

            </div>
            <div class="user" v-else-if="gifInfo" >
                No information about user...
            </div>

            <router-link class="button button--back" to="/">Back to search page</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SGPage',
        computed: {
          gifInfo(){
              return this.$store.getters.getGifInfo
          }
        },
        created: function(){
            let url = new URL(window.location.href);
            let id = url.searchParams.get("id");

            this.$store.dispatch('fetchGifInfo', {
                id
            })
        }
    }
</script>

<style lang="scss" scoped>

    .single-gif-page {
        display: flex;
        flex-direction: column;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 30px;
    }

    .gif-wrapper {
        width: 100%;
        max-width: 700px;
        height: 500px;
        margin: 0 auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .user {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .user__avatar {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    .button {
        padding: 15px;
        text-decoration: none;
        transition: all 0.3s;
    }

    .button--back {
        max-width: 200px;
        margin: 30px auto 30px;
        border: 1px solid #ccc;
        border-radius: 4px;

        &:before {
            content: '←';
        }

        &:hover {
            background-color: aliceblue;
        }
    }
</style>