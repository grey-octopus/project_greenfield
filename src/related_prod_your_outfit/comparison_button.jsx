import React, { useState } from "react";
import { connect } from "react-redux";
import FeaturesTable from "./featuresTable.jsx";
import Modal from "react-modal";

const customStyles = {
  content: {
    textAlign: "center",
    top: "30%",
    right: "30%",
    left: "30%"
    // bottom: "50%"
  }
};

const ActionButton = ({
  id,
  features,
  currentProdFeatures,
  name,
  currentProdName
}) => {
  let [isModalOpen, toggleIsModalOpen] = useState(false);
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
        <FeaturesTable
          comparisonProdFeatures={features}
          currentProdFeatures={currentProdFeatures}
          name={name}
          currentProdName={currentProdName}
          className="featuresTable"
        />
        {/* <p>FEATURES:{JSON.stringify(features)}</p>
        <p>CURRENT PROD FEATURES: {JSON.stringify(currentProdFeatures)}</p> */}
        <button onClick={() => toggleIsModalOpen(false)}>close me</button>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    currentProdFeatures: state.fetchProductInfoReducer.features,
    currentProdName: state.fetchProductInfoReducer.title
  };
};

export default connect(mapStateToProps, null)(ActionButton);
