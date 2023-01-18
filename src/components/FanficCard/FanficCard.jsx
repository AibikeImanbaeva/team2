import React,{useState} from 'react'

const FanficCard = ({fanfic}) => {

    const [title, setTitle] = useState(fanfic.title || "");
    

  return (
    <div>FanficCard</div>
  )
}

export default FanficCard