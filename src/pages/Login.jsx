import { useEffect,useState} from 'react';
import Cookies from 'js-cookie';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Login(){
    const [valid,setvalid] = useState(false);

    useEffect(()=>{
        var myHeaders = new Headers();
        var cookie = Cookies.get('cookie');
        console.log(cookie)
        myHeaders.append("Cookie", cookie);
        // myHeaders.append("cookie", "cookie=IjBkNDNlYzcxM2M1YTQyYWNhM2U0NDYxY2UyNWIwMmE3Ig.YiUgmQ.otcFxQ7J-CSjlAHIOs8oAb8n0sQ");

        var requestOptions = {
        credentials: 'include',
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8000/login/sp", requestOptions)
        .then(response => {
            if (response.status === 403) {
                console.log("403");
                setvalid(false);
                // generateRedirection(response);
                // console.log(response.text())
                // window.location.href = "http://localhost:8088/sso/redirect?SAMLRequest=fZFfS8NAEMS%2FSrj3JNe0YLs0gUrRFvxT0iDo2%2FVyNQeX23q7Ef32XqMovvRxht8Mw%2B7Sk4TVwJ2vzdtgiJOP3nmCaJdiCB5QkY1S9YaANexX93dQZBJOARk1OvEbmFwOKCIT2KIXyXZdCtumOuj6im6HevbcYb3YzETyZAJFpBQxETmiwWw9sfIcLVkUqZymsmgmCygkTGcvIlnHzdYrHlMd8wny3KFWrkNimMv5PCfCPJjWBqNZJLuf4dfWt9a%2FXh59%2BIYINk2zS3eP%2B2YseLetCQ%2BRLsVRWVJOVMt4ABgHh%2BQGQ6%2F4cvPZiTc4jigYz5Y%2FReVQtQfllNcmpIuMbECTaeyX%2BV99dRb%2Fn1Z9AQ%3D%3D";
            }
            else{
                setvalid(true);
            }
        }
        )
        .catch(error => console.log('error', error));
            }

    )
    // useEffect(() => {
    //     const token=localStorage.getItem("token")
    //     console.log(token)
    //     // logintoidp(token)
    //  },[]);
    //  const logintoidp=()=>{
    //  }
    const generateRedirection=async(resp)=>{
        const value = await resp.text();
        const data = JSON.parse(value);
        window.location.href = data.body;
    }

     const handleClick=()=>{
            var myHeaders = new Headers();
            var cookie = Cookies.get('cookie');
            console.log(cookie)
            myHeaders.append("Cookie", cookie);
            // myHeaders.append("Cookie", "cookie=IjFkNWU1ZjJkMGRlZTRiYzFiZWRlNWQ0ZTUxMmEwM2QzIg.YiSH9A.81I7pl2pAjbrZgpwzv7772yg9WU");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch("http://localhost:8000/login/sp", requestOptions)
            .then(response => {
                if (response.status === 403) {
                    console.log("403")
                    generateRedirection(response);
                    // console.log(response.text())
                    // window.location.href = "http://localhost:8088/sso/redirect?SAMLRequest=fZFfS8NAEMS%2FSrj3JNe0YLs0gUrRFvxT0iDo2%2FVyNQeX23q7Ef32XqMovvRxht8Mw%2B7Sk4TVwJ2vzdtgiJOP3nmCaJdiCB5QkY1S9YaANexX93dQZBJOARk1OvEbmFwOKCIT2KIXyXZdCtumOuj6im6HevbcYb3YzETyZAJFpBQxETmiwWw9sfIcLVkUqZymsmgmCygkTGcvIlnHzdYrHlMd8wny3KFWrkNimMv5PCfCPJjWBqNZJLuf4dfWt9a%2FXh59%2BIYINk2zS3eP%2B2YseLetCQ%2BRLsVRWVJOVMt4ABgHh%2BQGQ6%2F4cvPZiTc4jigYz5Y%2FReVQtQfllNcmpIuMbECTaeyX%2BV99dRb%2Fn1Z9AQ%3D%3D";
                }
                else{
                    setvalid(true);
                }
            }
            )
            // .then(response => response.text())
            // .then(response =>{
            //     console.log(response)
            // })
            .catch(error => console.log('error', error));
                }
        
        const handleLogout=()=>{
            var myHeaders = new Headers();
            var cookie = Cookies.get('cookie');
            console.log(cookie)
            myHeaders.append("Cookie", cookie);
            // myHeaders.append("Cookie", "cookie=IjFkNWU1ZjJkMGRlZTRiYzFiZWRlNWQ0ZTUxMmEwM2QzIg.YiSH9A.81I7pl2pAjbrZgpwzv7772yg9WU");

            var requestOptions = {
            credentials: 'include',
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch("http://localhost:8000/logout/sp", requestOptions)
            .then(response => {
                if (response.status === 403) {
                    console.log("403")
                    generateRedirection(response);
                    // console.log(response.text())
                    // window.location.href = "http://localhost:8088/sso/redirect?SAMLRequest=fZFfS8NAEMS%2FSrj3JNe0YLs0gUrRFvxT0iDo2%2FVyNQeX23q7Ef32XqMovvRxht8Mw%2B7Sk4TVwJ2vzdtgiJOP3nmCaJdiCB5QkY1S9YaANexX93dQZBJOARk1OvEbmFwOKCIT2KIXyXZdCtumOuj6im6HevbcYb3YzETyZAJFpBQxETmiwWw9sfIcLVkUqZymsmgmCygkTGcvIlnHzdYrHlMd8wny3KFWrkNimMv5PCfCPJjWBqNZJLuf4dfWt9a%2FXh59%2BIYINk2zS3eP%2B2YseLetCQ%2BRLsVRWVJOVMt4ABgHh%2BQGQ6%2F4cvPZiTc4jigYz5Y%2FReVQtQfllNcmpIuMbECTaeyX%2BV99dRb%2Fn1Z9AQ%3D%3D";
                }
                // else{
                //     setvalid(true);
                // }
            }
            )
            // .then(response => response.text())
            // .then(response =>{
            //     console.log(response)
            // })
            .catch(error => console.log('error', error));
                
            }
        

    if (valid === true){
        return (
            <>
            <div>



                        <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" color="primary">
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Service Provider 1
                            </Typography>
                            <Button onClick={handleLogout} color="inherit">Logout</Button>
                            </Toolbar>
                        </AppBar>
                        </Box>

                <br/>
                <h1> Successfully Logged In </h1>
                
            </div>
            </>
            );
    }
    else{
        return (
            <>
                <div>
                    <h1>Login Page Service Provider 1</h1>
                    <Button onClick={handleClick} variant="outlined">
                        Sign in with Saml AT TECH
                    </Button>

                </div>
    
            </>
        );
    }

} 