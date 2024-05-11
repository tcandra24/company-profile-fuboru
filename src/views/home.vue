<script setup>
  import { ref } from 'vue';
  import ClientSlider from '@/components/ClientSlider.vue';
  import Faq from '@/components/Faq.vue';
  import Modal from '@/components/Modal.vue';
  import { useAppStore } from '@/stores/index';
  const store = useAppStore();

  const activeTab = ref('all');
  const dialog = ref(null);

  const feedbacks = ref([
    {
      id: 1,
      name: 'Windya Motor',
      role: 'Denpasar',
      thumbnail: '/assets/images/testimonial/testi-1.jpg',
      message:
        'Produk-produk fuboru memang sangat berkualitas. Ada label expired date sebagai jaminannya, sehingga kami tidak was-was dalam menjual produk ke konsumen.',
    },
    {
      id: 2,
      name: 'Makmur Jaya Motor',
      role: 'Pekanbaru',
      thumbnail: '/assets/images/testimonial/testi-2.jpg',
      message:
        'Gasket nomer 1, ya pasti fuboru. Jaminan kualitas, harga pas dan tentunya sangat direkomendasikan oleh para mekanik. Pelanggan puas, rejeki lancar.',
    },
    {
      id: 3,
      name: 'Indra Surya Motor',
      role: 'Banjarmasin',
      thumbnail: '/assets/images/testimonial/testi-3.jpg',
      message:
        'Kami sudah lama memasarkan produk-produk fuboru di Banjarmasin. Gasket & Lem Gasket Fuboru memang sangat mantap dan tiada banding. Customer kami sangat puas dan tidak pernah komplain. Semoga fuboru tambah jaya !!',
    },
    {
      id: 4,
      name: 'Hasil Abadi Motor',
      role: 'Jawa Timur',
      thumbnail: '/assets/images/testimonial/testi-4.jpg',
      message:
        'Produk fuboru selalu menjadi rekomendasi para mekanik kami. Selain gasketnya yang sangat presisi, produk-produk sparepart nya juga sangat berkualitas. Harganya sangat kompetitif, awet dan tahan lama',
    },
    {
      id: 5,
      name: 'Adityo Motor',
      role: 'Jakarta',
      thumbnail: '/assets/images/testimonial/testi-5.jpg',
      message:
        'Produk-produk fuboru sangat laku di Makassar dan selalu jadi pilihan utama para mekanik. Semenjak menjual produk fuboru, hampir tidak ada konsumen yang komplain. Fuboru memang TOP !!',
    },
  ]);

  const products = [
    {
      group: 'Gasket',
      slug: 'gasket',
      list: [
        {
          name: 'Gasket Racing',
          description: 'From Racing To Street Performance',
          image: '/assets/images/products/gasket-4.jpg',
          group: 'gasket',
        },
        {
          name: 'Gasket Kendaraan',
          description: 'Roda 2 / Roda 3',
          image: '/assets/images/products/gasket-1.jpg',
          group: 'gasket',
        },
      ],
    },
    {
      group: 'Rubber',
      slug: 'rubber',
      list: [
        {
          name: 'Karet Kopling House',
          description: 'KKH',
          image: '/assets/images/products/rubber-1.jpg',
          group: 'rubber',
        },
        {
          name: 'Oil Seal & Seal Dust',
          description: 'SKO',
          image: '/assets/images/products/rubber-2.jpg',
          group: 'rubber',
        },
      ],
    },
    {
      group: 'Sparepart',
      slug: 'sparepart',
      list: [
        {
          name: 'Brake Shoes',
          description: 'Kampas Rem Tromol',
          image: '/assets/images/products/spare-3.png',
          group: 'sparepart',
        },
        {
          name: 'Brake Pads',
          description: 'Kampas Rem Cakram',
          image: '/assets/images/products/spare-4.png',
          group: 'sparepart',
        },
      ],
    },
  ];

  const mappingProduct = products.map((element) => element.list);
  const productItem = [].concat(...mappingProduct);

  const certificates = [
    {
      name: 'Q-SEAL',
      description: 'Standard Proses Manufaktur Untuk Produk Gasket & Rubber Parts',
      image: '/assets/images/certificates/team-1.jpg',
    },
    {
      name: 'MAGNETIC PATENT',
      description: 'Patent Indonesia Untuk Produk Fuel Filter',
      image: '/assets/images/certificates/team-2.jpg',
    },
    {
      name: 'AUSTRALIAN PATENT - BRAKE SYSTEM',
      description: 'Patent Australia Untuk Produk Brake System',
      image: '/assets/images/certificates/team-3.jpg',
    },
    {
      name: 'EUROPE PATENT - BRAKE SYSTEM',
      description: 'Patent Eropa Untuk Produk Brake System',
      image: '/assets/images/certificates/team-4.jpg',
    },
    {
      name: 'AMERICAN PATENT - BRAKE SYSTEM',
      description: 'Patent Amerika Untuk Produk Brake System',
      image: '/assets/images/certificates/team-5.jpg',
    },
  ];
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
      <div class="relative">
        <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
        <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
        <div class="container">
          <div class="relative bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
            <div class="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
              <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                Simply <span class="italic text-primary">The Best </span>
              </h2>
              <p class="my-8 text-lg lg:w-[90%]">Official Website PT Fuboru Indonesia - Produsen Suku Cadang Otomotif & Mesin Statis</p>
              <router-link to="/" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">Baca Selengkapnya</router-link>
            </div>
            <div
              class="top-[20px] mx-auto mt-5 mb-2 w-auto ltr:-right-[170px] rtl:-left-[150px] md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
              :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="300"
            >
              <img src="/assets/images/fuboru-logo-banner.webp" alt="home-banner-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10 lg:py-20" data-aos="fade-up" data-aos-duration="1000" id="tentang-kami">
      <div class="container">
        <div class="flex flex-col gap-7 lg:flex-row">
          <div
            class="mx-auto h-[450px] w-full max-w-[380px] flex-none overflow-hidden rounded-b-[160px] rounded-tl-[200px] rounded-tr-[20px] border-[10px] border-white dark:border-gray-dark"
          >
            <img src="/assets/images/about_img.webp" alt="" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-1 flex-col justify-between text-center ltr:md:text-left rtl:md:text-right">
            <div>
              <h2 class="mb-4 text-2xl font-extrabold text-black dark:text-white md:text-3xl lg:text-[40px] lg:leading-tight">
                Tentang <span class="text-primary">Fuboru</span>
              </h2>
              <p class="mb-5 lg:text-lg">
                PT Fuboru Indonesia didirikan pada tahun 1983 yang berarti sudah eksis selama hampir 40 tahun dalam industri suku cadang otomotif. Boleh
                dikatakan kami adalah pionir dalam industri stamping gasket di Indonesia. Saat ini kami memiliki range produk meliputi suku cadang otomotif
                untuk roda 2, roda 3 , roda 4, suku cadang mesin statis dan Job Order.
              </p>
              <p class="mb-5 lg:text-lg">
                Pengembangan demi pengembangan dilakukan agar VISI kami untuk Menjadi 10 besar industri suku cadang otomotif dapat tercapai. Adapun MISI kami
                adalah Senantiasa memberikan pelayanan terbaik bagi customer baik internal maupun eksternal.
              </p>
              <p class="lg:text-lg">
                Peningkatan kualitas produk selalu dilakukan melalui inovasi dan pengembangan teknologi, karena bagi kami, kualitas adalah prioritas. Usaha
                menjaga kualitas dilakukan dengan melakukan in process control, mulai dari seleksi bahan baku, pengendalian proses produksi, hingga penyimpanan
                barang jadi. Semua kami lakukan demi kepuasan pelanggan, karena kami selalu ingin memberi yang terbaik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="overflow-x-hidden py-14 dark:!bg-none lg:py-[100px]">
      <div class="relative bg-center">
        <img src="/assets/images/how-we-do-it_.png" alt="fuboru-team" class="absolute inset-x-0 bottom-[93%] mx-auto hidden md:block xl:bottom-[91%]" />
        <img
          src="/assets/images/service-video-bg.png"
          alt="service-video-bg"
          class="relative z-[1] h-[400px] w-full object-cover object-top sm:h-[500px] lg:h-[738px]"
        />
        <div class="absolute -inset-x-4 bottom-0 h-12 -rotate-[2deg] bg-[#7780A1]/10 xl:bottom-3"></div>
        <div class="absolute top-1/2 z-[1] -translate-y-1/2 ltr:left-5 ltr:pr-5 rtl:right-5 rtl:pl-5 ltr:lg:left-[10%] rtl:lg:right-[10%] xl:w-[620px]">
          <p class="pb-8 text-2xl font-extrabold text-white sm:text-4xl sm:leading-[50px]">Fuboru Part Mutu terjamin, awet & tahan lama</p>
          <p class="pb-8 text-sm font-normal text-white sm:text-lg">
            Tujuan utama kami adalah menghasilkan produk yang handal dan bermutu tinggi. Departemen Quality Control kami menetapkan standar mutu yang tinggi
            terhadap seluruh produk dan harus melalui pengawasan yang ketat. Proses pengendalian mutu ini dimulai dari pemilihan bahan baku hingga barang jadi.
          </p>
          <button
            type="button"
            class="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white ring-[5px] ring-white/10 transition hover:bg-secondary"
            @click="dialog.open()"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-secondary group-hover:text-black/60">
              <g clip-path="url(#clip0_279_1223)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.12543 0.661061C4.53562 -1.06548 1.06668 0.791048 1.06668 3.90361V12.0964C1.06668 15.209 4.53562 17.0655 7.12543 15.3389L13.27 11.2425C15.5838 9.70001 15.5838 6.3 13.27 4.75746L7.12543 0.661061Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_1223">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <modal
      ref="dialog"
      width="960"
      :close_by_overlay="true"
      :close-btn="true"
      close_style="floating"
      content-class="pt-8 px-0 pb-0 !bg-transparent"
      close-btn-class="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
    >
      <div class="bg-black !p-4 dark:bg-gray-dark">
        <div class="relative">
          <div class="aspect-video">
            <iframe
              class="absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/wQZRBEJ4A4I"
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </modal>

    <section class="py-14 dark:!bg-none lg:py-[100px]" style="background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 54.69%)">
      <div class="container">
        <div class="heading text-center">
          <h4>Nilai-nilai di balik pekerjaan kami</h4>
          <h6 class="!text-primary">Budaya kerja</h6>
        </div>
        <div class="grid grid-cols-1 justify-between gap-7 ltr:text-left rtl:text-right aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <div
            class="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray">Corporate Value</h3>
              <p class="mt-4 text-lg font-semibold">
                Pengembangan demi pengembangan terus dilakukan agar VISI kami untuk Menjadi 10 besar skala Nasional industri suku cadang otomotif dapat
                tercapai. Adapun MISI kami adalah Senantiasa memberikan pelayanan terbaik bagi customer baik internal maupun eksternal. Kami yakin semua dapat
                terwujud dengan menerapkan Budaya Perusahaan BERIMAN, BERSYUKUR, DISIPLIN, BEKERJA, HEBAT.
              </p>
            </div>
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
              <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray">Membership</h3>
              <p class="mt-4 text-lg font-semibold">
                GIAMM (Gabungan Industri Alat Alat Mobil dan Motor)<br />
                IATO Indonesia (Ikatan Ahli Otomotif )<br />
                SOI (Sentra Otomotif Indonesia)<br />
                OTOPoint (Ikatan Peduli Otomotif)<br />
                SEMA (Specialty Equipment Market Association USA)<br />
                AAAA (Australian Automotive Aftermarket Association)<br />
                PIKKO (Perkumpulan Industri Kecil dan Menengah Komponen Otomotif)<br />
              </p>
            </div>
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray">Corporate Social Responsibility</h3>
              <p class="mt-4 text-lg font-semibold">
                Kami menyadari bahwa pertumbuhan usaha harus diiringi dengan pelaksanaan tanggung jawab sosial. Oleh karena itu berpedoman bahwa penerapan
                tanggung jawab sosial, termasuk pengembangan sosial dan kemasyarakatan serta pemberdayaan masyarakat, adalah sebuah komitmen untuk membuat
                komunitasnya menjadi baik melalui kebijakan praktek-praktek bisnis dan kontribusi dari sumber daya Perseroan sesuai dengan prinsip pelaksanaan
                Good Corporate Governance.
              </p>
            </div>
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
              <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.41997 22.2C3.0107 22.2012 3.57945 21.9763 4.00967 21.5715L14.2216 11.993C14.3677 11.8547 14.5621 11.779 14.7633 11.782C14.9645 11.785 15.1565 11.8665 15.2985 12.0091L18.7335 15.4457C19.767 16.4323 21.1408 16.9828 22.5696 16.9828C23.9984 16.9828 25.3722 16.4323 26.4057 15.4457L32.1553 9.69598C32.1912 9.66 32.2338 9.63151 32.2807 9.61205C32.3275 9.59252 32.3779 9.58251 32.4286 9.58251C32.4794 9.58251 32.5297 9.59252 32.5765 9.61205C32.6234 9.63151 32.6661 9.66 32.7019 9.69598L35.4248 12.4093C35.7156 12.6987 36.1092 12.8611 36.5195 12.861C36.9305 12.8605 37.3245 12.6972 37.6153 12.4067C37.9061 12.1163 38.0698 11.7224 38.0706 11.3114V2.04953C38.0702 1.63842 37.9066 1.24432 37.6158 0.953751C37.3249 0.663251 36.9306 0.500012 36.5195 0.500012H27.2206C26.9128 0.498822 26.6116 0.589332 26.3554 0.760062C26.0992 0.930722 25.8997 1.17383 25.7823 1.45838C25.6649 1.74293 25.6348 2.05597 25.696 2.35767C25.7573 2.65937 25.9069 2.93601 26.126 3.15224L28.8586 5.88483C28.9314 5.95777 28.9724 6.05661 28.9727 6.15972C28.9729 6.21054 28.9629 6.26094 28.9433 6.30784C28.9237 6.35481 28.8949 6.3973 28.8586 6.43293L23.1169 12.1762C22.971 12.3205 22.774 12.4015 22.5688 12.4015C22.3635 12.4015 22.1666 12.3205 22.0207 12.1762L18.584 8.73957C17.593 7.73857 16.2499 7.16443 14.8415 7.13986C13.4331 7.11522 12.0707 7.64197 11.0453 8.60776L0.830203 18.1783C0.491543 18.4975 0.256413 18.911 0.155263 19.3652C0.054043 19.8195 0.0914927 20.2937 0.262713 20.7265C0.433933 21.1593 0.731013 21.5307 1.11559 21.7928C1.50017 22.055 1.95454 22.1957 2.41997 22.1968V22.2Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-10 dark:bg-black/50 lg:py-[100px]" id="produk">
      <div class="container">
        <div class="heading text-center">
          <h4>Produk</h4>
          <h6>Lebih dari 1000 item produk berkualitas untuk mendukung performance kendaraan anda</h6>
        </div>
        <div class="mb-7">
          <ul class="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
            <li class="filter" :class="{ active: activeTab === 'all' }">
              <button type="button" class="transition hover:text-secondary" @click="activeTab = 'all'">All</button>
            </li>
            <li class="filter" v-for="(product, index) in products" :key="index" :class="{ active: activeTab === product.slug }">
              <button type="button" class="transition hover:text-secondary" @click="activeTab = product.slug">{{ product.group }}</button>
            </li>
          </ul>
        </div>
        <div class="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="project"
            v-for="(product, index) in productItem"
            :key="index"
            :class="activeTab === 'all' || activeTab === product.group ? 'block' : 'hidden'"
          >
            <div
              class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
            >
              <router-link to="/" class="absolute top-0 left-0 h-full w-full"></router-link>
              <img :src="product.image" :alt="product.name" class="h-52 w-full rounded-t-3xl object-cover" />
              <div class="p-5 text-sm font-bold">
                <h6 class="mb-1 text-black dark:text-white">{{ product.name }}</h6>
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-white/60 to-transparent py-10 dark:from-white/[0.02] lg:py-[100px]" id="jaminan-kualitas">
      <div class="container">
        <div class="heading text-center">
          <h4>Jaminan Kualitas</h4>
          <h6>Jaminan kualitas fuboru tercermin dari beberapa sertifikasi & patent yang kami peroleh, baik lokal maupun International Patent</h6>
        </div>
        <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-5" data-aos="fade-up" data-aos-duration="1000">
          <div class="group cursor-pointer text-center" v-for="(certificate, index) in certificates" :key="index">
            <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
              <img :src="certificate.image" :alt="certificate.name" class="h-full w-full rounded-3xl object-cover object-top" />
            </div>
            <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
              {{ certificate.name }}
            </h4>
            <h6 class="text-sm font-bold">{{ certificate.description }}</h6>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:bg-white/[0.02] dark:from-transparent lg:py-[100px]" id="faq">
      <faq></faq>
    </section>

    <section class="bg-gradient-to-b from-transparent to-white/50 py-12 dark:to-white/[0.02] lg:py-24">
      <div class="container">
        <div class="heading text-center">
          <h4>Komentar</h4>
          <h6>Komentar-Komentar dari pelanggan puas</h6>
        </div>

        <ClientSlider :feedbacks="feedbacks" type="creative-agency"></ClientSlider>
      </div>
    </section>

    <section class="py-14 dark:bg-gray-dark lg:py-[100px]" id="kontak">
      <div class="container">
        <div class="relative z-10 lg:flex">
          <div class="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
            <h4 class="sm:!leading-[50px]">Kontak</h4>
            <h6>Silahkan menghubungi kami untuk mendapatkan informasi terbaru seputar produk otomotif fuboru</h6>
            <img
              src="/assets/images/form-light-img.svg"
              alt="form-img"
              class="mx-auto"
              :data-aos="store.direction === 'rtl' ? 'fade-left' : 'fade-right'"
              data-aos-duration="1000"
            />
          </div>
          <form action="" class="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
            <div class="grid gap-10 sm:grid-cols-2">
              <div class="relative">
                <input
                  type="text"
                  name="name"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Full Name</label>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Email Address</label>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="text"
                  name="mobile"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Mobile Number</label>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="text"
                  name="city"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">City</label>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div class="relative mt-10">
              <input
                type="text"
                name="message"
                class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
              />
              <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Message</label>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
              >
                <path
                  d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
                <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
              </svg>
            </div>
            <div class="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
              <button type="button" class="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
