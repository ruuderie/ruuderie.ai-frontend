<script setup>

</script>

<template>
    <Html>
        <Head>
            <Title>RuudErie.ai:  </Title>
            <Link rel="preconnect" href="https://fonts.googleapis.com"/>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"/>        
        </Head>
    </Html>

    <NuxtLayout>
        <section class="container is-small">
        <nuxt-img class="img" 
                    src="../public/salym.eth_bald_black_man_as_a_young_aristocrat_egypt_architectu_4eb25135-26f3-488d-bad0-07ebdfd6f5c4.png"
                    alt="Domain of Prosperity" 
                    />
        </section >
        <section id="test" class="hero is-medium">
            <div class="hero-body">
                <p class="title">
                    Bridging the gap between technology and successful outcomes.
                </p>
            </div>
        </section>

        <section class="container is-medium">
            <div class="columns is-mobile is-desktop">
                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="card is-small">
                        <div class="card-content">
                            <p class="title">
                            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                            </p>
                            <p class="subtitle">
                            Jeff Atwood
                            </p>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item">
                            <span>
                                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                            </span>
                            </p>
                            <p class="card-footer-item">
                            <span>
                                Share on <a href="#">Facebook</a>
                            </span>
                            </p>
                        </footer>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container is-medium">
            <div class="columns is-mobile is-desktop">
                <div class="column is-one-third">
                    <Card
                        type="quote"
                        quote="There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
                        quote-author="Jeff Atwood"
                    />
                </div>
                <div class="column is-one-third">
                    <Card
                        type="image"
                    />
                </div>
                <div class="column is-one-third">
                    <Card
                        type="quote"
                        quote="There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
                        quote-author="Jeff Atwood"
                    />
                </div>
            </div>
            </section>
    </NuxtLayout>

</template>

<style lang="scss">

</style>
