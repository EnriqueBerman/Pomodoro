
    var audioInput = document.getElementById("pop");
    var audioPlayer = document.getElementById("audioPlayer");
    var audioSource = document.getElementById("audioSource");

    audioInput.addEventListener("change", function() {
      var file = audioInput.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        audioSource.src = e.target.result;
        audioPlayer.load();
        //audioPlayer.play();
      };

      reader.readAsDataURL(file);
    });

    
    var audioInput2 = document.getElementById("audio");
    var audioPlayer2 = document.getElementById("audioPlayer2");
    var audioSource2 = document.getElementById("audioSource2");

    audioInput2.addEventListener("change", function() {
      var file2 = audioInput2.files[0];
      var reader2 = new FileReader();

      reader2.onload = function(e) {
        audioSource2.src = e.target.result;
        audioPlayer2.load();
        //audioPlayer.play();
      };

      reader2.readAsDataURL(file2);
    });