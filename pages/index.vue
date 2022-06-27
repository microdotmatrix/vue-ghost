<template>
  <ul>
    <li v-for="post in posts">
      <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
    </li>
  </ul>
  <nuxt-link :to="{ page: slime }">Slime...</nuxt-link>
</template>

<script>
import { getPosts } from '../api/posts';

  export default {
    async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
  }
</script>
