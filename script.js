var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
    } else {
      let panels = document.querySelectorAll(".panel");

      panels.forEach((panel) => {
        panel.classList.add("hidden");
      });
    }
  });
}
