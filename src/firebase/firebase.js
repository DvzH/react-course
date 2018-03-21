import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  export const database=firebase.database();
  export {firebase,database as default}

//   firebase.database().ref().set({
//       name:'Kiran Hiremath',
//       age:23,
//       isSingle:true,
//       stressLevel:6,
//       job:{
//           title:'Software Developer',
//           company:'Facebook'
//       },
//       location:{
//           city:'Bangalore',
//           country:'India'
//       },
//       attributes:{
//           height:"5.10inch",
//           weight:"75Kg"
//       }
//   })

//   firebase.database().ref().on('value',(snapshot)=>{
//     console.log(snapshot.val().name+" is a "+ snapshot.val().job.title + " at "+snapshot.val().job.company);
//   });

//   firebase.database().ref('job/title').on('value',(snapshot)=>{
//     console.log(snapshot.val());
//   });

//   firebase.database().ref('job/company').on('value',(snapshot)=>{
//     console.log(snapshot.val());
//   });

//   setTimeout(()=>{
//       firebase.database().ref().update({
//         'job/company':'Google   '
//       })    
//   },3000);

//   firebase.database().ref().update({
//       stressLevel:9,
//       'job/company':'Amazon',
//       'location/city':'Seattle'
//   })
//   firebase.database().ref('age').set(24).then(()=>{
//       console.log("data saved");
//   })
//  firebase.database().ref('location/city').set('Barcelona');

//  firebase.database().ref('isSingle').remove().then(()=>{
//      console.log("removed successfully");
//  })
// console.log("data");

// firebase.database().ref('expenses').push({
//     description:'expenses1',
//     note:'',
//     amount:12,
//     createdAt:12/10/2017
// })

// firebase.database().ref('expenses').push({
//     description:'expenses2',
//     note:'',
//     amount:14,
//     createdAt:12/10/2017
// })

// firebase.database().ref('expenses').push({
//     description:'expenses3',
//     note:'',
//     amount:18,
//     createdAt:12/10/2017
// })

//firebase.database().ref('expenses/-L7cycnRNtRg1Vr7Jlo5').remove();

// firebase.database().ref('expenses').once('value').then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// firebase.database().ref('expenses').on('value',(snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// setTimeout(() => {
//     firebase.database().ref().update({
//         'expenses/-L7cx_HMekOElktK2qVy/note':'Shape of you'
//     })
// }, 5000);

// firebase.database().ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })