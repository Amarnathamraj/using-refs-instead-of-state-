import React, { useState,useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const nameInputRef=useRef();
 const ageInputRef=useRef();
 const collegeInputRef=useRef();

 
  const [error,setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //console.log(nameInputRef.current.value);
    const EnteredName= nameInputRef.current.value;
    const EnteredUserAge=ageInputRef.current.value;
  const EnteredCollege= collegeInputRef.current.value;

    if (EnteredName.trim().length === 0 ||EnteredUserAge.trim().length === 0 || EnteredCollege.trim().length === 0) {
        setError({
            title:'Invalid input',
            message:'please enter valid name and age'
        });
      return;
    }
    if (+EnteredUserAge < 1) {
        setError({
            title:'Invalid age',
            message:'please enter valid age(>0)'
        });
      return;
    }
   
    props.onAddUser(EnteredName, EnteredUserAge,EnteredCollege);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
  };

 
 const errorHandler=()=>{
    setError(null);
 };
  return (
    <Wrapper>
   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          
          ref={ageInputRef}
        />
        <label htmlFor="clg">College Name</label>
        <input
          id="clg"
          type="text"
          
          ref={collegeInputRef}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;