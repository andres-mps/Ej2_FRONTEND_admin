import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import Category_tr from "../components/Category_tr";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategoryInfo() {
      const categories = await axios({
        method: "GET",
        url: `http://localhost:3000/categories/admin/`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(categories.data);
      //console.log(categories.data);
    }
    getCategoryInfo();
  }, []);

  return (
    <div className="container-fluid m-0 page-wrap">
      <div className="row">
        <div className="col-1 col-md-3 col-xl-2 bg-dark">
          <Sidebar />
        </div>
        <div className="col-11  col-md-9 col-xl-10">
          <div className="table-wrap">
            <NavLink
              to="/categories/add"
              className="btn create_btn shadow d-inline text-right opacity-75 sticky-top me-2  mt-3"
            >
              Add Category
            </NavLink>
            <table className="table table-hover caption-top">
              <caption className="title">Categories</caption>
              <thead>
                <tr className="headers">
                  <th scope="col">Id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Active</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">UpdatedAt</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category) => {
                    return (
                      <Category_tr key={category.id} category={category} />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
