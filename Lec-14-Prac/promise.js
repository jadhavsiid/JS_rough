const promise1 = new Promise((resolve, reject) => {
  // Do an async task
  // Db calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete.");
    resolve();
  }, 2000);
});

promise1.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  });
}).then(() => {
  console.log("Async 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "siidjadhav", email: "IamIronman@google.com" });
  }, 5000);
});

promise3.then((user) => {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR something went wrong");
    }
  }, 3000);
});

const usrname = promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log("Promise is either resolved or rejected");
  })


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({lang: "JavaScript", langCode: "01"})
        }
        else{
            reject('ERROR, JS is not better than Python')
        }      
    }, 2000);
})

async function consumePromise5(params) {
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}