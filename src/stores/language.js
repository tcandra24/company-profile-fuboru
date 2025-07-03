import { defineStore, acceptHMRUpdate } from 'pinia';
import Gasket4 from '@/assets/images/products/gasket-4.webp';
import Gasket1 from '@/assets/images/products/gasket-1.webp';
import Gasket2 from '@/assets/images/products/gasket-2.webp';
import Gasket3 from '@/assets/images/products/gasket-3.webp';

import Rubber1 from '@/assets/images/products/rubber-1.webp';
import Rubber2 from '@/assets/images/products/rubber-2.webp';
import Rubber3 from '@/assets/images/products/rubber-3.webp';
import Rubber4 from '@/assets/images/products/rubber-4.webp';
import Rubber5 from '@/assets/images/products/rubber-5.webp';
import Rubber6 from '@/assets/images/products/rubber-6.webp';

import Spare3 from '@/assets/images/products/spare-3.webp';
import Spare4 from '@/assets/images/products/spare-4.webp';
import Spare1 from '@/assets/images/products/spare-1.webp';
import Spare2 from '@/assets/images/products/spare-2.webp';
import Spare5 from '@/assets/images/products/spare-5.webp';
import Spare6 from '@/assets/images/products/spare-6.webp';
import Spare7 from '@/assets/images/products/spare-7.webp';
import Spare8 from '@/assets/images/products/spare-8.webp';
import Spare9 from '@/assets/images/products/spare-9.webp';
import Spare10 from '@/assets/images/products/spare-10.webp';

import Elec1 from '@/assets/images/products/elec-1.webp';
import Elec2 from '@/assets/images/products/elec-2.webp';
import Elec3 from '@/assets/images/products/elec-3.webp';
import Elec4 from '@/assets/images/products/elec-4.webp';
import Elec5 from '@/assets/images/products/elec-5.webp';
import Elec6 from '@/assets/images/products/elec-6.webp';
import Elec7 from '@/assets/images/products/elec-7.webp';

import Ms1 from '@/assets/images/products/ms-1.webp';
import Ms2 from '@/assets/images/products/ms-2.webp';
import Ms3 from '@/assets/images/products/ms-3.webp';
import Ms4 from '@/assets/images/products/ms-4.webp';
import Ms5 from '@/assets/images/products/ms-5.webp';
import Ms6 from '@/assets/images/products/ms-6.webp';
import Ms7 from '@/assets/images/products/ms-7.webp';
import Ms8 from '@/assets/images/products/ms-8.webp';

import Var1 from '@/assets/images/products/var-1.webp';
import Var2 from '@/assets/images/products/var-2.webp';
import Var3 from '@/assets/images/products/var-3.webp';
import Var6 from '@/assets/images/products/var-6.webp';
import Var7 from '@/assets/images/products/var-7.webp';

import Cert1 from '@/assets/images/certificates/team-1.webp';
import Cert2 from '@/assets/images/certificates/team-2.webp';
import Cert3 from '@/assets/images/certificates/team-3.webp';
import Cert4 from '@/assets/images/certificates/team-4.webp';
import Cert5 from '@/assets/images/certificates/team-5.webp';
import Cert6 from '@/assets/images/certificates/team-6.webp';

import Testi1 from '@/assets/images/testimonial/testi-1.webp';
import Testi2 from '@/assets/images/testimonial/testi-2.webp';
import Testi3 from '@/assets/images/testimonial/testi-3.webp';
import Testi4 from '@/assets/images/testimonial/testi-4.webp';
import Testi5 from '@/assets/images/testimonial/testi-5.webp';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    selected: 'id',
    menus: [
      {
        to: '/',
        name: {
          id: 'Beranda',
          en: 'Home',
        },
      },
      {
        to: '#tentang-kami',
        name: {
          id: 'Tentang Kami',
          en: 'About Us',
        },
      },
      {
        to: '#produk',
        name: {
          id: 'Produk',
          en: 'Product',
        },
      },
      {
        to: '#jaminan-kualitas',
        name: {
          id: 'Jaminan Kualitas',
          en: 'Quality',
        },
      },
      {
        to: '#kontak',
        name: {
          id: 'Kontak',
          en: 'Contact',
        },
      },
    ],
    heroDescription: {
      title: {
        id: 'Website Resmi PT Fuboru Indonesia',
        en: 'Official Website PT Fuboru Indonesia',
      },
      subtitle: {
        id: 'Produsen Suku Cadang Otomotif & Mesin Statis',
        en: 'Parts Of Produsen Automotive And Machine Statis',
      },
    },
    heroButton: {
      id: 'Baca Selengkapnya',
      en: 'Read More',
    },
    section: {
      aboutUs: {
        title: {
          id: 'Tentang <span class="text-primary">Fuboru</span>',
          en: 'About <span class="text-primary">Fuboru</span>',
        },
        message: {
          id: `
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
            menjaga kualitas dilakukan dengan melakukan in process control, mulai dari seleksi bahan baku, pengendalian proses produksi, hingga
            penyimpanan barang jadi. Semua kami lakukan demi kepuasan pelanggan, karena kami selalu ingin memberi yang terbaik
          </p>`,
          en: `
          <p class="mb-5 lg:text-lg">
            PT Fuboru Indonesia was founded in 1983, which is means has existed for almost 40 years in the automotive spare parts industry. 
            It could be said that we are pioneers in the stamping gasket industry in Indonesia. 
            Currently we have a product range that includes automotive spare parts for 2 wheel, 3 wheel, 4 wheel vehicles, static engine spare parts and Job Orders.
          </p>
          <p class="mb-5 lg:text-lg">
            Development by development is carried out so that our VISION to become the top 10 automotive spare parts industry can be achieved. 
            Our MISSION is to always provide the best service for both internal and external customers.
          </p>
          <p class="lg:text-lg">
            Improving product quality is always carried out through innovation and technological development, because for us, quality is a priority. 
            Efforts to maintain quality are carried out by carrying out in-process control, starting from selecting raw materials, controlling the production process, to storing finished goods. 
            We do everything for customer satisfaction, because we always want to give the best.
          </p>`,
        },
      },
      historyVideo: {
        title: {
          id: 'Fuboru Part Mutu terjamin, awet & tahan lama',
          en: 'Fuboru Part Quality is guaranteed, durable & long lasting',
        },
        message: {
          id: 'Tujuan utama kami adalah menghasilkan produk yang handal dan bermutu tinggi. Departemen Quality Control kami menetapkan standar mutu yang tinggi terhadap seluruh produk dan harus melalui pengawasan yang ketat. Proses pengendalian mutu ini dimulai dari pemilihan bahan baku hingga barang jadi.',
          en: 'Our main goal is to produce reliable and high quality products. Our Quality Control Department sets high quality standards for all products and is subject to strict supervision. The quality control process starts from selecting raw materials to finished goods.',
        },
      },
      corporateValue: {
        title: {
          id: 'Nilai-nilai di balik pekerjaan kami',
          en: 'The values behind our work',
        },
        subtitle: {
          id: 'Budaya kerja',
          en: 'Work culture',
        },
        values: [
          {
            title: {
              id: 'Nilai Perusahaan',
              en: 'Corporate Value',
            },
            message: {
              id: `Pengembangan demi pengembangan terus dilakukan agar VISI kami untuk Menjadi 10 besar skala Nasional industri suku cadang otomotif dapat tercapai. 
                Adapun MISI kami adalah Senantiasa memberikan pelayanan terbaik bagi customer baik internal maupun eksternal. Kami yakin semua dapat terwujud dengan menerapkan Budaya 
                Perusahaan BERIMAN, BERSYUKUR, DISIPLIN, BEKERJA, HEBAT.`,
              en: `Development after development continues to be carried out so that Our VISION is to become a top 10 national industrial scale automotive parts can be achieved. 
                Our MISSION is to always provide the best service for both internal and external customers. We're all sure can be realized by implementing Company 
                Culture FAITH, GRATEFUL, DISCIPLINED, WORKING, GREAT.`,
            },
            icon: {
              color: 'text-[#47BDFF]',
              svg: `
              <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                  fill="currentcolor"
                ></path>
              </svg>`,
            },
            animation: 'fade-right',
          },
          {
            title: {
              id: 'Keanggotaan',
              en: 'Membership',
            },
            message: {
              id: `GIAMM (Gabungan Industri Alat Alat Mobil dan Motor)<br> IATO Indonesia (Ikatan Ahli Otomotif )<br> 
                SOI (Sentra Otomotif Indonesia)<br> OTOPoint (Ikatan Peduli Otomotif)<br> 
                SEMA (Specialty Equipment Market Association USA)<br> 
                AAAA (Australian Automotive Aftermarket Association)<br> 
                PIKKO (Perkumpulan Industri Kecil dan Menengah Komponen Otomotif)<br>`,
              en: `GIAMM (Combination of Car and Motorcycle Equipment Industries)<br>
                IATO Indonesia (Automotive Experts Association)<br>
                SOI (Indonesian Automotive Center)<br>
                OTOPoint (Automotive Care Association)<br>
                SEMA (Specialty Equipment Market Association USA)<br>
                AAAA (Australian Automotive Aftermarket Association)<br>
                PIKKO (Automotive Components Small and Medium Industries Association)`,
            },
            icon: {
              color: 'text-[#B476E5]',
              svg: `
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                  fill="currentcolor"
                ></path>
              </svg>`,
            },
            animation: 'fade-left',
          },
          {
            title: {
              id: 'Tanggung Jawab Sosial Perusahaan',
              en: 'Corporate Social Responsibility',
            },
            message: {
              id: `Kami menyadari bahwa pertumbuhan usaha harus diiringi dengan pelaksanaan tanggung jawab sosial. Oleh karena itu berpedoman bahwa penerapan tanggung jawab sosial, 
                termasuk pengembangan sosial dan kemasyarakatan serta pemberdayaan masyarakat, adalah sebuah komitmen untuk membuat komunitasnya menjadi baik melalui 
                kebijakan praktek-praktek bisnis dan kontribusi dari sumber daya Perseroan sesuai dengan prinsip pelaksanaan Good Corporate Governance.`,
              en: `We realize that business growth must be accompanied by the implementation of social responsibility. Oleh karena itu berpedoman bahwa penerapan tanggung jawab sosial, 
                Therefore, it is guided by the implementation of social responsibility, including social development and community and community empowerment, is a commitment to create a community 
                become good through business practices policies and contributions from the Company's resources in accordance with the principles of implementing Good Corporate Governance.`,
            },
            icon: {
              color: 'text-[#B476E5]',
              svg: `
              <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.41997 22.2C3.0107 22.2012 3.57945 21.9763 4.00967 21.5715L14.2216 11.993C14.3677 11.8547 14.5621 11.779 14.7633 11.782C14.9645 11.785 15.1565 11.8665 15.2985 12.0091L18.7335 15.4457C19.767 16.4323 21.1408 16.9828 22.5696 16.9828C23.9984 16.9828 25.3722 16.4323 26.4057 15.4457L32.1553 9.69598C32.1912 9.66 32.2338 9.63151 32.2807 9.61205C32.3275 9.59252 32.3779 9.58251 32.4286 9.58251C32.4794 9.58251 32.5297 9.59252 32.5765 9.61205C32.6234 9.63151 32.6661 9.66 32.7019 9.69598L35.4248 12.4093C35.7156 12.6987 36.1092 12.8611 36.5195 12.861C36.9305 12.8605 37.3245 12.6972 37.6153 12.4067C37.9061 12.1163 38.0698 11.7224 38.0706 11.3114V2.04953C38.0702 1.63842 37.9066 1.24432 37.6158 0.953751C37.3249 0.663251 36.9306 0.500012 36.5195 0.500012H27.2206C26.9128 0.498822 26.6116 0.589332 26.3554 0.760062C26.0992 0.930722 25.8997 1.17383 25.7823 1.45838C25.6649 1.74293 25.6348 2.05597 25.696 2.35767C25.7573 2.65937 25.9069 2.93601 26.126 3.15224L28.8586 5.88483C28.9314 5.95777 28.9724 6.05661 28.9727 6.15972C28.9729 6.21054 28.9629 6.26094 28.9433 6.30784C28.9237 6.35481 28.8949 6.3973 28.8586 6.43293L23.1169 12.1762C22.971 12.3205 22.774 12.4015 22.5688 12.4015C22.3635 12.4015 22.1666 12.3205 22.0207 12.1762L18.584 8.73957C17.593 7.73857 16.2499 7.16443 14.8415 7.13986C13.4331 7.11522 12.0707 7.64197 11.0453 8.60776L0.830203 18.1783C0.491543 18.4975 0.256413 18.911 0.155263 19.3652C0.054043 19.8195 0.0914927 20.2937 0.262713 20.7265C0.433933 21.1593 0.731013 21.5307 1.11559 21.7928C1.50017 22.055 1.95454 22.1957 2.41997 22.1968V22.2Z"
                  fill="currentcolor"
                ></path>
              </svg>`,
            },
            animation: 'fade-right',
          },
        ],
      },
      products: {
        title: {
          id: 'Produk',
          en: 'Product',
        },
        subtitle: {
          id: 'Lebih dari 1000 item produk berkualitas untuk mendukung performance kendaraan anda',
          en: "More than 1000 quality product items to support your vehicle's performance",
        },
        data: [
          {
            group: 'Gasket',
            slug: 'gasket',
            list: [
              {
                name: 'Gasket Racing',
                description: 'From Racing To Street Performance',
                image: Gasket4,
                group: 'gasket',
              },
              {
                name: 'Gasket Kendaraan',
                description: 'Roda 2 / Roda 3',
                image: Gasket1,
                group: 'gasket',
              },
              {
                name: 'Gasket Mesin Statis',
                description: 'Diesel Part',
                image: Gasket2,
                group: 'gasket',
              },
              {
                name: 'Lem Spesial gasket',
                description: 'Formula Alumunium Micronized',
                image: Gasket3,
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
                image: Rubber1,
                group: 'rubber',
              },
              {
                name: 'Oil Seal & Seal Dust',
                description: 'SKO',
                image: Rubber2,
                group: 'rubber',
              },
              {
                name: 'Seal Valve Stem',
                description: 'SVS',
                image: Rubber3,
                group: 'rubber',
              },
              {
                name: 'SKO Rubber Part',
                description: 'O-Ring, Oil Seal, KKH',
                image: Rubber4,
                group: 'rubber',
              },
              {
                name: 'SKO Oil Seal Set',
                description: 'SKO Oil Seal Set',
                image: Rubber5,
                group: 'rubber',
              },
              {
                name: 'SKO Karet Tensioner',
                description: 'SKO Karet Tensioner',
                image: Rubber6,
                group: 'rubber',
              },
            ],
          },
          {
            group: 'Spare Parts',
            slug: 'sparepart',
            list: [
              {
                name: 'Brake Shoes',
                description: 'Kampas Rem Tromol',
                image: Spare3,
                group: 'sparepart',
              },
              {
                name: 'Brake Pads',
                description: 'Kampas Rem Cakram',
                image: Spare4,
                group: 'sparepart',
              },
              {
                name: 'Gear Set & Rantai',
                description: 'Motorcycle Drive Chain Kit',
                image: Spare1,
                group: 'sparepart',
              },
              {
                name: 'Bearing',
                description: 'Ball & Roller Bearing',
                image: Spare2,
                group: 'sparepart',
              },
              {
                name: 'Master Rem Kits',
                description: 'Master Rem Kits',
                image: Spare5,
                group: 'sparepart',
              },
              {
                name: 'Magnetic Filter',
                description: 'Oil Filter & Fuel Filter',
                image: Spare6,
                group: 'sparepart',
              },
              {
                name: 'Fuboru Oil Filter',
                description: 'Filter Oli',
                image: Spare7,
                group: 'sparepart',
              },
              {
                name: 'Comsteer',
                description: 'Komstir',
                image: Spare8,
                group: 'sparepart',
              },
              {
                name: 'Roller',
                description: 'Roller Weight',
                image: Spare9,
                group: 'sparepart',
              },
              {
                name: 'Fuel Filter Injection',
                description: 'Filter Pompa Injeksi',
                image: Spare10,
                group: 'sparepart',
              },
            ],
          },
          {
            group: 'Electrical',
            slug: 'electrical',
            list: [
              {
                name: 'Bohlam',
                description: 'Lampu Sepeda Motor',
                image: Elec1,
                group: 'electrical',
              },
              {
                name: 'CDI',
                description: 'Capasitor Discharge Ignition',
                image: Elec2,
                group: 'electrical',
              },
              {
                name: 'Regulator',
                description: 'Regulator',
                image: Elec3,
                group: 'electrical',
              },
              {
                name: 'Carbon Brush',
                description: 'Carbon Brush',
                image: Elec4,
                group: 'electrical',
              },
              {
                name: 'Fuboru Spark',
                description: 'Busi Sepeda Motor',
                image: Elec5,
                group: 'electrical',
              },
              {
                name: 'Rotax',
                description: 'Pompa Motor Injeksi',
                image: Elec6,
                group: 'electrical',
              },
              {
                name: 'Chop Busi',
                description: 'Chop Busi Universal',
                image: Elec7,
                group: 'electrical',
              },
            ],
          },
          {
            group: 'Diesel Parts',
            slug: 'dieselparts',
            list: [
              {
                name: 'Plunger',
                description: 'Diesel Parts',
                image: Ms1,
                group: 'dieselparts',
              },
              {
                name: 'Nozzle',
                description: 'Diesel Parts',
                image: Ms2,
                group: 'dieselparts',
              },
              {
                name: 'Piston Ring Set',
                description: 'Diesel Parts',
                image: Ms3,
                group: 'dieselparts',
              },
              {
                name: 'Piston',
                description: 'Diesel Parts',
                image: Ms4,
                group: 'dieselparts',
              },
              {
                name: 'Governor Ball Race',
                description: 'Diesel Parts',
                image: Ms5,
                group: 'dieselparts',
              },
              {
                name: 'Governor Ball Spacer',
                description: 'Diesel Parts',
                image: Ms6,
                group: 'dieselparts',
              },
              {
                name: 'Engine Valve',
                description: 'Diesel Parts',
                image: Ms7,
                group: 'dieselparts',
              },
              {
                name: 'Crank Pin Metal',
                description: 'Diesel Parts',
                image: Ms8,
                group: 'dieselparts',
              },
            ],
          },
          {
            group: 'Various Products',
            slug: 'variousproducts',
            list: [
              {
                name: 'Pompa Air',
                description: 'Pompa Air Tanpa Listrik',
                image: Var1,
                group: 'variousproducts',
              },
              {
                name: 'Plas Chamois',
                description: 'Plas Chamois',
                image: Var2,
                group: 'variousproducts',
              },
              {
                name: 'Nylon Cable Tie',
                description: 'Nilon Kabel Ties',
                image: Var3,
                group: 'variousproducts',
              },
              {
                name: 'Spion',
                description: 'Spion Motor',
                image: Var6,
                group: 'variousproducts',
              },
              {
                name: 'Pentil Ban',
                description: 'Pentil Ban Tubless',
                image: Var7,
                group: 'variousproducts',
              },
            ],
          },
        ],
      },
      quality: {
        title: {
          id: 'Jaminan Kualitas',
          en: 'Quality Assurance',
        },
        subtitle: {
          id: 'Jaminan kualitas fuboru tercermin dari beberapa sertifikasi & patent yang kami peroleh, baik lokal maupun International Patent',
          en: "Fuboru's quality assurance is reflected in several certifications & patents that we have obtained, both local and international patents.",
        },
        certificates: [
          {
            name: 'Q-SEAL',
            description: {
              id: 'Standard Proses Manufaktur Untuk Produk Gasket & Rubber Parts',
              en: 'Manufacturing Process Standards For Gasket & Rubber Parts Products',
            },
            image: Cert1,
          },
          {
            name: 'MAGNETIC PATENT',
            description: {
              id: 'Patent Indonesia Untuk Produk Fuel Filter',
              en: 'Patent Indonesia For Fuel Filter Product',
            },
            image: Cert2,
          },
          {
            name: 'AUSTRALIAN PATENT - BRAKE SYSTEM',
            description: {
              id: 'Patent Australia Untuk Produk Brake System',
              en: 'Patent Australia For Brake System Product',
            },
            image: Cert3,
          },
          {
            name: 'EUROPE PATENT - BRAKE SYSTEM',
            description: {
              id: 'Patent Eropa Untuk Produk Brake System',
              en: 'Patent Australia For Brake System Product',
            },
            image: Cert4,
          },
          {
            name: 'AMERICAN PATENT - BRAKE SYSTEM',
            description: {
              id: 'Patent Amerika Untuk Produk Brake System',
              en: 'Patent Amerika For Brake System Product',
            },
            image: Cert5,
          },
          {
            name: 'ISO 9001-2015',
            description: {
              id: 'Pembuatan Gasket dan Produk Seal Berbasis Karet',
              en: 'Manufacture of Gasket & Rubber Based Seal Products',
            },
            image: Cert6,
          },
        ],
      },
      faq: {
        title: {
          id: 'Pertanyaan yang Sering Diajukan',
          en: 'Frequently Asked Questions',
        },
        subtitle: {
          id: 'Ada pertanyaan? Kami akan membantu anda.',
          en: "Have Questions? We've got you.",
        },
        data: [
          {
            id: 1,
            question: {
              id: 'Apakah kelebihan produk fuboru dibanding merk lain ?',
              en: 'What are the advantages of fuboru products compared to other brands ?',
            },
            answer: {
              id: 'Bahan baku Fuboru telah memenuhi standart JIS (Japanese Industrial Standards), Pengujian yang dilakukan telah mengikuti standart ASTM (American Standard for Testing Materials) dan Proses produksi mengikuti standart proses manufaktur dari Q-SEAL',
              en: 'Fuboru raw materials have met JIS (Japanese Industrial Standards) standards, the tests carried out have followed ASTM (American Standard for Testing Materials) standards and the production process follows the manufacturing process standards from Q-SEAL',
            },
          },
          {
            id: 2,
            question: {
              id: 'Bagaimana Fuboru menjamin produk nya layak untuk digunakan ?',
              en: 'How Fuboru guarantees its products are suitable for use ?',
            },
            answer: {
              id: 'Setiap produk tercantum Expired Date untuk memastikan bahwa produk masih baik, Terdapat Nama, Alamat, No Telpon PT Fuboru Indonesia sehingga konsumen dapat langsung menghubungi Call Center jika ingin mendapatkan informasi lebih detail tentang produk',
              en: 'Each product is listed Expired Date to ensure that the product is still good, there is a Name, Address, Phone Number of PT Fuboru Indonesia so that consumers can directly contact the Call Center if they want to get more detailed information about the product',
            },
          },
          {
            id: 3,
            question: {
              id: 'Produk untuk apa saja yang diproduksi oleh Fuboru ?',
              en: 'What products does Fuboru produce ?',
            },
            answer: {
              id: 'Kendaraan Roda-2 / Roda-3 mulai dari motor lama (misal : Honda C-70, Honda CB, Yamaha V-75, Yamaha L2S, Suzuki RGR 150, Vespa Super / PS/ PX, dll) hingga motor terbaru (misal : Yamaha NMAX, Honda Supra X 125 New, Honda PCX, dll), untuk Mesin Statis ( misal : Dongfeng, Kubota, Yanmar, Mitsubishi, Honda, Yamaha)',
              en: '2-Wheeled / 3-Wheeled Vehicles ranging from old motorcycles (eg: Honda C-70, Honda CB, Yamaha V-75, Yamaha L2S, Suzuki RGR 150, Vespa Super / PS / PX, etc.) to the latest motorcycles (eg: Yamaha NMAX, Honda Supra X 125 New, Honda PCX, etc.), for Static Machines (eg: Dongfeng, Kubota, Yanmar, Mitsubishi, Honda, Yamaha)',
            },
          },
          {
            id: 4,
            question: {
              id: 'Apakah kelebihan produk LSG (Lem Special Gasket) Fuboru ?',
              en: 'What are the excess product of LSG fuboru ?',
            },
            answer: {
              id: 'Mengandung bahan aktif Aluminium Micronized yang berfungsi untuk menutup goresan-goresan pada permukaan mesin yang dapat menyebabkan kebocoran, Saat motor di service area yang sebelumnya diberi LSG Fuboru mudah dilepas & dibersihkan, sehingga tidak perlu harus di korek / digosok yang beresiko menimbulkan goresan',
              en: 'Contains active material Micronized Aluminum which serves to cover scratches on the surface of the machine that can cause leakage, When the motor in the service area previously given LSG Fuboru is easy to remove & clean, so there is no need to have to be scraped / rubbed which is at risk of causing scratches',
            },
          },
          {
            id: 5,
            question: {
              id: 'Bagaimana cara mendapatkan produk Fuboru ?',
              en: 'How to get Fuboru products ?',
            },
            answer: {
              id: 'Produk Fuboru telah tersebar di sekitar 15.000 jaringan customer di seluruh Indonesia (baik toko maupun bengkel) dan anda dapat menghubungi call center / kantor pusat PT Fuboru Indonesia seperti yang tertera di Contact website / tertera di setiap kemasan produk Fuboru',
              en: 'Fuboru products have spread across around 15,000 customer networks throughout Indonesia (both stores and workshops) and you can contact the call center / head office of PT Fuboru Indonesia as stated on the Contact website / listed on every Fuboru product packaging',
            },
          },
          {
            id: 6,
            question: {
              id: 'Apakah produk Fuboru dapat dibeli secara online ?',
              en: 'Whether Fuboru products can be purchased online ?',
            },
            answer: ['https://tokopedia.com/fundo', 'https://shopee.co.id/fundo_shop'],
            link: true,
          },
        ],
      },
      comment: {
        title: {
          id: 'Komentar',
          en: 'Comment',
        },
        subtitle: {
          id: 'Komentar-Komentar dari pelanggan puas',
          en: 'Comments from satisfied customers',
        },
        data: [
          {
            id: 1,
            name: 'Windya Motor',
            role: 'Denpasar',
            thumbnail: Testi1,
            message:
              'Produk-produk fuboru memang sangat berkualitas. Ada label expired date sebagai jaminannya, sehingga kami tidak was-was dalam menjual produk ke konsumen.',
          },
          {
            id: 2,
            name: 'Makmur Jaya Motor',
            role: 'Pekanbaru',
            thumbnail: Testi2,
            message:
              'Gasket nomer 1, ya pasti fuboru. Jaminan kualitas, harga pas dan tentunya sangat direkomendasikan oleh para mekanik. Pelanggan puas, rejeki lancar.',
          },
          {
            id: 3,
            name: 'Indra Surya Motor',
            role: 'Banjarmasin',
            thumbnail: Testi3,
            message:
              'Kami sudah lama memasarkan produk-produk fuboru di Banjarmasin. Gasket & Lem Gasket Fuboru memang sangat mantap dan tiada banding. Customer kami sangat puas dan tidak pernah komplain. Semoga fuboru tambah jaya !!',
          },
          {
            id: 4,
            name: 'Hasil Abadi Motor',
            role: 'Jawa Timur',
            thumbnail: Testi4,
            message:
              'Produk fuboru selalu menjadi rekomendasi para mekanik kami. Selain gasketnya yang sangat presisi, produk-produk sparepart nya juga sangat berkualitas. Harganya sangat kompetitif, awet dan tahan lama',
          },
          {
            id: 5,
            name: 'Adityo Motor',
            role: 'Jakarta',
            thumbnail: Testi5,
            message:
              'Produk-produk fuboru sangat laku di Makassar dan selalu jadi pilihan utama para mekanik. Semenjak menjual produk fuboru, hampir tidak ada konsumen yang komplain. Fuboru memang TOP !!',
          },
        ],
      },
    },
  }),
  actions: {
    toggleLanguage(language) {
      this.selected = language;
    },
  },
  getters: {
    productItem(state) {
      const mappingProduct = state.section.products.data.map((element) => element.list);
      return [].concat(...mappingProduct);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLanguageStore, import.meta.hot));
}
