<script setup>
import { useRouter } from 'vue-router';
const props = defineProps   ({
        type: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
            required: false,
        },
        quoteAuthor: {
            type: String,
            required: false,
        },
        socialMediaPlatform: {
            type: String,
            required: false,
        },
        socialLink: {
            type: String,
            required: false,
        },
        imageLink: {
            type: String,
            required: false,
            default: ''
        },
        imageDescription: {
            type: String,
            required: false,
            default: 'Placeholder image'
        },
    });


</script>

<template>
    <!--v-if to activate or deactivate this segment --> 

    <div v-if="type === 'quote'" class="card is-small is-mobile">
        <div class="card-content">
            <p class="title">
            {{ quote }}
            </p>
            <p class="subtitle">
            {{ quoteAuthor}}
            </p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
            <span>
                <Link href="{{socialLink}}">{{socialMediaPlatform}}</Link>
            </span>
            </p>
        </footer>
    </div>
    <div v-else>
        <div class="card is-mobile is-small">
            <div class="card-image">
                <figure class="image is-4by3">
                <NuxtImg src="{{ imageLink }}" />
                </figure>
            </div>
        </div>
    </div>
</template>

<style>
</style>