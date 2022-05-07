import { db, firebase } from "../firebase/firebase-config";

export const loadSocialMedia = async() => {
    const socialMediaSnap = await db.collection('/social-media').get();
    const socialMedia: any[] = [];
    
    socialMediaSnap.forEach( sm => {
        socialMedia.push({
            id: sm.id,
            ...sm.data()
        });
    });

    return socialMedia;
}
