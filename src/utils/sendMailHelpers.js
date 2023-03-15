import axios from "axios";

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
