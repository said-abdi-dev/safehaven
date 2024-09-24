<template>
  <section class="py-24 bg-gray-100">
    <div class="container mx-auto px-6 lg:px-8 max-w-7xl">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Services
      </h2>
      <p class="text-center text-gray-600 mb-16">
        Twins HomeCare is proud to offer home and community-based services in accordance with Minnesota's 245D waiver programs, serving individuals in the Twin Cities area. Our services focus on empowering individuals to live independently in their homes and participate fully in the community.
      </p>

      <!-- Service 2: Individualized Home Support (IHS) -->
      <div class="service-item mb-16 flex flex-col lg:flex-row-reverse items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:ml-8">
          <img :src="require('@/assets/home-care-services-scaled.jpeg')" alt="Individualized Home Support" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Individualized Home Support (IHS)</h4>
          <p class="text-gray-600">
            Services for people who live in their own home or family home that provide support and/or training in the community living service categories listed in the covered services section.
          </p>
          <p class="text-gray-600 mt-2">
            There are three types of IHS:
          </p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Without training.</li>
            <li>With training.</li>
            <li>With family training.</li>
          </ul>
          <p class="text-gray-600 mt-2">
            All types of IHS can be provided in the person’s own home, family’s home, or in community spaces used by the general public, and either in person or remotely.
          </p>
        </div>
      </div>

      <!-- Service 3: Adaptive Skills -->
      <div class="service-item mb-16 flex flex-col lg:flex-row items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
          <img :src="require('@/assets/miquel-parera-gxdctlHPVYk-unsplash.jpg')" alt="Adaptive Skills" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Adaptive Skills</h4>
          <p class="text-gray-600">
            We focus on implementing positive support strategies that encourage self-sufficiency and foster problem-solving skills. Our approach includes specialized support and training to enhance positive behaviors, ultimately reducing or eliminating challenging behaviors. Additionally, we emphasize the importance of sensory and motor development as key components in acquiring essential functional skills.
          </p>
        </div>
      </div>

      <!-- Service 4: Health, Safety, and Wellness -->
      <div class="service-item mb-16 flex flex-col lg:flex-row-reverse items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:ml-8">
          <img :src="require('@/assets/gabin-vallet-J154nEkpzlQ-unsplash.jpg')" alt="Health, Safety, and Wellness" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Health, Safety, and Wellness</h4>
          <p class="text-gray-600">
            We work closely with individuals to coordinate comprehensive health care, including physical, mental, and chemical support, along with meaningful activities and social services. Our training and support empower individuals to complete self-care tasks, including activities of daily living, while also providing health services and fostering resilience. We are dedicated to helping individuals design and achieve personalized strategies to meet their health, safety, and wellness goals.
          </p>
        </div>
      </div>

      <!-- Service 5: Crisis Respite -->
      <div class="service-item mb-16 flex flex-col lg:flex-row items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
          <img :src="require('@/assets/AdobeStock_340529279-scaled.jpeg.webp')" alt="Crisis Respite" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Crisis Respite</h4>
          <p class="text-gray-600">
            Twins HomeCare offers crisis respite services, providing short-term behavioral or medical intervention to protect individuals and their families while offering relief and support to caregivers. Our specialized staff, trained in crisis prevention, intervention, and resolution, are highly qualified to handle these situations with the expertise outlined in our provider standards.
          </p>
        </div>
      </div>

      <!-- Service 6: Community Participation -->
      <div class="service-item mb-16 flex flex-col lg:flex-row-reverse items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:ml-8">
          <img :src="require('@/assets/vonecia-carswell-0aMMMUjiiEQ-unsplash.jpg')" alt="Community Participation" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Community Participation</h4>
          <p class="text-gray-600">
            Twins HomeCare supports individuals in developing the skills needed for community mobility and pedestrian safety, ensuring they can navigate their surroundings safely. Our services include helping individuals access and use community resources, enhancing their safety and awareness in public spaces.
          </p>
          <p class="text-gray-600 mt-2">
            We also focus on building informal support networks, improving interpersonal communication skills, and planning leisure, recreation, and socialization activities. Additionally, we provide skill-building to meet transportation needs, empowering individuals to move confidently within their communities.
          </p>
        </div>
      </div>

      <!-- Service 7: Household Management -->
      <div class="service-item mb-16 flex flex-col lg:flex-row items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
          <img :src="require('@/assets/a50f8bf084158a51e1678a26a36d0e3f.png')" alt="Household Management" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Household Management</h4>
          <p class="text-gray-600">
            We provide cueing, guidance, and instructional support to help individuals manage routine household care and maintenance, ensuring they have the necessary safety knowledge and skills.
          </p>
          <p class="text-gray-600 mt-2">
            Our services include tenancy support and advocacy, as well as training and assistance with budgeting, managing finances, cooking, meal planning, and nutrition.
          </p>
          <p class="text-gray-600 mt-2">
            We also offer guidance in adopting healthy lifestyle practices, completing household chores, and handling personal needs purchasing and minor household maintenance tasks.
          </p>
        </div>
      </div>

      <!-- Service 8: Twins HomeCare Services -->
      <div class="service-item mb-16 flex flex-col lg:flex-row-reverse items-center">
        <div class="service-image lg:w-1/2 mb-6 lg:mb-0 lg:ml-8">
          <img :src="require('@/assets/nathan-anderson-FHiJWoBodrs-unsplash.jpg')" alt="Twins HomeCare Services" class="rounded-lg shadow-lg">
        </div>
        <div class="service-text lg:w-1/2">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Twins HomeCare Services</h4>
          <p class="text-gray-600">
            Twins HomeCare provides comprehensive home care services designed to meet the unique needs of each individual. Our dedicated team works closely with clients and their families to ensure the highest standard of care and support.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
