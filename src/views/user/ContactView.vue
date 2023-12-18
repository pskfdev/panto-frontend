<script setup>
import BgSubpage from "@/components/layout/header/BgSubpage.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
</script>

<template>
  <main>
    <BgSubpage title="Contact Page" />

    <!-- Section 1 -->
    <section class="container mx-auto mt-7 py-10">
      <div
        class="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-30 p-5 md:p-20"
      >
        <div>
          <img
            src="/src/assets/promote-sec2-1.png"
            alt="Shoes"
            class="object-cover h-96 w-full md:w-11/12 rounded-2xl"
          />
        </div>

        <div class="w-4/5 md:w-100 space-y-4">
          <h3 class="text-warning italic uppercase tracking-widest">Why choose us ?</h3>
          <h1>Very Serious Materials For Making Furniture.</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown.
          </p>

          <div class="p-2 mt-2 rounded-lg flex items-center shadow-lg w-fit">
            <div class="p-3 bg-[#EEEEEE] rounded-lg">
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

          <div class="p-2 rounded-lg flex items-center shadow-lg w-fit">
            <div class="p-3 bg-[#EEEEEE] rounded-lg">
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
      </div>
    </section>

    <!-- section 2 -->
    <section class="container mx-auto my-20">
      <div
        class="bg-contact h-[30rem] flex justify-end items-center p-4 rounded-3xl"
      >
        <div
          class="bg-white rounded-3xl p-4 w-[32rem] h-auto space-y-4"
        >
          <h3 class="text-warning italic uppercase tracking-widest">About us</h3>
          <h1>Our Store</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div class="flex items-center">
            <div class="mx-4">
              <IconMail />
            </div>
            <div>
              <p>
                <span class="font-bold">New York, USA:</span>
                <br />
                299 Park Avenue New York, New York 10171
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="mx-4">
              <IconMail />
            </div>
            <div>
              <p>
                <span class="font-bold">London, UK:</span>
                <br />
                30 Stamford Street, London SE1 9LQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section 3 form control -->
    <section class="my-40 container mx-auto">
      <div class="flex space-x-5">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Full name</span>
          </div>
          <input
            type="text"
            placeholder="Enter Full name"
            class="input input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Your e-mail</span>
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            class="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="flex my-3 space-x-5">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Company</span>
          </div>
          <input
            type="text"
            placeholder="Enter Company name"
            class="input input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Subject</span>
          </div>
          <input
            type="text"
            placeholder="How can we help"
            class="input input-bordered w-full"
          />
        </label>
      </div>

      <div class="mb-3">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Message</span>
          </div>
          <textarea
            placeholder="hello there, i would like to talk about how to ..."
            class="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </label>
      </div>

      <button type="submit" class="btn btn-neutral mt-3">Submit</button>
    </section>
  </main>
</template>

<style scoped>
.bg-contact {
  background-image: url('/src/assets/bg-header.png');
  object-fit: cover;
  background-position: center;
}
</style>
