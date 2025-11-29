import { IconType } from "react-icons";

interface RecipeIcon {
  component: IconType;
  color: string;
}

export interface RecipeCard {
  title: string;
  description: string;
  icon: RecipeIcon;
  tags: string[];
}

