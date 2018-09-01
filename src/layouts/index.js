import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import metaImage from "../assets/meta.jpg";

import "../css/app.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-black bg-primary">
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title='Kane Dies'
      meta={[
        { name: 'description', content: 'Always remember, at the end of the story, Kane dies.' },
        { name: 'keywords', content: 'movies, politics' },
        { itemprop: 'name', content: 'Kane Dies' },
        { itemprop: 'description', content: 'Always remember, at the end of the story, Kane dies.' },
        { itemprop: 'image', content: '{metaImage}' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@kanedies' },
        { name: 'twitter:title', content: 'Kane Dies' },
        { name: 'twitter:description', content: 'Always remember, at the end of the story, Kane dies.' },
        { name: 'twitter:creator', content: 'Kane Dies' },
        { name: 'twitter:image:src', content: '{metaImage}' },
        { property: 'og:title', content: 'Kane Dies' },
        { property: 'og:url', content: 'https://www.kanedies.com' },
        { property: 'og:image', content: '{metaImage}' },
        { property: 'og:description', content: 'Always remember, at the end of the story, Kane dies.' },
        { property: 'og:site_name', content: 'Kane Dies' }
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
