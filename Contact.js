import React from "react";

class Contact extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
        <body>
            <div class="heading">
                <div class="jumbotron text-center" id="navigation">
                    <h1 class="myname">Gokul</h1>
                    <ul class="nav nav-pills nav-justified" id="navigattion">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/project">
                                Project
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/paper">
                                Paper
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="container">
                    <div class="col-sm-12">
                    <h2>Contact Details</h2>
                    <ul class="myprojects">
                        <li class="fa fa-phone">     6383014166</li>
                        <br/>
                        <i class="material-icons">mail</i>gokul17072003@gmail.com
                        <br/>
                        <li class="fa fa-linkedin"> https://www.linkedin.com/in/gokul-k-441a30219/</li>
                
                    </ul>
                    </div>
                   

                </div>
            
            <div class="jumbotron text-center" id="footer">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a href="https://www.linkedin.com"
                    class="fa fa-linkedin nav-link"
                    style={{color:"blue"}}/>
                </li>
                <li class="nav-item">
                    <a href="https://www.youtube.com"
                    class="fa fa-youtube nav-link"
                    style={{color:"blue"}}/>
                </li>
                <li class="nav-item">
                    <a href="https://www.github.com"
                    class="fa fa-github nav-link"
                    style={{color:"blue"}}/>
                </li>
                <li class="nav-item">
                    <a href="https://www.instagram.com"
                    class="fa fa-instagram nav-link"
                    style={{color:"blue"}}/>
                </li>
            </ul>
            </div>
            </div>
        </body>
        );
    }
}
export default Contact;