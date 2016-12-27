const ValidateWorker = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 15 characters or greater';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 15 characters or greater';
  }

  if (!values.patronymic) {
    errors.patronymic = 'Required';
  }else if (values.patronymic.length > 15) {
    errors.patronymic = 'Must be 15 characters or less';
  }else if (values.patronymic.length < 2) {
    errors.patronymic = 'Must be 15 characters or greater';
  }

  if (!values.payment) {
    errors.payment = 'Required';
  }else if (values.payment < 0) {
    errors.payment = 'Must be a positive number';
  }
  else if (values.payment == 0) {
    errors.payment = 'Must be greater than zero';
  }

  if (!values.seatNumber) {
    errors.seatNumber = 'Required';
  }else if (values.seatNumber < 0) {
    errors.seatNumber = 'Must be a positive number';
  }
  else if (values.seatNumber == 0) {
    errors.seatNumber = 'Must be greater than zero';
  }
  
  return errors;
};

export default ValidateWorker;