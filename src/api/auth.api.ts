import { auth } from "../firebase";

export const authAPI = {
    loginUser(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;


                console.log(user?.email, user?.uid)
                return user
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
}


