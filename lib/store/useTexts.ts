import { create } from "zustand";

export type TextStore = {
  title: string;
  subtitle: string;
  aboutTitle: string;
  aboutDescription: string;
};

export const useTexts = create<TextStore>()((set) => ({
  title: "",
  subtitle: "",
  aboutTitle: "",
  aboutDescription: "",
}));
