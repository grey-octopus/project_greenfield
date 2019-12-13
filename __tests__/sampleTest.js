import React from "react";
import { shallow } from "enzyme";

describe("Jest and enzyme should be setup correctly", () => {
  it("renders without crashing", () => {
    shallow(<testComponent />);
  });
});
