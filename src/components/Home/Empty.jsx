import React, { useState } from "react";
import Form from "../Form/Form";

const Empty = ({ setTopics }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mt-5 text-center">

      {showForm ? (
        <Form
          setShowForm={setShowForm}
          setTopics={setTopics}
          mode="add"
        />
      ) : (
        <div className="card p-4 shadow-sm">

          <h2 className="mb-2">😕 No Tasks Yet</h2>

          <p className="text-muted">
            Start by adding your first topic
          </p>

          <button
            className="btn btn-success mt-3"
            onClick={() => setShowForm(true)}
          >
            + Add Topic
          </button>

        </div>
      )}

    </div>
  );
};

export default Empty;