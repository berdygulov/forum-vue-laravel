import axios from 'axios'

export const getSingleSubject = async (subjectId) => {
  const url = `http://127.0.0.1:8000/api/subjects/${subjectId}/show`
  return await axios
    .get(url)
    .then((res) => res.data.subject)
    .catch((err) => {
      console.log(err)
    })
}

