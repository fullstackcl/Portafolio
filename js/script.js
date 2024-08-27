/* navbar */
$(document).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar-nav").fadeIn();
  } else {
    $(".navbar-nav").fadeOut();
  }
});
/* link */
$(document).ready(function () {
  $(".imagen-inferior1").click(function () {
    window.location.href =
      "https://github.com/EricRiveros/superMercadoBootcamp.git";
  });
});
$(document).ready(function () {
  $(".imagen-inferior2").click(function () {
    alert("Proximamente");
  });
});
$(document).ready(function () {
  $(".imagen-inferior3").click(function () {
    window.location.href = "https://wa.me/997529714";
  });
});

/* boton contacto   */

/* imagenes */
/* zoom a imagenes */
$(document).ready(function () {
  $(".card-img-top").mouseenter(function () {
    $(this).css("transform", "scale(1.1)");
  });

  $(".card-img-top").mouseleave(function () {
    $(this).css("transform", "scale(1)");
  });
});

/* btn descargar */
document
  .querySelector(".downloadButton")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "arch/CV_NJaramillo.pdf";
    link.download = "CV_NJaramillo.pdf";
    link.click();
  });
/* valida formulario */
$(document).ready(function () {
  $(".formulario-principal").on("submit", function (event) {
    const campo1 = $(".ctrl-correo");
    const campo2 = $("#ctrl-nombre");
    const campo3 = $(".ctrl-mensaje");

    if (campo1.val().trim() != "" || campo2.val().trim() != "") {
      alert("Se ha enviado correctamente los datos");
    }
  });
});
$(document).ready(function () {
  $(".card-link").click(function () {
    alert("Proximamente tendremos esta funcionalidad");  });
});
 