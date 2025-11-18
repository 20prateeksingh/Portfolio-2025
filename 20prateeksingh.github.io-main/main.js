document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const alt = e.target.getAttribute("alt");
    document.getElementById("exampleModalLabel").textContent = alt;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show();
  }
})

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 1080px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1080 ||
    document.documentElement.scrollTop > 1080
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// Image stikcy fade

document.addEventListener("scroll", function () {
  const stickyImages = document.querySelectorAll(".stickyImage");

  stickyImages.forEach((el, index) => {
    const next = stickyImages[index + 1];
    if (!next) return;

    const elRect = el.getBoundingClientRect();
    const nextRect = next.getBoundingClientRect();

    const elHeight = elRect.height;
    const overlap = elRect.bottom - nextRect.top;

    // Calculate how much the next image is overlapping (from 0 to 1)
    const overlapRatio = overlap / elHeight;

    if (overlapRatio >= 0.1 && overlapRatio <= 1) {
      const fadeRatio = 1 - (overlapRatio - 0.1) / 0.9; // maps 0.25 -> 1 to 1 -> 0
      el.style.opacity = fadeRatio.toFixed(3);
    } else if (overlapRatio > 1) {
      el.style.opacity = 0;
    } else {
      el.style.opacity = 1;
    }
  });
});



// progress bar

document.addEventListener("DOMContentLoaded", () => {
  const OFFSET = 80; // Adjust if there's a sticky header
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const sectionIds = sections.map(s => s.id);
  const milestoneContainer = document.getElementById("milestoneSegments");
  const progressBar = document.getElementById("progressBar");

  const segments = [];

  // Create milestone segments
  sectionIds.forEach(id => {
    const segment = document.createElement("div");
    segment.className = "segment";
    segment.dataset.target = id;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = id;
    segment.appendChild(tooltip);

    milestoneContainer.appendChild(segment);
    segments.push(segment);

    // Scroll to the start of the section on click
    segment.addEventListener("click", () => {
      const section = document.getElementById(id);
      const scrollTo = section.offsetTop - OFFSET;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    });
  });

  // Track scroll and update loader and active segment
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const current = sections[i];
      const next = sections[i + 1];
      const currentTop = current.offsetTop - OFFSET;
      const nextTop = next ? next.offsetTop - OFFSET : document.body.scrollHeight;

      if (scrollY >= currentTop && scrollY < nextTop) {
        // Highlight active segment
        segments.forEach(s => s.classList.remove("active"));
        segments[i].classList.add("active");

        // Progress within current section
        const sectionHeight = nextTop - currentTop;
        const sectionProgress = (scrollY - currentTop) / sectionHeight;
        const totalProgress = (i + sectionProgress) / sections.length;

        progressBar.style.width = `${totalProgress * 100}%`;
        break;
      }
    }
  });
});
