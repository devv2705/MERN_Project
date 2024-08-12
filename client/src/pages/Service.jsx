import { useAuth } from "../store/auth";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const Service = () => {
    const { services, isLoggedIn } = useAuth();
    const toastIdRef = useRef(null);

    useEffect(() => {
        if (!isLoggedIn) {
            // Show the toast only if there's no existing toast
            if (!toastIdRef.current) {
                toastIdRef.current = toast.error("Please login to view services");
            }
        } else {
            // Dismiss the toast if the user logs in
            if (toastIdRef.current) {
                toast.dismiss(toastIdRef.current);
                toastIdRef.current = null;
            }
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <p>Please log in to view services.</p>;
    }

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">
                {services.map((currElement, index) => {
                    const { service, description, price, provider } = currElement;

                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/design.png" alt="our services" width="500" />
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <h2>{service}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
