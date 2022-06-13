const assert = require("assert");
const { expect } = require("chai");
const Province = require("./Province");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province.Province(Province.sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});

describe("province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province.Province(Province.sampleProvinceData());
  });

  it("shortfall", function () {
    // const asia = new Province.Province(Province.sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    // const asia = new Province.Province(Province.sampleProvinceData());
    expect(asia.profit).equal(230);
  });

  it("zero demand", function () {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it("negative demand", function () {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });

  //   it("change production", function () {
  //     asia.producers[0].production = 20;
  //     expect(asia.shortfall).equal(-6);
  //     expect(asia.profit).equal(292);
  //   });
});

describe("no producers", function () {
  let noProducers;
  this.beforeEach(function () {
    const data = {
      name: "No proudcers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province.Province(data);
  });
  it("shortfall", function () {
    expect(noProducers.shortfall).equal(30);
  });

  it("profit", function () {
    expect(noProducers.profit).equal(0);
  });
});
