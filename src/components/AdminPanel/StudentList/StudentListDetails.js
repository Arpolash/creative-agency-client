import React from 'react';

const StudentListDetails = ({studentInfo}) => {
    return (
        <table className="table table-borderless bg-white mt-3">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">CourseName</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                  studentInfo.map((student, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.courseName}</td>
                        <td>{student.price}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default StudentListDetails;