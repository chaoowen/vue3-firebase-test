import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDgmM0KWoAoa0bYpV1bsNSeDBT_4587ouU",
  authDomain: "vite-vue3-test-cec53.firebaseapp.com",
  projectId: "vite-vue3-test-cec53",
  storageBucket: "vite-vue3-test-cec53.appspot.com",
  messagingSenderId: "75455923737",
  appId: "1:75455923737:web:7960c8eb1350b0443c4c88",
  databaseURL: "https://vite-vue3-test-cec53-default-rtdb.asia-southeast1.firebasedatabase.app"
}

// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig)

// Use these for db & auth
const db = firebase.database()
const auth = firebase.auth()

const func = {
  async setDbAnimalList(item) {
    const id = item.id
    console.log('cat!!!!!', item)
    await db.ref(`/test/animalList/${id}`).set(item)
      .then(() => {
        alert("新增成功")
      })
      .catch(() => {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },
  async getDbAnimalList() {
    return await db.ref(`/test/animalList`).get()
      .then((data) => {
        return data.exists() ? Object.values(data.val()) : []
      })
      .catch(() => {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },
  async deleteDbAnimalList(id) {
    await db.ref(`/test/animalList/${id}`).remove()
      .then(() => {
        alert("刪除成功")
      })
      .catch(() => {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },
  async upadteDbAnimalList(unit) {
    await db.ref(`/test/animalList/${unit.id}`).update({ favorite: parseInt(unit.favorite)+1 })
      .catch(() => {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },

  async setDbVisitTime(times) {
    await db.ref("/test/vist").set({
      time: times
    })
      .catch(() => {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },

  async getDbVisitTime() {
    return await db.ref("/test/vist").get()
      .then((data) => {
        if (data.exists()) {
          return data.val().time
        } else {
          console.log("No data")
        }
      })
      .catch(function () {
        alert("伺服器發生錯誤，請稍後再試")
      })
  },

}

export { func }

// export { auth, db }