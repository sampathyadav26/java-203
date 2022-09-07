import {db} from "../firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const BookCollectionRef=collection(db,"books");
class BookDataService{
 
     addBooks =(newBook)=>{
       return addDoc(BookCollectionRef,newBook)
     }
     updateBook=(id , updatedBook)=>{
        const BookDoc = doc(db,"books",id)
        return updateDoc(BookDoc,updatedBook)
     }
    deleteBook=(id)=>{
        const BookDoc = doc(db,"books",id)
     return deleteDoc(BookDoc)

    }
    getAllBooks=()=>{
        return getDocs(BookCollectionRef);
    }
    getBook=()=>{
        const BookDoc=doc(db,"books",id)
        return getDoc(BookDoc);
    }

}







export default new BookDataService();