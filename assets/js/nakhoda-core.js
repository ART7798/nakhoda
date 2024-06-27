// search box tabs
try {
  function openSearchTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll(".search-tab-content");
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll(".search-tab-link");
    tabLinks.forEach((link) => link.classList.remove("search-tab-active"));

    // Show the selected tab content and add active class to the corresponding tab link
    document.getElementById(tabId).classList.remove("hidden");
    event.currentTarget.classList.add("search-tab-active");
  }

  // Set default tab
  document.querySelector(".search-tab-link").click();
} catch (error) {
  console.log(error);
}


// for all dropdowns
try {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const dropdownContent = this.nextElementSibling;
        const arrow = this.querySelector(".dropdown-arrow");

        // Toggle the hidden class
        dropdownContent.classList.toggle("hidden");
        dropdownContent.classList.toggle("flex");
        // dropdownContent.classList.toggle("flex-col");

        // Rotate the arrow
        arrow.classList.toggle("open");
      });
    });
  });
} catch (error) {
  console.log(error);
}


// flight tabs
try {
  function openFlightTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll(".flight-tab-content");
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll(".flight-tab-link");
    tabLinks.forEach((link) => link.classList.remove("flight-tab-active"));

    // Show the selected tab content and add active class to the corresponding tab link
    document.getElementById(tabId).classList.remove("hidden");
    event.currentTarget.classList.add("flight-tab-active");
  }

  // Set default tab
  document.querySelector(".flight-tab-link").click();
} catch (error) {
  console.log(error);
}

// tour tabs
try {
  function openTourTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll(".tour-tab-content");
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll(".tour-tab-link");
    tabLinks.forEach((link) => link.classList.remove("tour-tab-active"));

    // Show the selected tab content and add active class to the corresponding tab link
    document.getElementById(tabId).classList.remove("hidden");
    event.currentTarget.classList.add("tour-tab-active");
  }

  // Set default tab
  document.querySelector(".tour-tab-link").click();
} catch (error) {
  console.log(error);
}

// question tabs
try {
  function openQuestionTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll(".question-tab-content");
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll(".question-tab-link");
    tabLinks.forEach((link) => link.classList.remove("question-tab-active"));

    // Show the selected tab content and add active class to the corresponding tab link
    document.getElementById(tabId).classList.remove("hidden");
    event.currentTarget.classList.add("question-tab-active");
  }

  // Set default tab
  document.querySelector(".question-tab-link").click();
} catch (error) {
  console.log(error);
}


// questions accordion
  try {
    document.addEventListener("DOMContentLoaded", () => {
      const accordionHeaders = document.querySelectorAll(".accordion-header");

      accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
          const currentlyOpenItem = document.querySelector(
            ".accordion-content:not(.hidden)"
          );
          const currentContent = header.nextElementSibling;
          const svgWrapper = header.querySelector(".svg-wrapper");

          if (currentlyOpenItem && currentlyOpenItem !== currentContent) {
            currentlyOpenItem.classList.add("hidden");
            const openSvgWrapper =
              currentlyOpenItem.previousElementSibling.querySelector(
                ".svg-wrapper"
              );
            openSvgWrapper.classList.remove("-rotate-90");
          }

          if (currentContent.classList.contains("hidden")) {
            currentContent.classList.remove("hidden");
            svgWrapper.classList.add("-rotate-90");
          } else {
            currentContent.classList.add("hidden");
            svgWrapper.classList.remove("-rotate-90");
          }
        });
      });
    });
  } catch (error) {
    console.error("Error initializing accordion:", error);
  }
  
  
  try{
    document.addEventListener("DOMContentLoaded", function () {
      const navbarToggle = document.querySelector(".navbar-toggle");
      const navbarOverlay = document.querySelector(".navbar-overlay");
      const navbarClose = document.querySelector(".navbar-close");
      const navbar = document.querySelector("nav");

      const openNavbar = () => {
        // navbar.classList.remove("hidden");
        navbar.classList.add("flex");
        navbarOverlay.classList.remove("hidden");

        navbar.classList.remove("hidden", "slide-out");
        navbar.classList.add("slide-in");
      };

      const closeNavbar = () => {
        navbar.classList.remove("slide-in");
        navbar.classList.add("slide-out");
        // navbar.classList.add("hidden");
        navbarOverlay.classList.add("hidden");
        
        setTimeout(() => {
          navbar.classList.remove("flex");
          navContainer.classList.add("hidden");
        }, 300);
      };

      navbarToggle.addEventListener("click", openNavbar);
      navbarOverlay.addEventListener("click", closeNavbar);
      navbarClose.addEventListener("click", closeNavbar);
    });

  }catch(error){
    console.error(error);
  }