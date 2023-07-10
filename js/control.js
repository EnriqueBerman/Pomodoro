var trabajoTiempo;
    var descansoTiempo;
    var repeticiones;
    var intervalo;
    var tiempoRestante;
    var enTrabajo;
    var contador;
    var pop = new Audio(); // Objeto para reproducir audio
    var audio = new Audio();
    var secs = document.getElementById('secs');

    function iniciarTemporizador() {
      var trabajo = parseInt(document.getElementById("trabajo").value);
      var descanso = parseInt(document.getElementById("descanso").value);

      if (trabajo && descanso && trabajo > 0 && descanso > 0) {
        trabajoTiempo = trabajo * 60;
        descansoTiempo = descanso * 60;
        repeticiones = parseInt(document.getElementById("repeticiones").value);

        tiempoRestante = trabajoTiempo;
        enTrabajo = true;
        contador = 1;
        if(auDefault){
          let auvar = document.getElementById("audiosdefault").value;
        let auroot = './audios/'+auvar+'.mp3';
        audioPlayer2 = new Audio(auroot);
        }
        if(alDefault){
        var alvar = document.getElementById("alarmasdefault").value;
        var alroot = './alarmas/'+alvar+'.wav';
        audioPlayer = new Audio(alroot);
        }
        intervalo = setInterval(actualizarTemporizador, 1000);
        //reproducirAudio("audio.mp3");
        audioPlayer2.play();
        mostrarMensaje("¡Comenzando tiempo de trabajo!");

        var ss = document.getElementById('ss');
        ss.style.strokeDashoffset = 440 - (440 * trabajoTiempo) /60;
        var day_dot = document.querySelector('.day_dot');
        day_dot.style.transform = `rotateZ(${trabajoTiempo * 6}deg)`;
      }
    }

    function actualizarTemporizador() {
      var minutos = Math.floor(tiempoRestante / 60);
      var segundos = tiempoRestante % 60;
      var timerContainer = document.getElementById("time");
      
      document.getElementById("secs").textContent = minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');

      if (tiempoRestante <= 0) {
        if (enTrabajo) {
          if (contador < repeticiones) {
            tiempoRestante = descansoTiempo;
            enTrabajo = false;
            contador++;
            audioPlayer2.pause();
            reproducirPop("pop.mp3");
            audioPlayer.play();
            mostrarMensaje("¡Tiempo de descanso!");
          } else {
            detenerTemporizador();
            audioPlayer2.pause();
            audioPlayer.pause();
            mostrarMensaje("¡Todas las repeticiones finalizadas!");
          }
        } else {
          tiempoRestante = trabajoTiempo;
          enTrabajo = true;          
          audioPlayer2.play();
          audioPlayer.pause();
          mostrarMensaje("¡Comenzando tiempo de trabajo!");
        }
        cambiarFondo();
        //reproducirAudio(document.getElementById("audio"));
      } else {
        tiempoRestante--;
      }
      var ss = document.getElementById('ss');
        ss.style.strokeDashoffset = 440 - (440 * tiempoRestante) /60;
        var day_dot = document.querySelector('.day_dot');
        day_dot.style.transform = `rotateZ(${tiempoRestante * 6}deg)`;
    }

    function detenerTemporizador() {
      clearInterval(intervalo);
      var timerContainer = document.getElementById("time");
      document.getElementById("secs").textContent = "00:00";
      mostrarMensaje("");
    }

    function mostrarMensaje(mensaje) {
      document.getElementById("message").textContent = mensaje;
    }

    function cambiarFondo() {
      var colorFondo = document.getElementById("color-fondo").value;
      document.body.style.backgroundColor = colorFondo;
    }

    function reproducirPop(nombreArchivo) {
      pop.src = nombreArchivo;
      pop.currentTime = 0;
      pop.play();
    }

    function reproducirAudio(nombreArchivo) {
      audio.src = nombreArchivo;
      audio.currentTime = 0;
      audio.play();
    }

    function reiniciarTemporizador() {
      detenerTemporizador();
      document.body.style.backgroundColor = "#f7f7fa";
      document.getElementById("color-fondo").value = "#f7f7fa";
      document.getElementById("trabajo").value = "";
      document.getElementById("descanso").value = "";
      document.getElementById("repeticiones").value = "";
      document.getElementById("audio").pause();
      document.getElementById("audio").currentTime = 0;
    }