$(document).ready(function() {
  // smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault(); // prevent default anchor click behavior
      var hash = this.hash;
      // using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function() {
        window.location.hash = hash; // add hash (#) to URL when done scrolling (default click behavior)
      });
    }
  });

var modal = document.getElementById("modal-image-frame");

// insert the image inside the modal frame - use its "alt" text as a caption
var image = document.getElementById("modal-image");
var caption = document.getElementById("caption");

document.getElementById("image-a").onclick = function() {
  modal.style.display = "block";
  image.src = this.src;
  caption.innerHTML = this.alt;
}

document.getElementById("image-b").onclick = function() {
  modal.style.display = "block";
  image.src = this.src;
  caption.innerHTML = this.alt;
}

document.getElementById("image-c").onclick = function() {
  modal.style.display = "block";
  image.src = this.src;
  caption.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
}
});
