import React from 'react';

function StudentList(props)
{
    return (
        <div> 
       <h3>Student : {props.sl}</h3>
       <b>Name :</b> {props.name}<br/>

       <b>Id :</b> {props.id}<br/>

       <b>Cgpa :</b> {props.cgpa}<br/>

       <b> Semester :</b> {props.semester}<br/>

        </div>
    )
}
export default StudentList;