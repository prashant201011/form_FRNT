import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:8080/tasks";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Data saved successfully:", response.data.name);
        setFormData({
          name: "",
          rollno: "",
          phonenumber: "",
        });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
    window.location.reload();
  };

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <div></div>
        <div>
          <label htmlFor="name">FirstName:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rollno">Roll No:</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
