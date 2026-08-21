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
  popup.addEventListener("mousedown", (event)=>{
    if (event.target===popup){
      popup.style.display="none";
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".popup").forEach((popup) => {
      popup.style.display = "none";
    });
  }
});

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.stopPropagation();

    const content = this.nextElementSibling;

    document.querySelectorAll(".dropdown-content.show").forEach((c) => {
      if (c !== content) {
        c.classList.remove("show");
      }
    });

    content.classList.toggle("show");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter-dropdown")) {
    document.querySelectorAll(".dropdown-content.show").forEach((c) => {
      c.classList.remove("show");
    });
  }
});

document.querySelectorAll(".select-price-sorting").forEach((container) => {
  const btn = container.querySelector(".select-button");
  const options = container.querySelector(".options");
  const items = container.querySelectorAll(".option-item");

  btn.addEventListener("click", () => {
    options.classList.toggle("open");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.innerText = item.innerText + " ▼";
      options.classList.remove("open");
    });
  });

  document.addEventListener("mousedown", (event) => {
    if (!container.contains(event.target)) {
      options.classList.remove("open");
    }
  });
});


//---------------------INVENTORY------------------------

const parts = [
  {
    id: 1,
    category: "cpu",
    name: "AMD Ryzen 5 7600",
    price: 199,
    series: "Ryzen 5",
    socket: "AM5",
    image: "images/r5-7600.jpg",
  },
  {
    id: 2,
    category: "cpu",
    name: "Intel Core i5-14400F",
    price: 189,
    series: "Core i5",
    socket: "LGA 1700",
  },
  {
    id: 3,
    category: "cpu",
    name: "Intel Core Ultra 5 245K",
    price: 299,
    series: "Core Ultra 5",
    socket: "LGA 1851",
  },

  {
    id: 4,
    category: "gpu",
    name: "NVIDIA GeForce RTX 3060",
    price: 279,
    vram: "12 GB",
    chipset: "RTX 3060",
  },
  {
    id: 5,
    category: "gpu",
    name: "NVIDIA GeForce RTX 5070",
    price: 549,
    vram: "12 GB",
    chipset: "RTX 5070",
  },
  {
    id: 6,
    category: "gpu",
    name: "AMD Radeon RX 6600",
    price: 219,
    vram: "8 GB",
    chipset: "RX6600",
  },

  {
    id: 7,
    category: "ram",
    name: "Corsair Vengeance 16GB DDR4",
    price: 45,
    capacity: "16 GB (2 x 8 GB)",
    type: "DDR4",
  },
  {
    id: 8,
    category: "ram",
    name: "Kingston Fury Beast 32GB DDR5",
    price: 89,
    capacity: "32 GB (2 x 16 GB)",
    type: "DDR5",
  },
  {
    id: 9,
    category: "ram",
    name: "Crucial 16GB DDR5",
    price: 55,
    capacity: "16 GB (1 x 16 GB)",
    type: "DDR5",
  },

  {
    id: 10,
    category: "motherboard",
    name: "ASUS TUF Gaming X870-Plus",
    price: 299,
    socket: "AM5",
    chipset: "AMD X870",
    ramType: "DDR5",
  },
  {
    id: 11,
    category: "motherboard",
    name: "MSI PRO B760M-A",
    price: 149,
    socket: "LGA 1700",
    chipset: "Intel B760",
    ramType: "DDR5",
  },
  {
    id: 12,
    category: "motherboard",
    name: "ASUS Prime Z890-P",
    price: 259,
    socket: "LGA 1851",
    chipset: "Intel Z890",
    ramType: "DDR5",
  },

  {
    id: 13,
    category: "storage",
    name: "Samsung 990 EVO 1TB SSD",
    price: 99,
    type: "SSD",
    capacity: "1 TB",
  },
  {
    id: 14,
    category: "storage",
    name: "Crucial P3 Plus 2TB SSD",
    price: 129,
    type: "SSD",
    capacity: "2 TB",
  },
  {
    id: 15,
    category: "storage",
    name: "Seagate Barracuda 4TB HDD",
    price: 89,
    type: "HDD",
    capacity: "4 TB",
  },

  {
    id: 16,
    category: "psu",
    name: "Corsair RM750e 750W",
    price: 109,
    brand: "Corsair",
    wattage: 750,
  },
  {
    id: 17,
    category: "psu",
    name: "Cooler Master MWE Gold 850W",
    price: 129,
    brand: "Cooler Master",
    wattage: 850,
  },
  {
    id: 18,
    category: "psu",
    name: "FSP Hydro G Pro 1000W",
    price: 159,
    brand: "FSP",
    wattage: 1000,
  },

  {
    id: 19,
    category: "cpu-cooler",
    name: "Cooler Master Hyper 212",
    price: 39,
    brand: "Cooler Master",
  },
  {
    id: 20,
    category: "cpu-cooler",
    name: "Deepcool AK620",
    price: 69,
    brand: "Deepcool",
  },
  {
    id: 21,
    category: "cpu-cooler",
    name: "Arctic Liquid Freezer III 240",
    price: 99,
    brand: "Arctic",
  },

  {
    id: 22,
    category: "case",
    name: "Corsair 4000D Airflow",
    price: 89,
    brand: "Corsair",
    motherboardSize: "ATX",
  },
  {
    id: 23,
    category: "case",
    name: "Cooler Master TD500 Mesh",
    price: 99,
    brand: "Cooler Master",
    motherboardSize: "ATX",
  },
  {
    id: 24,
    category: "case",
    name: "HYTE Y60",
    price: 179,
    brand: "HYTE",
    motherboardSize: "ATX",
  },
];

const totalPrice = {
  cpu: 0,
  gpu: 0,
  ram: 0,
  motherboard: 0,
  storage: 0,
  psu: 0,
  "cpu-cooler": 0,
  case: 0
}

function updateTotalPrice(){
  let tongTien = 0;
  for (price in totalPrice) {
    tongTien += totalPrice[price];
  }
  document.getElementById("total").textContent = tongTien.toFixed(2);
}

const specFields = {
  cpu: ["series", "socket"],
  gpu: ["chipset", "vram"],
  ram: ["capacity", "type"],
  motherboard: ["socket", "chipset"],
  storage: ["type", "capacity"],
  psu: ["brand", "wattage"],
  "cpu-cooler": ["brand"],
  case: ["brand", "motherboardSize"],
};

for (const part of parts){
  const partList = document.querySelector(`.parts-list[data-category="${part.category}"]`);
  if (partList){
    const partItem = document.createElement("div");
    const imageItem = document.createElement("img");
    const nameItem = document.createElement("p");
    const priceItem = document.createElement("p");
    const imageSlot = document.createElement("div");
    const infoItem = document.createElement("div");
    const specsItem = document.createElement("p");
    imageSlot.classList.add("image-slot");
    if (part.image){
      imageSlot.appendChild(imageItem);
      imageItem.src=part.image;
      imageItem.classList.add("image-item");
    }
    const tempSpecs = specFields[part.category];
    let tempString = "";
    for (let i = 0; i < tempSpecs.length; i++) {
      tempString+=part[tempSpecs[i]];

      if (i !== tempSpecs.length - 1) {
        tempString += " · ";
      }
    }
    specsItem.textContent=tempString;
    infoItem.classList.add("info-item");
    partItem.prepend(imageSlot);
    nameItem.textContent=part.name;
    priceItem.textContent = `$${part.price}`;
    priceItem.classList.add("price-item");
    nameItem.classList.add("name-item");
    partItem.classList.add("component-item");
    specsItem.classList.add("specs-item");
    infoItem.appendChild(nameItem);
    infoItem.appendChild(specsItem);
    infoItem.appendChild(priceItem);
    partItem.appendChild(infoItem);
    partList.appendChild(partItem);
    partItem.addEventListener("click",()=>{
      const cartSlot = document.getElementById(`choose-${part.category}`);
      if (cartSlot) {
        cartSlot.textContent = part.name;
      }
      const priceSlot = document.getElementById(`price-${part.category}`);
      if (priceSlot) {
        priceSlot.textContent = `$${part.price}`;
      }
      totalPrice[part.category] = part.price;
      updateTotalPrice();
    })
  }
}

