import React, {useState} from "react";


const Body = props => {
    let initialState = ''
    let [nameState, setNameState] = useState(initialState);

    const onChangeEvent = e => {
        setNameState(e.target.value)
    }
    const onSubmitEvent = () => {

        props.onChange(nameState);
        clearState();

    }
    const clearState = () => {
        setNameState(initialState);
    };

    return (
        <div>
            <input onChange={onChangeEvent} type='text' value={nameState}/>
            <button onClick={() => onSubmitEvent()} type="submit" value="submit">Hello</button>
            <p>Hello world! your Name is: {nameState}</p>
            {props.userData.map((user, index) => <div key={index}>{user.username} </div>)}
        </div>
    )


}


export default Body