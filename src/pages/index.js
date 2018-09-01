import React from "react";
import Link from "gatsby-link";
import logo from "../assets/logo.svg";

import EmailCaptureForm from "../components/email-capture-form";

const IndexPage = () => (
  <div className="text-center">
    <img src={logo} className="block mx-auto sm:w-1/3 pb-10" />
    <EmailCaptureForm />
  </div>
);

export default IndexPage;
