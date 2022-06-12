import React, { useState, useRef } from "react";
import Input from "../../ui-kit/Input/Input";
import "./QueryModal.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import closeIcon from "../../../assets/believedesc/closeIcon30.png";

function QueryModal(props) {
  const form = useRef();
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    "Mobile Number": "",
    Company: "",
    Email: "",
    "Your Message": "",
  });

  const handlechange = (name, value) => {
    setShowError(false);
    console.log(name);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    console.log(pattern.test(formData.Email));
    if (pattern.test(formData.Email)) {
      emailjs
        .sendForm(
          "service_6amk2vn",
          "template_mx4np7h",
          e.target,
          "LcjXhPu-RRCx3jODM"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Your query has been submitted successfully");
          },
          (error) => {
            console.log(error.text);
            toast.error("Your query submission unsuccessfull");
          }
        );
      e.target.reset();
    } else {
      setShowError(true);
    }
    console.log(e.target);
  };

  const isDisabled = () => {
    if (
      formData["Name"].length > 0 &&
      formData["Mobile Number"].length > 0 &&
      formData["Company"].length > 0 &&
      formData["Email"].length > 0 &&
      formData["Your Message"].length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="query-modal-wrapper">
      <div className="queryform">
        <form ref={form} onSubmit={sendEmail}>
          <div className="query-input">
            <div className="query-close" onClick={()=>{props.closeModal()}}>
              <img src={closeIcon} />
            </div>
            <div className="query-row-section">
              <Input
                labelName={"Name"}
                type="text"
                handleChange={(name, value) => {
                  handlechange(name, value);
                }}
              />
              <Input
                labelName={"Mobile Number"}
                type="text"
                handleChange={(name, value) => {
                  handlechange(name, value);
                }}
              />
            </div>
            <div className="query-row-section">
              <Input
                labelName={"Company"}
                type="text"
                handleChange={(name, value) => {
                  handlechange(name, value);
                }}
              />
              <Input
                labelName={"Email"}
                type="text"
                handleChange={(name, value) => {
                  handlechange(name, value);
                }}
              />
            </div>
            <div className="query-row-section">
              <div className="form-section" style={{ width: "100%" }}>
                <div className="label-section">
                  Your Message
                  <span className="starRed">*</span>
                </div>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Your Message"
                  onChange={(e) => {
                    handlechange(e.target.name, e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="query-footer-section">
              <div>
                {showError && (
                  <span className="error-message">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-dark"
                  value={"Submit"}
                  disabled={isDisabled() || showError}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        type="success"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        draggable={false}
      />
    </div>
  );
}

export default QueryModal;
