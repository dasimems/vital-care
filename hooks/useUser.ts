import { UserDetailsType } from "@/api/index.d";
import { auth, fireStoreDb } from "@/api/firebase";
import { useUserContext } from "@/context";
import { databaseKeys } from "@/utils/_variables";
import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { useCallback } from "react";

const useUser = () => {
  const { setUserDetails, ...details } = useUserContext();
  const getUserDetails = useCallback(async () => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //   }
    // });

    try {
      const { currentUser } = auth;

      if (currentUser) {
        const userRef = doc(fireStoreDb, databaseKeys.users, currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as UserDetailsType;
          setUserDetails(data);
        } else {
          currentUser.delete();
          throw {
            message: "User not found!"
          };
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, []);
  return { getUserDetails, ...details };
};

export default useUser;
