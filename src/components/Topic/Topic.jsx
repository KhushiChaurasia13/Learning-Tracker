import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

const Topic = ({ topics, setTopics }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Topics</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          + Add Topic
        </button>
      </div>

      <div className="list-group">

        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="list-group-item list-group-item-action fs-3"
          >
            {topic.title.charAt(0).toUpperCase() +topic.title.slice(1)}
          </Link>
        ))}

      </div>

      {showForm && (
        <Form
          setShowForm={setShowForm}
          setTopics={setTopics}
          mode="add"
        />
      )}

    </div>
  );
};

export default Topic;