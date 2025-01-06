window.onload = () => {
  const loginBtn = document.querySelector(".login");
  const signupBtn = document.querySelector(".signup");
  loginBtn.addEventListener("click", () => {
    loginBtn.setAttribute("href", "./login.html");
  });
  signupBtn.addEventListener("click", () => {
    signupBtn.setAttribute("href", "./signup.html");
  });
  let login = document.querySelector("a.nav-link.login");
  let signup = document.querySelector("a.nav-link.signup");
  let user = JSON.parse(sessionStorage.getItem("temp"));
  if (user) {
    let li_1 = login.parentElement;
    let li_2 = signup.parentElement;
    let ul = li_1.parentElement;
    ul.removeChild(li_1);
    ul.removeChild(li_2);

    let li_3 = document.createElement("li");
    li_3.classList.add("nav-item");
    li_3.innerHTML = `<a href="./Profile.html" class="nav-link login">${user.Name}</a>`;
    ul.appendChild(li_3);
  }
  Initial_Data();
};
function Initial_Data() {
  let Users = [
    {
      Picture: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
      Name: "Raj",
      Email: "raj@gmail.com",
      Phone: "1234567",
      Password: "raj1234",
    },
    {
      Picture: "https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg",
      Name: "Simran",
      Email: "simran@gmail.com",
      Phone: "12345678",
      Password: "simran1234",
    },
    {
      Picture: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
      Name: "Rahul",
      Email: "rahul@gmail.com",
      Phone: "123456789",
      Password: "rahul1234",
    },
  ];
  let Packages = [
    {
      dp_url:
        "https://media.tatler.com/photos/637279a04698b173f4e77b25/4:3/w_1704,h_1278,c_limit/UBP_141122_Palace%209.jpg",
      Title: "Umaid Bhawan Palace",
      Type: "Best",
      Description:
        "Step into the grandeur of the iconic Umaid Bhawan Palace with your loved ones, where luxury meets heritage. Nestled in the heart of Jodhpur, this magnificent palace is a blend of regal charm and modern comfort. As one of the world’s largest private residences, it offers a unique opportunity to immerse yourself in the rich history, culture, and traditions of Rajasthan. Surrounded by lush gardens and breathtaking views of the Blue City, Umaid Bhawan Palace promises an unforgettable stay filled with royal elegance and timeless beauty.",
      Url: "",
      Pricing: {
        Single: "30,000",
        Couple: "45,000",
      },
    },
    {
      dp_url:
        "https://travelfreak.com/wp-content/uploads/2018/10/north-shore-oahu.jpg",
      Title: "North Shore Tour",
      Type: "Best",
      Description:
        "Take your friends to this once in a life time journey. Skip the hassle of renting a car and see the highlights of Oahu North Shore from the comfort of a minibus or van. Along the way, a guide keeps you entertained and shares details about the island that you would likely miss if traveling on your own. At each stop, you can enjoy free time to swim, shop, paddleboard/kayak or do an optional waterfall hike while getting to know the island.",
      Url: "",
      Pricing: {
        Single: "32,000",
        Couple: "58,000",
      },
    },
    {
      dp_url:
        "https://static.independent.co.uk/2022/06/14/11/1.%20Amsterdam%20Open%20Boat%20Canal%20Cruise%20-%20Live%20Guide%20-%20from%20Anne%20Frank%20House%203.jpeg?width=1200",
      Title: "Amsterdam Open Boat Canal Cruise",
      Type: "Best",
      Description:
        "Experience the beauty of Amsterdams canals by going on this scenic cruise. Pass by Anne Frank House, the Jordaan, the Houseboat Museum, Leiden Square, Rijksmuseum, De Duif and much more.Experience the beauty of Amsterdams canals by going on this scenic cruise. Pass by Anne Frank House, the Jordaan, the Houseboat Museum, Leiden Square, Rijksmuseum, De Duif and much more.",
      Url: "",
      Pricing: {
        Single: "33,000",
        Couple: "45,000",
      },
    },
    {
      dp_url: "./images/gallery/Azad_Kashmir.jpg",
      Title: "Kashmir Tour",
      Type: "Normal",
      Description:
        "The natural beauty and picturesque locations have made it a favoured destination for tourists across the world. Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens. J&K has agro-climatic conditions best suited for horticulture and floriculture.",
      Url: "",
      Pricing: {
        Single: "37,000",
        Couple: "55,000",
      },
    },
    {
      dp_url: "https://s7ap1.scene7.com/is/image/incredibleindia/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero?qlt=82&ts=1726649273578",
      Title: "Varanasi Tour",
      Type: "Normal",
      Description:
        "Discover the spiritual essence of Varanasi, the timeless city on the banks of the Ganges. Witness the mesmerizing Ganga Aarti, explore the historic Kashi Vishwanath Temple, and stroll through ancient lanes steeped in culture. From serene boat rides at sunrise to vibrant rituals, Varanasi offers a journey of tradition and tranquility.",
      Url: "",
      Pricing: {
        Single: "15,000",
        Couple: "25,000",
      },
    },
    {
      dp_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/1200px-Hampi_virupaksha_temple.jpg",
      Title: "Hampi Tour",
      Type: "Normal",
      Description:
        "Step back in time with a visit to Hampi, the ancient city of ruins and a UNESCO World Heritage Site. Explore majestic temples, intricate carvings, and the iconic Vijaya Vittala Temple with its musical pillars. Surrounded by stunning boulder-strewn landscapes, Hampi offers a perfect blend of history, culture, and natural beauty, making it an unforgettable destination.",
      Url: "",
      Pricing: {
        Single: "30,000",
        Couple: "50,000",
      },
    },
  ];

  localStorage.setItem("Users", JSON.stringify(Users));
  localStorage.setItem("Packages", JSON.stringify(Packages));
}
