<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-form :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Author',
                title: 'My Awesome Post',
                content: 'Super Amazing, thanks for that!',
                thumbnailLink: 'https://vignette.wikia.nocookie.net/2007scape/images/7/7a/Mage%27s_book_detail.png/revision/latest?cb=20180310083825'
            },

        }
    }
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
