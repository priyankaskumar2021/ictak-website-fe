function validation(formValues) {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.name) {
        errors.name = "name is required";
    }
    if (!formValues.email) {
        errors.email = "Email is required";
    }
    else if (!regex.test(formValues.email)) {
        errors.email = "Email is invalid";
    }
    if (!formValues.mobileno) {
        errors.mobileno = "Mobile Number is required";
    }

    if (!formValues.course) {
        errors.course = "Select one course";
    }


    return errors;
}

export default validation;