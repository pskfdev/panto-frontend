<script setup>
import { RouterLink } from "vue-router";

import BgSubpage from "@/components/layout/header/BgSubpage.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconShield from "@/components/icons/IconShield.vue";
import CardText from "@/components/ui/CardText.vue";
</script>

<template>
  <main>
    <BgSubpage title="About Page" />

    <!-- Section 1 -->
    <section class="container mx-auto mt-7 py-10">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 p-5 md:p-20">
        <div>
          <img
            src="/src/assets/promote-sec1.png"
            alt="Shoes"
            class="object-cover h-96 w-full rounded-2xl shadow-xl"
          />
        </div>

        <div class="w-full space-y-5">
          <h3 class="text-warning italic uppercase tracking-widest">
            Experiences
          </h3>
          <h1>We Provide You The Best Experience</h1>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>

          <div class="flex my-5 flex-col md:flex-row lg:space-x-2">
            <div class="p-2 mt-2 rounded-lg flex items-center w-fit">
              <div class="p-3">
                <IconMail />
              </div>
              <div class="ms-3">
                <p class="my-auto">
                  <span class="font-bold">Message</span>
                  <br />
                  subport@panto.com
                </p>
              </div>
            </div>
            <br />

            <div class="p-2 mt-2 rounded-lg flex items-center w-fit">
              <div class="p-3">
                <IconPhone />
              </div>
              <div class="ms-3">
                <p class="my-auto">
                  <span class="font-bold">Contact Us</span>
                  <br />
                  +01 123 456 789
                </p>
              </div>
            </div>
          </div>

          <RouterLink
            role="button"
            to="/shop"
            class="btn btn-neutral text-white"
          >
            Shop now
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="bg-[#F7F7F7] py-20">
      <div
        class="w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 p-5"
      >
        <div class="w-full space-y-5">
          <h3 class="text-warning italic uppercase tracking-widest">
            Why choose us ?
          </h3>
          <h1>Very Serious Materials For Making Furniture.</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown.
          </p>
          <div>
            <p class="p-3 bg-[#EEEEEE] rounded-full text-warning font-bold w-fit">
              Luxury facilities
            </p>
            <p class="w-3/4">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
          <div>
            <p class="p-3 bg-[#EEEEEE] rounded-full text-warning font-bold w-fit">
              Affordable Price
            </p>
            <p class="w-3/4">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
        </div>

        <div>
          <img
            src="/src/assets/promote-sec2-1.png"
            alt="Shoes"
            class="object-cover w-full rounded-2xl shadow-xl h-96"
          />
        </div>
      </div>

      <!-- Card Text -->
      <div class="my-20 flex flex-wrap justify-center">
        <CardText
          title="Return Policy"
          des="Simply dummy text of the printintypesetting industry."
        >
          <IconCart />
        </CardText>
        <CardText
          title="100% Fresh"
          des="Simply dummy text of the printintypesetting industry."
        >
          <IconShield />
        </CardText>
        <CardText
          title="Support 24/7"
          des="Simply dummy text of the printintypesetting industry."
        >
          <IconPhone />
        </CardText>
        <CardText
          title="Secured Payment"
          des="Simply dummy text of the printintypesetting industry."
        >
          <IconShield />
        </CardText>
      </div>
    </section>
  </main>
</template>

<style></style>
