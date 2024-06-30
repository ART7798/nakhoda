// navbar
try {
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
} catch (error) {
  console.error(error);
}

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
  if (document.querySelector(".search-tab-link")) {
    document.querySelector(".search-tab-link").click();
  }
} catch (error) {
  console.log(error);
}

// for all dropdowns
try {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (event) {
        // Prevent the event from bubbling up to the document
        event.stopPropagation();

        const dropdownContent = this.nextElementSibling;
        const arrow = this.querySelector(".dropdown-arrow");

        // Toggle the hidden class if dropdownContent exists
        if (dropdownContent) {
          dropdownContent.classList.toggle("hidden");
          dropdownContent.classList.toggle("flex");
        }

        // Rotate the arrow if it exists
        if (arrow) {
          arrow.classList.toggle("open");
        }

        // Close all other dropdowns
        closeAllDropdowns(this);
      });
    });

    // Function to close all dropdowns except the current one
    function closeAllDropdowns(currentToggle) {
      dropdownToggles.forEach((toggle) => {
        if (toggle !== currentToggle) {
          const dropdownContent = toggle.nextElementSibling;
          const arrow = toggle.querySelector(".dropdown-arrow");

          if (
            dropdownContent &&
            !dropdownContent.classList.contains("hidden")
          ) {
            dropdownContent.classList.add("hidden");
            dropdownContent.classList.remove("flex");
          }
          if (arrow) {
            arrow.classList.remove("open");
          }
        }
      });
    }

    // Close dropdown when clicking outside of it
    document.addEventListener("click", function () {
      closeAllDropdowns();
    });

    // Close dropdown when clicking on a dropdown item
    const dropdownItems = document.querySelectorAll(".dropdown-content-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", function () {
        closeAllDropdowns();
      });
    });
  });

  function setFlightFormAction(action, item) {
    const flightForm = document.getElementById("flight-form");
    if (flightForm) {
      flightForm.action = action;
    }
    const selectedText = item.textContent;
    const dropdownToggle = item
      .closest(".dropdown")
      .querySelector(".selected-option");
    if (dropdownToggle) {
      dropdownToggle.textContent = selectedText;
    }
  }
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
  if (document.querySelector(".flight-tab-link")) {
    document.querySelector(".flight-tab-link").click();
  }
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
  if (document.querySelector(".tour-tab-link")) {
    document.querySelector(".tour-tab-link").click();
  }
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
  if (document.querySelector(".question-tab-link")) {
    document.querySelector(".question-tab-link").click();
  }
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

function empty_value(element) {
  // Set the value of the element to an empty string
  element.value = "";

  // Find the closest parent with class 'city' and then find the child with class 'co-id' and set its value to an empty string
  let cityElement = element.closest(".city");
  if (cityElement) {
    let coIdElement = cityElement.querySelector(".co-id");
    if (coIdElement) {
      coIdElement.value = "";
    }

    // Find the child with class 'searchList' and show it
    let searchListElement = cityElement.querySelector(".searchList");
    if (searchListElement) {
      searchListElement.style.display = "block";
      // Equivalent to fadeIn
    }

    // Find the sibling elements with class 'city' and hide their 'searchList' elements
    let siblingCities = cityElement.parentElement.querySelectorAll(".city");
    siblingCities.forEach((siblingCity) => {
      if (siblingCity !== cityElement) {
        let siblingSearchList = siblingCity.querySelector(".searchList");
        if (siblingSearchList) {
          // Equivalent to fadeOut
          siblingSearchList.style.display = "none";
        }
      }
    });
  }
}

function city_search(a) {
  console.log("search");
  var cityElement = a.closest(".city");
  if (cityElement) {
    var searchList = cityElement.querySelector(".searchList");
    if (searchList) {
      searchList.style.display = "none";
      // Equivalent to fadeOut
    }

    if (a.getAttribute("data-type") == "4") {
      a.value = "";
      var coIdElement = cityElement.querySelector(".co-id");
      if (coIdElement) {
        coIdElement.value = "";
      }

      if (a.getAttribute("data-active") == "0") {
        var miniLoading = cityElement.querySelector(".mini-loading");
        if (miniLoading) {
          miniLoading.classList.remove("hidden");
        }

        fetch(
          `/Client_City_Search.bc?term=${a.value}&type=${a.getAttribute(
            "data-type"
          )}&lid=1`
        )
          .then((response) => response.text())
          .then((result) => {
            a.setAttribute("data-active", "1");
            if (miniLoading) {
              miniLoading.classList.add("hidden");
            }
            var countryFlight = cityElement.querySelector(".countryFlight");
            if (countryFlight) {
              countryFlight.innerHTML = result;
              countryFlight.style.display = "block"; // Equivalent to fadeIn
            }
          });
      } else {
        var countryFlight = cityElement.querySelector(".countryFlight");
        if (countryFlight) {
          countryFlight.style.display = "block"; // Equivalent to fadeIn
        }
      }
    } else {
      if (a.which !== 0 && !a.ctrlKey && !a.metaKey && !a.altKey) {
        var upper_case =
          a.value.charAt(0).toUpperCase() + a.value.slice(1).toLowerCase();
        a.value = upper_case;

        if (a.value.length > 2) {
          var miniLoading = cityElement.querySelector(".mini-loading");
          if (miniLoading) {
            miniLoading.classList.remove("hidden");
          }

          fetch(
            `/Client_City_Search.bc?term=${a.value}&type=${a.getAttribute(
              "data-type"
            )}`
          )
            .then((response) => response.text())
            .then((result) => {
              if (miniLoading) {
                miniLoading.classList.add("hidden");
              }
              var countryFlight = cityElement.querySelector(".countryFlight");
              if (countryFlight) {
                countryFlight.innerHTML = result;
              }
            });
        } else {
          var countryFlight = cityElement.querySelector(".countryFlight");
          if (countryFlight) {
            countryFlight.innerHTML = "";
          }
        }
      }
    }
  }
}

document.querySelectorAll(".your-input-class").forEach(function (input) {
  input.addEventListener("input", function () {
    city_search(this);
  });
});

function SelectPlace(element) {
  // Get the data-id attribute of the element
  var idSelected = element.getAttribute("data-id");

  // Get the text content of the span within the element
  var textSelected = element.querySelector("span").textContent;

  // Find the closest parent with class 'city' and then find the child with class 'country' and set its value to the selected text
  var cityElement = element.closest(".city");
  if (cityElement) {
    var countryElement = cityElement.querySelector(".departure1");

    if (
      document.querySelector(".from") === countryElement &&
      document.querySelector(".to").value === textSelected
    ) {
      return;
    }
    if (
      document.querySelector(".to") === countryElement &&
      document.querySelector(".from").value === textSelected
    ) {
      return;
    }

    if (countryElement) {
      countryElement.value = textSelected;
    }

    // Find the child with class 'co-id' and set its value to the selected id
    var coIdElement = cityElement.querySelector(".co-id");
    if (coIdElement) {
      coIdElement.value = idSelected;
    }

    // Find the child with class 'searchList' and hide it
    var searchListElement = cityElement.querySelector(".searchList");
    if (searchListElement) {
      searchListElement.style.display = "none";
      // Equivalent to fadeOut
    }

    // Find the next sibling with class 'city' and trigger its 'onclick' event
    var nextCityElement = cityElement.nextElementSibling;
    if (nextCityElement && nextCityElement.classList.contains("city")) {
      var nextCountryElement = nextCityElement.querySelector(".country");
      if (nextCountryElement) {
        nextCountryElement.click(); // Trigger the 'onclick' event
      }
    }
  }
}

document.addEventListener("click", function (event) {
  // Check if the click was outside the specified elements for searchList
  if (!event.target.closest(".searchList, .country, .selectCountry")) {
    var searchLists = document.querySelectorAll(".searchList");
    searchLists.forEach(function (searchList) {
      // searchList.style.display = "none";
      // Equivalent to fadeOut
    });
  }

  // Check if the click was outside the specified elements for CountPassenger
  if (
    !event.target.closest(
      ".passenger_section, #ui-datepicker-div, .FlightClass, .Wrapper-CountPassenger, .plus-minus, .plus-minus-ch, .plus-minus-room, .createChildDropdown select, .add-room, .plus-minus-ins, .BithdatePassenger, .nice-select .option, .item-CountPassenger input"
    )
  ) {
    var countPassengers = document.querySelectorAll(".CountPassenger");
    countPassengers.forEach(function (countPassenger) {
      // countPassenger.style.display = "none";
      // Equivalent to fadeOut
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if the window width is less than or equal to 640 pixels
  if (window.innerWidth <= 640) {
    // Get references to the form elements by their IDs
    var flightForm = document.getElementById("flight-form");
    var hotelForm = document.getElementById("hotel-form");
    var flightHotelForm = document.getElementById("flightHotel-form");
    var insuranceForm = document.getElementById("insurance-form");
    var tourForm = document.getElementById("tour-form");
    var multiFlightForm = document.getElementById("multi-flight-form");

    // Update action attributes based on current action values
    if (flightForm.getAttribute("action") === "/Tem3_Roundtrip_Search.bc") {
      flightForm.setAttribute("action", "/M_Roundtrip_Search.bc");
    }
    if (flightForm.getAttribute("action") === "/Tem3_Oneway_Search.bc") {
      flightForm.setAttribute("action", "/M_Oneway_Search.bc");
    }

    hotelForm.setAttribute("action", "/M_Hotel_Search.bc");
    flightHotelForm.setAttribute("action", "/M_FlightHotel_Search.bc");
    insuranceForm.setAttribute("action", "/M_Insurance_Search.bc");
    tourForm.setAttribute("action", "/M_Tour_Search.bc");
    multiFlightForm.setAttribute("action", "/M_Multicity_Search.bc");
  }
});

// route changer
function change_route() {
  // Get the input elements
  var fromInput = document.querySelector(".departure1.from");
  var toInput = document.querySelector(".departure1.to");

  var fromValue = fromInput.value;
  var toValue = toInput.value;

  // Swap the values
  var temp = fromValue;
  fromValue = toValue;
  toValue = temp;

  var fromId = fromInput.nextElementSibling.value;
  var toId = toInput.nextElementSibling.value;
  // Get the current values
  // Swap the ids
  // var temp2 = fromId;
  // fromId = toId;
  // toId = temp2;

  console.log(fromInput.nextElementSibling, toInput.nextElementSibling);

  fromInput.nextElementSibling.value = toId;
  toInput.nextElementSibling.value = fromId;

  // Update the input fields with swapped values
  fromInput.value = fromValue;
  toInput.value = toValue;
}
