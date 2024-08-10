import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(true); // Add loading state
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
            setLoading(false); // Set loading to false once user data is set
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

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/image/regi.jpg" alt="registration image" width="500" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading">Contact Form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Enter username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={contact.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={contact.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Enter your message"
                                            required
                                            autoComplete="off"
                                            value={contact.message}
                                            onChange={handleInput}
                                            cols={30}
                                            rows={5}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
