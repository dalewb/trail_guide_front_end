import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

function RequestForm(props) {
  return (
    <Form onSubmit={props.handleRequestSubmit}>
        <Form.Input type="text" id="date_needed" label="Date Needed" placeholder="Date Needed"/>
        <Form.Input type="text" id="priority" label="Priority Level" placeholder="Priority Level"/>
      <Form.Button type="submit" value="Submit">Submit</Form.Button>
    </Form>
  )
}

export default RequestForm;
