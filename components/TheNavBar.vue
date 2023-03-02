<script setup>
import { ref, onMounted } from 'vue';
let isActive = ref(false);
let showNav = ref(false);
let lastScrollPosition = ref(0);


function toggleMenu (){
  isActive.value = !isActive.value;
  console.log('toggleMenu -[ isActive: ' + isActive.value + '] [showNav: ' + showNav.value + ']');

}
function toggleNav (){
  showNav.value = !showNav.value;
  console.log('toggleMenu -[ isActive: ' + isActive.value + '] [showNav: ' + showNav.value + ']');

}

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/"> RuudErie.ai </NuxtLink>
    </div>
    <NuxtLink role="button" 
    :class="{ 'is-active': isActive }" 
    class="navbar-burger" 
    aria-label="menu" aria-expanded="false" 
    data-target="navbarStandard"
    @click="toggleMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </NuxtLink>

    <div id="navbarStandard" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start"></div>
    <div :class="{ 'is-hidden': !isActive }">
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

      </div>
  </nav>
</template>

<style>
.navbar {
  transition: transform 200ms ease-out;

  &.is-transformed {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
