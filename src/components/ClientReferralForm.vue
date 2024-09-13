<template>
  <section class="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6 lg:px-8 max-w-4xl bg-white p-8 rounded-lg shadow-sm">
      <!-- Heading -->
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Client Referral Form</h2>

      <!-- Typeform Embed -->
      <div class="typeform-container">
        <div data-tf-live="01J7MTT5XGZ237TSWSG4WETNFC"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Load the Typeform embed script dynamically
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
/* Minimalist container styling */
.container {
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
}

/* Simple Typeform embed container */
.typeform-container {
  width: 100%;
  height: 500px; /* Adjust as needed */
  border-radius: 8px;
}

/* Subtle background color */
section {
  background-color: #f9fafb;
  padding: 4rem 0;
}

h2 {
  font-size: 2rem;
  color: #333;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .typeform-container {
    height: 400px; /* Adjust form height for smaller screens */
  }
}
</style>
