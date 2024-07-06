const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


  document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện submit của form đăng nhập
    document.querySelector(".sign-in-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn form submit mặc định

      // Lấy giá trị tài khoản và mật khẩu từ các input
      var username = document.querySelector(".sign-in-form input[type='text']").value;
      var password = document.querySelector(".sign-in-form input[type='password']").value;

      // Kiểm tra thông tin đăng nhập
      if (username === "admin" && password === "12345") {
        // Chuyển đến trang index
        window.location.href = "index.html";
      } else {
        alert("Thông tin đăng nhập không chính xác");
      }
    });
  });

