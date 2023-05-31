import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const webToken = process.env.REACT_APP_WEB_TOKEN;

  function getData() {
    axios
      .get(`https://${webToken}.mockapi.io/crud-app`)
      .then((res) => {
        setData(res.data);
        console.log("hello");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  });

  const handleDelete = (id) => {
    axios.delete(`https://${webToken}.mockapi.io/crud-app/${id}`).then(() => {
      getData();
    });
  };

  function handleCreate() {
    navigate("/");
  }

  return (
    <>
      <table className="table">
        <thead key={0}>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((arr) => {
          return (
            <tbody key={arr.id}>
              <tr>
                <th scope="row">{arr.id}</th>
                <td>{arr.name}</td>
                <td>{arr.email}</td>
                <td>
                  <button className="btn btn-primary">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(arr.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <button className="btn btn-primary" onClick={handleCreate}>
          <span className="material-symbols-outlined">person_add</span>
        </button>
      </div>
    </>
  );
};

export default Read;
