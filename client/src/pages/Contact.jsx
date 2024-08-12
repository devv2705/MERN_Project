import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
        }
    }, [user]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact({
                    username: user.username,
                    email: user.email,
                    message: "",
                });
                alert("Message sent successfully");
            } else {
                alert("Message sent failed");
            }
        } catch (error) {
            alert("Message sent failed");
            console.error(error);
        }
    };

    return (
        <>
          <section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading">contact us</h1>
            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img src="/images/support.png" alt="we are always ready to help" height="500" />
              </div>
    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                      required
                      
                    />
                  </div>
                  <br /> <br />
    
                  <div>
                    <label htmlFor="email">email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br /> <br />
    
                  <div>
                    <label htmlFor="message">message</label>
                    <br />
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      required
                      cols="30"
                      rows="6"
                    ></textarea>
                  </div>
                  <br /> <br />
    
                  <div>
                    <button type="submit">submit</button>
                  </div>
                </form>
              </section>
            </div>
    
            <section className="mb-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0070071272894!2d73.15879047547799!3d18.931083982243948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e7cb1985ae6d%3A0x160d221abf6161a5!2sAmity%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1723494897849!5m2!1sen!2sin"
               width="100%"
               height="450"
               allowfullscreen="" 
               loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
          </section>
        </>
      );
};
