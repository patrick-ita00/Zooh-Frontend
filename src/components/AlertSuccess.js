import Alert from 'react-bootstrap/Alert';

function AlertSuccess(props) {
  return (
    <Alert key='success' variant='success'>
        {props.text}
    </Alert>
  );
}

export default AlertSuccess;