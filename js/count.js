(function() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      countdownTime = "08/09/" + yyyy + " 11:35:00"; // Date et heure de fin du compte à rebours
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > countdownTime) {
      countdownTime = "08/08/" + nextYear + " 11:35:00";
    }
  
    const countDown = new Date(countdownTime).getTime(),
      x = setInterval(function() {
        const now = new Date().getTime(),
          distance = countDown - now;
  
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
  
        // Faire quelque chose une fois que la date est atteinte
        if (distance < 0) {
          document.getElementById("headline").innerText = "Joyeux anniversaire !";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);
  })();
  