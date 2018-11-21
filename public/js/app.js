$(function() {
  $(".marquee").marquee({
    duration: 20000,
    duplicated: true,
    startVisible: true
  });
  $(".marquee-reverse").marquee({
    duration: 20000,
    direction: "right",
    duplicated: true,
    startVisible: true
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (890 < scroll && scroll < 3850) {
      $(".top-nav a").css("color", "black");
      //   $(".right-nav a").css("color", "#9192fc");
    } else {
      $(".top-nav a").css("color", "white");
      // $(".right-nav a").css("color", "white");
    }
  });
});

const sendContact = function(e) {
  e.preventDefault();
  const firstName = $("#input-first-name").val();
  const lastName = $("#input-last-name").val();
  const email = $("#input-email").val();
  const comment = $("#input-comment").val();

  const contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    comment: comment
  };
  if (firstName && lastName && email && comment) {
    $.ajax({
      url: "/",
      method: "POST",
      dataType: "json",
      data: contact
    }).then(function() {
      $("#submitted").show({
        duration: 1000,
        complete: function() {
          $("#submitted").hide(800);
        }
      });
      $("#input-first-name").val("");
      $("#input-last-name").val("");
      $("#input-email").val("");
      $("#input-comment").val("");
    });
  } else {
    alert('please fill out form');
  }
};
$("#submitted").hide();
$("#btn").on("click", sendContact);
