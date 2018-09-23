<template>
    <div class="gif">
        <router-link :to="'/gif'+'?id='+gif.id">
            <img class="gif__image" :src="gif.images.fixed_width_small.url" alt="gif">
        </router-link>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default  {
        name: 'gif',
        props:
             ['gif'],
        watch: {
            gif: function () {
              $(this.$el).fadeOut(0).fadeIn(300);
            }
        },
        created() {
         //   $('.gif').fadeIn();
        }
    }
</script>

<style lang="scss" scoped>

    .gif {
       // display: none;
        width: 25%;
        height: 200px;
        padding: 15px;
        box-sizing: border-box;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 50%;
        }
    }

    .gif__image {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
        transition: all 0.3s;
        box-shadow: 0 0 4px 0px rgba(0,0,0,0.4);

        &:hover {
            @media (min-width: 990px) {
                border-radius: 0;
                box-shadow: 0 0 18px 0px rgba(0,0,0,0.4);
                transform: scale(1.4);
            }
        }
    }
</style>