import React from 'react';
import './Addcourse.css';

const Addcourse = (props)  => {
 
    return (

        <form onSubmit={props.add} className="addForm">
             
        <input type="text" onChange={props.update} value={props.cureent} required className="addCourse"/>
        <button className="add_btn">Add Course</button>

        </form> 
    )


}


export default Addcourse;
