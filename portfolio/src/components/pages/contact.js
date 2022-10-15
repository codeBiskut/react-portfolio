function Contact() {
    return (
        <div id="contact-page">
            <form>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="name" className="form-control" id="inputName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputMessage">Message</label>
                    <textarea className="form-control" id="inputTextarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact;