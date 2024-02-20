import React from "react";

export default function Card(props) {
  const options = props.options;
  const priceOptions = Object.keys(options);
  const valueOptions = Object.values(options);
  return (

      <div>
        <div className="card mt-3" style={{ width: "20rem" }}>
          <img
            src={props.imgSrc}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", objectFit: "fill" }}
            width="500px"
            height="300px"
          />
          <div className="card-body ">
            <h5 className="card-title">{props.foodName}</h5>
            <div className="container">
              <select className="m-2 h-100 text-white bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 text-white bg-success rounded">
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <span className="fs-5">Total Price</span>
            </div>
            <button className="btn btn-success justify-center ms-2">Add to Cart</button>
          </div>
        </div>
      </div>
  );
}
