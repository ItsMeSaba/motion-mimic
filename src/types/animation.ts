import { StaticImageData } from "next/image";

export interface Animation {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  preview: string | StaticImageData;
  difficulty: "easy" | "medium" | "hard";
  type: "css" | "js" | "react";
  icon: string;
}
