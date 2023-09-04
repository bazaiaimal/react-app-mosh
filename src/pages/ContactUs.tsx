import React, { useState } from 'react'
import CustomBtn from '../components/CustomBtn'

export default function ContactUs() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

   
    const [users, setUsers] = useState<string[]>([]);

    const handleSubmit = () => {
        console.log("Pushed Value: ", pass);
        console.log("pass: ", pass);
    }
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const onChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }


    return (
        <div className="container my-2">

            <div className="row">
                <div className="col-12 text-center">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolor.</p>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" value={email} onChange={onChangeEmail} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type='password' onChange={onChangePass} className="form-control" id="exampleFormControlTextarea1" ></input>
                    </div>
                </div>
                <div className="col-12">
                    <CustomBtn label='Submit' onClick={handleSubmit} />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table>
                        <tbody>
                            {
                                users.map(({ useremail, passowrd }: any) => 
                                <tr>
                                    <td>
                                        {useremail}
                                    </td>
                                    <td>
                                        {passowrd}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
