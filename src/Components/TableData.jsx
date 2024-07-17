import React, { useEffect, useState } from "react";
import EditModal from "./EditModal";
import axios from "axios";
import UserForm from "./UserForm";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";
import AddUserModal from "./AddUserModal";

function TableData({ props }) {
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [employee, setEmployee] = useState([...props]);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const callAddUser = () => {
    setCreateModal(true);
  };
  const callEditModal = (empDet) => {
    setSelectedEmp(empDet);
    setEditModal(true);
  };

  useEffect(() => {
    setEmployee(props);
  }, [props]);

  const generateSuccess = (err) =>
    toast.success(err, {
      position: "top-center",
    });

  const closeCreateModal = () => setCreateModal(false);
  const closeModal = () => setEditModal(false);

  const handleFormSubmit = (data) => {
    console.log("===Submit Data===",data)
    axios
      .post(`http://localhost:4444/employee`, data)
      .then((res) => {
        generateSuccess("Employee Added Successfully !");
        getEmployees();
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const handleSubmit = (data) => {
    axios
      .put(`http://localhost:4444/employee/${data.id}`, data)
      .then((res) => {
        generateSuccess("Employee updated Successfully !");
        getEmployees();
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:4444/employee/${id}`)
      .then((res) => {
        console.log(res.data);
        generateSuccess("Employee removed Successfully !");
        getEmployees();
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const getEmployees = () => {
    axios
      .get("http://localhost:4444/employee")
      .then((res) => {
        console.log("==response", res.data);
        setEmployee(res.data);
        closeModal();
        closeCreateModal();
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <>
      <div className="page">
        <Container>
          <div className="d-flex justify-content-end">
            <div>
              <Button onClick={callAddUser}>+ Add</Button>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Mobile </th>
                  <th>JobRole </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((item) => (
                  <tr key={item.id}>
                    <td>{item.empId}</td>
                    <td> {item.name}</td>
                    <td> {item.email}</td>
                    <td> {item.mobile}</td>
                    <td> {item.jobRole}</td>
                    <td>
                      <a
                        href="#"
                        className="edit p-2"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => callEditModal(item)}
                      >
                        <i className="material-icons">&#xE254;</i>
                      </a>
                      <a
                        href="#"
                        className="delete p-2"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                        onClick={() => deleteEmployee(item.id)}
                      >
                        <i className="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AddUserModal isOpen={createModal} onClose={closeCreateModal}>
            <UserForm onSubmit={handleFormSubmit} />
          </AddUserModal>
          {selectedEmp != null && (
            <EditModal isOpen={editModal} onClose={closeModal}>
              <UserForm onSubmit={handleSubmit} defaultValues={selectedEmp} />
            </EditModal>
          )}
          <ToastContainer />
        </Container>
      </div>
    </>
  );
}

export default TableData;
