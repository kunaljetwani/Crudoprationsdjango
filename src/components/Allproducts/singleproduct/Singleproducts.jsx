
import { Link, useNavigate } from "react-router-dom";

export default function Singleproducts(props) {
  const { title, Description, Price, Image, rating, product_id } = props.data;

  let history = useNavigate();
  const HandelDelete = () => {
    console.log(product_id);
    fetch(`http://127.0.0.1:8000/products/delete/${product_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // If the deletion was successful, you can update your UI or take any other actions.
          console.log("Product deleted successfully");
          history("/");
          // For example, you might want to refresh the product list after deletion.
          // You can use a callback function passed as a prop to trigger this.
          if (props.onProductDelete) {
            props.onProductDelete(product_id);
          }
        } else {
          console.error("Failed to delete product");
        }
      })
      .catch((error) => {
        console.error("Error while deleting product: ", error);
      });


      
  };
  return (
    <div>
      <div className=" border border-black">
        <div className="car" style={{ width: 15 + "rem" }}>
            <h4 className=" start-0">Product_id:{product_id}</h4>
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Price: {title}</h5>
            <p className="card-text">Description: {Description}</p>
            <h2>Price: {Price}</h2>
            <h3>Rating: {rating}</h3>
            <button
              type="button"
              onClick={HandelDelete}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
            &nbsp;
            &nbsp;
            &nbsp;

            <Link to={`/update/${product_id}`}>
            <button

              type="button"
              className="btn btn-warning"
              >
              Update
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
