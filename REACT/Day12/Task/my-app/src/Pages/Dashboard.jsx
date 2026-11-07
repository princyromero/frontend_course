import { useEffect, useState } from "react"


const Dashboard = () => {
  const [showDatas, setshowDatas] = useState({})

    useEffect(() => {
        const datas = JSON.parse(localStorage.getItem("isActive")) || {}
        setshowDatas(datas)
    }, [])

    return (<>
    <h1>{showDatas.userName}</h1>
    <p>{showDatas.userEmail}</p>
  
  </>)
}

export default Dashboard