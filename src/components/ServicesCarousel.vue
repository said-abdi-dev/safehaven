<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-6 sm:px-8 max-w-7xl">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
      <b-carousel
        :progress="progress"
        :progress-type="progressType"
        :autoplay="true"
        :autoplay-interval="5000"
        :indicator-background="true"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
            <div class="hero-body has-text-centered">
              <h3 class="title text-white text-xl">{{carousel.title}}</h3>
              <p class="subtitle text-white mt-4">{{carousel.description}}</p>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      progress: true,
      progressType: 'is-primary',
      carousels: [
        {
          title: 'Community Support Services',
          description: 'Twins HomeCare offers comprehensive support services including skill maintenance, guidance, and daily living assistance.',
          color: 'grey',
        },
        {
          title: 'Personalized Training',
          description: 'Our training services are tailored to each individual’s needs, focusing on skill-building and community participation.',
          color: 'dark',
        },
        {
          title: 'Crisis Prevention',
          description: 'We provide crisis prevention strategies and support to ensure the safety and well-being of every individual.',
          color: 'primary',
        },
        {
          title: 'Health & Wellness',
          description: 'Promoting health and wellness through personalized plans and community resources to improve quality of life.',
          color: 'info',
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  padding: 3rem 1.5rem;
}

.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2rem;
}

.subtitle {
  font-size: 1.25rem;
}
</style>
