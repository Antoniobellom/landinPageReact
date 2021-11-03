import React from "react";
import { Card } from "./cards";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./navbar";


export const Home = (props) => {

    return (
        <>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <div className="col-3 ">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                </div>

            </div>

            <Footer />

        </>



    );
};