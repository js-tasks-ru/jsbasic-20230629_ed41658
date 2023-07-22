function toggleText() {
  button = document.querySelector(".toggle-text-button");
  tekstik = document.getElementById("text");
  button.addEventListener("click", () =>
    tekstik.hidden === false
      ? (tekstik.hidden = true)
      : (tekstik.hidden = false)
  );
}
