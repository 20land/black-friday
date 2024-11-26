var swiper = new Swiper(".products-one", {
  slidesPerView: 2.4,
  spaceBetween: 30,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 100,
    },
    1536: {
      slidesPerView: 4.8,
      spaceBetween: 100,
    },
  },
});
var swiper = new Swiper(".products-two", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.8,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
    1536: {
      slidesPerView: 7,
      spaceBetween: 100,
    },
  },
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const phoneNumber = event.target[0].value;

  const phonePattern = /^09[0|1|2|3][0-9]{8}$/;
  if (!phonePattern.test(phoneNumber)) {
    alert("شماره وارد شده صحیح نیست");
    return;
  } else {
    fetch("hamvakil landing api address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: phoneNumber }),
    })
      .then((response) => response.json())
      .then((data) => alert("شماره ثبت شد. به زودی با شما تماس میگیریم"))
      .catch((error) => alert("مشکلی پیش آمده لطفا مجددا تلاش کنید"));
  }
});
