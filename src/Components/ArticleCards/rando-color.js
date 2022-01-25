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
// const rando_color = color_list[Math.floor(Math.random() * color_list.length)];
export function random_color() {
  const rando_color = color_list[Math.floor(Math.random() * color_list.length)];
  return rando_color;
}

// export function generate_gradient(){
//   const rando_gradient
// }
