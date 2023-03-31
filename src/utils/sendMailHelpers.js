import axios from "axios";

// CONTACT FORM
export const sendmail = ({
  firstname,
  lastname,
  email,
  phone,
  subject,
  message,
  formName,
  recipient_email,
  fields,
}) => {
  if (firstname && lastname && email && phone && subject && message) {
    axios
      // .post("http://localhost:5000/send_email", {
      .post("https://sage-go1t.onrender.com/send_email", {
        firstname,
        lastname,
        email,
        phone,
        subject,
        message,
        formName,
        recipient_email,
        fields,
      })
      .then(() => alert("Message Sent successfully"))
      .catch(() => alert("Ooops...failed"));
  } else return alert("Fill all fields");
};

// HOME SERVICE
export const sendhome = ({
  name,
  email,
  message,
  address,
  phone,
  formName,
  recipient_email,
  fields,
}) => {
  if (name && email && message && address && phone) {
    axios
      // .post("http://localhost:5000/send_home", {
      .post("https://sage-go1t.onrender.com/send_email", {
        name,
        email,
        message,
        address,
        phone,
        formName,
        recipient_email,
        fields,
      })
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

// APPOINTMENT BOOKING
export const sendbooking = ({
  slot,
  investigation,
  date,
  moreDetails,
  title,
  firstname,
  lastname,
  gender,
  phone,
  email,
  weight,
  formName,
  recipient_email,
  fields,
}) => {
  if (
    slot &&
    investigation &&
    date &&
    moreDetails &&
    title &&
    firstname &&
    lastname &&
    gender &&
    phone &&
    email &&
    weight
  ) {
    axios
      .post("https://sage-go1t.onrender.com/send_booking", {
        // .post("https://sage-go1t.onrender.com/send_email", {
        slot,
        investigation,
        date,
        moreDetails,
        title,
        firstname,
        lastname,
        gender,
        phone,
        email,
        weight,
        formName,
        recipient_email,
        fields,
      })
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

// CORPORATE PACKAGES
export const sendcorporate = ({
  firstname,
  lastname,
  company,
  email,
  address,
  city,
  state,
  phone,
  heathPackage,
  message,
  formName,
  recipient_email,
  fields,
}) => {
  if (
    firstname &&
    lastname &&
    company &&
    email &&
    address &&
    city &&
    state &&
    phone &&
    heathPackage &&
    message
  ) {
    axios
      // .post("http://localhost:5000/send_corporate", {
      .post("https://sage-go1t.onrender.com/send_email", {
        firstname,
        lastname,
        company,
        email,
        address,
        city,
        state,
        phone,
        heathPackage,
        message,
        formName,
        recipient_email,
        fields,
      })
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

// FEDBACK FORM
export const sendfeedback = ({
  doctorName,
  contactNumber,
  address,
  email,
  knowSageDiagnostics,
  sageDiagnosticsUsage,
  responseTime,
  selectedMotivations,
  selectedAlertMode,
  helpdesk,
  quality,
  turnaround,
  dispatch,
  awareness,
  mediaPresence,
  testPrices,
  responseTime2,
  testRange,
  meetingFrequency,
  hadIssues,
  responseQuality,
  feedback,
  fields,
  formName,
  recipient_email,
}) => {
  if (
    doctorName &&
    contactNumber &&
    address &&
    email &&
    knowSageDiagnostics &&
    responseTime &&
    selectedMotivations &&
    selectedAlertMode &&
    helpdesk &&
    quality &&
    turnaround &&
    dispatch &&
    awareness &&
    mediaPresence &&
    testPrices &&
    responseTime2 &&
    testRange &&
    meetingFrequency &&
    hadIssues &&
    feedback
  ) {
    axios
      // .post("http://localhost:5000/send_feedback", {
      .post("https://sage-go1t.onrender.com/send_email", {
        doctorName,
        contactNumber,
        address,
        email,
        knowSageDiagnostics,
        sageDiagnosticsUsage,
        responseTime,
        selectedMotivations,
        selectedAlertMode,
        helpdesk,
        quality,
        turnaround,
        dispatch,
        awareness,
        mediaPresence,
        testPrices,
        responseTime2,
        testRange,
        meetingFrequency,
        hadIssues,
        responseQuality,
        feedback,
        fields,
        formName,
        recipient_email,
      })
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};
