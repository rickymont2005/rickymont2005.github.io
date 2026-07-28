import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ricardo Montano | Mechanical Engineering Portfolio",
    short_name: "Ricardo Montano",
    description:
      "Mechanical engineering portfolio focused on mechanical design, manufacturing, aerospace hardware, CAD, fabrication, testing, and systems integration.",
    start_url: "/",
    display: "standalone",
    background_color: "#061522",
    theme_color: "#061522",
    icons: [
      { src: "/favicon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
