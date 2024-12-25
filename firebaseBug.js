The Firebase SDK might throw an error if the database rules are too restrictive.  For example, if your rules only allow reads for authenticated users, and you try to read data without being authenticated, you'll get a permission denied error. This can be difficult to debug because the error message isn't always clear about the exact cause.

```javascript
firebase.database().ref('/someData').once('value').then(function(snapshot) {
  console.log(snapshot.val());
}).catch(function(error) {
  console.error(error); // This might show a permission denied error
});
```