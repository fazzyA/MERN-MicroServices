import React, { useState } from 'react';

export const UC = React.createContext();


 function UserContextProvider(props) {
    const [state, setstate] = useState({
        isLogin:false,
        userID:'',
        userName:''
    })
    return (
        <UC.Provider value={[state,setstate]}>
            {props.children}
        </UC.Provider>
    )
}

export default UserContextProvider