const complimentBtn = document.querySelector("#complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

// 1

const fortuneBtn = document.querySelector("#fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune);

//2

const babyBtn = document.querySelector("#babyButton");

const getBaby = () => {
  axios.get("http://localhost:4000/api/baby/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

babyBtn.addEventListener("click", getBaby);

const foodBtn = document.querySelector("#foodButton");

const getFood = () => {
  axios.get("http://localhost:4000/api/food/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

foodBtn.addEventListener("click", getFood);

const carBtn = document.querySelector("#carButton");

const getCar = () => {
  axios.get("http://localhost:4000/api/car/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

carBtn.addEventListener("click", getCar);
