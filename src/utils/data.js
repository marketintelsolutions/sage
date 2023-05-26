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
          "Medical microbiology is a subdiscipline of microbiology that deal with the study of microorganisms capable of infecting and causing diseases in humans. With our state of the art microbiology unit, we help to isolate, identify, and report susceptibility attributes of microorganisms with various antimicrobial substances.",
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
  // {
  //   id: 4,
  //   title: "Healthcare packages",
  //   items: [
  //     {
  //       id: 1,
  //       image: healthCheck,
  //       text: "Individual Health checks",
  //     },
  //     {
  //       id: 2,
  //       image: healthScreen,
  //       text: "Occupational Health Screenings",
  //     },
  //     {
  //       id: 3,
  //       image: homeService,
  //       text: "Home service collection",
  //     },
  //     {
  //       id: 4,
  //       image: hmo,
  //       text: "HMO",
  //     },
  //   ],
  // },
];

export const faqData = [
  {
    id: 1,
    question: "Ease of scheduling an appointment. Can I book for test online?",
    answer:
      "Yes. We have provision for that, just check the test packages then pick one of your choices.",
  },
  {
    id: 2,
    question:
      "Accuracy of test results. Are your tests results reliable and accurate?",
    answer:
      "Yes. Our facility is ISO certified. Hence our results are reliable.",
  },
  {
    id: 3,
    question: "Turn around time. How soon can I get my test results?",
    answer:
      "The time for our test results ranges from 2hrs- 6hrs, however, depending on the type of test you selected, some might take 3-5 days.",
  },
  {
    id: 4,
    question:
      "Test package and availability of tests. Do you have any test packages for detecting diseases?",
    answer:
      "Yes. We have several packages that can detect diseases just click on our search page to know the one that suits you.",
  },
  {
    id: 5,
    question: "Are your services quality?",
    answer:
      "Yes. All our all services are of international standard with competent personnel in charge.",
  },
  {
    id: 6,
    question:
      "Qualifications of the medical personnel. Are your personnel well trained?",
    answer:
      "Yes. All our medical staff are licensed by their respective councils and are rich in working experience.",
  },
  {
    id: 7,
    question: "Are you using the latest techniques?",
    answer:
      "Yes. All our equipments are automated and current brands in the market.",
  },
  {
    id: 8,
    question: "How can I know the prices of tests you are running?",
    answer:
      "It's very simple just login to our page, the tests and their respective prices will come up.",
  },
  {
    id: 9,
    question: "Do you have payment facility?",
    answer: "Yes, we have POS and you can as well pay in cash.",
  },
  {
    id: 10,
    question: "Is there home service?",
    answer:
      "Yes. We render home services login to our page, make a request and submit.",
  },
  {
    id: 11,
    question: "Do you have HMO?",
    answer:
      "YES. we do. Sage Diagnostics partners with the topmost HMOs in the country.",
  },
  {
    id: 12,
    question: "Is there any promo that I can benefit from?",
    answer:
      "Yes. There are numerous promos, just log in to our page and check the one that best suits you.",
  },
  {
    id: 13,
    question: "Is your facility clean?",
    answer:
      "Yes. Our facility is topnotch with state of art equipments in a clean and serene environment. We pay much attention to the well-being of our clients, hence our facility is always clean.",
  },
  {
    id: 14,
    question: "Is your facility accessible?",
    answer:
      "Yes. Our facility is located by the roadside in the heart of Lekki Phase 1,(Plot 10 Fola Osibo, by road 15 junction Lekki phase 1) very easy to locate.",
  },
];
