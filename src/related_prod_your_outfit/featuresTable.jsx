import React from "react";

const FeaturesTable = ({
  comparisonProdFeatures,
  currentProdFeatures,
  name,
  currentProdName
}) => {
  let tableObj = {};
  for (let i = 0; i < currentProdFeatures.length; i++) {
    tableObj[currentProdFeatures[i].feature] = {
      currentProdValue: currentProdFeatures[i].value
    };
  }
  let tableObj2 = {};
  for (let i = 0; i < comparisonProdFeatures.length; i++) {
    //   if the feature exists, add another property on that feature
    if (tableObj[comparisonProdFeatures[i].feature]) {
      tableObj[comparisonProdFeatures[i].feature].comparisonValue =
        comparisonProdFeatures[i].value;
    } else {
      // if the feature does not already exist, add the property
      tableObj[comparisonProdFeatures[i].feature] = {
        comparisonValue: comparisonProdFeatures[i].value
      };
    }

    // Object.assign(tableObj, tableObj[comparisonProdFeatures[i].feature], {
    //   [comparisonProdFeatures[i].feature]: {
    //     comparisonProdValue: comparisonProdFeatures[i].value
    //   }
    // });
    // tableObj2[comparisonProdFeatures[i].feature] = {
    //   comparisonProdValue: comparisonProdFeatures[i].value
    // };
  }

  //   console.log(tableObj);
  console.log(comparisonProdFeatures);
  console.log(currentProdFeatures);

  console.log(tableObj);
  console.log(tableObj2);
  return (
    <div>
      <table className="FeatureComparisonTable">
        <tbody>
          {comparisonProdFeatures.map(feature => {
            return (
              <tr>
                <td>Feature:{feature.feature}</td>
                <td>Value:{feature.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturesTable;
