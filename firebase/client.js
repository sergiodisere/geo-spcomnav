import firebase from 'firebase'

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    console.log(normalizedUser)
    onChange(normalizedUser)
  })
}

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

const addUserName = (user,username) => {
 user.updateProfile({
    displayName: username,
    photoURL: "https://www.w3schools.com/howto/img_avatar.png"
  })
  return firebase.auth().currentUser
  
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const loginWithEmail = (email, pass, username) => {
  return firebase.auth().createUserWithEmailAndPassword(email,pass).then((user)=>{
    return addUserName(user.user, username)
  })
}

export const signInWithEmail = (email,pass) => {
  return firebase.auth().signInWithEmailAndPassword(email,pass)
}

export const signOut = () => {
  return firebase.auth().signOut(); 
}