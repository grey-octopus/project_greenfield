import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    textAlign: "center",
    top: "30%",
    right: "40%",
    left: "40%",
    bottom: "50%"
  }
};

const ActionButton = ({ id }) => {
  let [isModalOpen, toggleIsModalOpen] = useState(false);
  console.log("ISMODALOPEN", isModalOpen);
  return (
    <div className="actionButton-inner far">
      <div
        className="actionButton"
        style={{ width: 1 }}
        onClick={() => {
          toggleIsModalOpen(true);
        }}
      ></div>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={toggleIsModalOpen}
        contentLabel={"Comparison modal"}
      >
        <h2 className="comparison-header">Comparing</h2>
        <p>{id}</p>
        <button onClick={() => toggleIsModalOpen(false)}>close me</button>
      </Modal>
    </div>
  );
};

export default ActionButton;
