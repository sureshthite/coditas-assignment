import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Notification = ({
type,
message
}) => (
  <Alert variant={type}>
    {message}
  </Alert>

);

export default Notification;
