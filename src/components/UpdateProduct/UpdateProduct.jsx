  import React, { useEffect, useState } from "react";
  import { Formik, Form, Field } from "formik";
  import * as Yup from "yup";
  import { useNavigate } from "react-router-dom";
  import { useParams } from "react-router-dom";

  export default function UpdateProduc() {
    const { product_id } = useParams();
    let history = useNavigate();
    // let [Update, setUpdate] = useState({});
    let [initialValues, setinitialValues] = useState({});
        

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/products/${product_id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Update initialValues with the product data received
          setinitialValues(data);
        })
        .catch((error) => {
          // Handle errors, e.g., display an error message
          console.error("Error fetching product data:", error);
        });
    }, [product_id]);
    const Onsubmit = (values) => {
      console.log("Form Values:", values);

      console.log(product_id);
      fetch(`http://127.0.0.1:8000/products/update/${product_id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(initialValues), // Send the form values in the request body
      })
        .then((response) => {
          if (response.ok) {
            history("/");
            // Handle a successful update, e.g., show a success message or navigate to another page
          } else {
            // Handle errors, e.g., display an error message
          }
        })
        .catch((error) => {
          // Handle network errors
        });
    };
    // const validationSchema = Yup.object().shape({
    //   title: Yup.string().required("Title is required"),
    //   Description: Yup.string()
    //     .required("Description is required")
    //     .max(300, "Description is too long"),
    //   Price: Yup.number().required("Price is required"),
    //   Image: Yup.string().required("Image URL is required"),
    //   rating: Yup.number().required("Ratings is required"),
    // })

    return (
      <div>
        <div className="container">
          <div className="row bg-teal-700 border hover:shadow-lg px-5 py-5 my-5">
            <div className="col-sm-12 ">
              <h3 className=" bg-orange-300 px-24 py-2  mx-48 my-2  text-center">
                Please add the changes to Update
              </h3>
              <Formik
                onSubmit={Onsubmit}
                initialValues={initialValues}
                
                // validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <label className=" text-lg text-white" htmlFor="title">
                      Title : &nbsp;
                    </label>
                    <Field
                      className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                      type="text"
                      name="title"
                      id="title"
                      value={initialValues.title}
                      onInput={(e) => {
                        setinitialValues({
                          ...initialValues,
                          title: e.target.value,
                        })
                      }}
                    ></Field>
                    <div className=" text-red-700">{props.errors.title}</div>
                    <br />
                    <label className=" text-lg text-white" htmlFor="Description">
                      Description : &nbsp;
                    </label>
                    <Field
                      type="text"
                      className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                      name="Description"
                      id="Description"
                      
                      value={initialValues.Description}
                      onInput={(e) => {
                        setinitialValues({
                          ...initialValues,
                          Description: e.target.value,
                        })
                      }}
                    ></Field>
                    <div className=" text-red-700">
                      {props.errors.Description}
                    </div>
                    <br />
                    <label className=" text-lg text-white" htmlFor="Price">
                      Price : &nbsp;
                    </label>
                    <Field
                      type="number"
                      className="border   px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                      name="Price"
                      id="Price"
                      value={initialValues.Price}
                      onInput={(e) => {
                        setinitialValues({
                          ...initialValues,
                          Price: e.target.value,
                        })
                      }}
                    ></Field>
                    <div className=" text-red-700">{props.errors.Price}</div>
                    <br />
                    <label className=" text-lg text-white" htmlFor="Image">
                      Image url : &nbsp;
                    </label>
                    <Field
                      type="text"
                      className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                      name="Image"
                      id="Image"
                      value={initialValues.Image}
                      onInput={(e) => {
                        setinitialValues({
                          ...initialValues,
                          Image: e.target.value,
                        })
                      }}
                    ></Field>
                    <div className=" text-red-700">{props.errors.Image}</div>
                    <br />
                    <label className=" text-lg text-white" htmlFor="rating">
                      ratings : &nbsp;
                    </label>
                    <Field
                      type="number"
                      className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                      name="rating"
                      id="rating"
                      value={initialValues.rating}
                      onInput={(e) => {
                        setinitialValues({
                          ...initialValues,
                          rating: e.target.value,
                        })
                      }}
                    ></Field>
                    <div className=" text-red-700">{props.errors.rating}</div>
                    <br />
                    <button
                      className="btn  px-2 py-2 border bg-blend-color-dodge rounded-full"
                      type="submit"
                    >
                      Update 
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }

  