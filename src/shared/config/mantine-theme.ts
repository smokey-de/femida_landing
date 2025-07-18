import { createTheme, MantineColorsTuple } from "@mantine/core";

const darkMintGreenSchema: MantineColorsTuple = [
  "#effbf3",
  "#def4e5",
  "#b8e8c8",
  "#8fdca9",
  "#6dd28e",
  "#59cc7d",
  "#4dc974",
  "#3eb162",
  "#349e56",
  "#1e6f3a",
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: "darkMintGreen",
  cursorType: "pointer",
  colors: {
    darkMintGreen: darkMintGreenSchema,
  },
});
