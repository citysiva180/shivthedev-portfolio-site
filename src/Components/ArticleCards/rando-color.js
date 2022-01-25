const color_list = [
  "#92C952",
  "#b89f12",
  "#09826c",
  "#060606",
  "#2A9FD6",
  "tomato",
  "blueviolet",
  "cornflowerblue",
  "indianred",
  "MediumAquaMarine",
  "MediumPurple",
  "Rebeccapurple",
  "sandybrown",
  "seagreen",
  "palevioletred",
  "lightsteelblue",
  "Gold",
  "teal",
];

const gradient_list = [
  [
    {
      backgroundColor: "#8EC5FC",
      backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    },
    {
      backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
    {
      backgroundColor: "#0093E9",
      backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
    {
      backgroundColor: "#3EECAC",
      backgroundImage: "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)",
    },
    {
      backgroundColor: "#21D4FD",
      backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    },
    {
      backgroundColor: "#FA8BFF",
      backgroundImage:
        "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
    },
    {
      backgroundColor: "#74EBD5",
      backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
    },
  ],
];

export function random_color() {
  const rando_color = color_list[Math.floor(Math.random() * color_list.length)];
  return rando_color;
}

export function generate_gradient() {
  const selected_gradient =
    gradient_list[0][Math.floor(Math.random() * gradient_list[0].length)];

  const gradient = {
    backgroundColor: selected_gradient["backgroundColor"],
    backgroundImage: selected_gradient["backgroundImage"],
  };

  return gradient;
}
