if ("serviceWorker" in navigator) {
  addEventListener("load",async function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
