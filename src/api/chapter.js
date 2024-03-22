import axios from 'axios'

export const getSingleChapter = async (chapterId) => {
  const url = `http://127.0.0.1:8000/api/chapters/${chapterId}/show`
  return await axios
    .get(url)
    .then((res) => res.data.chapter)
    .catch((err) => {
      console.log(err)
    })
}

export const getChapters = async () => {
  const url = 'http://127.0.0.1:8000/api/chapters/'
  return await axios
    .get(url)
    .then((res) => res.data.chapters)
    .catch((err) => {
      console.log(err)
    })
}
