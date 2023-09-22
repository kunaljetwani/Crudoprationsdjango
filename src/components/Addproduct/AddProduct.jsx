import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  let history = useNavigate();
  const initialValues = {
    title: "",
    Description: "",
    Price: "",
    Image: "",
    rating: "",
  };

  const Onsubmit = (values) => {
    console.log("Form Values:", values);
    fetch("http://127.0.0.1:8000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), // Send the form values in the request body
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    history("/");
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    Description: Yup.string()
      .required("Description is required")
      .max(300, "Description is too long"),
    Price: Yup.number().required("Price is required"),
    Image: Yup.string().required("Image URL is required"),
    rating: Yup.number().required("Ratings is required"),
  });

  return (
    <div className="container">
      <div className="row bg-teal-700 border  hover:shadow-lg px-5 py-5 my-5">
        <div className="col-sm-12 ">
          <div className= " bg-white w-70 border" >
            <h3 className="  bg-teal-700   border px-24 py-2  mx-48 my-2">
              Adding the new product in the list
            </h3>
            <Formik
              initialValues={initialValues}
              onSubmit={Onsubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form className="  flex-1  justify-center align-middle">
                  <label className=" text-lg" htmlFor="title">
                    Title : &nbsp;
                  </label>
                  <Field
                    className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                    type="text"
                    name="title"
                    id="title"
                  ></Field>
                  <div className=" text-red-800">

                  {props.errors.title}
                  </div>
                  <br />
                  <label
                    className=" text-lg  px-2 py-2"
                    htmlFor="Description"
                  >
                    Description : &nbsp;
                  </label>
                  <Field
                    type="text"
                    className="border  rounded-2xl  px-2 py-2 cursor-pointer hover:shadow-xl"
                    name="Description"
                    id="Description"
                  ></Field>
                  <div className=" text-red-800">

                  {props.errors.Description}
                  </div>
                  <br />
                  <label
                    className=" text-lg  px-2 py-2"
                    htmlFor="Price"
                  >
                    Price : &nbsp;
                  </label>
                  <Field
                    type="number"
                    className="border   px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                    name="Price"
                    id="Price"
                  ></Field>
                  <div className=" text-red-800">
                    
                  {props.errors.Price}
                  </div>
                  <br />
                  <label
                    className=" text-lg  px-2 py-2"
                    htmlFor="Image"
                  >
                    Image url : &nbsp;
                  </label>
                  <Field
                    type="text"
                    className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                    name="Image"
                    id="Image"
                  ></Field>
                  <div className=" text-red-800">

                  {props.errors.Image}
                  </div>
                  <br />
                  <label
                    className=" text-lg px-2 py-2"
                    htmlFor="rating"
                  >
                    ratings : &nbsp;
                  </label>
                  <Field
                    type="number"
                    className="border  px-2 py-2 rounded-2xl cursor-pointer hover:shadow-xl"
                    name="rating"
                    id="rating"
                  ></Field>
                  <div className=" text-red-800">

                  {props.errors.rating}
                  </div>
                  <br />
                  <button
                    className=" bg-teal-700  px-2 py-2 mx-2 my-4 text-white border  rounded"
                    type="submit"
                  >
                    Add Product
                  </button>
                  &nbsp; &nbsp; &nbsp;
                  <Link to="/"></Link>
                  <button
                    className=" bg-teal-700 border  text-white bg-blend-color-dodge rounded px-2 py-2"
                    type="submit"
                  >
                    Home
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

export default AddProduct;
