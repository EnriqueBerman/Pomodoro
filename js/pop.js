var audioInput2 = document.getElementById("audio");
var audioPlayer2 = document.getElementById("audioPlayer2");
var audioSource2 = document.getElementById("audioSource2");

audioInput2.addEventListener("change", function() {
  var file2 = audioInput.files[0];
  var reader2 = new FileReader();

  reader2.onload = function(e) {
    audioSource2.src = e.target.result;
    audioPlayer2.load();
    //audioPlayer.play();
  };

  reader2.readAsDataURL(file2);
});