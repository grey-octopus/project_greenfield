import React from "react";
import sortFeatures from "./featuresTableHelper.js";

const FeaturesTable = ({
  relatedProdFeatures,
  currentProdFeatures,
  name,
  currentProdName
}) => {
  let {
    currentProductFeatures,
    relatedProductFeatures,
    sharedFeatures
  } = sortFeatures(currentProdFeatures, relatedProdFeatures);

  console.log("CURRENT PROD", currentProductFeatures);
  console.log("SHARED", sharedFeatures);
  console.log("RELATED PROD", relatedProductFeatures);
  return (
    <div>
      <table className="FeatureComparisonTable">
        <tbody>
          {currentProductFeatures.map(feature => {
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

//   for (let i = 0; i < currentProdFeatures.length; i++) {
//     //   add features from current prod to addToCurrentProdOnly
//     currentProdFeaturesObj[currentProdFeatures[i].feature] = {
//       currentProdValue: currentProdFeatures[i].value
//     };
//     addToCurrentProdOnly[currentProdFeatures[i].feature] =
//       currentProdFeatures[i].value;
//   }

//   for (let i = 0; i < comparisonProdFeatures.length; i++) {
//     //   if the feature exists, add another property on that feature
//     if (currentProdFeaturesObj[comparisonProdFeatures[i].feature]) {
//       //   currentProdFeaturesObj[
//       //     comparisonProdFeatures[i].feature
//       //   ].comparisonValue = comparisonProdFeatures[i].value;
//       //   remove from addTocurrentProdONLY
//       delete addToCurrentProdOnly[comparisonProdFeatures[i].feature];
//       // add to shared
//       shared.push({
//         [comparisonProdFeatures[i].feature]: {
//           currentProd:
//             currentProdFeaturesObj[comparisonProdFeatures[i].feature]
//               .currentProdValue,
//           comparisonProd: comparisonProdFeatures[i].value
//         }
//       });
//     } else {
//       // if the feature does not already exist, add the property
//       currentProdFeaturesObj[comparisonProdFeatures[i].feature] = {
//         comparisonValue: comparisonProdFeatures[i].value
//       };
//       //   add to comparisonProdONLY
//       comparisonProdONLY.push(
//         {
//           [comparisonProdFeatures[i].feature]: [comparisonProdFeatures[i].value]
//         }
//         // currentProdFeaturesObj[comparisonProdFeatures[i].feature]
//       );
//     }
//   }
//   for (let feature in addToCurrentProdOnly) {
//     currentProdONLY.push(addToCurrentProdOnly[feature]);
//   }
