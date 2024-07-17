import React from "react";
import { Modal } from "react-bootstrap";

function EditModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
        <Modal
          show={isOpen}
          onHide={onClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {children}
          </Modal.Body>
        </Modal>
    </>
  );
}

export default EditModal;
