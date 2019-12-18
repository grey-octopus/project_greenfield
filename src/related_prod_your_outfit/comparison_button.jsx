import React, { useState } from "react";
import Modal from "react-modal";

const ActionButton = ({ id, showModal = false }) => {
  // const [showModal, changeShowModal] = useState(false);

  if (!showModal) {
    return (
      <div className="actionButton far">
        <div
          className="stars-inner fas"
          style={{ width: 1 }}
          onClick={() => {
            changeShowModal(id);
          }}
        ></div>
      </div>
    );
  }
};

export default ActionButton;
