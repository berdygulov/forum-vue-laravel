<script>
import axios from 'axios'
import { getChapters } from '../../../api/chapter.js'

export default {
  data() {
    return {
      chapters: Array,
      deleteSuccessMessage: ''
    }
  },
  async created() {
    await this.pullChapters()
  },
  methods: {
    async destroyChapter(chapterId) {
      this.deleteSuccessMessage = ''
      let url = `http://127.0.0.1:8000/api/chapters/${chapterId}/destroy`
      await axios
        .get(url)
        .then(async (res) => {
          if (res.data.code === 200) {
            this.deleteSuccessMessage = res.data.message
            await this.pullChapters()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    async pullChapters() {
      this.chapters = await getChapters()
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="flex mb-8">
      <h3 class="text-3xl">Разделы</h3>
    </div>
    <div v-if="deleteSuccessMessage" class="flex flex-wrap gap-2 mb-4">
      <span
        class="text-xs text-white bg-green-500 px-2 py-1.5 rounded inline-flex"
        v-if="deleteSuccessMessage"
      >
        {{ deleteSuccessMessage }}
      </span>
    </div>
    <div class="flex mb-8">
      <router-link
        :to="{ name: 'chaptersCreate' }"
        class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 transition-all duration-300"
      >
        Создать раздел
      </router-link>
    </div>
    <div class="">
      <ul class="grid grid-cols-2 gap-6">
        <!-- Можно разбить на компонент и прокинуть пропсы -->
        <li
          v-for="chapter in chapters"
          :key="chapter.id"
          class="flex flex-col gap-y-4 px-7 py-5 bg-gray-50 rounded-md justify-between transition-all duration-300 hover:shadow-md"
        >
          <div class="">
            <p class="font-bold leading-6 text-gray-900">{{ chapter.name }}</p>
            <p class="mt-1 text-sm leading-5 text-gray-500">{{ chapter.description }}</p>
          </div>
          <div class="flex gap-2">
            <router-link
              :to="{ name: 'chaptersEdit', params: { chapterId: chapter.id } }"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-300"
            >
              Редактировать
            </router-link>
            <button
              @click="destroyChapter(chapter.id)"
              type="button"
              class="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 transition-all duration-300"
            >
              Удалить
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
