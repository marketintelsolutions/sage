import {
  histology,
  microbiology,
  pathology,
  hematology,
  chemistry,
} from "../assets/images";

export const services = [
  {
    id: 1,
    title: "pathology",
    items: [
      {
        id: 1,
        image: hematology,
        text: "Hematology",
      },
      {
        id: 2,
        image: chemistry,
        text: "Clinical Chemistry",
      },
      {
        id: 3,
        image: microbiology,
        text: "Immunoassays",
      },
      {
        id: 4,
        image: histology,
        text: "Histology, Cytology",
      },
      {
        id: 5,
        image: pathology,
        text: "Molecular Pathology (VIRAL LOADS, DNA, etc.)",
      },
    ],
  },
  {
    id: 2,
    title: "Imaging",
    items: [
      {
        id: 1,
        image: hematology,
        text: "X-Ray",
      },
      {
        id: 2,
        image: chemistry,
        text: "ECG",
      },
      {
        id: 3,
        image: microbiology,
        text: "Ultrasound",
      },
      {
        id: 4,
        image: histology,
        text: "Mammogram",
      },
      {
        id: 5,
        image: pathology,
        text: "Echocardiogram",
      },
    ],
  },
  {
    id: 3,
    title: "Other Investigations",
    items: [
      {
        id: 1,
        image: hematology,
        text: "Spirometry",
      },
      {
        id: 2,
        image: chemistry,
        text: "Audiometry",
      },
    ],
  },
  {
    id: 4,
    title: "Healthcare packages",
    items: [
      {
        id: 1,
        image: hematology,
        text: "Individual Health checks",
      },
      {
        id: 2,
        image: chemistry,
        text: "Occupational Health Screenings",
      },
      {
        id: 3,
        image: microbiology,
        text: "Home service collection",
      },
      {
        id: 4,
        image: histology,
        text: "HMO",
      },
    ],
  },
];
