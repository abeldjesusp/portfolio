import { db, firebase } from "../firebase/firebase-config";

export const loadProfile = async() => {
    const profileSnap = await db.collection('/profile').get();
    const profile: any[] = [];
    
    profileSnap.forEach( p => {
        profile.push({
            id: p.id,
            ...p.data()
        });
    });

    return profile;
}
