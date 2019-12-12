import React from "react";
import { shallow } from "enzyme";

const testComponent = props => {
  return <div testProps="test"></div>;
};

describe("Jest and enzyme should be setup correctly", () => {
  it("renders without crashing", () => {
    shallow(<testComponent />);
  });
});
