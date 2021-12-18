import { carrot, horseshoe, hairComb, hay } from "./itemObjects";

const exercises = [
  {
    method: ["push"],
    task: "Lil Sebastian needs straw",
    initialArray: [
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/hair-comb.png",
        name: "hair-comb",
      },
      {
        url: "@/assets/hay.png",
        name: "hay",
      },
    ],
    expectedArray: [
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/hair-comb.png",
        name: "hair-comb",
      },
      {
        url: "@/assets/hay.png",
        name: "hay",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
    ],
  },
  {
    method: ["pop"],
    task: "Lil Sebastian has eaten the carrot. Update the array.",
    instructions:
      "Oposite to the 'push' method, the 'pop' method removes the last item of an array, returning the element. This method changes the lenght of the array. Why don't we give it a try?",
    initialArray: [horseshoe, hairComb, hay, carrot],
    expectedArray: [horseshoe, hairComb, hay],
  },
  {
    method: ["filter"],
    task: "It's time to eat! Leave only Lil Sebastian's favourite food",
    instructions:
      "Just like when finding the right movie, you can apply a filter to an array to get a new array with the items that comply with the condition. Try it here!",
    initialArray: [horseshoe, carrot, hay, carrot],
    expectedArray: [carrot, carrot],
  },
  {
    method: ["find"],
    task: "Take the brush and comb Lil Sebastian",
    introductions:
      "An array can contain many elements, and sometimes we'll need to use only one of them according to a specific condition. That is when we use the method 'find'.",
    initialArray: [carrot, horseshoe, hairComb, hay],
    expectedArray: [hairComb],
  },
  {
    method: ["map"],
    task: "Lil Sebastian needs new shoes",
    instructions:
      "In ocations, we'll need to change each of the elements of an array into something else, obtaining a new array. This is when we use the 'map' method. Let's see how it works.",
    initialArray: [horseshoe, hay, carrot, hairComb],
    expectedArray: [horseshoe, horseshoe, horseshoe, horseshoe],
  },
];

export default exercises;
