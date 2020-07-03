import React, { useState, useEffect } from 'react'

// 自定义hook
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            if (data.length === 0) {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                setData(data)
                setLoading(false)
            }

        })()
    }, [data])

    return {
        data,
        loading
    }
}


const Demo9 = () => {

    const { data, loading } = useFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')

    return (
        <div>
            demo9:
            {
                loading
                    ?
                    <div>loading...</div>
                    :
                    data.chengpinDetails[0].title
            }
        </div>
    )
}

export default Demo9