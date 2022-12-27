const getCars = async () => {
  const res = await fetch("http://localhost:3333/api/cars");
  const data = await res.json();
  console.log(data);
  return data;
};

const currencyFormat = (value) => {
  return new Intl.NumberFormat("mn-MN", { maximumSignificantDigits: 3 }).format(
    value
  );
};

const getCarCard = (car) => {
  return `<div class="col-3">
    <div class="card">
      <div class="ratio ratio-4x3">
        <img
          src="${car.imageUrl}"
          class="card-img-top"
          alt=""
        />
      </div>
      <div class="card-body">
        <p class="card-name">${car.model}</p>
        <p class="card-category">${car.brand}</p>
        <p class="card-name card-price">${currencyFormat(car.price)}</p>
        <div class="d-flex justify-content-end gap-3">
        <button type="button" class="btn btn-success onclick="updateCar${
          car.id
        }">Zasah</button>
        <button type="button" class="btn btn-danger" onclick="deletetCar(
          ${car.id}
        )">Ustgah</button>
        </div>
      </div>
    </div>
  </div>`;
};

const carsTarget = document.querySelector("#cars");

const getCarsHtml = async () => {
  carsTarget.innerHTML = "";
  const cars = await getCars();
  for (const car of cars) {
    carsTarget.innerHTML += getCarCard(car);
  }
};
getCarsHtml();
const submitButton = document.querySelector("#formSubmit");
const imageUrlTarget = document.querySelector("#imageTarget");
const modalTarget = document.querySelector("#modalTarget");
const brandTarget = document.querySelector("#brandTarget");
const priceTarget = document.querySelector("#priceTarget");

submitButton.addEventListener("click", async () => {
  const newCar = {
    imageUrl: imageUrlTarget.value,
    model: modalTarget.value,
    brand: brandTarget.value,
    price: priceTarget.value,
  };
  const req = await fetch("http://localhost:3333/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  });
  const res = await req.json();
  console.log(res);
  getCarsHtml();
});

const deletetCar = async (id) => {
  if (confirm("ta ustgahdaa itgeltei bnuu?"))
    fetch("http://localhost:3333/api/cars", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .catch((err) => {
        alert("amjilttai ustaglaa");
        getCarsHtml();
      });
};
const getCar = async (id) => {
  const res = await fetch("http://localhost:3333/api/cars" + id);
  const data = await res.json();
  return data;
};

const updateCar = async () => {
  const updateCar = {
    submitButton,

    // updated car model with car id
  };
  fetch("http://localhost:3333/api/cars", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateCar),
  });
};
