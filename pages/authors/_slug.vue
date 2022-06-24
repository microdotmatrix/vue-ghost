<template>
  <div>
    <h1>{{ author.title }}</h1>
    <p>{{ author.bio }}</p>
  </div>
</template>

<script>
  import { getAuthor } from '/api/authors';

  export default {
    async asyncData ({ params }) {
      const author = await getAuthor(params.query.slug);
      return { author: author }
    }
  }
</script>
