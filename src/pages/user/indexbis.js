import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { userProfil } from "../../actions/actions2";
import { getUserData } from "../../api/apiReq";



function User() {
    const dispatch = useDispatch();
    
    const token = localStorage.getItem('token');
    const profile = useSelector((state) => state.profil);
    console.log(profile)

    

    useEffect(() => {
        const getInfos = async () => {
            try {
                const info = await getUserData ( token, {});
                dispatch(userProfil({info}));

                console.log(info)

            } catch (error) {
                console.log (error, "Erreur à l'appel d'API");
            }
        };

        getInfos(); 
    });

    return (
        <main className="main bg-dark2">
        {profile ? (
            <div className="header">
            <h1>Welcome back<br />{profile.firstName} {profile.lastName} !</h1>
            </div>
        ) : (
            <div className="header">
            <h1>Welcome back!</h1>
            <button className="edit-button">Edit Name</button>
            </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        
        </main>
    );
}

export default User;