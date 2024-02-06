import axios from 'axios';
import React, { useState } from 'react'; 
import logo from '../../Assets/images/contact.png';
import JsDemo from './JsDemo';

const ContactUsPage = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [getInTouch, setGetInTouch] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = event => {
      setGetInTouch({
      ...getInTouch,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    // first prevents the default form submission
    event.preventDefault();
    console.log(getInTouch); // data
    // Add the getInTouch data to the products JSON file
    //  it makes an HTTP POST request to the URL
    // if the request is successful, the response is logged
    setIsSaved(true);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {getInTouch})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row" >
      <hr></hr>
      <div className="col-md-4">
        <hr></hr>
      <img src={logo} alt="Company Logo" width="80%" />
      </div>
      <div className="col-md-3">
        <hr></hr>
      <h2>Get In Touch</h2>
      <form 
        className="col-md-3"
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={getInTouch.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={getInTouch.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={getInTouch.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={getInTouch.message}
          onChange={handleChange}
        />
         <div className="mt-3">
          <button type="submit" className="btn btn-primary" disabled={getInTouch.name === ''}>
            Submit
          </button>
          <div>
            {isSaved ? (
              <div data-testid="isSaved" className="alert alert-success">
                Saved!
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
      </div>
      <hr></hr>
      <JsDemo />
    </div>
  );
};

export default ContactUsPage;