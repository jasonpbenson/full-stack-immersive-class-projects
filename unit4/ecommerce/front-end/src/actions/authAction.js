//an action is a js function that returns an object
// object must have at least one property
// of type
import axios from 'axios';

export default (formData)=> {
    console.log("auth action running")
    console.log(formData);
    const axiosPromise = axios({
        url: `${window.apiHost}/register`,
        method: 'POST',
        data: formData
    })
    return{
        type: "AUTH_ACTION",
        payload: axiosPromise
    }
}
