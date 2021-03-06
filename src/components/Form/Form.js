import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import CartContext from "../../context/CartContext"
import {useContext} from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'



const Form =() =>{

  const { clearCart, cart } = useContext(CartContext)


  const createOrder = () => {

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let direccion = document.getElementById('direccion').value;
    console.log(nombre, email, phone, direccion)

    const clientData = {
        items: cart,
        buyer: {
            name: nombre,
            phone: phone,
            email: email,
            direccion: direccion,
          
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
          clearCart()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '??Muchas gracias por su compra!',
            text: `El id de la orden es ${id}`,
            showConfirmButton: true,
            timer: 3000
        })

       }).catch(error => {
          console.log(error)
      })

}

return(
  <div>
    <h1 className='subtitle'>Ind??canos tus datos de contacto</h1>
    <div className='containerProducts '>
        <div className='form'>
            <div className='input-group mb-3'>
                <label className='input-group-text'>Nombre y Apellido:</label>
                <input type='text' id='nombre' className='form-control' required/>
            </div>
            <div className='input-group mb-3'>
                <label className='input-group-text'>Correo electr??nico:</label>
                <input type='email' id='email'className='form-control' required/>
            </div>
            <div className='input-group mb-3'>
                <label className='input-group-text'>N??mero telef??nico:</label>
                <input type='text' id='phone'className='form-control' required/>
            </div>
            <div className='input-group mb-3'>
                <label className='input-group-text'>Direcci??n de entrega:</label>
                <input type='text' id='direccion'className='form-control' required/>
            </div>
            <NavLink to='/'><button onClick={() => createOrder()}>Generar Orden</button></NavLink>
        </div>
    </div>
</div>
)

}

export default Form;