import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
const ProductsPage = () => {
    return(
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title='Sepatu Baru'>LIni Adalah data septu merek apalah gitu </CardProduct.Body>
                <CardProduct.Footer price = 'Rp 1.000.000' />
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title='Sepatu Baru'>LIni Adalah data septu merek apalah gitu </CardProduct.Body>
                <CardProduct.Footer price = 'Rp 1.000.000' />
            </CardProduct>
        </div>
    )
}

export default ProductsPage 