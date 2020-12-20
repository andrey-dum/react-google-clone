import { useState, useEffect } from 'react'
import { API_KEY, CONTEXT_KEY } from './api'


const useGoogleSearch = (term) => {
   const [data, setData] = useState(null)


   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            console.log(error);
        }
    }

    fetchData()

   }, [term])

   return { data } 
}


export default useGoogleSearch