import { Lora, League_Spartan, Roboto} from "next/font/google";

export const loraFont = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const leagueSpartanFont = League_Spartan({
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});
