import React, { useState } from "react";
import { connect } from "react-redux";
import FeaturesTable from "./featuresTable.jsx";
import Modal from "react-modal";

const customStyles = {
  content: {
    textAlign: "center",
    top: "30%",
    right: "30%",
    left: "30%",
    bottom: "30%"
  }
};

const ActionButton = ({
  id,
  features,
  currentProdFeatures,
  relatedProdName,
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
        <button
          className="exitComparisonWindow"
          onClick={() => toggleIsModalOpen(false)}
        >
          X
        </button>
        <h2 className="comparison-header">Comparing</h2>
        <FeaturesTable
          relatedProdFeatures={features}
          currentProdFeatures={currentProdFeatures}
          relatedProdName={relatedProdName}
          currentProdName={currentProdName}
          className="featuresTable"
        />
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
