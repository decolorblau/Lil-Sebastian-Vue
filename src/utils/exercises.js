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
        url: "@/assets/straw.png",
        name: "straw",
      },
    ],
  },
  {
    method: ["pop"],
    task: "Lil Sebastian has eaten the carrot. Update the array",
    initialArray: [
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/hair-comb.png",
        name: "hair-comb",
      },
    ],
    expectedArray: [
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
    ],
  },
  {
    method: ["filter"],
    task: "It's time to eat! Leave only Lil Sebastian's favourite food",
    initialArray: [
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
    ],
    expectedArray: [
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
      {
        url: "@/assets/carrot.png",
        name: "carrot",
      },
    ],
  },
  {
    method: ["find"],
    task: "Take the brush and comb Lil Sebastian",
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
        url: "@/assets/straw.png",
        name: "straw",
      },
    ],
    expectedArray: [
      {
        url: "@/assets/hair-comb.png",
        name: "hair-comb",
      },
    ],
  },
  {
    method: ["map"],
    task: "Lil Sebastian needs new shoes",
    initialArray: [
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
      {
        url: "@/assets/straw.png",
        name: "straw",
      },
    ],
    expectedArray: [
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
      {
        url: "@/assets/horseshoe.png",
        name: "horseshoe",
      },
    ],
  },
];

export default exercises;
