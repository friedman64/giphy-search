<template>
    <div class="gif">
        <img class="gif__image" :src="gif.images.original.url" alt="gif">
    </div>
</template>

<script>
    export default  {
        name: 'gif',
        props:
            ['gif']
    }
</script>

<style lang="scss" scoped>
    .gif__image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>