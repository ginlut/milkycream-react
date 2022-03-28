import './NavBar.css'
import CartWidget from '../CartWidget/CartWiget'
import Button from 'react-bootstrap/Button';


const NavBar = () => {

    return ( 
        <nav className = "NavBar" >
            <div>
                <h3> Milkycream </h3> 
            </div> 
            <div>
                <Button variant="info">Milkshakes</Button>{' '}
                <Button variant="info">Galletas</Button>{' '}
                <Button variant="info">Waffles </Button>{' '}
            </div>
            <div>
                <CartWidget />
            </div>        </nav>

    )
}

export default NavBar