// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var audiImg = document.getElementById("audi-sc");
var biomapImg = document.getElementById("biomap-sc");
var fitbitImg = document.getElementById("fitbit-sc");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

audiImg.onclick = function(){
    console.log("clicked image");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

biomapImg.onclick = function(){
    console.log("clicked image");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

fitbitImg.onclick = function(){
    console.log("clicked image");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
