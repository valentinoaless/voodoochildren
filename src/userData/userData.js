import axios from 'axios';
import userdata from './userData.json';

// axios.post('https://ironrest.herokuapp.com/voodoochildren', {hello: 'children', id:Math.random()})
// axios.get('https://ironrest.herokuapp.com/voodoochildren').then(res => console.log(res));

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  
  // first we check if the user has already used the page
  // check local storage to see if they have
  // if they haven't we have to create a new user in the api and then update whenever the shopping cart changes
  // if they have then we get the user information from the database like objects in shopping cart

  let _id;
  
  
if(!localStorage.getItem('userID')) {
    userdata.user = makeid(16)
    localStorage.setItem('userID', `${userdata.user}`);
    axios.post(`https://ironrest.herokuapp.com/voodoochildren`, userdata);
} else {
    axios.get(`https://ironrest.herokuapp.com/findOne/voodoochildren?user=${localStorage.getItem('userID')}`).then(res => {
        userdata.cart = res.data.cart;
        userdata.user = res.data.user;
        _id = res.data._id;
    });
}


export const updateCart = (user) => {
  axios.put(`https://ironrest.herokuapp.com/voodoochildren/${_id}`, user).then(res => {
    console.log(res);
  })
}

