import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

class EmailCaptureForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
    .then(result => {
      // Mailchimp always returns a 200 response
      // So we check the result for MC errors & failures
      if (result.result !== `success`) {
        this.setState({
          status: `error`,
          msg: result.msg,
        })
      } else {
        // Email address succesfully subcribed to Mailchimp
        this.setState({
          status: `success`,
          msg: result.msg,
        })
      }
    })
    .catch(err => {
      // Network failures, timeouts, etc
      this.setState({
        status: `error`,
        msg: err,
      })
    })
  }

  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
        status: `sending`,
        msg: null,
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      })
    )
  }

  render() {
    return (
      <div>
        {this.state.status === `success` ? (
          <div>A toast, Jedediah: to Love on my own terms.</div>
        ) : (
          <div>
						<form
							id="email-capture"
							className="mx-auto sm:w-1/2"
              method="post"
              noValidate
						>
						  <div className="flex items-center border-b border-b-2 border-black py-2">
						    <input
						    	className="appearance-none bg-transparent border-none w-full text-grey-darkest mr-3 py-1 px-2 leading-tight focus:outline-none"
						    	type="email"
						    	name="email"
						    	placeholder="Email Address"
						    	onChange={this._handleEmailChange}
						    />
						    <button
						    	className="flex-no-shrink bg-black hover:bg-grey-darkest border-black hover:border-grey-darkest text-sm border-4 text-white py-1 px-2 rounded"
						    	type="submit"
						    	onClick={this._handleFormSubmit}
						    >
						      Get Updates
						    </button>
                {this.state.status === `error` && (
                  <div
                    dangerouslySetInnerHTML={{ __html: this.state.msg }}
                  />
                )}
						  </div>
						</form>
          </div>
        )}
      </div>
    )
  }
}

export default EmailCaptureForm
