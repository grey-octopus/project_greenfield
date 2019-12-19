import React from "react";
import sortFeatures from "./featuresTableHelper.js";

const FeaturesTable = ({
  relatedProdFeatures,
  currentProdFeatures,
  relatedProdName,
  currentProdName
}) => {
  let {
    currentProductFeatures,
    relatedProductFeatures,
    sharedFeatures
  } = sortFeatures(currentProdFeatures, relatedProdFeatures);

  return (
    <div className="FeatureComparisonTableContainer">
      <table className="FeatureComparisonTable" align="center">
        <tbody style={{ textAlign: "center" }}>
          <tr className="tableHeader">
            <td>{currentProdName}</td>
            <td></td>
            <td>{relatedProdName}</td>
          </tr>

          {sharedFeatures.map(feature => {
            return (
              <tr>
                <td>{feature.currentVal}</td>
                <td>{feature.feature}</td>
                <td>{feature.relatedVal}</td>
              </tr>
            );
          })}
          {currentProductFeatures.map(feature => {
            return (
              <tr>
                {feature.value === "null" ? (
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                ) : (
                  <td>{feature.value}</td>
                )}
                <td>{feature.feature}</td>
                <td></td>
              </tr>
            );
          })}
          {relatedProductFeatures.map(feature => {
            return (
              <tr>
                <td></td>
                <td>{feature.feature}</td>
                {feature.value === "null" ? (
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                ) : (
                  <td>{feature.value}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTable;
