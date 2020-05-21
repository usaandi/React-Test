import React, {useState} from "react";


const Body = props => {

    let [nameValue, setName] = useState('');

    const onChangeEvent = e =>{
        setName(e.target.value)
    }

    return (
        <div>
            <input onChange={onChangeEvent} type='text' value={nameValue}/>

            <p>Hello world! your Name is: {nameValue}</p>
            {props.userData.map((user,index) => <div key={index}>{user.id} </div>)}
        </div>
    )


}


export default Body