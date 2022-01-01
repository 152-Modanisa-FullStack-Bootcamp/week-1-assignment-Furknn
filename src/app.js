import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response);
    // Assign data field of the response to
    // products variable below by destructuring

    // You can use alias
    const products = [...response.data];

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((p) => {
      console.log(p.name);
    });
    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products
      .filter((p) => p.name.includes("Şal"))
      .map((v) => ({
        name: v.name,
        image: v.image
      }));

    console.log(mappedProducts);
    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    const itemsdiv = document.getElementById("items-list");

    mappedProducts.forEach((p) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");

      const pictureDiv = document.createElement("div");
      pictureDiv.classList.add("picture-div");
      const pictureImage = document.createElement("img");
      pictureImage.setAttribute("src", p.image);
      pictureDiv.appendChild(pictureImage);

      const textDiv = document.createElement("div");
      textDiv.classList.add("text-div");
      const textText = document.createElement("p");
      textText.innerHTML = p.name;
      textDiv.appendChild(textText);

      itemDiv.appendChild(pictureDiv);
      itemDiv.appendChild(textDiv);
      itemsdiv.appendChild(itemDiv);
    });
  });
