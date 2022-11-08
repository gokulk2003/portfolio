import React from "react";

class Paper extends React.Component{
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
                    <h2>PAPER</h2>
                    <ul class="myprojects">
                        <li>Blockchain Technology in voting system.</li>
                        <li>Blockchain Technology in Energy trading.</li>
                        <li>RAID Technology.</li>
                        <li>Artificial Intelligence in power grid.</li>
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
export default Paper;