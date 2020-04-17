import React from 'react'

export default function UserFormComponent(props) {
    const {nameUser,ageUser, onChangeNameUser, onChangeAgeUser}= props;
    return (
        <div>
            <input type="text" value={nameUser} onChange={onChangeNameUser} /> <br/>
            <input type="number" value={ageUser} onChange={onChangeAgeUser} /> <br/>


        </div>
    )
}
