import React, { Component } from 'react';

function RequestForm(props) {
  return (
    <form onSubmit={props.handleRequestSubmit}>
      <label>
        Date Needed:
        <input type="text" id="date_needed"></input>
      </label>
      <label>
        Priority Level:
        <input type="text" id="priority"></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default RequestForm;
