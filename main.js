const circle = document.querySelector(".circle");
const circleDark = document.querySelector(".circle-dark");
const start = document.getElementById("start");
let score = 0;
let interval = null;

start.addEventListener("click", () => {
  start.style.display = "none";
  score = 0;

  interval = setInterval(() => {
    let randomCircle = Math.random() > 0.3 ? 1 : 0;
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    if (randomCircle) {
      circle.style.top = randomY + "px";
      circle.style.left = randomX + "px";
      circle.style.display = "block";
    } else {
      circleDark.style.top = randomY + "px";
      circleDark.style.left = randomX + "px";
      circleDark.style.display = "block";
    }

    setTimeout(() => {
      circle.style.display = "none";
      circleDark.style.display = "none";
    }, 2000);
  }, 4000);
});

circle.addEventListener("click", () => {
  prevScore = score++;

  circle.style.display = "none";
});
circleDark.addEventListener("click", () => {
  clearInterval(interval);
  start.style.display = "block";
  alert(`YOU LOSE ${score}`);

  circleDark.style.display = "none";
});
