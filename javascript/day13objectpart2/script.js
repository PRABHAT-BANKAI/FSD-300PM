let data = [
  "https://img.freepik.com/free-vector/cute-baby-deer-looking-front-vector-illustration_96037-422.jpg?t=st=1742809711~exp=1742813311~hmac=eae7f89a8db71252b3e7f799af6429d066b55c81396857ea5633f1fff235a943&w=1380",
  "https://img.freepik.com/free-vector/cute-koala-holding-branch-tree-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-12795.jpg?t=st=1742809749~exp=1742813349~hmac=0bd942bb536f1e93d38811f067c2b656d9353a82d22f5af57da545ebf6ea1a3c&w=826",
  "https://www.shutterstock.com/shutterstock/photos/2129145272/display_1500/stock-photo-image-of-a-little-rabbit-with-skateboard-in-grass-field-background-blurred-nature-bunny-and-surf-2129145272.jpg",
];

let image = document.getElementById("image");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let count = 0;

image.style.height = "200px";

// function nextFun(){
//   console.log("clicked")
// }

next.addEventListener("click", () => {
  if (count == data.length - 1) {
    count = 0;
  } else {
    count++;
  }

  ShowData();
});

prev.addEventListener("click", () => {
  if (count == 0) {
    count = data.length - 1;
  } else {
    count--;
  }
  ShowData();
});

function ShowData() {
  image.src = data[count];
}

ShowData();
