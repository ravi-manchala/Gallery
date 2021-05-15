import  { useEffect, useState } from 'react';
import {projectFirestore, projectStorage, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name) //Storage reference

        const collectionRef = projectFirestore.collection('images'); //FIrestore reference

        storageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        },(err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const name = file.name
            collectionRef.add({url, createdAt, name})
            setUrl(url);
        })
    }, [file])

    return{progress, error, url}
}

export default useStorage;