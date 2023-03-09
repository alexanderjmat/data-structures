const {arr, bubbleSort, optimizedBubbleSort, selectionSort, merge, mergeSort} = require("./sorting-algos")

describe("bubbleSort", () => {
    it("return a sorted array", () => {
      expect(bubbleSort(arr)).toEqual([-96, -95, -90, -84, -57, 11, 14, 15, 32, 77]);
    });
});
describe("optimizedBubbleSort", () => {
    it("return a sorted array", () => {
      expect(optimizedBubbleSort(arr)).toEqual([-96, -95, -90, -84, -57, 11, 14, 15, 32, 77]);
    });
});
describe("selectionSort", () => {
    it("return a sorted array", () => {
      expect(selectionSort(arr)).toEqual([-96, -95, -90, -84, -57, 11, 14, 15, 32, 77]);
    });
});
describe("mergeSort", () => {
    it("return a sorted array", () => {
      expect(mergeSort(arr)).toEqual([-96, -95, -90, -84, -57, 11, 14, 15, 32, 77]);
    });
});