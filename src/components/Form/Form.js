import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import CartContext from "../../context/CartContext"
import {useContext} from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form =() =>{

  const { cart } = useContext(CartContext)


  const createOrder = () => {

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    console.log(nombre, email, phone)

    const clientData = {
        items: cart,
        buyer: {
            name: nombre,
            phone: phone,
            email: email
          
          }

        }


  const ids = cart.map(prod => prod.id)

  const batch = writeBatch(firestoreDb)

  const collectionRef = collection(firestoreDb, 'products')

  const outOfStock = []

  getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then(response => {
          response.docs.forEach(doc => {
              const dataDoc = doc.data()
              const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

              if(dataDoc.stock >= prodQuantity) {
                  batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
              } else {
                  outOfStock.push({ id: doc.id, ...dataDoc })
              }
          })
      }).then(() => {
          if(outOfStock.length === 0) {
              const collectionRef = collection(firestoreDb, 'orders')
              return addDoc(collectionRef, clientData)
          } else {
              return Promise.reject({ name: 'outOfStockError', products: outOfStock})
          }
      }).then(({ id }) => {
          batch.commit()
          console.log(`El id de la orden es ${id}`)
      }).catch(error => {
          console.log(error)
      })
}

return(
  <div>
    <h1 className='noMargin'>Indícanos tus datos de contacto</h1>
    <div className='contenedorProductos'>
        <div className='form'>
            <div className='formInput'>
                <p>Nombre y Apellido:</p>
                <input type='text' id='nombre'/>
            </div>
            <div className='formInput'>
                <p>Correo electrónico:</p>
                <input type='email' id='email'/>
            </div>
            <div className='formInput'>
                <p>Número telefónico:</p>
                <input type='text' id='phone'/>
            </div>
            <button onClick={() => createOrder()} className='botonEliminarProducto'>Generar Orden</button>
        </div>
    </div>
</div>
)

}

export default Form;