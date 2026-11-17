import { useState } from "react"


const Optional = () => {
  
    const [datas,setDatas] = useState(false)

  const handleClcik = ()=>{

    setDatas(!datas)

  }

  return (
    <>
    <button onClick={handleClcik}>On Click</button>

     {datas && <p>This is alternaticve</p>}
    </>
  )
}

export default Optional