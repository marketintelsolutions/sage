import {
  histology,
  microbiology,
  pathology,
  hematology,
  chemistry,
  xray,
  ecg,
  ultrasound,
  mammogram,
  echocardiogram,
  spirometry,
  audiometry,
  healthCheck,
  healthScreen,
  homeService,
  hmo,
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
        image: xray,
        text: "X-Ray",
      },
      {
        id: 2,
        image: ecg,
        text: "ECG",
      },
      {
        id: 3,
        image: ultrasound,
        text: "Ultrasound",
      },
      {
        id: 4,
        image: mammogram,
        text: "Mammogram",
      },
      {
        id: 5,
        image: echocardiogram,
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
        image: spirometry,
        text: "Spirometry",
      },
      {
        id: 2,
        image: audiometry,
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
        image: healthCheck,
        text: "Individual Health checks",
      },
      {
        id: 2,
        image: healthScreen,
        text: "Occupational Health Screenings",
      },
      {
        id: 3,
        image: homeService,
        text: "Home service collection",
      },
      {
        id: 4,
        image: hmo,
        text: "HMO",
      },
    ],
  },
];
