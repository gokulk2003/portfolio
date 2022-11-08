import React from "react";
class Project extends React.Component{
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
                    <h2>STUDENT INFORMATION SYSTEM</h2>
                    <ul class="myprojects">
                        <li>This project displays the student's data in an organization and also the parents get to know about their ward's performance.</li>
                        <li>Presented for Ideathon -proof of concept.</li>
                    </ul>
                    </div>
                    <div class="col-sm-12">
                        <h2>Shop bot for visually impaired people using Deep learning</h2>
                        <ul class="myprojects">
                            <li>This project  helps the  visually impaired to identify various products in shop & helpful in purchasing them.</li>
                            <li>Presented for Phase-1 Hackathon 2022.</li>
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
export default Project;