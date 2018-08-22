import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-black bg-primary">
    <Helmet
      title="Kane Dies"
      meta={[
        { name: "description", content: "Always remember, at the end of the story, Kane dies." },
        { name: "keywords", content: "movies, politics" }
      ]}
    />
    <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 sm:p-8 w-full">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
