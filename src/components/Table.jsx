import React, { useState } from "react";
import Modal from "./Modal";
import { sampleData, header } from "../data/sampleData";

const Table = () => {
    const [modalData, setModalData] = useState(null);

    const handlePatientClick = (patient) => setModalData({ type: "patient", data: patient });
    const handleActionClick = (action, patient) => setModalData({ type: action, data: patient });
  
    return (
      <div className="container mt-4">
        <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr className="bg-secondary text-white">
            {header.map((heading, index)=>{
                return <th key={index}>{heading}</th>
            })}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((patient, index) => (
              <tr key={index}>
                <td>
                  <button className="btn btn-link" onClick={() => handlePatientClick(patient)}>
                    {patient.name}
                  </button>
                </td>
                <td>{patient.contact}</td>
                <td>{patient.parent}</td>
                <td>{patient.actions}</td>
                <td>{patient.dueDate}</td>
                <td>
                  <button className="btn btn-success btn-sm" onClick={() => handleActionClick("Vaccines", patient)}>
                    Vaccines
                  </button>{" "}
                  <button className="btn btn-secondary btn-sm" onClick={() => handleActionClick("Follow-up", patient)}>
                    Follow-up
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {modalData && <Modal modalData={modalData} onClose={() => setModalData(null)} />}
        </div>
      </div>
    );
}

export default Table