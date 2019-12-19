const sortFeatures = (currentProdFeatures, relatedProdFeatures) => {
  let currentProdFeaturesObj = {};
  let relatedProdFeaturesObj = {};
  let currentProdONLY = [];
  let relatedProdONLY = [];
  let shared = [];

  //   reconcile shared features among selectedItem (features) and current item (currentProdFeatures)

  for (let feature in currentProdFeatures) {
    // add item as K:V pairs to currentProdFeaturesObj;
    currentProdFeaturesObj[currentProdFeatures[feature].feature] =
      currentProdFeatures[feature].value;
  }
  for (let feature in relatedProdFeatures) {
    // add item as K:V pairs to relatedProdFeaturesObj;
    relatedProdFeaturesObj[relatedProdFeatures[feature].feature] =
      relatedProdFeatures[feature].value;
  }

  //   check each feature to see if its in currentProdFeaturesObj
  for (let feature in relatedProdFeaturesObj) {
    if (currentProdFeaturesObj[feature]) {
      // if YES,
      // push obj to shared array with format { feature: [feature], currentVal: value, relatedVal: value }
      shared.push({
        feature: [feature],
        currentVal: currentProdFeaturesObj[feature],
        relatedVal: relatedProdFeaturesObj[feature]
      });
      // delete feature from currentProdFeaturesObj, so you don't go over twice
      delete currentProdFeaturesObj[feature];
    } else {
      // push obj to relatedProdOnly with format {feature: [feature], value:[value]}
      relatedProdONLY.push({
        feature: feature,
        value: relatedProdFeaturesObj[feature]
      });
    }
  }
  for (let feature in currentProdFeaturesObj) {
    //   push remaining features currentProdONLY array
    currentProdONLY.push({
      feature: feature,
      value: currentProdFeaturesObj[feature]
    });
  }
  return {
    currentProductFeatures: currentProdONLY,
    relatedProductFeatures: relatedProdONLY,
    sharedFeatures: shared
  };
};

export default sortFeatures;
