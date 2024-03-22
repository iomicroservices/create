<script setup lang="ts">
import { pages, themes } from '../../utils/data'

const selectedTheme = ref()

const getPreferredTheme = () => {
    if (process.client) {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'light'
    }
    return 'light'
}

const setTheme = (theme: any) => {
    if (process.client) {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }
}

const toggleTheme = (index: number) => {
    themes.forEach((theme, i) => {
        theme.isActive = i === index;
    });
    const selectedValue = themes[index].value;
    if (process.client) {
        selectedTheme.value = selectedValue;
        localStorage.setItem('theme', selectedValue);
        setTheme(selectedValue);
    }
}

onMounted(() => {
    if (process.client) {
        setTheme(getPreferredTheme())
        window.addEventListener('DOMContentLoaded', () => {
            var el = document.querySelector('.theme-icon-active');
            if (el !== null) {
                const showActiveTheme = (theme: string) => {
                    const activeThemeIcon = document.querySelector('.theme-icon-active use');
                    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
                    const svgOfActiveBtn = btnToActive?.querySelector('.mode-switch use')?.getAttribute('href') ?? '';

                    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                        element.classList.remove('active');
                    });

                    if (btnToActive !== null && svgOfActiveBtn !== null) {
                        btnToActive.classList.add('active');
                        activeThemeIcon?.setAttribute('href', svgOfActiveBtn);
                    }
                };

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                    const storedTheme = localStorage.getItem('theme');
                    if (storedTheme !== 'light' && storedTheme !== 'dark') {
                        setTheme(getPreferredTheme());
                    }
                });

                showActiveTheme(getPreferredTheme());

                document.querySelectorAll('[data-bs-theme-value]')
                    .forEach(toggle => {
                        toggle.addEventListener('click', () => {
                            const theme = toggle.getAttribute('data-bs-theme-value');
                            if (typeof theme === 'string') {
                                showActiveTheme(theme);
                            }
                        });
                    });
            }
        });
    }
});
</script>

<template>
    <header class="header-sticky sticky-top">
        <nav class="navbar navbar-expand-xl">
            <div class="container p-4">
                <NuxtLink to="/" class="navbar-brand py-2">
                    <img class="navbar-brand-item" src="~/assets/images/logo.svg" alt="logo">
                </NuxtLink>

                <div class="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
      
                        <li class="nav-item" v-for="page, index in pages" :key="index">
                            <NuxtLink class="nav-link" :to="page.path">
                                {{ page.name }}
                            </NuxtLink>
                         </li>
                    </ul>
                </div>

                <li class="nav-item dropdown dropdown-animation" style="list-style: none;">
					<button class="btn btn-link mb-0 px-2 lh-1" id="bd-theme" type="button" aria-expanded="false"
						data-bs-toggle="dropdown" data-bs-display="static">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
							class="bi bi-circle-half theme-icon-active fill-mode fa-fw" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
							<use href="#"></use>
						</svg>
					</button>

                    <ul class="dropdown-menu min-w-auto dropdown-menu-end dropdown-hover" aria-labelledby="bd-theme">
                        <li class="mb-1" v-for="(theme, index) in themes" :key="index">
                            <button type="button" class="dropdown-item d-flex align-items-center" 
                                :class="{ 'active': theme.value ===  selectedTheme}"
                                @click="toggleTheme(index)">
                                <svg width="16" height="16" fill="currentColor"
                                    class="bi bi-brightness-high-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                    <path :d="theme.path_1" />
                                    <use href="#"></use>
                                </svg>
                                {{ theme.name }}
                            </button>
                        </li>
                    </ul>
				</li>

                <ul class="nav align-items-center dropdown-hover ms-sm-2">
        
                    <li class="nav-item d-none d-sm-block">
                        <a href="#get-started" class="btn btn-sm btn-warning mb-0" role="button">Get started 🚀</a>
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

<style lang="scss" scoped></style>