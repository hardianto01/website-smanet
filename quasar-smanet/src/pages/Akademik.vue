<template>
  <q-page class="page-wrapper">
    <div class="page-title text-center">AKADEMIK</div>

    <q-card class="section-card">
      <q-card-section class="q-pa-xl">
        <div class="section-header">📚 Kurikulum</div>
        <p class="akademik-text text-justify">{{ kurikulumText }}</p>
      </q-card-section>
    </q-card>

    <q-card class="section-card">
      <q-card-section class="q-pa-xl">
        <div class="section-header">🌟 Program Unggulan</div>
        <q-list separator class="program-list">
          <q-item
            v-for="(program, index) in programUnggulan"
            :key="`program-${index}`"
            class="q-py-md"
            transition="slide-up"
          >
            <q-item-section avatar>
              <q-icon :name="program.icon" color="primary" size="md" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold program-title">{{ program.nama }}</q-item-label>
              <q-item-label caption class="akademik-text">
                {{ program.deskripsi }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="section-card">
      <q-card-section class="q-pa-xl">
        <div class="section-header">🏆 Prestasi Siswa</div>
        <div class="row q-col-gutter-xl q-mt-md">
          <div class="col-12 col-md-6">
            <div class="prestasi-subtitle text-weight-bold q-mb-md text-dark">
              Prestasi Akademik
            </div>
            <q-list dense class="prestasi-list">
              <q-item
                v-for="(prestasi, index) in prestasiAkademik"
                :key="`akademik-${index}`"
                class="q-py-sm prestasi-item"
                transition="slide-up"
              >
                <q-item-section avatar>
                  <q-icon name="emoji_events" color="amber-8" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold program-title">{{
                    prestasi.judul
                  }}</q-item-label>
                  <q-item-label caption class="akademik-text">
                    {{ prestasi.deskripsi }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <div class="prestasi-subtitle text-weight-bold q-mb-md text-dark">
              Prestasi Non-Akademik
            </div>
            <q-list dense class="prestasi-list">
              <q-item
                v-for="(prestasi, index) in prestasiNonAkademik"
                :key="`nonakademik-${index}`"
                class="q-py-sm prestasi-item"
                transition="slide-up"
              >
                <q-item-section avatar>
                  <q-icon name="sports_soccer" color="green-8" size="sm" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold program-title">{{
                    prestasi.judul
                  }}</q-item-label>
                  <q-item-label caption class="akademik-text">
                    {{ prestasi.deskripsi }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { QPage, QList, QItem, QItemSection, QItemLabel, QIcon, QCard, QCardSection } from 'quasar'

const kurikulumText = ref(
  'SMAN 7 Pinrang menerapkan Kurikulum Merdeka sebagai dasar dalam proses pembelajaran, yang memberikan keleluasaan bagi guru dan siswa untuk mengembangkan potensi sesuai minat dan bakat masing-masing. Kurikulum ini menekankan pembelajaran yang lebih bermakna, kreatif serta berpusat pada peserta didik, dengan fleksibilitas dalam memilih materi ajar dan metode pembelajaran. Selain itu, muatan lokal juga turut diintegrasikan untuk memperkuat nilai budaya dan kearifan lokal, menjadikan pembelajaran lebih kontekstual dan relevan dengan lingkungan sekitar.',
)

const programUnggulan = ref([
  {
    icon: 'eco',
    nama: 'Sekolah Adiwiyata – Pendidikan Berbasis Lingkungan',
    deskripsi:
      'SMAN 7 Pinrang meraih penghargaan Sekolah Adiwiyata 2025 dari Kementerian Lingkungan Hidup dan Kehutanan, yang diserahkan langsung oleh Gubernur Sulawesi Selatan. Penghargaan ini diberikan atas komitmen sekolah dalam mengembangkan program-program lingkungan hidup dan pendidikan lingkungan, seperti pengelolaan sampah, penghijauan, dan integrasi pendidikan lingkungan ke dalam kegiatan belajar mengajar.',
  },
  {
    icon: 'groups',
    nama: 'SC-DARE SMANET – Study Club Debate and Research',
    deskripsi:
      'Salah satu program unggulan akademik di SMAN 7 Pinrang adalah SC-DARE SMANET, sebuah klub debat dan riset yang telah meraih Juara 1 Lomba Debat Ilmiah tingkat SMA se-Sulawesi Selatan pada tahun 2024. Prestasi ini menunjukkan dedikasi sekolah dalam mengembangkan kemampuan berpikir kritis dan komunikasi siswa.',
  },
  {
    icon: 'spellcheck',
    nama: 'Penghargaan Wajah Bahasa Sekolah Tingkat Nasional',
    deskripsi:
      'Pada tahun 2021, SMAN 7 Pinrang meraih peringkat pertama dalam penghargaan Wajah Bahasa Sekolah Tingkat Nasional yang diselenggarakan oleh Badan Pengembangan dan Pembinaan Bahasa Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Penghargaan ini diberikan atas upaya sekolah dalam mengutamakan penggunaan bahasa Indonesia yang baik dan benar di ruang publik sekolah.',
  },
])

const prestasiAkademik = ref([
  {
    judul: 'Juara 1 Lomba Debat Ilmiah se-Sulawesi Selatan',
    deskripsi:
      'Tim Study Club Debate and Research (SC-DARE SMANET) berhasil meraih Juara 1 dalam Lomba Debat Ilmiah tingkat SMA se-Sulawesi Selatan yang diselenggarakan di Universitas Muslim Indonesia. Selain itu, salah satu anggota tim juga dinobatkan sebagai Best Speaker, dan sekolah menerima medali emas serta uang pembinaan.',
  },
  {
    judul: 'Juara 1 dan 2 Lomba Debat Tingkat SMA se-Ajattapareng',
    deskripsi:
      'SMAN 7 Pinrang meraih Juara 1 dan 2 dalam Lomba Debat tingkat SMA se-Ajattapareng, membawa pulang medali emas dan perak, serta Piala Bergilir dan Piala Tetap.',
  },
  {
    judul: 'Empat Penghargaan dalam Uji Kemahiran Bahasa Indonesia (UKBI)',
    deskripsi:
      'Dalam momentum Hari Pendidikan Nasional (Hardiknas) 2024, SMAN 7 Pinrang menerima empat penghargaan sekaligus dalam penilaian UKBI yang diselenggarakan oleh Badan Bahasa Kemendikbudristek.',
  },
])

const prestasiNonAkademik = ref([
  {
    judul: 'Juara Umum Hima Fisip Competition UM Sidrap 2025',
    deskripsi:
      'SMAN 7 Pinrang meraih Juara Umum dalam ajang Hima Fisip Competition di Universitas Muhammadiyah Sidrap, dengan prestasi Juara 1 Voli Putri, Juara 1 E-Sport, Juara 1 Puisi, Juara 2 Nyanyi Solo, Juara 2 Tari Kreasi, Juara 3 Debat, dan Juara 3 Karya Tulis Ilmiah (KTI).',
  },
  {
    judul: 'Juara 3 Kejuaraan Pencak Silat Kabupaten Pinrang 2024',
    deskripsi:
      'Naura Sabilillah, siswa kelas X SMAN 7 Pinrang, meraih Juara 3 pada kategori Tanding Kelas B Putri dalam Kejuaraan Pencak Silat tingkat Kabupaten Pinrang.',
  },
])
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  width: 100%;
  padding: 64px 32px 96px 32px;
  background: linear-gradient(120deg, #e3f2fd, #f0f4ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-padding-top: 80px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0d47a1;
  text-align: center;
  margin-bottom: 48px;
  text-shadow: 0 3px 5px rgba(13, 71, 161, 0.2);
  letter-spacing: 0.8px;
  position: relative;
}

.section-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e6f0;
  width: 100%;
  margin-bottom: 40px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}

.section-header {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 20px;
  padding-left: 18px;
  position: relative;
}
.section-header::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  left: 0;
  top: 0;
  background: #2196f3;
  border-radius: 4px;
}

.text-dark {
  color: #2a2a2a;
}

.akademik-text {
  line-height: 1.7 !important;
  font-size: 1rem !important;
  color: #3a3a3a !important;
  font-weight: normal !important;
  text-transform: none !important;
  letter-spacing: normal !important;
}

.prestasi-subtitle {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

.program-list .q-item {
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s ease;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.program-list .q-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.program-list .q-item:hover {
  background-color: #e8f0fe;
}

.prestasi-list .q-item {
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s ease;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.prestasi-list .q-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.prestasi-list .q-item:hover {
  background-color: #e8f0fe;
}

.program-title {
  font-size: 1.05rem !important;
  font-weight: 700;
  color: #0a1f44;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.q-icon {
  background: #e3f2fd;
  border-radius: 50%;
  padding: 6px;
}

.q-card-section {
  position: relative;
}
.q-card-section > * {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  .section-header {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
  .program-title {
    font-size: 0.95rem !important;
  }
  .akademik-text {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    letter-spacing: normal !important;
  }
  .prestasi-subtitle {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  .program-list .q-item,
  .prestasi-list .q-item {
    margin-bottom: 8px;
    padding-bottom: 8px;
  }

  .page-wrapper {
    padding: 40px 16px 60px 16px;
  }
  .row.q-col-gutter-xl {
    margin-left: -16px !important;
    margin-top: -16px !important;
  }
  .row.q-col-gutter-xl > div {
    padding-left: 16px !important;
    padding-top: 16px !important;
  }
}
</style>
