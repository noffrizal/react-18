import { Fragment } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"


const products = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 'Rp 1.000.000',
        image: '/images/shoes-1.jpg',
        description: 'LIni Adalah data sepatu merek apalah gitu',
    },
    {
        id: 2,
        title: 'Sepatu Kedua',
        price: 'Rp 3.000.000',
        image: '/images/shoes-1.jpg',
        description: 'LIni Adalah data sepatu kedua apalah gitu',
    }
]

const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href='/login'
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}  
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    )
}



export default ProductsPage 