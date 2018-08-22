module.exports = {
  siteMetadata: {
    title: `Kane Dies`,
    siteUrl: 'https://kanedies.com',
    description: `Always remember, at the end of the story, Kane dies.`,
    image: `https://kanedies.com/meta.jpg`,
    social: {
      instagram: `https://www.instagram.com/kanedies/`,
      facebook: `https://www.facebook.com/kanedies`,
      twitter: `https://twitter.com/kanedies`
    }
  },
  plugins: [
  	`gatsby-plugin-robots-txt`,
  	`gatsby-plugin-react-helmet`,
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
	    resolve: `gatsby-plugin-favicon`,
	    options: {
	      logo: "./src/images/favicon.png",

	      // WebApp Manifest Configuration
	      appName: 'Gatsby site',
	      appDescription: null,
	      developerName: null,
	      developerURL: null,
	      dir: 'auto',
	      lang: 'en-US',
	      background: '#fff',
	      theme_color: '#fff',
	      display: 'standalone',
	      orientation: 'any',
	      start_url: '/?homescreen=1',
	      version: '1.0',

	      icons: {
	        android: true,
	        appleIcon: true,
	        appleStartup: true,
	        coast: false,
	        favicons: true,
	        firefox: true,
	        opengraph: false,
	        twitter: false,
	        yandex: false,
	        windows: false
	      }
	    }
	  },
	  {
	    resolve: `gatsby-plugin-mailchimp`,
	    options: {
	     	endpoint: 'https://kanedies.us19.list-manage.com/subscribe/post?u=a95882e0143c44caeee16681f&amp;id=ff54a0c7a5',
	    },
	  },
  ],
};
