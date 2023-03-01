<script>
export default {
  computed: {
    currentYear() {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        © Oplyst International, LLC {{ currentYear }}.
        © Ruud Salym Erie {{ currentYear }}.
      
      Made with
      <a href="https://www.nuxtjs.org">NuxtJS</a> 
    </p>
    </div>
  </footer>
</template>

<style lang="scss">
/*
@import '../styles/_settings.scss';

.footer {
  text-align: center;
  border-top: 2px solid $c-border;
} */
</style>