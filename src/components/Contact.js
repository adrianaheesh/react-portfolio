import React, { useState } from 'react'
import { StyledDiv, StyledForm, Button } from '../styled/contact'
import { send } from 'emailjs-com'

const Contact = () => {
    const [ sent, setSent ] = useState(false)
    const [ toSend, setToSend ] = useState({
        from_name: "",
        to_name: "Adriana",
        reply_to: "",
        message: ""
    })

    function formChangeHandler(event) {
        setToSend({ ...toSend, [event.target.name]: event.target.value})
        setSent(false)
    }

    function formSubmit(event) {
        event.preventDefault()
        send(
            'service_pg2sub6',
            'template_3yz173w',
            toSend,
            'user_S9AiTaOU1MdtdbtSuNLB0'
        )
        .then((response) => {
            console.log('Success', response.status, response.text)
        })
        .catch((err) => {
            console.log('Failed', err)
        })
        setToSend({
            from_name: "",
            to_name: "Adriana",
            reply_to: "",
            message: ""
        })
        setSent(true)
    }

    return (
        <StyledDiv>
            <p>Let's chat.</p>
            <StyledForm onSubmit={formSubmit}>
                <input 
                    type="text" 
                    name="from_name" 
                    value={toSend.from_name} 
                    placeholder="Name"
                    onChange={formChangeHandler} 
                    required />
                <input 
                    type="email" 
                    name="reply_to" 
                    placeholder="Email"
                    value={toSend.reply_to} 
                    onChange={formChangeHandler} 
                    required />
                <textarea 
                    name="message" 
                    placeholder="Message..."
                    value={toSend.message} 
                    onChange={formChangeHandler} 
                    required />
                {sent && <p>Message sent!</p>}
                <Button type="submit">Submit</Button>
            </StyledForm>
        </StyledDiv>
    )
}

export default Contact