import { useState } from "react"
import CustomBtn from "../components/CustomBtn";

function RegistrationForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState<string[]>([]);

    const handleSubmit = () => {
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("PhoneNo: ", phoneNo);
        console.log("Password: ", password);
    }

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const onChangePhoneNo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNo(event.target.value);
    }

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 mx-auto my-auto">
                        <h1>Registration Form</h1>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={onChangeName} required id="exampleInputName" aria-describedby="nameHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={onChangeEmail} required id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" value={phoneNo} onChange={onChangePhoneNo} id="exampleInputPhone1" aria-describedby="phoneHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={onChangePassword} required id="exampleInputPassword1" />
                        </div>
                        <div className="col-12 mb-2">
                            <CustomBtn label='Submit' onClick={handleSubmit} />
                        </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table>
                        <tbody>
                            {
                                users.map(({ name, email, phoneNo, passowrd }: any) => 
                                <tr>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td>
                                        {phoneNo}
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

export default RegistrationForm;