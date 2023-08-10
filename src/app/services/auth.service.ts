import { Injectable } from '@angular/core';
import { 
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut, authState, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  googleProvider = new GoogleAuthProvider();
  user: User | null = null;

  constructor(public auth: Auth) {
    authState(auth).subscribe((user) => {
      if(user){
        this.user = user;
        console.log(this.user['email']);
        
      }
      else{
        this.user = null;
      }
    })
  }
    

  async logInWGoogle(){
    let result = await signInWithPopup(this.auth, this.googleProvider);
    console.log(result.user)
    return result;
  }




  logOut(){
    return signOut(this.auth);
  }
}