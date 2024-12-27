import React from 'react';
import { Modal as MuiModal, Box } from "@mui/material";

const Modal = ({ modalData, onClose }) => {
    const { type, data } = modalData;
  
    return (
      <MuiModal open={!!modalData} onClose={onClose}>
        <Box style={{ margin: "10% auto",
          padding: "20px",
          backgroundColor: "white",
          width: "90%",
          maxWidth: "500px",
          borderRadius: "8px", }}>
          {type === "patient" && <div><strong>Patient Details:</strong></div>}
          {type === "Vaccines" && <div><strong>Vaccines Details:</strong></div>}
          {type === "Follow-up" && <div><strong>Follow-up Details:</strong></div>}
          <div>
            <div>Patient Name: {data.name}</div>
            <div>Contact: {data.contact}</div>
            <div>Parent: {data.parent}</div>
            <div>Due Date: {data.dueDate}</div>
            <div>Actions: {data.actions}</div>
          </div>
          <button className="btn btn-danger mt-3" onClick={onClose}>
            Close
          </button>
        </Box>
      </MuiModal>
    );
}

export default Modal