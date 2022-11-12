import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_2hh7mkw',
            'template_g61qna9',
            toSend,
            'EwUJm6QQyXFRY-Gb_'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {

        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact-page">
            <form onSubmit={onSubmit}>
                <div className='form-group p-2'>
                    <label className='' htmlFor="from_name">Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='from_name'
                        placeholder='From'
                        value={toSend.from_name}
                        onChange={handleChange}
                    /></div>
                <div className='form-group p-2'>
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        className='form-control'
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    /></div>
                <div className='form-group p-2'>
                    <label htmlFor="inputMessage">Message</label>
                    <textarea
                        className='form-control'
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    /></div>

                <div className='p-2'><button className="btn btn-primary" type='submit'>Submit</button></div>
            </form>
        </div>
    )
}

export default Contact;