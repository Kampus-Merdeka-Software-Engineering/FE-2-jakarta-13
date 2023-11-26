// Efek Slide

let currentProductIndex = 0;
const productSlides = document.querySelectorAll(".product-slide");

function showProduct(index) {
  productSlides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextProduct() {
  currentProductIndex = (currentProductIndex + 1) % productSlides.length;
  showProduct(currentProductIndex);
}

function prevProduct() {
  currentProductIndex =
    (currentProductIndex - 1 + productSlides.length) % productSlides.length;
  showProduct(currentProductIndex);
}

function autoSlide() {
  nextProduct();
}

setInterval(autoSlide, 5000);

// Tampilkan produk pertama saat halaman dimuat
showProduct(currentProductIndex);

// Memulai Navbar

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("tombol-about-us")
    .addEventListener("click", function () {
      window.location.href = "main-page.html#about-us";
    });
});

