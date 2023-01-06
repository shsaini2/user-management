import React from "react";
import "../css/user-management.css";
import demoUserData from "../demodata/users";
import EditDelete from "./actions/Edit-DeleteUser";
import AddUser from "./cards/AddUser";
import Users from "../demodata/mock-data.json";
import logo from "../imgsrc/logo.jpg";

const UserManagement = () => {
  const [userData, setUserData] = React.useState(Users);
  const [action, setAction] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [idValue, setIdValue] = React.useState("null");
  const [userAction, setUserAction] = React.useState("null");
  const [listLen, setListLen] = React.useState(userData.length);
  console.log(userData.length);
  const handleActions = () => {
    setAction(!action);
    setUserAction("actionBtn");
    // setId()
  };
  const addUser = () => {
    setUserAction("add");
  };
  return (
    <>
      <div className="user-main">
        <div className="userMain-section1">
          <div className="brand-logo">
            {/* <img src={logo} alt="logo" width="300" height="150" /> */}
          </div>
          <button className="add-user" onClick={addUser}>
            Add User
          </button>
        </div>
        <div className="userMain-section2">
          <div className="user-body">
            <div className="user-head">
              User Management
              <div className="pagination">
                <span className="next-content">
                  <span className="angle angle-left"></span>
                  <span style={{ borderRight: "1px solid #000000" }}></span>
                  <span className="angle angle-right"></span>
                </span>
                <span onClick={()=> setOpen(!open)} className="content">
                  {listLen}
                  {open ? (
                    <ul className="menu">
                      <li className="menu-item">
                        <button onClick={() => setListLen(10)}>10</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={() => setListLen(25)}>25</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={() => setListLen(50)}>50</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={() => setListLen(100)}>100</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={() => setListLen(500)}>500</button>
                      </li>
                      <li className="menu-item">
                        <button onClick={() => setListLen(1000)}>1000</button>
                      </li>
                    </ul>
                  ) : null}
                  <span className="angle angle-down"></span>
                </span>
              </div>
            </div>
            <div className="user-table">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Permissions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length > 0 ? (
                    userData.map((user, i) => (
                      i < listLen && (<tr
                        key={user.id}
                        onClick={() => {
                          handleActions();
                          setIdValue(user.id);
                        }}
                      >
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.permissions}</td>
                      </tr>)
                    ))
                  ) : (
                    <td>No Users</td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {userAction === "add" && (
        <AddUser
          userData={userData}
          setUserData={setUserData}
          setUserAction={setUserAction}
        />
      )}
      {action && (
        <EditDelete
          setUserAction={setUserAction}
          userAction={userAction}
          userData={userData}
          setUserData={setUserData}
          id={idValue}
          setAction={setAction}
        />
      )}
    </>
  );
};

export default UserManagement;
