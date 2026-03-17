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
      // .post("http://localhost:5050/send_email", {
      .post("https://sagebackend-207c01373df4.herokuapp.com/send_email", {
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
  referral,
  formName,
  recipient_email,
  fields,
}) => {
  if (name && email && message && address && phone) {
    axios
      // .post("http://localhost:5050/send_home", {
      .post("https://sagebackend-207c01373df4.herokuapp.com/send_home", {
        name,
        email,
        message,
        address,
        phone,
        referral,
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
  referral,
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
    weight &&
    referral
  ) {
    axios
      .post("https://sagebackend-207c01373df4.herokuapp.com/send_booking", {
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
        referral,
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
  noOfStaff,
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
    noOfStaff &&
    message
  ) {
    axios
      // .post("http://localhost:5050/send_corporate", {
      .post("https://sagebackend-207c01373df4.herokuapp.com/send_corporate", {
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
        noOfStaff,
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
      // .post("http://localhost:5050/send_feedback", {
      .post("https://sagebackend-207c01373df4.herokuapp.com/send_feedback", {
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
