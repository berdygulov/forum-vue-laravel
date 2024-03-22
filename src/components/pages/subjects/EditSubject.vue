<script>
import axios from 'axios'
import { getSingleSubject } from '../../../api/subject.js'

export default {
  data() {
    return {
      subject: {},
      errors: [],
      createSuccessMessage: ''
    }
  },
  async created() {
    this.subject = await getSingleSubject(this.$route.params.subjectId)
  },
  methods: {
    async submitForm() {
      this.errors = []
      this.createSuccessMessage = ''

      if (!this.subject.title) {
        this.errors.push({
          field: 'name',
          message: 'Поле имя обязательное поле'
        })
      }
      if (!this.errors.length) {
        let formData = new FormData()
        formData.append('title', this.subject.title)
        formData.append('description', this.subject.description)

        let url = `http://127.0.0.1:8000/api/subjects/${this.subject.id}/update`

        await axios
          .post(url, formData)
          .then((res) => {
            if (res.status === 200) {
              this.createSuccessMessage = res.data.message
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center">
      <div class="w-8/12">
        <div class="flex mb-8">
          <h3 class="text-3xl">Редактирование темы</h3>
        </div>
        <p class="text-red-500">Редактирование не доделано (принцип тот же как и с Разделами)</p>
        <div v-if="errors.length || createSuccessMessage" class="flex flex-wrap gap-2 mb-4">
          <span
            class="text-xs text-white bg-green-500 px-2 py-1.5 rounded inline-flex"
            v-if="createSuccessMessage"
          >
            {{ createSuccessMessage }}
          </span>
          <span
            class="text-xs text-white bg-red-500 px-2 py-1.5 rounded inline-flex"
            v-for="error in errors"
            :key="error.field"
          >
            {{ error.message }}
          </span>
        </div>
        <form @submit.prevent="submitForm">
          <div class="border-b border-gray-900/10 pb-12 mt-2">
            <h2 class="text-3xl font-bold leading-7 text-gray-900">Тема - #{{ subject.id }}</h2>
            <p class="mt-2 text-sm leading-6 text-gray-600">* - Обязательные поля для заполнения</p>
            <div class="mt-7 grid grid-cols-1 gap-y-6">
              <div class="flex flex-col">
                <label for="name" class="block leading-6 text-gray-900">Заголовок темы* </label>
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600"
                  >
                    <input
                      v-model="subject.title"
                      type="text"
                      name="name"
                      id="name"
                      class="block flex-1 border-0 bg-transparent py-2 pl-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col">
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900"
                  >Описание (не обязательно)</label
                >
                <div class="mt-2">
                  <textarea
                    v-model="subject.description"
                    id="description"
                    name="description"
                    rows="3"
                    class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                  ></textarea>
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa doloribus,
                  dolorem dolores et delectus odit!
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <!-- Form submit button -->
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Редактировать
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
