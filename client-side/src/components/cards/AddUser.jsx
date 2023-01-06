import React from "react";
import { useRef } from "react";
import Swal from "sweetalert2";
import Users from "../../demodata/mock-data.json"


const AddUser = ({userData, setUserData, setUserAction}) => {
    const [inputs, setInputs] = React.useState({
        id: "",
        name: "",
        email: "",
        age: "",
        permissions: "",
    });

    const textInput = useRef(null)
    React.useEffect(() => {
        textInput.current.focus();
    },[])
    const handleChange = (event) => {
        const name = event.target.name;
		const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
     };
     const handleSubmit = () => {
        const id = userData.length + 1
        const newData = {
            ...inputs,
            id: id
        }
        userData.push(newData)
        setUserData(userData)
        Swal.fire({
            icon: "success",
            title: "User Added",
            showConfirmButton: false,
            timer: 2000
        });
        setUserAction(null)
     }
     const handleCancel = () => {
        setUserAction(null)
     }

    return (
        <>
            <div className="actionModal">
                <div className="add-modal">
                    <h1 className="modal-head">Add User</h1>
                    <form>
                        <fieldset>
                            <div className="formFieldBox">
                                <label id="name" htmlFor="name">
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        ref={textInput}
                                        placeholder="Enter Fullname"
                                        required
                                        value={inputs.name || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="formFieldBox">
                                <label id="email" htmlFor="email">
                                    Email
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        required
                                        value={inputs.email || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="formFieldBox">
                                <label id="age" htmlFor="age">
                                    Age
                                    <input
                                        type="text"
                                        name="age"
                                        id="age"
                                        placeholder="Enter Age"
                                        required
                                        value={inputs.age || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="formFieldBox">
                                <label id="permissions" htmlFor="permissions">
                                    Permissions
                                    <input
                                        type="text"
                                        name="permissions"
                                        id="permissions"
                                        placeholder="Enter Permissions"
                                        required
                                        value={inputs.permissions || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </fieldset>
                        <div className="footer-btn">
                            <button className="action-button" onClick={handleCancel}>cancel</button>
                            <button className="action-button" type="submit" onClick={handleSubmit}>save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AddUser;
