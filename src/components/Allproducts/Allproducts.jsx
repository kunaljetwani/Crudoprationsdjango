import React from "react";
import { useEffect, useState } from "react";
import Singleproducts from "./singleproduct/Singleproducts";
import { Link } from "react-router-dom";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products); // Initialize filteredProducts with all products
  }, [products]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  });

  useEffect(() => {
    const filtered = products.filter((product) => {
      const searchLower = searchQuery.toLowerCase();
      const titleLower = product.title.toLowerCase();
      const descriptionLower = product.Description.toLowerCase();
      const priceLower = product.Price.toString().toLowerCase();
      const ratingLower=product.rating.toString().toLowerCase();

      return (
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower) ||
        priceLower.includes(searchLower)||
        ratingLower.includes(searchLower)
      );
    });

    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="container">
      <Link to="/add">
        <button type="button" className="btn btn-dark">
          Add products
        </button>
        &nbsp;
      </Link>

      <input
        className="search"
        placeholder="Search cards"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        data-testid="search"
        style={{border:2 +"px solid black"}}
      />

      <div className="row">
        {filteredProducts.map((item) => (
          <div className="col-sm-3  mx-3 my-3 px-2 py-3">
            {products.product_id}
            <Singleproducts data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}










// this is for search in the products components
//let [products,setproducts]=usestate([])
// let [search ,set search]=usestate("")
// let [filteredsearch ,setfilteredsearch]=usestate([])
 // set filteredsearch(products)
 // useeffect=(()=>{ 
  // const filter=products.filter((prod)=>{
  // const searchLower =search.ToLowerCase();
  // const titleLower =prod.title.TOLowerCase()
  // const description=prod.Description.ToLowerCase()
  // return (
//  titleLowe.includes(searchLower)
  //)
  //})
  //  setfilteredproduct(filter)
 //},[searchQuery,products])
 //
 //
 //
 //
 // <input placeholder="search"
 // value{searchQuery}
 // onchange{(e)=> setSearchquery(e.target.value)}
 //
 //
 //
 //
 //
 //
 //filterdproduct.map((item)=>{
// <singleProduct data={item}
 //})
 //
