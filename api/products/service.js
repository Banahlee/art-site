

import {collection, getDocs} from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage';
// import { db } from '@/plugins/firestore'

// //const db = this.$fire.firestore;
// const productCollection = db.collection("products")

// export const getProducts = async() => {
//     console.log("get products")
//     // const ref = this.$fire.firestore.collection('products')
//     // console.log(ref)
//     const querySnapshot = await getDocs(productCollection);
//     console.log("QS: ", querySnapshot)
//     // querySnapshot.forEach((doc) => {
//     //   this.artList.push(doc.data())
//     //   console.log("doc: ", doc.data())
//     //   console.log(`${doc.id} =>`, doc.data());
//     // });
// }