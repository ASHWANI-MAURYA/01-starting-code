import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
   //token save auto login refresh page
//    useEffect(() => {
//     async function fetchToken() {

//         const storeToken = await AsyncStorage.getItem('token');
//         if(storeToken){
//             setAuthToken(storeToken);
//         }
//     }
//     fetchToken();
// }, []);

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    };

    function logout() {
        setAuthToken(null);
    };

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>

}

export default AuthContextProvider;