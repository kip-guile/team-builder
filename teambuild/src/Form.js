import React from 'react';

function Form(props){

    const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
    const { name, email, role } = props.memberForm;

    const isDisabled = () => {
        if (!name || !email || !role) {
          return true;
        }
        return false;
      };

    return (
        <form>
          <label htmlFor='nameInput'>Name</label>
          <input
            maxLength={50}
            value={name}
            onChange={onNameChange}
            id='nameInput'
            type='text'
          />
    
          <label htmlFor='emailInput'>Email</label>
          <input
            value={email}
            onChange={onEmailChange}
            id='emailInput'
            type='email'
          />

            <label htmlFor='roleInput'>Role</label>
          <input
            value={role}
            onChange={onRoleChange}
            id='roleInput'
            type='text'
          />
    
          <button
            disabled={isDisabled()}
            onClick={onFormSubmit}
          >
            submit
          </button>
        </form>
      );

}

export default Form;