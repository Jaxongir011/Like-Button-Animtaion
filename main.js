document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleButton");
    const activeClass = "liked";
  
    // Local storage'dan durumu oku ve butona uygula
    if (localStorage.getItem("buttonState") === "liked") {
      button.classList.add(activeClass);
      button.querySelector("span").textContent = "Liked";
    }
  
    // Butona tıklandığında sınıfı toggle et ve durumu local storage'a kaydet
    button.addEventListener("click", function (event) {
      event.preventDefault();
      button.classList.toggle(activeClass);
      if (button.classList.contains(activeClass)) {
        button.querySelector("span").textContent = "Liked";
        localStorage.setItem("buttonState", "liked");
      } else {
        button.querySelector("span").textContent = "Like";
        localStorage.removeItem("buttonState");
      }
    });
  });