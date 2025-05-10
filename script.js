function toggleMore() {
  const info = document.getElementById("about-me");
  const btn = document.querySelector(".btn");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    info.style.display = "none";
    btn.textContent = "About Me";
  }
}

document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slide');
  const prevBtn = slideshow.querySelector('.prev');
  const nextBtn = slideshow.querySelector('.next');
  let index = 0;
  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
  showSlide(index);
});

