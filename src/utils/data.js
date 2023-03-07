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
  immunoassay,
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
        description:
          "Hematology includes laboratory assessments of blood formation and blood disorders. We offer a wide range of hematology investigations for our clients which overly helps improve the state of their well being as managed by their clinician.",
      },
      {
        id: 2,
        image: chemistry,
        text: "Clinical Chemistry",
        description:
          "Clinical Chemistry refers to the biochemical analysis of body fluids. It uses chemical reactions to determine the levels of various chemical compounds in bodily fluids. This intel helps your clinician manage your well-being better.",
      },
      {
        id: 3,
        image: microbiology,
        text: "Medical microbiology",
        description:
          "Medical microbiology is a subdiscipline of microbiology that deal with the study of microorganisms capable of infecting and causing diseases in humans. With out state of the art microbiology unit, we help to isolate, identify, and report susceptibility attributes of microorganisms with various antimicrobial substances.",
      },
      {
        id: 4,
        image: immunoassay,
        text: "Immunoassays",
        description:
          "Immunology is the study of the immune system and is a very important branch of the medical and biological sciences. The immune system protects us from infection through various lines of defense. We Investigate and report on immunology parameters as analyzed on our clients’ sample as requested by them.",
      },
      {
        id: 5,
        image: histology,
        text: "Histology, Cytology",
        description:
          "Histopathology is the diagnosis and study of diseases of the tissues, and it involves examining tissues and/or cells under a microscope for physiological anomaly.",
      },
      {
        id: 6,
        image: pathology,
        text: "Molecular Pathology (VIRAL LOADS, DNA, etc.)",
        description:
          "Molecular pathology (VIRAL LOADS, DNA, etc.) We use these processes to identify a disease by studying molecules, such as proteins, DNA, and RNA, in a tissue or fluid.",
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
        description:
          "Diagnostic X-ray, or radiography, is a special method for taking pictures of areas inside the body. A machine focuses a small amount of radiation on the area of the body to be examined. The X-rays pass through the body, creating an image on film or a computer display.",
      },
      {
        id: 2,
        image: ecg,
        text: "ECG",
        description:
          "Electrocardiogram (ECG) is a simple test that can be used to check your heart's rhythm and electrical activity. Sensors attached to the skin are used to detect the electrical signals produced by your heart each time it beats.",
      },
      {
        id: 3,
        image: ultrasound,
        text: "Ultrasound",
        description:
          "Diagnostic ultrasound, also called sonography is an imaging method that uses sound waves to produce images of structures within your body. The images can provide valuable information for diagnosing and directing treatment for a variety of diseases and conditions.",
      },
      {
        id: 4,
        image: mammogram,
        text: "Mammogram",
        description:
          "Mammogram is an X-ray picture of the breast. Doctors use a mammogram to look for early signs of breast cancer.",
      },
      {
        id: 5,
        image: echocardiogram,
        text: "Echocardiogram",
        description:
          "Echocardiogram is a test that uses ultrasound to show how well your heart is working. It is commonly used to diagnose or monitor heart conditions.",
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
        description:
          "Spirometry test used to assess how well your lungs work by measuring how much air you inhale, how much you exhale and how quickly you exhale. Spirometry is used to diagnose asthma, chronic obstructive pulmonary disease (COPD) and other conditions that affect breathing.",
      },
      {
        id: 2,
        image: audiometry,
        text: "Audiometry",
        description:
          "Audiometry exam tests your ability to hear sounds. Sounds vary, based on their loudness (intensity) and the speed of sound wave vibrations (tone). With this test, defects in hearing can be diagnosed.",
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

export const faqData = [
  {
    id: 1,
    question: "What do we do?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia adipisci consequatur voluptatibus, tempore, eum nam iusto cupiditate corrupti facilis odio voluptate. Dolor laborum hic              commodi beatae cupiditate. Esse, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam suscipit! Quod magni maiores eum praesentium expedita nobis et, est suscipit tempore ratione adipisci, sed neque quibusdam quasi. Praesentium, distinctio",
  },
  {
    id: 2,
    question: "How long does a membership last?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia adipisci consequatur voluptatibus, tempore, eum nam iusto cupiditate corrupti facilis odio voluptate. Dolor laborum hic              commodi beatae cupiditate. Esse, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam suscipit! Quod magni maiores eum praesentium expedita nobis et, est suscipit tempore ratione adipisci, sed neque quibusdam quasi. Praesentium, distinctio",
  },
  {
    id: 3,
    question: "Where is our office?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia adipisci consequatur voluptatibus, tempore, eum nam iusto cupiditate corrupti facilis odio voluptate. Dolor laborum hic              commodi beatae cupiditate. Esse, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam suscipit! Quod magni maiores eum praesentium expedita nobis et, est suscipit tempore ratione adipisci, sed neque quibusdam quasi. Praesentium, distinctio",
  },
  {
    id: 4,
    question: "How soon is a feedback guaranteed?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia adipisci consequatur voluptatibus, tempore, eum nam iusto cupiditate corrupti facilis odio voluptate. Dolor laborum hic              commodi beatae cupiditate. Esse, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam suscipit! Quod magni maiores eum praesentium expedita nobis et, est suscipit tempore ratione adipisci, sed neque quibusdam quasi. Praesentium, distinctio",
  },
];
