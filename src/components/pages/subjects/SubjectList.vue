<script>
import axios from 'axios'

export default {
  data() {
    return {
      subjects: Array,
      deleteSuccessMessage: ''
    }
  },
  created() {
    this.getSubjects()
  },
  methods: {
    // Все дата fetch-инги нужно вынести в отдельные директории и файлы
    async getSubjects() {
      let url = 'http://127.0.0.1:8000/api/subjects/'
      await axios
        .get(url)
        .then((res) => {
          this.subjects = res.data.subjects
          // console.log(res.data.subjects[0].chapter.name)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async destroySubject(subjectId) {
      this.deleteSuccessMessage = ''
      let url = `http://127.0.0.1:8000/api/subjects/${subjectId}/destroy`
      await axios
        .get(url)
        .then((res) => {
          if (res.data.code === 200) {
            this.deleteSuccessMessage = res.data.message
            this.getSubjects()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="flex mb-8">
      <h3 class="text-3xl">Темы</h3>
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
        :to="{ name: 'subjectsCreate' }"
        class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 transition-all duration-300"
      >
        Создать тему
      </router-link>
    </div>
    <div class="">
      <ul class="grid grid-cols-2 gap-6">
        <!-- Можно разбить на компонент и прокинуть пропсы -->
        <li
          v-for="subject in subjects"
          :key="subject.id"
          class="flex flex-col gap-y-4 px-7 py-5 bg-indigo-50 rounded-md justify-between transition-all duration-300 hover:shadow-md"
        >
          <div class="">
            <span class="leading-6 text-white bg-gray-400 px-1 py-1 rounded inline-flex text-xs">
              {{ subject?.chapter.name }}
            </span>
            <p class="font-bold leading-6 text-gray-900 mt-4">{{ subject.title }}</p>
            <p class="text-sm leading-5 text-gray-500 mt-1">{{ subject.description }}</p>
          </div>
          <div class="flex gap-2">
            <router-link
              :to="{ name: 'subjectsEdit', params: { subjectId: subject.id } }"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-300"
            >
              Редактировать
            </router-link>
            <button
              @click="destroySubject(subject.id)"
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
