import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "20rem" }}
        >
          <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=sph" className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title so that it is
              good
            </p>
            <div className="container">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-7">
                <span>Total Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
