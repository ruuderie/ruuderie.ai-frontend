<script setup>

</script>

<template>
    <main>
      <Head>
        <Title> {{ post.title }} </Title>
        <Meta name="description" :content="post.summary" />
        <Meta property="og:title" :content="post.title" />
        <Meta name="twitter:title" :content="post.title" />
        <Meta
          property="og:description"
          :content="post.summary"
        />
        <Meta
          name="twitter:description"
          :content="post.summary"
        />
        <Meta
          property="og:image"
          :content="post.featured_image"
        />
        <Meta
          property="twitter:image"
          :content="post.featured_image"
        />
      </Head>
      
    </main>
  </template>

<style></style>