import React, { useState } from 'react'
import NavBar from './NavBar';

export default function Contact() {

    const [data, setdata] = useState({
        fname: "",
        ename: "",
        email:"",
        mno: "",
        messege: ""

    })

    const addEvent = (event) => {
        const { name, value } = event.target;

        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        })
    }

    const event_submit = (event) => {
        event.preventDefault();
        alert("Thanks for reaching us out")
        setdata({
            fname: "",
            ename: "",
            email:"",
            mno: "",
            messege: ""

        })
    }
  return (
    <>
        <div className='main_contact'>
            <NavBar/>
            <div className='contact_page'>
                <div className="mainContact">
                    <div className="contact_heading">
                        <p>Contact Us</p>
                    </div>
                    <div className="mainForm">
                        <form onSubmit={event_submit}>
                            <div >
                                <div className='namefield'>
                                    <div>
                                        <input type="text" className='no_outline' name="fname" value={data.fname} onChange={addEvent} placeholder='Enter First Name' required/>
                                    </div>
                                    <div>
                                        <input type="text"  className='no_outline' name='ename' value={data.ename} onChange={addEvent} placeholder='Enter Last Name' required/>
                                    </div>
                                </div>
                                <div className='email'>
                                    <input type="email"  className='no_outline' name="email" value={data.email} onChange={addEvent} placeholder='Enter your E-mail' required />
                                </div>
                                <div className='email'>
                                    <input type="tel"  className='no_outline' name="mno" value={data.mno} onChange={addEvent} placeholder='Enter your contact no' required />
                                </div>
                                <div className="query">
                                    <textarea name="messege"  className='no_outline' value={data.messege} onChange={addEvent} placeholder='Enter your query here' cols="30" rows="5" required></textarea>
                                </div>
                            </div>
                            <div className='submit_btn'>
                            <button type="submit" >Submit</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
