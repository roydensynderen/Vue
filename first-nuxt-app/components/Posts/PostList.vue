<template>
    <section class="post-list">
            <post-preview id="1"
                          :is-admin="isAdmin"
                          thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
                          title="Hello there!"
                          previewText="This is my first post!"/>
            <post-preview id="2"
                          :is-admin="isAdmin"
                          thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
                          title="Hey there!"
                          previewText="This is my second post!"/>
            <post-preview id="3"
                          :is-admin="isAdmin"
                          thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
                          title="Hi there!"
                          previewText="This is my third post!"/>
        </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: false,
    }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

