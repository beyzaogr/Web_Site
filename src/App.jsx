/*import { useState } from 'react'


function App() {
  const pictureIDs=[100,200,203,8,19]
  const [imageId, setImageId] = useState(pictureIDs[0])
    
  const getLoremPicsumImg=(id,width=800,height=300)=>`https://picsum.photos/id/${id}/${width}/${height}`

  function resmiDegistir(id)
  {
    setImageId(id)
  }
  return(
    <main class="container">
      <hgroup>
        <h2>GÖRSEL PROGRAMLAMA</h2>
        <h3>Mini görsel programlama örneği</h3>
      </hgroup>
      <img
      style={{width:'100%'}} 
      src={getLoremPicsumImg(imageId)} 
      alt=""/>

      <div className='grid' style={{marginTop:"20px"}}>
        {
          pictureIDs.map((item,index)=>
          <div key={index}>
            <img
            onClick={()=>resmiDegistir(item)}
            src={getLoremPicsumImg(item,200,100)}
            alt={item}/>
          </div>
          )

        }

      </div>
   </main>
  )
}
  

  

export default App
/
