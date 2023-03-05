<script setup>
import { ref, onMounted } from 'vue';
const socialMediaLinksSample = ref([
    {
        name: 'Twitter',
        url: 'https://twitter.com/codinghorror/status/506010907021828096'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ruuderie/'
    }]);
</script>

<template>
    <Html>
        <Head>
            <Title>Ruud Erie 💻💪💯 </Title>
            <Link rel="preconnect" href="https://fonts.googleapis.com"/>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"/>        
        </Head>
    </Html>

    <NuxtLayout>
        <section class="container is-small">
            <!--
        <nuxt-img class="img" 
                    src="../public/salym.eth_bald_black_man_as_a_young_aristocrat_egypt_architectu_4eb25135-26f3-488d-bad0-07ebdfd6f5c4.png"
                    alt="Domain of Prosperity" 
                    />
        -->

        </section >
        <section id="test" class="hero is-large">
            <div class="hero-body">
                <h1 class="title">
                    Ruud Erie
                </h1>
                <h3 class="subtitle">
                    consultant | software engineer | speaker
                </h3>
                <p>
                    <ul>
                        <li>
                            <NuxtLink class="tag" to="https://linkedin.com/in/ruudsalymerie">
                                @ruudsalymerie
                            </NuxtLink>
                        </li>
                    </ul>
                </p>
            </div>
        </section>
        <section class="container is-medium py-6">

            <center>
                <p class="title py-2">
                    Bridging the gap between technology and successful outcomes.
                </p>
                <p class="subtitle py-2">
                    I love building software that solves real problems.
                </p>
                <button class="button is-large is-responsive">
                    Schedule a free discovery call
                </button>
            </center>
                  

        </section>
        <section class="container is-medium py-6">
                    <center>
                        <Icon name="logos:ethereum" class="is-large mx-1"/>
                        <Icon name="logos:ethereum" class="is-large mx-1"/>
                        <Icon name="vscode-icons:file-type-apex" class="is-large"/>
                        <Icon name="vscode-icons:file-type-light-rust" class="is-large mx-1"/>
                        <Icon name="vscode-icons:file-type-python" class="is-large mx-1"/>
                        <Icon name="vscode-icons:file-type-typescript-official" class="is-large mx-1"/>
                        <Icon name="logos:deno" class="is-large mx-1"/>
                        <Icon name="fa6-brands:node" class="is-large mx-1"/>
                        <Icon name="vscode-icons:file-type-vue" class="is-large mx-1"/>
                        <Icon name="logos:nuxt" class="is-large mx-1"/>
                        <Icon name="logos:postgresql" class="is-large mx-1"/>
                        <Icon name="logos:aws" class="is-large mx-1"/>
                    </center>
        </section>
            <span class="mb-2 pb-2"/>
        <section class="section is-medium is-res">
            <center>
            <h1 class="title">Medium section</h1>
            <h2 class="subtitle">
                A simple container to divide your page into 
                <strong>sections</strong>, 
                like the one you're currently reading.
            </h2>
            </center>
        </section>
        <section class="section is-medium is-res">
            <div class="content is-large">
                <center> <h3>Ruud Erie </h3> </center>
                <p>Ruud Erie is a highly respected software architect and engineer who specializes in developing high performance applications that meet rapidly changing consumer demands and business needs. With his deep expertise in software architecture and agile-friendly digital transformation, he is a sought-after consultant who regularly delivers results across the globe.</p>
                <p>Ruud has extensive experience working with top-tier companies on a wide range of projects, including enterprise applications and cloud-based solutions. He is particularly skilled in using enterprise platforms such as Salesforce, AWS, Google Cloud, and Microsoft Azure to deliver optimal results.</p>
                <p>With a proven track record of success, Ruud has held a range of key roles throughout his career, including software engineer, software architect, solution architect, technical manager, project manager, and consultant.</p>
                <p>Whether you need hands-on support or strategic leadership in your software projects, Ruud is an ideal partner. He is available to work with your team in a variety of capacities, from keynotes and consulting to training and more. To learn more about how Ruud can help your organization succeed, schedule a chat with him today.</p>  
            </div>
        </section>
    </NuxtLayout>

    

</template>

<style lang="scss">

</style>
