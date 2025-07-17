<template>
  <q-page class="q-pa-md page-container">
    <div class="text-h1 text-center text-weight-bold page-title q-mt-lg">Profil</div>

    <q-intersection transition="fade-in" once class="q-mb-xl full-width-section">
      <q-card class="section-card">
        <q-card-section class="q-pa-lg">
          <div class="section-title q-mb-md">
            <div class="text-h4 text-weight-bold section-title-text">
              <q-icon name="school" class="q-mr-sm" /> Tentang Sekolah
            </div>
          </div>
          <p class="text-body1 text-justify text-dark-grey">{{ tentangSekolahText }}</p>
        </q-card-section>
      </q-card>
    </q-intersection>

    <q-intersection transition="fade-in" once class="q-mb-xl full-width-section">
      <q-card class="section-card visi-misi-card-bordered">
        <q-card-section class="q-pa-lg">
          <div class="section-title q-mb-md">
            <div class="text-h4 text-weight-bold section-title-text">Visi dan Misi</div>
          </div>

          <div class="row q-col-gutter-lg visi-misi-layout">
            <div class="col-12 col-md-6 visi-image-col">
              <div class="visi-text-container">
                <div class="text-h6 q-mb-sm text-weight-bold text-dark-grey">
                  🎯 Visi SMAN 7 Pinrang:
                </div>
                <p class="text-body1 text-dark-grey q-mb-md">“{{ visiText }}”</p>
              </div>
              <div class="visi-image-only-container">
                <img
                  src="../assets/anak-nunjuk.png"
                  alt="Representasi Visi"
                  class="visi-misi-img-specific"
                />
              </div>
            </div>

            <div class="col-12 col-md-6 misi-text-col">
              <div class="text-h6 q-mb-sm text-weight-bold text-dark-grey">
                <q-icon name="star" class="q-mr-sm" /> Misi SMAN 7 Pinrang:
              </div>
              <ol class="text-body1 text-dark-grey q-pl-md">
                <li v-for="(item, index) in misiList" :key="index" class="q-mb-sm">
                  {{ item }}
                </li>
              </ol>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>

    <q-intersection transition="fade-in" once class="q-mb-xl full-width-section">
      <q-card class="section-card">
        <q-card-section class="q-pa-lg">
          <div class="section-title text-center q-mb-md">
            <div class="text-h4 text-weight-bold section-title-text">🏛️ Struktur Organisasi</div>
          </div>
          <q-img
            src="../assets/struktur-organisasi-sekolah.jpg"
            alt="Struktur Organisasi SMAN 7 Pinrang"
            spinner-color="primary"
            class="struktur-organisasi-img"
            fit="contain"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Gagal memuat gambar struktur organisasi.
              </div>
            </template>
          </q-img>
        </q-card-section>
      </q-card>
    </q-intersection>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import {
  QPage,
  QImg,
  QIcon,
  QIntersection,
  QCard,
  QCardSection,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
} from 'quasar'

const tentangSekolahText = ref(
  'SMA Negeri 7 Pinrang adalah salah satu sekolah menengah atas negeri yang berlokasi di Kecamatan Mattiro Bulu, Kabupaten Pinrang, Sulawesi Selatan. Didirikan pada tanggal 5 Januari 1999, sekolah ini berkomitmen untuk mencetak generasi berkarakter, berprestasi, dan siap bersaing di era global. Dengan akreditasi A, SMAN 7 Pinrang menerapkan Kurikulum Merdeka dan menyelenggarakan sistem lima hari sekolah untuk mendukung keseimbangan antara akademik dan pengembangan diri siswa. Didukung oleh tenaga pendidik profesional serta fasilitas belajar yang memadai, SMAN 7 Pinrang terus berinovasi dalam menciptakan lingkungan belajar yang aktif, kreatif, dan menyenangkan.',
)

const visiText = ref(
  'Mewujudkan sekolah unggul yang religius, cerdas, berkarakter, kompetitif, dan berwawasan global dengan petuah silasa',
)

const misiList = ref([
  'Membangun budaya religius bagi warga sekolah.',
  'Mencetak sumber daya manusia yang kreatif, inovatif, dan produktif.',
  'Warga sekolah membiasakan budaya S-3 (Sipakatau, Sipakalebbi, Sipakainge).',
  'Meningkatkan prestasi dengan mengikuti kompetisi.',
  'Mendorong penguasaan teknologi informasi dan wawasan dalam menghadapi perubahan zaman.',
  'Penataan lingkungan sekolah untuk kenyamanan warga sekolah.',
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Memastikan halaman mengambil tinggi penuh viewport */
.page-container {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(120deg, #e3f2fd, #f0f4ff);
  min-height: 100vh; /* Memastikan tinggi minimum adalah tinggi viewport */
  padding: 64px 32px 96px 32px;
  box-sizing: border-box; /* Memastikan padding tidak menambah ukuran total */
  width: 100%; /* Memastikan lebar penuh */
}

/* Menghapus class container karena semua section akan full width */
/* .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
} */

/* Gaya Judul Utama Halaman - Disesuaikan agar sama dengan Akademik */
.page-title {
  color: #0d47a1;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 35px;
  text-shadow: 0 3px 5px rgba(13, 71, 161, 0.2);
  letter-spacing: 0.8px;
  position: relative;
  margin-top: -20px;
}

.section-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e6f0;
  width: 100%; /* Memastikan card mengambil lebar penuh */
  max-width: none; /* Menghapus batasan max-width */
  margin-left: auto; /* Memastikan card terpusat jika ada batasan lebar di parent */
  margin-right: auto; /* Memastikan card terpusat jika ada batasan lebar di parent */
  margin-bottom: 40px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}

/* Gaya khusus untuk card Visi dan Misi dengan border mengelilingi */
.visi-misi-card-bordered {
  border: 2px solid #2196f3; /* Border biru di sekeliling card */
  box-shadow: 0 12px 24px rgba(33, 150, 243, 0.1); /* Shadow dengan warna biru */
}

.visi-misi-card-bordered:hover {
  transform: translateY(-3px); /* Efek hover sedikit lebih kuat */
  box-shadow: 0 18px 36px rgba(33, 150, 243, 0.15);
}

/* Gaya untuk judul section (default: kiri) */
.section-title {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 20px;
  padding-left: 18px;
  color: #1565c0;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: left; /* Ensure text is left-aligned */
  justify-content: flex-start; /* Ensure content starts from the left */
}

.section-title::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  left: 0;
  top: 0;
  background: #2196f3;
  border-radius: 4px;
}

/* Gaya khusus untuk judul section yang ingin di tengah */
.section-title.text-center {
  text-align: center;
  justify-content: center;
  padding-left: 0; /* Remove left padding for centering */
}

.section-title.text-center::before {
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  top: auto;
  bottom: 0;
  border-radius: 4px; /* Ensure border radius is applied */
  background: #2196f3; /* Ensure background is set */
}

.text-dark-grey {
  line-height: 1.7 !important;
  font-size: 1rem !important;
  color: #3a3a3a !important;
  font-weight: normal !important;
  text-transform: none !important;
  letter-spacing: normal !important;
}

.program-title {
  font-size: 1.05rem !important;
  line-height: 1.5 !important;
  font-weight: 700 !important;
  color: #0a1f44 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.4px !important;
}

/* Gaya untuk layout Visi dan Misi */
.visi-misi-layout {
  position: relative; /* Untuk menempatkan border */
}

/* Gaya untuk kolom Visi (kiri) */
.visi-image-col {
  position: relative; /* Untuk menempatkan border di dalamnya */
}

/* MENGHILANGKAN GAYA UNTUK BORDER VERTIKAL */
.visi-image-col::after {
  display: none; /* Sembunyikan border vertikal */
}

/* Gaya untuk container gambar di bawah Visi */
.visi-image-only-container {
  display: flex; /* Menggunakan flexbox untuk positioning */
  justify-content: center; /* Disesuaikan: Align gambar ke tengah */
  align-items: center; /* Pusatkan gambar secara vertikal jika diinginkan */
  margin-top: 15px; /* Jarak dari teks Visi */
}

.visi-misi-img-specific {
  width: 200px; /* Lebar gambar, sesuaikan jika perlu */
  max-width: 100%; /* Pastikan gambar tidak melebihi lebar kolom */
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.visi-misi-img-specific:hover {
  transform: scale(1.05);
}

/* Gaya untuk kolom Misi (kanan) */
.misi-text-col {
  /* Add specific styles if needed */
}

/* Ensure the text within Visi and Misi columns is aligned left */
.visi-text-col .text-h6,
.visi-text-col .text-body1 {
  text-align: left !important; /* Align Visi text to the left */
}

.misi-text-col .text-h6,
.misi-text-col ol {
  text-align: left !important; /* Align Misi text and list to the left */
}

/* Gaya untuk section yang full width */
.full-width-section {
  width: 100%;
  padding: 0; /* Hapus padding dari container */
  margin: 0 auto; /* Pusatkan jika ada max-width di parent, tapi di sini sudah 100% */
}

.struktur-container {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 15px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.struktur-organisasi-img {
  width: 100%;
  max-height: 600px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  object-fit: contain;
}

ol {
  padding-left: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-container {
    padding: 40px 16px 60px 16px;
  }

  /* Gaya Judul Utama Halaman di layar kecil */
  .page-title {
    font-size: 2.2rem; /* Ukuran font lebih kecil di layar kecil */
    margin-bottom: 30px;
    margin-top: 30px; /* Disesuaikan: Atur margin atas mobile */
  }

  .section-title {
    font-size: 1.2rem;
    margin-bottom: 16px;
    padding-left: 12px;
  }

  .section-title::before {
    width: 4px;
  }

  .section-title.text-center::before {
    width: 60px;
  }

  .text-h4 {
    font-size: 1.4rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .text-dark-grey {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    letter-spacing: normal !important;
  }

  .program-title {
    font-size: 0.95rem !important;
    line-height: 1.4 !important;
  }

  .row.q-col-gutter-lg {
    margin-left: -12px !important;
    margin-top: -12px !important;
  }

  .row.q-col-gutter-lg > div {
    padding-left: 12px !important;
    padding-top: 12px !important;
    margin-bottom: 0;
  }

  ol {
    padding-left: 16px;
  }

  .struktur-container {
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 0 10px;
  }

  .struktur-organisasi-img {
    max-height: 400px;
  }

  /* Adjust spacing for Visi/Misi layout on small screens */
  .visi-misi-layout .col-12 {
    margin-bottom: 20px; /* Add space between Visi/Image and Misi columns */
  }

  .visi-image-only-container {
    margin-top: 10px; /* Reduce margin top for image on small screens */
    justify-content: center; /* Ensure centered on small screens too */
  }

  .visi-misi-img-specific {
    width: 150px; /* Adjust image width on small screens */
  }
}
</style>
