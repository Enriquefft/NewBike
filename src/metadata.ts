import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  title: {
    template: "%s | NewBike",
    default: "NewBike",
  },
  description: "A new bike to be young again.",
  keywords: ["bicycle", "old", "comfort"],
  authors: [
    {
      name: "Enrique Flores",
      url: "https://www.linkedin.com/in/enriqueflores000/",
    },
  ],
};
