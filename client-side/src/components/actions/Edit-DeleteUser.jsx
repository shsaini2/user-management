import React from "react"
import Swal from "sweetalert2";

const EditDelete = ({userData, setUserData, setAction, id, userAction, setUserAction}) => {
    const [user, setUser] = React.useState("null")
    const [newInputs, setNewInputs] = React.useState({
        id: id,
        name: userData[id-1].name,
        email: userData[id-1].email,
        age: userData[id-1].age,
        permissions: userData[id-1].permissions,
    });
    const handleChange = (event) => {
        const name = event.target.name;
		const value = event.target.value;
        setNewInputs((values) => ({ ...values, [name]: value }));
     };
     const handleUpdate = (e) => {
        e.preventDefault()
        const newData = {...newInputs}
        for (let i = 0 ; i<userData.length; i++) {
            if (userData[i].id === id) {
                userData.splice(i, 1, newData);
                break;
            }
        }
        setUserData(userData)
        Swal.fire({
            icon: "success",
            title: "Updated",
            showConfirmButton: false,
            timer: 2000
        });
        setAction(false)
     }
     const handleCancel = () => {
        setAction(false)
     }
    const handleEdit = () => {
        setUser("edit")
        setUserAction(null)
    }
    const handleDelete = () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "you won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, Sure.",
            cancelButtonText: "No, Cancel",
        }).then(result => {
            if(result.value) {
                Swal.fire({
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 2000
                });
                setUserData(userData.filter(user => user.id !== id))
                setAction(false)
            }
        })
    }
    return (
        <>
        {userAction === "actionBtn" && (<div className="actionModal">
            <div className="actionModal-body">
            <span className="close-icon" onClick={() => {setAction(false)}}></span>
            <div className="action-body">
                <button className="action-button" onClick={handleEdit}>Edit</button>
                <button className="action-button" onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
        )}
        {user === "edit" && (<div className="actionModal">
            <div className="edit-modal">
                    <h1 className="modal-head">Edit User</h1>
                    <form>
                        <fieldset>
                            <div className="formFieldBox">
                                <label id="name" htmlFor="name">
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        // ref={textInput}
                                        placeholder="Enter Fullname"
                                        required
                                        value={newInputs.name || ""}
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
                                        value={newInputs.email || ""}
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
                                        value={newInputs.age || ""}
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
                                        value={newInputs.permissions || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </fieldset>
                        <div className="footer-btn">
                            <button className="action-button" onClick={handleCancel}>cancel</button>
                            <button className="action-button" type="submit" onClick={handleUpdate}>save</button>
                        </div>
                    </form>
                </div>
        </div>
        )}
        </>
    )
}
export default EditDelete