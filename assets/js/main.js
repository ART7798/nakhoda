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
