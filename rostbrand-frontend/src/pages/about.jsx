import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import artistImg from "../images/peti.jpg";
import { useState } from "react";
import { useEffect } from "react";

const About = ()=>{


      const [bio, setBio] = useState("");
      const [info, setInfo] = useState("");
    
      useEffect(() => {
        // update update the list of todos
        // when the component is rendered for the first time
        get();
      }, []);
    
      // This function updates the component with the
      // current about data stored in the server
      function get() {
        fetch(`${process.env.REACT_APP_BACKEND}api/abouts/`)
          .then(res => res.json())
          .then(about => {
            setBio(about.data[0].attributes.Biography);
            setInfo(about.data[0].attributes.Info);
            console.log(about.data[0].attributes);
          })
      }


return <Layout>
 <section className="about" id="about">
    <div className="wrapper">
    <p>{bio}</p>   
  <button><a href="/contact">Contact Me</a></button>
    </div>
    <div className="image">
      <img src={artistImg} alt="Peter Tauber" id="peti"/>
      <div className="card-text">
        <ReactMarkdown>{info}</ReactMarkdown>
       
      </div>
    </div>
  </section>
  </Layout>
}

export default About
