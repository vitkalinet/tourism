import khurul from "../../data/tours/khurul.json";
import elistaWalk from "../../data/tours/elista-walk.json";
import topol from "../../data/tours/topol.json";
import palmovMuseum from "../../data/tours/palmov-museum.json";
import dunesSaigas from "../../data/tours/dunes-saigas.json";
import nomadsCamels from "../../data/tours/nomads-camels.json";
import horseRiding from "../../data/tours/horse-riding.json";
import lotus from "../../data/tours/lotus.json";
import tibetanMedicine from "../../data/tours/tibetan-medicine.json";
import massage from "../../data/tours/massage.json";
import yurtNight from "../../data/tours/yurt-night.json";
import chessBender from "../../data/tours/chess-bender.json";
import categoriesData from "../../data/tours/categories.json";

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  shortDescription: string;
  duration: string;
  price: string;
  category: string;
  categoryLabel: string;
  icon: string;
  highlights: string[];
  gradient: string;
  season: string;
  image: string;
  itinerary: { time: string; title: string; desc: string }[];
  included: string[];
  notIncluded: string[];
  importantInfo: { label: string; value: string }[];
  related: string[];
}

export const tours: Tour[] = [
  khurul,
  elistaWalk,
  topol,
  palmovMuseum,
  dunesSaigas,
  nomadsCamels,
  horseRiding,
  lotus,
  tibetanMedicine,
  massage,
  yurtNight,
  chessBender,
];

export const getToursByCategory = (category: string): Tour[] => {
  if (category === "all") return tours;
  return tours.filter((tour) => tour.category === category);
};

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((tour) => tour.slug === slug);
};

export const categories = categoriesData;