'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


export default  function User() {
  const [userData,setUserData] = useState();
  const params = useParams();
  const userId =  Number(params.userId);


  useEffect(()=>{
    fetch('/api/users').
    then(async (result)=>
    {
      result = await result.json();
      setUserData(result)
    })
  },[userId])
    return (
      <div>
        {
            userData?
            (
              <div>
                  <h1>Users List Data</h1>
                  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    {userData.map((user) => (
                      <tr key={user.id}>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.email}</td>
                        <td >{user.username}</td>
                      </tr>
                    ))}
                  </table>
              </div>
            )
            :
            <h1>user not found</h1>
        }
      </div>
    );
  }
  