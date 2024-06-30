//<!----------------------------START JS SEARCHBOX ------------------------------>
if ($(window).width() >= 1024) {
  $("#Flight").addClass("active-module");
}
$(document).ready(function () {
  $("#backtoback").click(function () {
    $(this).closest("#item-Flight").find("form").attr("data-flightType", "2");
    $("#flight-form").removeClass("unvisible");
    $("#multi-flight-form").addClass("unvisible");
    $(this).addClass("active-flight-type");
    $("#oneway").removeClass("active-flight-type");
    $("#multicity").removeClass("active-flight-type");
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .addClass("nextCalOpening");
    $(this).closest("#item-Flight").find(".end_date").prop("disabled", false);
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .closest("div")
      .find(".date-value")
      .prop("disabled", false);
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .closest("div")
      .removeClass("Noactive-date");
    if ($(window).width() <= 1024) {
      $("#flight-form").attr("action", "/M_Roundtrip_Search.bc");
    }
    $(this).find("input").prop("checked", true);
  });
  $("#oneway").click(function () {
    $(this).closest("#item-Flight").find("form").attr("data-flightType", "1");
    $("#flight-form").removeClass("unvisible");
    $("#multi-flight-form").addClass("unvisible");
    $(this).addClass("active-flight-type");
    $("#backtoback").removeClass("active-flight-type");
    $("#multicity").removeClass("active-flight-type");
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .removeClass("nextCalOpening");
    $(this).closest("#item-Flight").find(".end_date").val("");
    $(this).closest("#item-Flight").find(".end_date").prop("disabled", true);
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .closest("div")
      .find(".date-value")
      .prop("disabled", true);
    $(this)
      .closest("#item-Flight")
      .find(".end_date")
      .closest("div")
      .addClass("Noactive-date");
    if ($(window).width() <= 1024) {
      $("#flight-form").attr("action", "/M_Oneway_Search.bc");
    }
    $(this).find("input").prop("checked", true);
  });
  $("#Flight").click(function () {
    $(this).addClass("active-module");
    $(this).siblings("li").removeClass("active-module");
    $("#item-Flight").show();
    $("#item-Hotel,#item-Tour,#item-FlightHotel,#item-Insurance").hide();
    if ($(".engine-content").hasClass("max-lg:hidden")) {
      $(".engine-content").removeClass("max-lg:hidden");
    }
  });
  $("#Hotel").click(function () {
    $(this).addClass("active-module");
    $(this).siblings("li").removeClass("active-module");
    $("#item-Hotel").show();
    $("#item-Flight,#item-Tour,#item-FlightHotel,#item-Insurance").hide();
    if ($(".engine-content").hasClass("max-lg:hidden")) {
      $(".engine-content").removeClass("max-lg:hidden");
    }
  });
  $("#FlightHotel").click(function () {
    $(this).addClass("active-module");
    $(this).siblings("li").removeClass("active-module");
    $("#item-FlightHotel").show();
    $("#item-Flight,#item-Hotel,#item-Tour,#item-Insurance").hide();
    if ($(".engine-content").hasClass("max-lg:hidden")) {
      $(".engine-content").removeClass("max-lg:hidden");
    }
  });
  $("#Tour").click(function () {
    $(this).addClass("active-module");
    $(this).siblings("li").removeClass("active-module");
    $("#item-Tour").show();
    $("#item-Flight,#item-Hotel,#item-FlightHotel,#item-Insurance").hide();
    if ($(".engine-content").hasClass("max-lg:hidden")) {
      $(".engine-content").removeClass("max-lg:hidden");
    }
  });

  $("#Insurance").click(function () {
    $(this).addClass("active-module");
    $(this).siblings("li").removeClass("active-module");
    $("#item-Insurance").show();
    $("#item-Flight,#item-Hotel,#item-Tour,#item-FlightHotel").hide();
    if ($(".engine-content").hasClass("max-lg:hidden")) {
      $(".engine-content").removeClass("max-lg:hidden");
    }
  });
});

function flight_class(element) {
  $(".flight-class").text($(element).find("option:selected").text());
}
if ($(window).width() <= 1024) {
  if ($("#flight-form").attr("action") == "/Tem3_Roundtrip_Search.bc") {
    $("#flight-form").attr("action", "/M_Roundtrip_Search.bc");
  }
  if ($("#flight-form").attr("action") == "/Tem3_Oneway_Search.bc") {
    $("#flight-form").attr("action", "/M_Oneway_Search.bc");
  }
  $("#hotel-form").attr("action", "/M_Hotel_Search.bc");
  $("#flightHotel-form").attr("action", "/M_FlightHotel_Search.bc");
  $("#insurance-form").attr("action", "/M_Insurance_Search.bc");
  $("#tour-form").attr("action", "/M_Tour_Search.bc");
  $("#multi-flight-form").attr("action", "/M_Multicity_Search.bc");
}

function openNextCal(e) {
  let activeBtn = $(".search-nav ul > .active-module").attr("data-id");
  if (activeBtn == "item-FlightHotel") {
    if ($(".check-hotel-date-container").is(":visible")) {
      if ($(".check-hotel-date-container").find(".checkin").val() != "") {
        let returnDate = $(".check-hotel-date-container")
          .find(".nextCalOpeningex")
          .val();
        if (returnDate == "") {
          $(".check-hotel-date-container")
            .find(".nextCalOpeningex")
            .trigger("onclick");
        }
      } else {
        let returnDate = $("#" + activeBtn)
          .find(".nextCalOpening")
          .val();
        if (returnDate == "") {
          $("#" + activeBtn)
            .find(".nextCalOpening")
            .trigger("onclick");
        }
      }
    } else {
      let returnDate = $("#" + activeBtn)
        .find(".nextCalOpening")
        .val();
      if (returnDate == "") {
        $("#" + activeBtn)
          .find(".nextCalOpening")
          .trigger("onclick");
      }
    }
  } else {
    let returnDate = $("#" + activeBtn)
      .find(".nextCalOpening")
      .val();
    if (returnDate == "") {
      $("#" + activeBtn)
        .find(".nextCalOpening")
        .trigger("onclick");
    }
  }
}

////////<!----- JS  FLIGHT ---->////////

function empty_value(element) {
  $(element).val("");
  $(element).closest(".city").find(".co-id").val("");
  $(element).closest(".city").find(".searchList").fadeIn();
  $(element).closest(".city").siblings(".city").find(".searchList").fadeOut();
}

function set_city_search(element) {
  if ($(element).closest(".city").find(".countryFlight").text().length > 0) {
    if (hoverelse == 0) {
      var defresult = $(element)
        .closest(".city")
        .find(".countryFlight")
        .children(".selectCountry:first")
        .find(".txtcountry")
        .text();
      var defresultid = $(element)
        .closest(".city")
        .find(".countryFlight")
        .children(".selectCountry:first")
        .find(".countryid")
        .val();
      $(element).closest(".city").find(".country").val(defresult);
      $(element).closest(".city").find(".co-id").val(defresultid);
      $(element).closest(".city").find(".countryFlight").empty();
    }
  } else {
    $(element).closest(".city").find(".mini-loading").addClass("hidden");
    $(element).closest(".city").find(".country").val("");
    $(element).closest(".city").find(".co-id").val("");
  }
}

function city_search(a) {
  $(a).closest(".city").find(".searchList").fadeOut();
  if ($(a).attr("data-type") == 4) {
    $(a).val("");
    $(a).closest(".city").find(".co-id").val("");
    if ($(a).attr("data-active") == 0) {
      $(a).closest(".city").find(".mini-loading").removeClass("hidden");
      $.ajax({
        url: "/Client_City_Search.bc",
        type: "get",
        data: {
          term: $(a).val(),
          type: $(a).attr("data-type"),
          lid: "1",
        },
        success: function (result) {
          $(a).attr("data-active", "1");
          $(a).closest(".city").find(".mini-loading").addClass("hidden");
          $(a).closest(".city").find(".countryFlight").empty().html(result);
          $(a).closest(".city").find(".countryFlight").fadeIn();
        },
      });
    } else {
      $(a).closest(".city").find(".countryFlight").fadeIn();
    }
  } else {
    if (a.which !== 0 && !a.ctrlKey && !a.metaKey && !a.altKey) {
      upper_case =
        $(a).val().substr(0, 1).toUpperCase() +
        $(a).val().substr(1).toLowerCase();
      $(a).val(upper_case);
      if ($(a).val().length > 2) {
        $(a).closest(".city").find(".mini-loading").removeClass("hidden");
        $.ajax({
          url: "/Client_City_Search.bc",
          type: "get",
          data: {
            term: $(a).val(),
            type: $(a).attr("data-type"),
          },
          success: function (result) {
            $(a).closest(".city").find(".mini-loading").addClass("hidden");
            $(a).closest(".city").find(".countryFlight").empty().html(result);
          },
        });
      } else $(a).closest(".city").find(".countryFlight").empty();
    }
  }
}

function SelectPlace(element) {
  var idSelected = $(element).attr("data-id");
  var textSelected = $(element).find("span").text();
  $(element).closest(".city").find(".country").val(textSelected);
  $(element).closest(".city").find(".co-id").val(idSelected);
  $(element).closest(".city").find(".searchList").fadeOut();
  $(element).closest(".city").next(".city").find(".country").trigger("onclick");
}
$(document).on("click", function (event) {
  if (!$(event.target).closest(".searchList,.country,.selectCountry").length) {
    $(".searchList").fadeOut();
  }
  if (
    !$(event.target).closest(
      ".passenger_section,#ui-datepicker-div,.FlightClass,.Wrapper-CountPassenger,.plus-minus,.plus-minus-ch,.plus-minus-room,.createChildDropdown select,.add-room,.plus-minus-ins,.BithdatePassenger,.nice-select .option,.item-CountPassenger input"
    ).length
  ) {
    $(".CountPassenger").fadeOut();
  }
});

function show_passengers(element) {
  $(element).closest("form").find(".CountPassenger").fadeIn();
}
$(".confirm").click(function (e) {
  $(this).closest(".CountPassenger").fadeOut();
});
$(".plus-minus").on("click", function () {
  var button = $(this);
  var oldVal = parseInt(
    button.closest(".item-CountPassenger").find("input").val()
  );
  var newVal =
    button.text().indexOf("+") > -1 ? oldVal + 1 : oldVal > 0 ? oldVal - 1 : 0;
  if (newVal >= 2) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .addClass("minus-btn-active");
  }
  if (newVal < 2) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .removeClass("minus-btn-active");
  }
  if (newVal >= 10) return;
  if (newVal < 1) return;
  button.closest(".item-CountPassenger").find("input").val(newVal);
  var passengers_count =
    parseInt(button.closest("form").find(".child-count").val()) +
    parseInt(newVal);
  button
    .closest("form")
    .find(".count-passengers .count")
    .text(passengers_count);
});
$(".plus-minus-ch").on("click", function () {
  var button = $(this);
  var oldVal = parseInt(
    button.closest(".item-CountPassenger").find("input").val()
  );
  var newVal =
    button.text().indexOf("+") > -1 ? oldVal + 1 : oldVal > 0 ? oldVal - 1 : 0;
  if (newVal >= 1) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .addClass("minus-btn-active");
  }
  if (newVal < 1) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .removeClass("minus-btn-active");
  }
  if (newVal >= 5) return;
  button.closest(".item-CountPassenger").find("input").val(newVal);
  if (newVal == 0) {
    button.closest(".item-CountPassenger").find(".child").val(newVal);
  } else {
    button
      .closest(".item-CountPassenger")
      .find(".child")
      .val(newVal + ",");
  }
  var passengers_count =
    parseInt(button.closest("form").find(".adult").val()) + parseInt(newVal);
  button
    .closest("form")
    .find(".count-passengers .count")
    .text(passengers_count);
  if (oldVal < newVal) {
    button
      .closest(".item-CountPassenger")
      .find(".section-select-age")
      .append(createChildDropdown(newVal));
  } else if (oldVal > newVal) {
    destroyChildDropdown(
      button.closest(".item-CountPassenger").find(".section-select-age"),
      newVal
    );
  }
});
var createChildDropdown = function (i) {
  var $childDropdown = $("<div />", {
    class: "createChildDropdown",
  });
  $childDropdown.append(
    $("<label />", {
      for: "childDropdown-" + i,
    }).text("سن کودک " + i)
  );
  $childDropdown.append($("<select />"));
  var options = [
    "تا 1 سال",
    "1 تا 2  ",
    "2 تا 3 ",
    "3 تا 4  ",
    "4 تا 5 ",
    "5 تا 6 ",
    "6 تا 7 ",
    "7 تا 8 ",
    "8 تا 9 ",
    "9 تا 10 ",
    "10 تا 11 ",
    "11 تا 12 ",
  ];
  options.forEach(function (option, index) {
    $childDropdown.find("select").append(
      $("<option />")
        .text(option)
        .attr("value", index + 1)
    );
  });
  return $childDropdown;
};
var destroyChildDropdown = function ($el, i) {
  $el.find("div.createChildDropdown").get(i).remove();
};
$(".fa-exchange-container").click(function () {
  var dep = $(this).closest(".justify-between").find(".FCD1").val();
  var des = $(this).closest(".justify-between").find(".FCD2").val();
  var depid = $(this).closest(".justify-between").find(".FCDid1").val();
  var desid = $(this).closest(".justify-between").find(".FCDid2").val();
  $(this).closest(".justify-between").find(".FCD1").val(des);
  $(this).closest(".justify-between").find(".FCD2").val(dep);
  $(this).closest(".justify-between").find(".FCDid1").val(desid);
  $(this).closest(".justify-between").find(".FCDid2").val(depid);
});

function show_flight_class(element) {
  $(element)
    .closest("form")
    .find(".class-select")
    .text($(element).find("option:selected").text());
}
////////<!----- JS  MULTICITY ---->////////
if ($(window).width() >= 1024) {
  $("#multi-flight-form")
    .find(".route-content")
    .each(function () {
      $(this).addClass("set_Date_Box");
    });
}

function showMultiCity(element) {
  $("#multi-flight-form").removeClass("unvisible");
  $("#flight-form").addClass("unvisible");
  $(this).addClass("active-flight-type");
  $("#oneway").removeClass("active-flight-type");
  $("#backtoback").removeClass("active-flight-type");
}
const destination_nth_txt = ["مقصد اول", "مقصد دوم", "مقصد سوم", "مقصد چهارم"];
function addMulticityRoute(element) {
  if (
    document
      .querySelector(".route-container")
      .querySelectorAll(".route-content").length < 4
  ) {
    const appended_element = document
      .querySelector(".route-container")
      .querySelectorAll(".route-content")[0].innerHTML;
    const child = document.createElement("div");
    child.innerHTML = appended_element;

    if ($(window).width() >= 1024) {
      child.className = "route-content set_Date_Box";
    } else {
      child.className = "route-content";
    }
    child.querySelector(".multi-route-tlt").innerText =
      destination_nth_txt[
        document
          .querySelector(".route-container")
          .querySelectorAll(".route-content").length
      ];
    child.querySelectorAll("input").forEach((e) => {
      e.value = "";
    });
    child.insertAdjacentHTML(
      "beforeend",
      `<div class="route-minus-btn" onclick="deleteMulticityRoute(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
    </div>`
    );
    if (child.querySelector(".gregorian_date")) {
      child.querySelector(".gregorian_date").remove();
    }
    document.querySelector(".route-container").append(child);
    child.setAttribute(
      "data-index",
      element
        .closest("form")
        .querySelector(".route-container")
        .querySelectorAll(".route-content").length
    );
    child.querySelector(".fromcity_container").querySelector(".country").value =
      child.previousElementSibling
        .querySelector(".tocity_container")
        .querySelector(".country").value;
    child
      .querySelector(".fromcity_container")
      .querySelector(".fromcity").value = child.previousElementSibling
      .querySelector(".tocity_container")
      .querySelector(".tocity").value;
  }

  checkButtonAddCity();
}
function deleteMulticityRoute(element) {
  element.closest(".route-content").remove();
  let index = 0;
  document
    .querySelector("#multi-flight-form")
    .querySelector(".route-container")
    .querySelectorAll(".route-content")
    .forEach((e) => {
      e.querySelector(".multi-route-tlt").innerText =
        destination_nth_txt[index];
      index++;
      e.setAttribute("data-index", index);
    });

  checkButtonAddCity();
}

function checkButtonAddCity(element) {
  document.querySelector(".route-container").querySelectorAll(".route-content")
    .length >= 4
    ? document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.add("deactive-addmc")
    : document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.remove("deactive-addmc");
}

function formMulticity_search_isSubmited(element, event) {
  let select_age = "";
  element
    .querySelector(".section-select-age")
    .querySelectorAll("select")
    .forEach((e) => {
      select_age = select_age + e.value + ",";
    });
  if (select_age !== "") {
    element.querySelector(".select-age-value").value = select_age;
    var val_1 = element.querySelector(".select-age-value").value;
    var val_2 = val_1.replace(/,(?=[^,]*$)/, "");
    element.querySelector(".select-age-value").value = val_2;
  } else {
    element.querySelector(".select-age-value").value = 0;
  }
  for (
    let i = 0;
    i < element.getElementsByClassName("route-content").length;
    i++
  ) {
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".fromcity")
      .setAttribute("name", `_root.route__${i}.fromcity`);
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".tocity")
      .setAttribute("name", `_root.route__${i}.tocity`);
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".start_date")
      .setAttribute("name", `_root.route__${i}.departuredate`);
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".fromcity-text")
      .setAttribute("name", `_root.route__${i}.fromcityName`);
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".tocity-text")
      .setAttribute("name", `_root.route__${i}.tocityName`);
    element
      .getElementsByClassName("route-content")
      [i].querySelector(".multi-route-tlt")
      .insertAdjacentHTML(
        "beforeend",
        `<input type="hidden" value="${destination_nth_txt[i]}" name="_root.route__${i}.index"/>`
      );
  }
}

////////<!----- JS  HOTEL/TOUR ---->////////

$(".plus-minus-room").on("click", function () {
  var button = $(this);
  var ad = 0;
  var oldVal = parseInt(
    button.closest(".item-CountPassenger").find("input").val()
  );
  var newVal =
    button.text().indexOf("+") > -1 ? oldVal + 1 : oldVal > 0 ? oldVal - 1 : 0;
  if (newVal >= 2) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .addClass("minus-btn-active");
  }
  if (newVal < 2) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .removeClass("minus-btn-active");
  }
  if (newVal >= 5) return;
  if (newVal < 1) return;
  button.closest(".item-CountPassenger").find("input").val(newVal);
  button.closest("form").find(".count-passengers .count-room").text(newVal);
  button.closest("form").find(".ShowRow").empty();
  for (i = 1; i <= newVal; i++) {
    button
      .closest("form")
      .find(".ShowRow")
      .append(
        '<div class="contentRoom"><div class="RoomRow mb-3">اتاق ' +
          i +
          ' </div><div class="item-CountPassenger mb-4"><div class="first-part-CountPassenger text-secondary mb-3">بزرگسال (+12)</div><div class="second-part-CountPassenger flex justify-between"><div class="passenger-button plus-minus"><span class="plus-btn w-6 h-6 leading-6 bg-primary rounded-md text-center cursor-pointer text-white inline-block">+</span></div><div class="passenger-button text-base"><input type="text" name="_root.rooms__' +
          i +
          '.adultcount" class="adult adult-count text-center w-full leading-6"  readonly="" value="1"></div><div class="passenger-button plus-minus"><span class="minus-btn w-6 h-6 leading-6 bg-secondary rounded-md text-center cursor-pointer text-white inline-block">-</span></div></div><div class="clr"></div></div><div class="item-CountPassenger mb-4"><div class="first-part-CountPassenger text-secondary mb-3">کودک (-12)</div><div class="second-part-CountPassenger flex justify-between"><div class="passenger-button plus-minus-ch"><span class="plus-btn w-6 h-6 leading-6 bg-primary rounded-md text-center cursor-pointer text-white inline-block">+</span></div><div class="passenger-button text-base"><input type="text" class="child-count text-center w-full leading-6"  readonly="" value="0"></div><div class="passenger-button plus-minus-ch"><span class="minus-btn w-6 h-6 leading-6 bg-secondary rounded-md text-center cursor-pointer text-white inline-block">-</span></div></div><input type="hidden" value="0" class="childcountandage" name="_root.rooms__' +
          i +
          '.childcountandage"><div class="clr"></div><div class="section-select-age"></div><div class="clr"></div></div></div>'
      );
  }
  button
    .closest("form")
    .find(".contentRoom")
    .each(function () {
      var adult = parseInt($(this).find(".adult").val());
      ad += adult;
      $(this)
        .find(".plus-minus")
        .on("click", function () {
          var sumAdult = 0;
          var sumChild = 0;
          var button = $(this);
          var oldVal = parseInt(
            button.closest(".item-CountPassenger").find("input").val()
          );
          var newVal =
            button.text().indexOf("+") > -1
              ? oldVal + 1
              : oldVal > 0
              ? oldVal - 1
              : 0;
          if (newVal >= 2) {
            button
              .closest(".item-CountPassenger")
              .find(".minus-btn")
              .addClass("minus-btn-active");
          }
          if (newVal < 2) {
            button
              .closest(".item-CountPassenger")
              .find(".minus-btn")
              .removeClass("minus-btn-active");
          }
          if (newVal >= 10) return;
          if (newVal < 1) return;
          button.closest(".item-CountPassenger").find("input").val(newVal);
          button
            .closest(".CountPassenger")
            .find(".contentRoom")
            .each(function () {
              sumAdult += parseInt($(this).find(".adult").val());
              sumChild += parseInt($(this).find(".child-count").val());
            });
          button
            .closest("form")
            .find(".count-passengers .count")
            .text(sumAdult + sumChild);
        });
      $(this)
        .find(".plus-minus-ch")
        .on("click", function () {
          var sumAdult = 0;
          var sumChild = 0;
          var button = $(this);
          var oldVal = parseInt(
            button.closest(".item-CountPassenger").find("input").val()
          );
          var newVal =
            button.text().indexOf("+") > -1
              ? oldVal + 1
              : oldVal > 0
              ? oldVal - 1
              : 0;
          if (newVal >= 1) {
            button
              .closest(".item-CountPassenger")
              .find(".minus-btn")
              .addClass("minus-btn-active");
          }
          if (newVal < 1) {
            button
              .closest(".item-CountPassenger")
              .find(".minus-btn")
              .removeClass("minus-btn-active");
          }
          if (newVal >= 5) return;
          button.closest(".item-CountPassenger").find("input").val(newVal);
          button
            .closest(".CountPassenger")
            .find(".contentRoom")
            .each(function () {
              sumAdult += parseInt($(this).find(".adult").val());
              sumChild += parseInt($(this).find(".child-count").val());
            });
          button
            .closest("form")
            .find(".count-passengers .count")
            .text(sumAdult + sumChild);
          if (oldVal < newVal) {
            button
              .closest(".item-CountPassenger")
              .find(".section-select-age")
              .append(createChildDropdown(newVal));
          } else if (oldVal > newVal) {
            destroyChildDropdown(
              button
                .closest(".item-CountPassenger")
                .find(".section-select-age"),
              newVal
            );
          }
        });
    });
  button.closest("form").find(".count-passengers .count").text(parseInt(ad));
});
////////<!----- JS  INSURANCE ---->////////
$(".plus-minus-ins").on("click", function () {
  var button = $(this);
  var oldVal = parseInt(
    button.closest(".item-CountPassenger").find("input").val()
  );
  var newVal =
    button.text().indexOf("+") > -1 ? oldVal + 1 : oldVal > 0 ? oldVal - 1 : 0;
  if (newVal >= 1) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .addClass("minus-btn-active");
  }
  if (newVal < 1) {
    button
      .closest(".item-CountPassenger")
      .find(".minus-btn")
      .removeClass("minus-btn-active");
  }
  if (newVal >= 9) return;
  if (newVal < 1) return;
  button.closest(".item-CountPassenger").find(".passengercount").val(newVal);
  button.closest("form").find(".count-passengers .count").text(newVal);
  if (oldVal < newVal) {
    button
      .closest(".item-CountPassenger")
      .find(".Wrapper-BirthdatePassenger")
      .empty();
    for (var i = 1; i <= newVal; i++) {
      button
        .closest(".item-CountPassenger")
        .find(".Wrapper-BirthdatePassenger")
        .append(
          '<div class="BirthdatePassenger"><label class="label">تاریخ تولد مسافر ' +
            i +
            '</label><input class="datepicker BithdatePassenger" placeholder="تاریخ میلادی" type="text" autocomplete="off" readonly required><div class="clr"></div></div>'
        );
    }
  } else if (oldVal > newVal) {
    destroyInsurancePassenger(
      button
        .closest(".item-CountPassenger")
        .find(".Wrapper-BirthdatePassenger"),
      newVal
    );
  }
  $(".datepicker").focus(function (e) {
    FDatepicker(this, {
      single: !0,
      isJalali: isJalali,
      changeMonth: !0,
      changeYear: !0,
      minDate: "-100y",
      maxDate: $("#AdaultMaxDate").val(),
      yearRangeJalali: "1250:1500",
      yearRangeGregorian: "1900:2030",
      numberOfMonths: 1,
    });
    var innerContent = $(".nice-select > ul");
    var option_height = $(".nice-select .option").height();
    var option_count = $(".nice-select .option").length;
    var Ul_height = parseInt(option_height) * parseInt(option_count);
    innerContent.scrollTop(Ul_height / 2);
  });
});
var destroyInsurancePassenger = function ($el, i) {
  $el.find("div.BirthdatePassenger").get(i).remove();
};

////////<!----- JS  FLIGHT/HOTEL ---->////////
function CheckExteraHoteldate(element) {
  var isChecked = $(element).prop("checked");
  if (isChecked == true) {
    $(element).val(1);
    $(".check-hotel-date-container").show();
    $(".checkout").attr("required", true);
    $(".checkin").attr("required", true);
  } else if (isChecked == false) {
    $(element).val(0);
    $(".check-hotel-date-container").hide();
    $(".checkout").attr("required", false);
    $(".checkin").attr("required", false);
  }
}
if ($(".Hotel-Date").val() == 1) {
  $(".check-hotel-date-container").show();
  $(".Hotel-Date").prop("checked", true);
} else {
  $(".check-hotel-date-container").hide();
  $(".Hotel-Date").prop("checked", false);
}
////////<!----- JS  DATEPICKER ---->////////
function getPassportExpiryDate() {
  return new Date();
}
var regional = "",
  isJalali = !1;
if (regional == "fa") {
  isJalali = !0;
}
$(".datepicker").focus(function (e) {
  FDatepicker(this, {
    single: !0,
    isJalali: isJalali,
    changeMonth: !0,
    changeYear: !0,
    minDate: "-100y",
    maxDate: $("#AdaultMaxDate").val(),
    yearRangeJalali: "1250:1500",
    yearRangeGregorian: "1900:2030",
    numberOfMonths: 1,
  });
  var innerContent = $(".nice-select > ul");
  var option_height = $(".nice-select .option").height();
  var option_count = $(".nice-select .option").length;
  var Ul_height = parseInt(option_height) * parseInt(option_count);
  innerContent.scrollTop(Ul_height / 2);
});
PersianDate = {
  g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
};
PersianDate.PersianToGregorian = function (j_y, j_m, j_d) {
  j_y = parseInt(j_y);
  j_m = parseInt(j_m);
  j_d = parseInt(j_d);
  var jy = j_y - 979;
  var jm = j_m - 1;
  var jd = j_d - 1;
  var j_day_no =
    365 * jy + parseInt(jy / 33) * 8 + parseInt(((jy % 33) + 3) / 4);
  for (var i = 0; i < jm; ++i) j_day_no += PersianDate.j_days_in_month[i];
  j_day_no += jd;
  var g_day_no = j_day_no + 79;
  var gy = 1600 + 400 * parseInt(g_day_no / 146097);
  g_day_no = g_day_no % 146097;
  var leap = !0;
  if (g_day_no >= 36525) {
    g_day_no--;
    gy += 100 * parseInt(g_day_no / 36524);
    g_day_no = g_day_no % 36524;
    if (g_day_no >= 365) g_day_no++;
    else leap = !1;
  }
  gy += 4 * parseInt(g_day_no / 1461);
  g_day_no %= 1461;
  if (g_day_no >= 366) {
    leap = !1;
    g_day_no--;
    gy += parseInt(g_day_no / 365);
    g_day_no = g_day_no % 365;
  }
  for (
    var i = 0;
    g_day_no >= PersianDate.g_days_in_month[i] + (i == 1 && leap);
    i++
  )
    g_day_no -= PersianDate.g_days_in_month[i] + (i == 1 && leap);
  var gm = i + 1;
  var gd = g_day_no + 1;
  gm = gm < 10 ? "0" + gm : gm;
  gd = gd < 10 ? "0" + gd : gd;
  return [gy, gm, gd];
};
//----------------JS SHOW TODAY AND TOMRROW DATE IN SEARCH BOX----------------//
var persiancurrentTime = new Date();
var persiangregorian_month = persiancurrentTime.getMonth() + 1;
var persiangregorian_day = persiancurrentTime.getDate();
var persiangregorian_year = persiancurrentTime.getFullYear();
var persiancurrent = persiandate(
  parseInt(persiangregorian_year),
  parseInt(persiangregorian_month),
  parseInt(persiangregorian_day)
);
$(".persiancurrent").val(persiancurrent);
var currentTime = new Date();
currentTime.setDate(currentTime.getDate() + 2);
var gregorian_month = currentTime.getMonth() + 1;
var gregorian_day = currentTime.getDate();
var gregorian_year = currentTime.getFullYear();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 4);
var gregorian_month_tomorrow = tomorrow.getMonth() + 1;
var gregorian_day_tomorrow = tomorrow.getDate();
var gregorian_year_tomorrow = tomorrow.getFullYear();
var persian_today = persiandate(
  parseInt(gregorian_year),
  parseInt(gregorian_month),
  parseInt(gregorian_day)
);
var persian_tomorrow = persiandate(
  parseInt(gregorian_year_tomorrow),
  parseInt(gregorian_month_tomorrow),
  parseInt(gregorian_day_tomorrow)
);
$(".start_date").each(function () {
  if ($(this).closest("form").attr("id") == "multi-flight-form") {
  } else {
    $(this).val(persian_today);
  }
});

$(".end_date").each(function () {
  if ($(this).prop("disabled") == false) {
    $(this).val(persian_tomorrow);
  }
});
function persiandate(year, month, day) {
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

  if (year > 1600) {
    persian_year = 979;
    year -= 1600;
  } else {
    persian_year = 0;
    year -= 621;
  }

  new_year = month > 2 ? year + 1 : year;

  days =
    365 * year +
    parseInt((new_year + 3) / 4) -
    parseInt((new_year + 99) / 100) +
    parseInt((new_year + 399) / 400) -
    80 +
    day +
    g_d_m[month - 1];

  persian_year += 33 * parseInt(days / 12053);
  days %= 12053;

  persian_year += 4 * parseInt(days / 1461);
  days %= 1461;

  if (days > 365) {
    persian_year += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
  }

  persian_month =
    days < 186 ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
  persian_day = 1 + (days < 186 ? days % 31 : (days - 186) % 30);

  if (persian_month < 10) persian_month = "0" + persian_month;

  if (persian_day < 10) persian_day = "0" + persian_day;

  return persian_year + "-" + persian_month + "-" + persian_day;
}
//<!----------------------------END JS SEARCHBOX ------------------------------>
