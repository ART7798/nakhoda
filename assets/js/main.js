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
