import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'

/**
 * Main page
 */
import HomePage from '../components/pages/HomePage.vue'

/**
 * Chapter imports
 */
import ChapterList from '../components/pages/chapter/ChapterList.vue'
import CreateChapter from '../components/pages/chapter/CreateChapter.vue'
import EditChapter from '../components/pages/chapter/EditChapter.vue'

/**
 * Subject imports
 */
import SubjectList from '../components/pages/subjects/SubjectList.vue'
import EditSubject from '../components/pages/subjects/EditSubject.vue'
import CreateSubject from '../components/pages/subjects/CreateSubject.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },

  // Нужно сделать вложенность в роутах
  /**
   * Chapters routes
   */
  {
    path: '/chapters/',
    name: 'chaptersIndex',
    component: ChapterList
  },
  {
    path: '/chapters/create/',
    name: 'chaptersCreate',
    component: CreateChapter
  },
  {
    path: '/chapters/edit/:chapterId/',
    name: 'chaptersEdit',
    component: EditChapter
  },

  /**
   * Subject routes
   */
  {
    path: '/subjects/',
    name: 'subjectsIndex',
    component: SubjectList
  },
  {
    path: '/subjects/edit/:subjectId/',
    name: 'subjectsEdit',
    component: EditSubject
  },
  {
    path: '/subjects/create/',
    name: 'subjectsCreate',
    component: CreateSubject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
