var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let nextPanel = panel.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      nextPanel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// //bug: closing the top panel doesn't close the bottom panel.  I want to close the bottom panel when the top panel is closed.
