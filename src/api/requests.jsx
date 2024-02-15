import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

async function fetchAllProducts(){
    const {data} = await axios.get('https://localhost:44369/clothes');      
    return data
}

async function fetchExactProduct(id){
    const {data} = await axios.get('https://localhost:44369/' + id);
    return data
}

function requests(){   

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isError, isLoading  } = useQuery('products', fetchProducts)


    if (isLoading){
        return <h3>Loading...</h3>;
    } 

    if (isError){
        return <h3>Error</h3>;
    } 

    if (!data){
        return <h3>Нет данных</h3>
    }

    return (
        <div>
            {
                data.products
            }
        </div>
  )
}

export default requests
