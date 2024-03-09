
import React, { useState } from 'react';

const ApiContext = React.createContext([{}, () => {}]);

const ApiProvider = props => {

    const [auth, setAuth ] = useState({
        token: '',
        auth: false
    });
  
    return( 
        <ApiContext.Provider value={[auth, setAuth]}>
            {props.children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiProvider}
