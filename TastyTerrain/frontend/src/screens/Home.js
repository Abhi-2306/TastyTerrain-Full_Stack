// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// // import { Link } from "react-router-dom";
// import Card from "../Components/Card";
// // import Carousel from "../Components/Carousel";

// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [foodItem, setFoodItem] = useState([]);
//   const [foodCategory, setFoodCategory] = useState([]);

//   const loadData = async () => {
//     // let response = await fetch("http://localhost:5000/api/foodData", {
//     let response = await fetch("/api/foodData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     response = await response.json();
//     console.log(response);
//     console.log("HI");
//     console.log(response[0]);
//     console.log("hiiii");
//     console.log(response[1]);
    
    
    
//     // console.log(response[0],response[1]);
//     setFoodItem(response[0]);
//     setFoodCategory(response[1]);
//   };
//   useEffect(() => {
//     return () => {
//       loadData();
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <div
//           id="carouselExampleFade"
//           className="carousel slide carousel-fade"
//           style={{ objectFit: "contain !important" }}
//         >
//           <div className="carousel-inner" id="carousel">
//             <div className="carousel-caption" style={{ zIndex: "10" }}>
//               <div className="d-flex justify-content-center" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 {/* <button
//                   className="btn btn-outline-success bg-success text-white"
//                   type="submit"
//                 >
//                   Search
//                 </button> */}
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img
//                 src="https://olo-images-live.imgix.net/4c/4c565365175945b38a542e95a3645f34.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=3118c72e541b3bd01069f311e1825d50"
//                 className="d-block w-100"
//                 alt="..."
//                 style={{ objectFit: "fill" }}
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
//                 className="d-block w-100"
//                 alt="..."
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://www.maggiarabia.com/sites/default/files/srh_recipes/30c29da8aec1403f42e82552d927abab.png"
//                 className="d-block w-100"
//                 alt="..."
//               />
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className="conatainer">
//         {foodCategory !== "[]"
//           ? foodCategory.map((data) => {
//               return (
//                 <div className="row mb-3">
//                   <div key={data._id} className="fs-3 m-3">
//                     {data.CategoryName}
//                   </div>
//                   <hr /> 
//                   {foodItem !== "[]" ? (
//                     foodItem
//                       .filter(
//                         (item) =>
//                           item.CategoryName === data.CategoryName &&
//                           item.name.toLowerCase().includes(search.toLowerCase())
//                       )
//                       .map((filteredData) => {
//                         return (
//                           <div className="col-12 col-md-6 col-lg-3">
//                             <div key={filteredData._id}>
//                               <Card
//                                 foodItem={filteredData}
//                                 options={filteredData.options[0]}
//                               ></Card>
//                             </div>
//                           </div>
//                         );
//                       })
//                   ) : (
//                     <div>"Data Not Found"</div>
//                   )}
//                 </div>
//               );
//             })
//           : ""}
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      let response = await fetch("/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      console.log("Food items:", data[0]);
console.log("Food categories:", data[1]);

      
      setFoodItem(data[0] || []);
      setFoodCategory(data[1] || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError("Failed to load data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://olo-images-live.imgix.net/4c/4c565365175945b38a542e95a3645f34.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=3118c72e541b3bd01069f311e1825d50"
              className="d-block w-100"
              alt="Carousel Image 1"
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
              className="d-block w-100"
              alt="Carousel Image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.maggiarabia.com/sites/default/files/srh_recipes/30c29da8aec1403f42e82552d927abab.png"
              className="d-block w-100"
              alt="Carousel Image 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        {foodCategory.length > 0 ? (
          foodCategory.map((data) => (
            <div key={data._id} className="row mb-3">
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteredData) => (
                    <div key={filteredData._id} className="col-12 col-md-6 col-lg-3 mb-4">
                      <Card foodItem={filteredData} options={filteredData.options[0]} />
                    </div>
                  ))
              ) : (
                <div>No items found in this category.</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
