import { useEffect,useState} from 'react';
import Cookies from 'js-cookie';
export default function ACS() {
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
    if (valid) {
        return (
            <div>
                <h1>
                Successfully Logged In
                </h1>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>
                    Please Login
                </h1>
            </div>
        )
    }

}