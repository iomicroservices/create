<script setup lang="ts">
import { pages } from '../../utils/data'
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>


<template>
    <header class="header-sticky sticky-top">
        <nav class="navbar navbar-expand-xl">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand py-2">
                    <img class="navbar-brand-item" src="/assets/images/logo.svg" alt="logo">
                </NuxtLink>

                <div class="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
      
                        <li class="nav-item" v-for="page, index in pages" :key="index">
                            <NuxtLink class="nav-link fw-bold" :to="page.path">
                                {{ page.name }}
                            </NuxtLink>
                         </li>
                    </ul>
                </div>

                <ul class="nav align-items-center dropdown-hover ms-sm-2">
        
                    <li class="nav-item d-none d-sm-block">
                        <a href="/#custom" class="btn btn-sm btn-primary mb-0" role="button">Get started 🚀</a>
                    </li>
                    <li class="nav-item">
                        <button class="navbar-toggler ms-sm-3 p-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
/* Targets the element that has both `header-sticky` and `sticky` classes */
.header-sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

</style>