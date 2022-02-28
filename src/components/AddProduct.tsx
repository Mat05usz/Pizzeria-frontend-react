import axios from "axios";
import { useState } from "react";
import "../styles/addproduct.scss";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState<any>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("productName", productName);
    formData.append("productPrice", productPrice.toString());
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage, productImage.name);

    axios
      .post("http://localhost:9000/product", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="add-product">
      <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(parseInt(e.target.value))}
        />
        <input
          type="text"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files![0]);
            setProductImage(e.target.files![0]);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default AddProduct;
