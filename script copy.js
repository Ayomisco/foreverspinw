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
  
  let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let MagicRoaster = shuffle([1890, 2250, 2610]);

  let RiceCooker = shuffle([1810, 2170, 2530]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    Sepeda[0],
    MagicRoaster[0],
  
    RiceCooker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
    JblSpeaker[0],
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (Sepeda.includes(Hasil[0])) SelectedItem = "Sepeda Aviator";
  if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Magic Roaster";

  if (RiceCooker.includes(Hasil[0])) SelectedItem = "Rice Cooker Philips";
  if (LunchBox.includes(Hasil[0])) SelectedItem = "Lunch Box Lock&Lock";
  if (Sanken.includes(Hasil[0])) SelectedItem = "Air Cooler Sanken";
  if (Electrolux.includes(Hasil[0])) SelectedItem = "Electrolux Blender";
  if (JblSpeaker.includes(Hasil[0])) SelectedItem = "JBL Speaker";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    applause.play();
    swal(
      "Congratulations",
      "You Won The " + SelectedItem + ".",
      "success"
    );
    // Store the last selected item
    lastSelectedItem = SelectedItem;
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(0deg)";

    // Set the rotation angle based on the last selected item
    switch (lastSelectedItem) {
      case "Sepeda Aviator":
        box.style.transform = "rotate(" + Sepeda[0] + "deg)";
        break;
      case "Magic Roaster":
        box.style.transform = "rotate(" + MagicRoaster[0] + "deg)";
        break;
      case "Rice Cooker Philips":
        box.style.transform = "rotate(" + RiceCooker[0] + "deg)";
        break;
      // Add cases for other items

      default:
        box.style.transform = "rotate(90deg)"; // Set a default angle
    }
    
  }, 6000);
}
