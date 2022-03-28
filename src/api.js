import { db, storage } from './firebase'

const apiUrl = 'localhost:3001'

const apiCall = async (path, options) => {
  try {
    const response = await fetch(`http://${apiUrl}/${path}`, options)
    // const dat = await response.json();
    // console.log('In api', response);
    return response
  } catch (err) {
    console.log('Fetch error: ', err)
    return err
  }
}

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

export async function getFirebaseDocument(collectionName, documentId) {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = db.collection(collectionName).doc(documentId)
      const doc = await docRef.get()
      if (!doc.exists) {
        return resolve({ status: 404, data: null }) //404
      } else {
        return resolve({ status: 200, data: doc.data() })
      }
    } catch (err) {
      return reject({ status: 400, message: err }) //400
    }
  })
}

export async function storeFirestoreDocument(collectionName, documentId, data) {
  return new Promise(async (resolve, reject) => {
    try {
      await db.collection(collectionName).doc(documentId).set(data)
      console.log('Document successfully written!')
      return resolve({ status: 200 })
    } catch (error) {
      console.error('Error writing document: ', error)
    }
  })
}

export async function getFirestoreCollectionData(collectionName, role) {
  const docRef = db.collection(collectionName).where('role', '==', role)
  // const udata = {};
  try {
    const document = await docRef.get()
    // for (const doc of document.docs) {
    //   udata.id = doc.id;
    //   udata.data = doc.data();
    //   // console.log(doc.id, '=>', doc.data());
    // }
    const data = document.docs.map(doc => ({ ...doc.data(), doc_id: doc.id }))
    console.log(data)
    // const admin = data.push((doc) => {
    //   console.log(doc.role);
    // });
    // const resultant = []
    // for (const key in data) {
    //   resultant.push({
    //     id: key,
    //     name: data[key].name,
    //     businessName: data[key].businessName,
    //     isDelete: data[key].isDelete,
    //     role: data[key].role,
    //     docId: data[key].doc_id,
    //     avatarUrl: data[key].avatarUrl,
    //   })
    // }

    // console.log("Admin ", resultant);
    // return resultant
  } catch (error) {
    console.log('Error getting documents', error)
  }
}
