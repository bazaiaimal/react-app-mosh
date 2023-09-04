import React from 'react'
import CustomBtn from './CustomBtn';

type ProfileProp = {
    url:string;
}
  

export default function Profile( { url} : ProfileProp  ) {
  return (
    <div className="card" >
    <img src={url} className="card-img-top" alt="..." />
    <div className="card-body">
        <CustomBtn label='Profile Image' />
    </div>
</div>
  )
}
