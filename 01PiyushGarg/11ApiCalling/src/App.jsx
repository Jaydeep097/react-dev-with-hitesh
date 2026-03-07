import React from 'react'
import { getPosts } from './api/index.jsx'
import { useState, useEffect } from 'react'
import  PostCard  from './component/PostCard.jsx'

function App () {

    const [data, setData] = useState(null)

    useEffect(()=>{
        getPosts().then((posts) => setData(posts))
    }, []);


    return (<div className='App'>
        { data ? data.map((e) => <PostCard title={e.title} body= {e.body} /> ) : <p>No Data</p>}
    </div>)
}

export default App;