import Image from 'next/image'
"use client"

import {useState} from 'react'

export default function Home() {
  // const names = ["Muhammad","Muneeb","Haseeb","Nadeem","Muhammad"]
  const [students,setStudents] = useState([
    {StudentName: "Muhammad",
     rollNo: 123,
     section: "A"
    },
    {StudentName: "Nadeem",
     rollNo: 4745,
     section: "B"
    },
    {StudentName: "Muneeb",
     rollNo: 3456,
     section: "C"
    },
    {StudentName: "Haseeb",
     rollNo: 984,
     section: "D"
    },
    {StudentName: "Muhammad",
     rollNo: 337,
     section: "E"
    },
  ])

  const deleteHandler = (StudentRoll)=> {
    let restStudents = students.filter((student)=>{
      if(student.rollNo !== StudentRoll){
        return student
      }  
    });
    setStudents(restStudents);
    console.log(restStudents);
    // students.shift();
    // console.log(students);
  }

  
  return (
      <>
          {/* {names.map((item,index)=>{
            return <>
            <h1>Hello - {item} - {index}</h1>
            </>
          })} */}

            <table>
              <tr>
                <th>StudentName</th>
                <th>StudentRollNo</th>
                <th>StudentSection</th>
                <th>Delete</th>
              </tr>
              {students.map((student,i)=>{
                return <>
                  <tr key={i}>
                    <td>{student.StudentName}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.section}</td>
                    <td><button onClick={()=>deleteHandler(student.rollNo)}>delete</button></td>
                  </tr>
                </>
              })}
            </table>


          {/* {students.map((item,index)=>{
            return <>
                <h1>StudentName: {item.StudentName}</h1>
                <h1>StudentRollNo: {item.rollNo}</h1>
                <h1>StudentSection: {item.section}</h1>
                <hr />
            </>
          })} */}
      </>
  )
}
