import { db, firebase } from "../firebase/firebase-config";

export const loadCertificates = async() => {
    const certificatesSnap  = await db.collection('/certicates').get();
    const certificates: any[] = [];
    
    certificatesSnap.forEach( c => {
        certificates.push({
            id: c.id,
            ...c.data()
        });
    });

    return certificates;
}
