import React, {useEffect, useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficCard from '../FanficCard/FanficCard';

const UserFanfic= () => {
  const { getFanfic, fanfic} = useContext(fanficContext);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getFanfic();
    console.log(fanfic)
  }, [])


  useEffect(() => {
    getFanfic();

  }, [searchParams])
  return (
    <>

    {fanfic?.map(fanfic => (
            <FanficCard key={fanfic.id} fanfic={fanfic}></FanficCard>
          ))}
    
       </>
  )
}

export default UserFanfic