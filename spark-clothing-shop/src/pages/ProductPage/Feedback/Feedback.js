//import axios from 'axios';
import React from 'react';
// import { useEffect, useRef, useState } from 'react';

const Feedback = () => {

  return (
    <div>
    <h2>Feedback</h2>
    
    <h4>Fill your details</h4>
    <form className="row g-3">
    <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="inputName" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-12">
        <label htmlFor="inputFeedback" className="form-label">
          Feedback
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFeedback"
          placeholder="write your review here" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </div>
    </form>
  </div >
);
};
export default Feedback;