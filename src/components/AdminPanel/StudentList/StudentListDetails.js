import React, { useState } from 'react';
import PrevNextBtn from './PrevNextBtn';

const StudentListDetails = ({studentInfo}) => {
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [pagination, setPagination] = useState({
        start: 0,
        end: itemsPerPage,
      });
      const {start, end} = pagination;

      const onPaginationChange = (start, end) => {
        setPagination({start,end});
      };

    return (
        <>
        <table className="table table-borderless bg-white mt-3">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">CourseName</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                  studentInfo.slice(start, end).map((student, index) => 
                        
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.courseName}</td>
                        <td>{student.price}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
                    <PrevNextBtn itemsPerPage={itemsPerPage} onPaginationChange={onPaginationChange} totalItems={studentInfo.length}></PrevNextBtn>
        </>
    );
};

export default StudentListDetails;