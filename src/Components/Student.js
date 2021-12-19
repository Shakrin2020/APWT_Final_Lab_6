import React from 'react';
import StudentList  from './StudentList';
import Head from './Head';

function Student()
{
    return (
        <div> 
           
            <StudentList sl="1" name="Shakirin" id="19-39886-1" cgpa="3.95"  semester="9th"/>
            <StudentList sl="2" name="Lamia" id="19-39000-1" cgpa="3.50" semester="6th"  />
        </div>
    )
}
export default Student;