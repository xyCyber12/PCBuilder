function updatePrice() {
  let tongTien = 0;

  let chooseCPU = document.querySelector('input[name="cpu_choice"]:checked');
  if (chooseCPU) {
    tongTien += Number(chooseCPU.value);
    document.getElementById("choose-cpu").innerText = chooseCPU.dataset.name;
  }

  let chooseGPU = document.querySelector('input[name="gpu_choice"]:checked');
  if (chooseGPU) {
    tongTien += Number(chooseGPU.value);
    document.getElementById("choose-gpu").innerText = chooseGPU.dataset.name;
  }

  let chooseRAM = document.querySelector('input[name="ram_choice"]:checked');
  if (chooseRAM) {
    tongTien += Number(chooseRAM.value);
    document.getElementById("choose-ram").innerText = chooseRAM.dataset.name;
  }

  document.getElementById("total").innerText = tongTien.toLocaleString(
    undefined,
    { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  );
}

let chooseRadio = document.querySelectorAll('input[type="radio"]');
for (let button of chooseRadio) {
  button.addEventListener("change", updatePrice);
}

const sections = document.querySelectorAll(".PartPicker section");

sections.forEach((section) => {
  const openBtn = section.querySelector(".openBtn");
  const closeBtn = section.querySelector(".closeBtn");
  const popup = section.querySelector(".popup");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});