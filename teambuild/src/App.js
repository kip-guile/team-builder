import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import uuid from 'uuid';

const initialMemberForm = {
  name: '',
  email: '',
  role: '',
};


function App() {

  const [teamMemberssList, setTeamMembersList] = useState([]);
  const [memberForm, setMemberForm] = useState(initialMemberForm);

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setMemberForm({
      name: e.target.value,
      email: memberForm.email,
      role: memberForm.role,
    });
  };

  const onEmailChange = e => {
    // we have the new value for the age input inside e.target.value
    setMemberForm({
      name: memberForm.name,
      email: e.target.value,
      role: memberForm.role,
    });
  };

  const onRoleChange = e => {
    // we have the new value for the age input inside e.target.value
    setMemberForm({
      name: memberForm.name,
      email: memberForm.email,
      role: e.target.value,
    });
  };

  const onFormSubmit = e => { // we DO need the event object
    e.preventDefault();
    const newMember = {
      id: uuid(),
      name: memberForm.name,
      email: memberForm.email,
      role: memberForm.role,
    };
    const newMembersList = teamMemberssList.concat(newMember);
    setTeamMembersList(newMembersList);
    // setMemberForm(initialForm);
  };


  return (
    <div className="App">

      <Form
        // handlers that can change app state
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        onFormSubmit={onFormSubmit}
        // data we need to hydrate the form inputs
        memberForm={memberForm}
      />

       {
        teamMemberssList.map(member => (
          <h5 key={member.id}>
            {member.name} 's email is {member.email} and his role is {member.role}.
          </h5>
        ))
      }
    </div>
  );
}

export default App;
