module.exports = {
  siteMetadata: {
    title: 'Kane Dies',
  },
  plugins: [
  	'gatsby-plugin-robots-txt',
  	'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-51089357-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
	  {
	    resolve: `gatsby-plugin-manifest`,
	    options: {
	      name: `Kane Dies`,
	      short_name: `Kane Dies`,
	      start_url: `/`,
	      background_color: `#f7f0eb`,
	      theme_color: `#ff3d00`,
	      display: `minimal-ui`,
	      icon: `src/images/icon.png`, // This path is relative to the root of the site.
	    },
	  },
	  {
	    resolve: 'gatsby-plugin-mailchimp',
	    options: {
	     	endpoint: 'https://kanedies.us19.list-manage.com/subscribe/post?u=a95882e0143c44caeee16681f&amp;id=ff54a0c7a5',
	    },
	  },
  ],
};
