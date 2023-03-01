<script setup>
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/"> RuudErie.ai </NuxtLink>
    </div>
    <NuxtLink role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarStandard">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </NuxtLink>

    <div id="navbarStandard" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <NuxtLink to="/" class="navbar-item"> Home </NuxtLink>
        <NuxtLink to="/blog" class="navbar-item"> Tech </NuxtLink>
        <NuxtLink to="/blog" class="navbar-item"> Culture </NuxtLink>
        <NuxtLink to="/blog" class="navbar-item"> Hire Me </NuxtLink>
        <NuxtLink to="/about" class="navbar-item"> About </NuxtLink>
        <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>

        </div>
      </div>
  </nav>
</template>

<style></style>
