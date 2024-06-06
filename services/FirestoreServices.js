import { collection, getDocs, doc, addDoc, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const addReading = async(dayId, readingData) => {
    // TODO: Add reading to specific day
   
        try {
            const dayRef = doc(db, "days", dayId);

            const readingRef = collection(dayRef, "readings");

            const docRef = await addDoc(readingRef, readingData);

            console.log("successful adding the id: " + docRef.id);

            return true

        } catch(e) {
            console.log("reading document failed" + e);
            return false
        }
    
} 

//  LOG  7lJIXSg12uqbp6lLFVAi  =>  {"icon": "sun", "name": "Thursday"}
//  LOG  XVSBEnluMxjc6XbY5k27  =>  {"icon": "cloud", "name": "Friday"}

export const getAllDays = async() => {
    // TODO: return the days that we want to read

    try {
            const collectionRef = collection(db, "days");

            const q = query(collectionRef, orderBy("dayOfWeek", "asc"));

            const querySnapshot = await getDocs(q);

            // prosses the data
            var daysData = []

            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var theDay = {...doc.data(), id: doc.id}
            daysData.push(theDay)
        })
        return daysData

    } catch (e) {
        console.log("Something went wrong getting all out days" + e)
        return []
    }

    
}

export const getAllCardDays = async() => {
    // TODO: return the days that we want to read

    const cardRef = collection(db, "cards") 

    const querySnapshot = await getDocs(cardRef);

    // prosses the data
    var daysData = []

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    var theDay = {...doc.data(), id: doc.id}
    daysData.push(theDay)
})
return daysData
}

