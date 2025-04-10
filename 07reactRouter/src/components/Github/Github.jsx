import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='texct-center m-4 bg-gray-700 text-amber-500 text-3xl p-4' >
        GitHub Followers: {data.followers}
        <img src="data.avatar_url" alt="Git Picture" width={300} />
      
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/HackerAadarsh')
    return response.json()
}