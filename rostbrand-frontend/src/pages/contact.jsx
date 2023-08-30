import { useState, useEffect } from "react";
import Layout from "../components/layout"
import contactImg from "../images/contact.jpg";


const Contact = ()=>{

      const [email, setEmail] = useState("");
     
    
      useEffect(() => {
        // update update the list of todos
        // when the component is rendered for the first time
        get();
      }, []);
    
      // This function updates the component with the
      // current about data stored in the server
      function get() {
        fetch(`${process.env.REACT_APP_BACKEND}api/contacts/`)
          .then(res => res.json())
          .then(contact => {
            setEmail(contact.data[0].attributes.Email);
      
          })
      }

return <Layout>
  <section className="contact">
    <div className="wrapper">
  <form action="https://formspree.io/myynvoaj" method="POST" className="form">
    <input type="text" id="name" name="name"  placeholder="Name" required/>
    <input type="email" id="email" name="name" placeholder="Email" required/>
    <textarea name="message" id="message" placeholder="Message" required></textarea>
    <input type="submit" className="submit" value="SEND"/>
    </form>
    <span className="or">or</span>
    <p className="email">{email}</p>
      </div>
      <div className="image">
        <img src={contactImg} alt="Tauber Peter"/>
      </div>
  </section>
  </Layout>
}

export default Contact
