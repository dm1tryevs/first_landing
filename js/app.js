(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const t = document.querySelector(".header__burger"),
    o = document.querySelector(".header__navigation"),
    c = document.querySelector("body");
  console.log(o),
    t &&
      t.addEventListener("click", function (e) {
        t.classList.toggle("_active"),
          c.classList.toggle("_body-active"),
          o && o.classList.toggle("_active");
      }),
    document.addEventListener("click", function (e) {
      const n = e.target;
      var i;
      !n.closest(".header__navigation") &
        !n.closest(".header__burger") &
        o.classList.contains("_active") &&
        ((i = "_active"),
        t.classList.remove(i),
        o.classList.remove("_active"),
        c.classList.toggle("_body-active"));
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
