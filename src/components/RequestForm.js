import React, { Component } from 'react';
import { Form, Card } from 'semantic-ui-react';

function RequestForm(props) {
  return (
    <Card.Group centered>
      <Form onSubmit={props.handleRequestSubmit}>
        <Form.Input type="text" id="date_needed" label="Date Needed" placeholder="Date Needed"/>
        <Form.Input type="text" id="priority" label="Priority Level" placeholder="Priority Level"/>
        <Form.Button type="submit" value="Submit">Submit</Form.Button>
      </Form>
    </Card.Group>
  )
}

export default RequestForm;
