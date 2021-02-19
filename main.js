function send() {
  var title1 = document.getElementById("title").value;
  var body1 = document.getElementById("message").value;

  const url = "https://tejudevz-port-folio.herokuapp.com/contact/post";

  // post body data
  const sendData = {
    title: title1,
    body: body1,
  };

  // request options
  const options = {
    method: "POST",
    body: JSON.stringify(sendData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send POST request
  fetch(url, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .then(
      (document.getElementById("result").innerHTML = "Message sent succesfully")
    );
}

var open = false;

function drop() {
  if (open === false) {
    document.querySelector(".dropdown").style.display = "flex";
    open = true;
  } else {
    document.querySelector(".dropdown").style.display = "none";
    open = false;
  }
}
