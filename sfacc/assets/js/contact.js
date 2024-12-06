document.addEventListener('DOMContentLoaded', () => {
    const formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    const errors = {};

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        document.getElementById('contact-ngo-nameError').textContent = errors.name || '';
        document.getElementById('contact-ngo-emailError').textContent = errors.email || '';
        document.getElementById('contact-ngo-subjectError').textContent = errors.subject || '';
        document.getElementById('contact-ngo-messageError').textContent = errors.message || '';

        return isValid;
    };

    const contactNgoHandleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            document.getElementById('contact-ngo-success').innerHTML = '✔ Message Sent Successfully!';
            console.log('Form submitted successfully');
            document.getElementById('contact-ngo-form').reset();
        } else {
            document.getElementById('contact-ngo-success').innerHTML = '';
        }
    };

    const handleChange = (e) => {
        formData[e.target.id.replace('contact-ngo-', '')] = e.target.value;
    };

    document.getElementById('contact-ngo-form').addEventListener('input', handleChange);
    document.getElementById('contact-ngo-form').addEventListener('submit', contactNgoHandleSubmit);
});


