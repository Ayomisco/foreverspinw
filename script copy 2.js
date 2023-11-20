function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Declare a variable to store the last selected item
let lastSelectedItem = "";

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  
  let Dance = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let AloeLips = shuffle([1890, 2250, 2610]);

  let Fab = shuffle([1810, 2170, 2530]);
  let BrandedItem = shuffle([1770, 2130, 2490]);
  let TryAgain = shuffle([1750, 2110, 2470]);
  let Fastbreak = shuffle([1630, 1990, 2350]);
  let TryAgain2 = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    Dance[0],
    AloeLips[0],
  
    Fab[0],
    BrandedItem[0],
    TryAgain[0],
    Fastbreak[0],
    TryAgain2[0],
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (Dance.includes(Hasil[0])) SelectedItem = "Dance";
  if (AloeLips.includes(Hasil[0])) SelectedItem = "ALoe Lips";

  if (Fab.includes(Hasil[0])) SelectedItem = "Fab";
  if (BrandedItem.includes(Hasil[0])) SelectedItem = "Branded Item";
  if (TryAgain.includes(Hasil[0])) SelectedItem = "Try Again";
  if (Fastbreak.includes(Hasil[0])) SelectedItem = "Fastbreak";
  if (TryAgain2.includes(Hasil[0])) SelectedItem = "Try Again";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    if (SelectedItem === "Try Again") {
      swal("Oops!", "Better luck Next Time. Please try again.");
    } else {
      applause.play();
      swal(
        "Congratulations",
        "You Won The " + SelectedItem + ".",
        "success"
      );
      // Store the last selected item
      lastSelectedItem = SelectedItem;
    }
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";

    // Set the rotation angle based on the last selected item
    switch (lastSelectedItem) {
      case "Dance":
        box.style.transform = "rotate(" + Dance[0] + "deg)";
        break;
      case "ALoe Lips":
        box.style.transform = "rotate(" + ALoeLips[0] + "deg)";
        break;
      case "Fab":
        box.style.transform = "rotate(" + Fab[0] + "deg)";
        break;

      case "Branded Item":
        box.style.transform = "rotate(" + BrandedItem[0] + "deg)";
        break;
      case "Try Again":
        box.style.transform = "rotate(" +   TryAgain[0] + "deg)";
        break;
      case "Fastbreak":
        box.style.transform = "rotate(" + Fastbreak[0] + "deg)";
        break;
      case "Try Again":
        box.style.transform = "rotate(" +   TryAgain2[0] + "deg)";
        break;


      // Add cases for other items

      default:
        box.style.transform = "rotate(90deg)"; // Set a default angle
    }

  }, 6000);
}
