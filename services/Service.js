const url = `http://104.210.157.59/chkmelo/api/`

// #region Users
export async function ValidateLogin(user, password) {
    var method = "users/" + user + "/" + password
    let response = await fetch(url + method, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    return response.json()
}

export async function RegisterUsr() {
    var method = ""
    let response = await fetch(url + method, {
        method: 'GET',
    })
    return response.json()
}
// #endregion Users

// #region Check
export async function wsCheck(type,data) {
    var lat = 0, long = 0
    navigator.geolocation.getCurrentPosition(
        //Will give you the current location

        (position) => {
            long = JSON.stringify(position.coords.longitude);
            lat = JSON.stringify(position.coords.latitude);
        },
        (error) => alert(error.message),
        {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        }
    );
    var method = "verifications"
    let response = await fetch(url + method, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Latitude: lat,
            Longitude: long,
            IdType: type,
            Register: data,
            IdUser:1
        })
    })
    return response.json()
}

// #endregion Check

// #region Register
export async function queryRegister() {
    var method = ""
    let response = await fetch(url + method, {
        method: 'GET',
    })
    return response.json()
}
export async function addRegister(type, data) {
    var method = "reports"
    let response = await fetch(url + method, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            IdType: type,
            Register: data,
            ImageUrl:'',
            isVerify:0,
            IdUser: 1
        })
    })
    return response.json()
}
// #endregion Register

