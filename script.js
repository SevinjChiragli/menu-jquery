$(document).ready(function () {
  $(".burqer").click(function () {
    if ($(".burqerMenu").css("right") === "0px") {
      $(".burqerMenu").css("right", "-300px").css("opacity", "0");
      $(".close").fadeOut();
      $(".burqer").fadeIn();
    } else {
      $(".burqerMenu").css("opacity", "1").css("right", "0px");
      $(".close").css("display", "block");
      $(".burqer").fadeOut();
    }
  });
  $(".close").click(function () {
    $(".burqerMenu").css("right", "-300px").css("opacity", "0");
    $(".close").fadeOut();
    $(".burqer").fadeIn();
  });
});
$(document).ready(function () {
  const work = $(".burqerMenu .work");
  const blog = $(".burqerMenu .blog");
  const contact = $(".burqerMenu .contact");
  work.click(function () {
    $(".workMenu").slideToggle('slow');
  });
  blog.click(function () {
    $(".blogMenu").slideToggle('slow');
  });
  contact.click(function () {
    $(".contactMenu").slideToggle('slow');
  });
});
