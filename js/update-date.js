document.addEventListener("DOMContentLoaded", (event) => {
  const dateEls = document.querySelectorAll(".current-date");

  const currentDate = new Date();
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const dateString = `${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  dateEls.forEach((el) => (el.innerText = dateString));
});
