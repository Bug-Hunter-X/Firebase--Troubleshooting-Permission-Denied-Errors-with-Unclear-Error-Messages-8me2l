To solve this, ensure your Firebase security rules are correctly configured to allow access for authenticated users or, if you intend to allow public access, ensure the rules are set accordingly. Additionally, always include proper error handling to catch and process these permission denied errors.

```javascript
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    firebase.database().ref('/someData').once('value').then(function(snapshot) {
      console.log(snapshot.val());
    }).catch(function(error) {
      console.error('Error reading data:', error);
    });
  } else {
    // No user is signed in.
    console.log('User not authenticated.');
  }
});
```

This improved solution utilizes Firebase Authentication to verify user status before attempting database access and provides more informative error handling.