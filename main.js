// Prevent dropdown from closing when clicking on the dropdown menu
$(".hover-dropdown .dropdown-menu").on("click", function (e) {
    e.stopPropagation();
  });
  