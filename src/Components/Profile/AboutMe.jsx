import React,{useContext, useEffect} from 'react';
import { bioContext } from '../../contexts/BioContextProvider';


const AboutMe = ({ bio }) => {

    // const { getBio} = useContext(bioContext)

    // useEffect(() => {
    //     getBio();
    //     console.log(bio)
    //   }, [])
  return (
    <div>{bio.about_me}</div>
  )
}

export default AboutMe