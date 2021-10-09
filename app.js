
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Aug 18, 2021 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function addition(n1, n2) {
  addition = parseFloat(n1 + n2);
  return addition;
}

function substraction(n1, n2) {
  substraction = parseFloat(n1 - n2);
  return substraction;
}

function multiplication(n1, n2) {
  multiplication = parseFloat(n1 * n2);
  return multiplication;
}

function division(n1, n2) {
  division = parseFloat(n1 / n2);
  return division;
}

var number1 = parseFloat(window.prompt("İşleme koyacağın ilk sayıyı yaz. "));
if (isNaN(number1)) {
  alert("Yazdığın şey sayı olmalı amk");
}

var number2 = parseFloat(window.prompt("İşleme koyacağın ikinci sayıyı yaz. "));
if (isNaN(number2)) {
  alert("Yazdığın şey sayı olmalı amk");
}

var operation = toString(
  window.prompt(
    "Şu işlemler sırayla yapılacak: Toplama, çıkarma, çarpma, bölme."
  )
);

if ((operation = "Toplama")) {
    sonuc = addition(number1, number2);
    console.log(sonuc)
    if (sonuc == 31) {
      alert(
        "Cevap 31 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
      );
    } else if (sonuc == 69) {
      alert(
        "Cevap 69 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
      );
    } else {
      alert("Sonucun: " + sonuc);
    }
  }
  
if ((operation = "Çıkarma")) {
    sonuc = substraction(number1, number2);
      if (sonuc == 31) {
      alert(
        "Cevap 31 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
      );
    } else if (sonuc == 69) {
      alert(
        "Cevap 69 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
      );
    } else {
      alert("Sonucun: " + sonuc);
    }
  }

if ((operation = "Çarpma")) {
  sonuc = multiplication(number1, number2);
  if (sonuc == 31) {
    alert(
      "Cevap 31 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
    );
  } else if (sonuc == 69) {
    alert(
      "Cevap 69 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
    );
  } else {
    alert("Sonucun: " + sonuc);
  }
}

if ((operation = "Bölme")) {
  sonuc = division(number1, number2);
  if (sonuc == 31) {
    alert(
      "Cevap 31 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
    );
  } else if (sonuc == 69) {
    alert(
      "Cevap 69 çıktı amk AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169AJHSDAKSDGHBASDASDFVASDA3169"
    );
  } else {
    alert("Sonucun: " + sonuc);
  }
}

