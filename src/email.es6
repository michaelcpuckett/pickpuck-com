import React, { Component } from 'react';

const API_KEY = 'HBbsW16FnO9mbsamrYUjo7LIasxudtuDWvYtY0Ke'
const FETCH_URL = 'https://eef2cqlkw8.execute-api.us-east-1.amazonaws.com/prod'
const VALIDATION_ERROR_MESSAGE = 'Please fill in all fields before submitting.'
const FAILED_REQUEST_ERROR_MESSAGE = 'Drat! There was an error with this contact form. Please try messaging me on LinkedIn.'

export default class EmailFormApp extends Component {
    constructor () {
        super()
        this.state = {}
    }
    sendEmail () {
        let { subject, body, email, name } = this.refs
        name = name.value
        email = email.value
        subject = subject.value
        body = body.value

        if (!(name && email && subject && body)) {
            alert(VALIDATION_ERROR_MESSAGE)
            return false
        }

        this.setState({
            hasSubmitted: true
        })
        this.refs.form.reset()

        let headers = new Headers()
        headers.append('x-api-key', API_KEY)
        return fetch(FETCH_URL, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
                subject,
                name,
                body,
                email
            })
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.success) {
                // email sent successfully
            } else {
                alert(FAILED_REQUEST_ERROR_MESSAGE)
            }
        })
        .catch(err => {
            alert(FAILED_REQUEST_ERROR_MESSAGE)
        })
    }
    render () {
        let submitButtonProps = {}
        if (this.state.hasSubmitted) {
            submitButtonProps.disabled = 'disabled'
        }
        return (
            <form action="#" ref="form" onSubmit={e => {
                e.preventDefault()
                e.stopPropagation()
                !this.state.hasSubmitted && this.sendEmail()
            }}>
                <label>
                    <span>Name</span>
                    <input required ref="name"/>
                </label>
                <label>
                    <span>E-mail</span>
                    <input required type="email" ref="email" />
                </label>
                <label>
                    <span>Subject</span>
                    <input required ref="subject" />
                </label>
                <label>
                    <span>Message</span>
                    <textarea required ref="body" />
                </label>
                <button {...submitButtonProps} type="submit">Send E-mail</button>
                {this.state.hasSubmitted && (
                    <div className="has-submitted">
                        Thanks! I will be in touch soon.
                    </div>
                )}
            </form>
        )
    }
}
