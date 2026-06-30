import React from "react";

const NonEmpty = ({ topics, setTopics }) => {
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Dashboard</h2>

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm text-center p-3">
            <h5>Total Tasks</h5>
            <h2>{topics.length}</h2>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm text-center p-3">
            <h5>Pending</h5>
            <h2>
              {topics.filter(t => t.status !== "Completed").length}
            </h2>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm text-center p-3">
            <h5>Completed</h5>
            <h2>
              {topics.filter(t => t.status === "Completed").length}
            </h2>
          </div>
        </div>

      </div>

     

    </div>
  );
};

export default NonEmpty;