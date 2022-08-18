let minusBtn = (btnName, counterFieldName, priceId, price) => {
  document.getElementById(btnName).addEventListener("click", function () {
    let counter = document.getElementById(counterFieldName).value;
    let counterInt = parseInt(counter);
    if (counterInt > 0) {
      counterInt--;
      document.getElementById(counterFieldName).value = counterInt;
      document.getElementById(priceId).innerText = counterInt * parseInt(price);
      totalCalculating();
    }
  });
};

minusBtn("btn-phone-minus", "phone-counter-field", "phone-price", 1129);
minusBtn("btn-case-minus", "case-counter-field", "case-price", 58);

let plusBtn = (btnName, counterFieldName, priceId, price) => {
  document.getElementById(btnName).addEventListener("click", function () {
    let counter = document.getElementById(counterFieldName).value;
    let counterInt = parseInt(counter);
    if (counterInt >= 0) {
      counterInt++;
      document.getElementById(counterFieldName).value = counterInt;
      document.getElementById(priceId).innerText = counterInt * parseInt(price);
      totalCalculating();
    }
  });
};
plusBtn("btn-phone-plus", "phone-counter-field", "phone-price", 1129);
plusBtn("btn-case-plus", "case-counter-field", "case-price", 1129);

//  subtotal calculating
totalCalculating = (a) => {
  let phoneCounter = parseInt(
    document.getElementById("phone-counter-field").value
  );
  let caseCounter = parseInt(
    document.getElementById("case-counter-field").value
  );

  let subtotal = phoneCounter * 1219 + caseCounter * 59;

  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("tax").innerText = (subtotal * 0.04).toFixed(2);

  document.getElementById("total").innerText = subtotal + subtotal * 0.04;

  let manualInput = (counterField) => {
    document
      .getElementById(counterField)
      .addEventListener("keyup", function (event) {
        if (event.target.value !== "") {
          document.getElementById(counterField).value = event.target.value;
          totalCalculating();
        }
      });
  };

  manualInput("phone-counter-field");
  manualInput("case-counter-field");
};

totalCalculating();

let remover = (RemoverId, cartNo, counterField) =>
  document.getElementById(RemoverId).addEventListener("click", function () {
    document.getElementById(cartNo).style.display = "none";
    document.getElementById(counterField).value = 0;
    totalCalculating();
  });

remover("phone-remove", "cart-1", "phone-counter-field");
remover("case-remove", "cart-2", "case-counter-field");

document.getElementById("btn-check-out").addEventListener("check", function () {
  totalCalculating();
});
