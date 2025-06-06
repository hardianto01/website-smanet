<template>
  <q-page class="q-pa-md page-container">
    <div class="content-wrapper">
      <div class="text-center q-mb-lg">
        <div class="main-page-title text-h4 text-weight-bold q-px-sm">Berita & Pengumuman</div>
        <div class="main-page-subtitle text-subtitle1 text-grey-8">
          Informasi Terbaru dan Penting dari Sekolah
        </div>
      </div>

      <q-separator class="q-my-md separator-line" />

      <div class="row q-col-gutter-md q-mb-xl">
        <div class="col-12 col-md-8">
          <div class="section-block">
            <div class="section-title text-h5 text-weight-bold q-mb-md">
              <q-icon name="article" class="q-mr-sm section-icon" /> Berita Terbaru
            </div>

            <div v-if="loadingNews" class="text-center q-mt-md">
              <q-spinner color="primary" size="3em" />
              <p class="text-grey-7 q-mt-sm">Memuat berita...</p>
            </div>

            <div v-else-if="newsError" class="text-center q-mt-md error-message">
              <q-icon name="error_outline" color="negative" size="md" />
              <p class="text-negative q-mt-sm">{{ newsError }}</p>
              <p class="text-grey-7">Gagal memuat berita. Silakan coba lagi nanti.</p>
            </div>

            <q-list v-else-if="newsList.length > 0" bordered separator class="data-list">
              <q-item
                v-for="newsItem in newsList"
                :key="newsItem.id"
                clickable
                v-ripple
                @click="selectItem('news', newsItem.slug || newsItem.id)"
                :active="
                  selectedItemIdentifier === (newsItem.slug || newsItem.id) &&
                  selectedItemType === 'news'
                "
                active-class="list-item-active"
                class="list-item"
              >
                <q-item-section avatar>
                  <q-img
                    v-if="newsItem.image_url"
                    :src="getFullImageUrl(newsItem.image_url)"
                    spinner-color="primary"
                    fit="cover"
                    class="list-item-thumbnail"
                  />
                  <q-icon v-else name="newspaper" color="primary" class="list-item-icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-medium list-item-title">{{
                    newsItem.title
                  }}</q-item-label>
                  <q-item-label caption class="list-item-caption">
                    Oleh: {{ newsItem.author }} • Dipublikasikan:
                    {{ formatDate(newsItem.published_at) }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="grey-6" />
                </q-item-section>
              </q-item>
            </q-list>

            <div v-else class="text-center text-grey-7 q-mt-md no-data-message">
              <q-icon name="info_outline" color="grey-6" size="md" />
              <p class="q-mt-sm">Tidak ada data berita saat ini.</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="section-block">
            <div class="section-title text-h5 text-weight-bold q-mb-md">
              <q-icon name="campaign" class="q-mr-sm section-icon" /> Pengumuman
            </div>

            <div v-if="loadingAnnouncements" class="text-center q-mt-md">
              <q-spinner color="teal" size="3em" />
              <p class="text-grey-7 q-mt-sm">Memuat pengumuman...</p>
            </div>

            <div v-else-if="announcementsError" class="text-center q-mt-md error-message">
              <q-icon name="error_outline" color="negative" size="md" />
              <p class="text-negative q-mt-sm">{{ announcementsError }}</p>
              <p class="text-grey-7">Gagal memuat pengumuman. Silakan coba lagi nanti.</p>
            </div>

            <q-list v-else-if="announcementsList.length > 0" bordered separator class="data-list">
              <q-item
                v-for="announcementItem in announcementsList"
                :key="announcementItem.id"
                clickable
                v-ripple
                @click="selectItem('announcement', announcementItem.id)"
                :active="
                  selectedItemIdentifier === announcementItem.id &&
                  selectedItemType === 'announcement'
                "
                active-class="list-item-active"
                class="list-item"
              >
                <q-item-section avatar>
                  <q-icon name="announcement" color="teal" class="list-item-icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-medium list-item-title">{{
                    announcementItem.title
                  }}</q-item-label>
                  <q-item-label caption class="list-item-caption">
                    Dipublikasikan: {{ formatDate(announcementItem.published_at) }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="grey-6" />
                </q-item-section>
              </q-item>
            </q-list>

            <div v-else class="text-center text-grey-7 q-mt-md no-data-message">
              <q-icon name="info_outline" color="grey-6" size="md" />
              <p class="q-mt-sm">Tidak ada data pengumuman saat ini.</p>
            </div>
          </div>
        </div>
      </div>

      <q-separator class="q-my-md separator-line" />

      <div ref="detailSection" class="detail-section-block">
        <div class="section-title text-h5 text-weight-bold q-mb-md">
          <q-icon name="info" class="q-mr-sm section-icon" /> Detail Konten
        </div>

        <div v-if="loadingDetail" class="text-center q-mt-xl">
          <q-spinner color="primary" size="3em" />
          <p class="text-grey-7 q-mt-sm">Memuat detail...</p>
        </div>

        <div v-else-if="detailError" class="text-center q-mt-xl error-message">
          <q-icon name="error_outline" color="negative" size="md" />
          <p class="text-negative q-mt-sm">{{ detailError }}</p>
          <p class="text-grey-7">Gagal memuat detail konten. Silakan coba lagi nanti.</p>
        </div>

        <div
          v-else-if="!selectedItem"
          class="text-center text-grey-7 q-mt-xl no-data-message detail-placeholder"
        >
          <q-icon name="info_outline" color="grey-6" size="md" />
          <p class="q-mt-sm text-weight-medium">DETAIL PENGUMUMAN DAN BERITA</p>
          <p class="q-mt-sm">Pilih Berita atau Pengumuman di atas untuk melihat detail.</p>
        </div>

        <div v-else>
          <div class="item-title text-h4 text-weight-bold q-mb-sm">
            {{ selectedItem.title }}
          </div>

          <div class="item-meta text-subtitle2 text-grey-7 q-mb-md">
            Oleh: {{ selectedItem.author }} • Dipublikasikan:
            {{ formatDate(selectedItem.published_at) }}
          </div>

          <q-separator class="q-my-md separator-line" />

          <div v-if="selectedItem.image_url" class="item-image-container q-mb-md text-center">
            <q-img
              :src="getFullImageUrl(selectedItem.image_url)"
              spinner-color="primary"
              fit="contain"
              class="item-image"
            />
          </div>

          <div class="item-content text-body1 text-grey-9">
            <div v-html="selectedItem.content"></div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue' // Import nextTick
import { useRouter, useRoute } from 'vue-router'
import {
  QPage,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QIcon,
  QSeparator,
  QSpinner,
  QImg,
  useQuasar,
} from 'quasar'
// Pastikan path import ini sesuai dengan lokasi file API service kamu
import {
  fetchAllNews,
  fetchAllAnnouncements,
  fetchNewsByIdOrSlug,
  fetchAnnouncementById,
} from 'src/api/newsAndAnnouncementsApi'
import { BASE_API_URL } from '../boot/config'

const $q = useQuasar()
const router = useRouter()
const route = useRoute()

const newsList = ref([])
const announcementsList = ref([])
const loadingNews = ref(true)
const loadingAnnouncements = ref(true)
const newsError = ref(null)
const announcementsError = ref(null)

// State untuk detail konten
const selectedItem = ref(null)
const selectedItemType = ref(null)
const selectedItemIdentifier = ref(null)
const loadingDetail = ref(false)
const detailError = ref(null)

// Ref untuk elemen detail section
const detailSection = ref(null) // Deklarasikan ref

// Fungsi untuk mengambil semua berita
const loadNews = async () => {
  loadingNews.value = true
  newsError.value = null
  try {
    const data = await fetchAllNews()
    newsList.value = data
  } catch (err) {
    console.error('Error loading news:', err)
    newsError.value = `Request failed: ${err.message}`
    const errorMessage = err.response?.data?.message || err.message
    console.error('Detailed News Error:', errorMessage)
    $q.notify({
      color: 'negative',
      message: `Gagal memuat berita: ${errorMessage}`,
      position: 'top',
      icon: 'report_problem',
    })
  } finally {
    loadingNews.value = false
  }
}

// Fungsi untuk mengambil semua pengumuman
const loadAnnouncements = async () => {
  loadingAnnouncements.value = true
  announcementsError.value = null
  try {
    const data = await fetchAllAnnouncements()
    announcementsList.value = data
  } catch (err) {
    console.error('Error loading announcements:', err)
    announcementsError.value = `Request failed: ${err.message}`
    const errorMessage = err.response?.data?.message || err.message
    console.error('Detailed Announcements Error:', errorMessage)
    $q.notify({
      color: 'negative',
      message: `Gagal memuat pengumuman: ${errorMessage}`,
      position: 'top',
      icon: 'report_problem',
    })
  } finally {
    loadingAnnouncements.value = false
  }
}

// Fungsi untuk memilih item dan memuat detailnya, lalu scroll
const selectItem = (type, identifier) => {
  selectedItemType.value = type
  selectedItemIdentifier.value = identifier
  // loadItemDetail akan dipanggil oleh watcher
  // Scroll dilakukan setelah detail dimuat
}

// Fungsi untuk memuat data detail berdasarkan tipe dan identifier yang dipilih
const loadItemDetail = async () => {
  const type = selectedItemType.value
  const identifier = selectedItemIdentifier.value

  if (!type || !identifier) {
    selectedItem.value = null
    detailError.value = null
    loadingDetail.value = false
    return // Tidak ada item yang dipilih, kosongkan detail
  }

  loadingDetail.value = true
  detailError.value = null
  selectedItem.value = null // Kosongkan item sebelumnya saat memuat yang baru

  console.log(`Fetching detail for type: ${type}, identifier: ${identifier}`)

  try {
    let data = null
    if (type === 'news') {
      data = await fetchNewsByIdOrSlug(identifier)
    } else if (type === 'announcement') {
      data = await fetchAnnouncementById(identifier)
    }
    selectedItem.value = data
    console.log('Item detail data received:', selectedItem.value)

    if (!data) {
      detailError.value = 'Konten tidak ditemukan.'
    }

    // --- TAMBAHKAN LOGIKA SCROLL DI SINI ---
    // Gunakan nextTick untuk memastikan DOM sudah diperbarui setelah data detail diterima
    await nextTick()
    if (detailSection.value) {
      detailSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // --- AKHIR LOGIKA SCROLL ---
  } catch (err) {
    console.error(`Error loading ${type} detail:`, err)
    const errorMessage = err.response?.data?.message || err.message
    detailError.value = `Gagal memuat detail: ${errorMessage}`
    $q.notify({
      color: 'negative',
      message: `Gagal memuat detail: ${errorMessage}`,
      position: 'top',
      icon: 'report_problem',
    })
  } finally {
    loadingDetail.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  try {
    const date = new Date(String(dateString))
    if (isNaN(date.getTime())) {
      console.warn('Invalid date string for formatting:', dateString)
      return dateString
    }
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    return date.toLocaleDateString('id-ID', options)
  } catch (e) {
    console.error('Error formatting date:', dateString, e)
    return dateString
  }
}

const getFullImageUrl = (imagePath) => {
  if (imagePath && typeof imagePath === 'string' && imagePath.startsWith('/uploads/')) {
    return BASE_API_URL + imagePath
  }
  return imagePath
}

// Watcher: Memuat detail setiap kali selectedItemType atau selectedItemIdentifier berubah
watch([selectedItemType, selectedItemIdentifier], () => {
  loadItemDetail()
})

onMounted(() => {
  console.log('NewsAndAnnouncementsListPage mounted. Fetching lists.')
  loadNews()
  loadAnnouncements()
})
</script>

<style scoped>
.page-container {
  background-color: #f0f2f5;
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.main-page-title {
  background: linear-gradient(to right, #004b87, #0077b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: 1px;
  white-space: normal;
  word-break: break-word;
  padding: 0 10px;
}

.main-page-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: #616161;
  margin-top: 4px;
}

.separator-line {
  background-color: #e0e0e0;
  margin: 30px 0;
}

.section-block {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0056b3;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
}

.section-icon {
  font-size: 1.2em;
  color: #007bff;
}

.data-list {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
}

.list-item {
  padding: 15px 20px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.list-item:hover {
  background-color: #e3f2fd;
  transform: translateX(5px);
}

.list-item-active {
  background-color: #bbdefb;
  font-weight: bold;
}

.list-item-thumbnail {
  width: 80px;
  height: 50px;
  border-radius: 4px;
  margin-right: 15px;
  object-fit: cover;
}

.list-item-icon {
  font-size: 1.8em;
  margin-right: 15px;
}

.list-item-title {
  font-size: 1.1rem;
  color: #333;
}

.list-item-caption {
  font-size: 0.85rem;
  color: #757575;
  margin-top: 4px;
}

.error-message {
  color: #d32f2f;
  font-weight: 500;
  padding: 15px;
  background-color: #ffcdd2;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-message .q-icon {
  margin-right: 10px;
}

.no-data-message {
  color: #757575;
  font-style: italic;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-data-message .q-icon {
  margin-right: 10px;
}

.detail-section-block {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.detail-section-block .section-title {
  color: #00796b;
  border-bottom-color: #009688;
}

.detail-section-block .section-icon {
  color: #009688;
}

.detail-placeholder {
  padding: 40px 20px;
  background-color: #e0f2f7;
  border-radius: 8px;
  border: 1px dashed #b2ebf2;
  flex-direction: column;
}

.detail-placeholder .q-icon {
  font-size: 3em;
  margin-bottom: 10px;
  color: #00bcd4;
}

.detail-placeholder p {
  margin: 5px 0;
}

.detail-placeholder .text-weight-medium {
  font-size: 1.2rem;
  color: #00796b;
}

.item-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
}

.item-meta {
  font-size: 0.9rem;
  color: #757575;
  margin-bottom: 20px;
}

.item-image-container {
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.item-image {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.item-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 1023px) {
  .col-md-8,
  .col-md-4 {
    width: 100%;
  }
  .row.q-col-gutter-md > div {
    margin-bottom: 20px;
  }
  .row.q-col-gutter-md > div:last-child {
    margin-bottom: 0;
  }
  .content-wrapper {
    max-width: 95%;
  }
}

@media (max-width: 600px) {
  .content-wrapper {
    padding: 15px;
  }
  .main-page-title {
    font-size: 2rem;
  }
  .main-page-subtitle {
    font-size: 0.9rem;
  }
  .section-title {
    font-size: 1.4rem;
  }
  .list-item {
    padding: 12px 15px;
  }
  .list-item-title {
    font-size: 1rem;
  }
  .list-item-caption {
    font-size: 0.8rem;
  }
  .separator-line {
    margin: 20px 0;
  }
  .item-title {
    font-size: 1.5rem;
  }
  .item-meta {
    font-size: 0.8rem;
  }
  .item-content {
    font-size: 0.95rem;
  }
  .list-item-thumbnail {
    width: 60px;
    height: 40px;
    margin-right: 10px;
  }
  .list-item-icon {
    margin-right: 10px;
  }
  .detail-placeholder {
    padding: 20px 15px;
  }
  .detail-placeholder .q-icon {
    font-size: 2.5em;
  }
  .detail-placeholder .text-weight-medium {
    font-size: 1.1rem;
  }
}
</style>
