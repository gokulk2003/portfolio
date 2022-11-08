
import React from "react";
class Home extends React.Component{
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
                    
                    <div class="col-sm-8">
                        <h2 class="myskills">Career Objective</h2>
                        <br/>
                        <p class="skills">To utilize my technical skills for achieving the target and developing the best performance in th organization. I would like to implement my innovative ideas,skills and creativity for accomplishing the projects.</p>

                    </div>
                </div>
            </div>
            <br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h2 class="myskills">Technical skills</h2>
                        <br/>
                        <ul class="skills">
                            <li>
                                Front end languages-HTML,CSS,JAVASCRIPT,REACT JS
                            </li>
                            <li>
                                Back end languages-PYTHON,JAVA,NODE JS
                            </li>
                            <li>
                                Database-MYSQL,MONGODB
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <h2 class="myskills">Certification</h2>
                        <br/>
                        <ul class="skills">
                            <li>
                                I completed design technology innovation course in nptel
                            </li>
                            <li>
                                I completed Ethical hacking in nptel
                            </li>
                            <li>First prize in jarvis paper prssentation</li>
                        </ul>
                    </div>
                    <br/>
                    <div class="col-sm-12">
                        <h2 class="myskills">My projects</h2>
                        <br/>
                        <table class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Project Domain</th>
                                    <th>Programming languages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>webpage</td>
                                    <td>Reactjs,Html,Css,Bootstrap</td>
                                </tr>
                                <tr>
                                    <td>CRUD Operation</td>
                                    <td>Mongodb,Nodejs</td>
                                </tr>
                                <tr>
                                    <td>To do list application</td>
                                    <td>React js,html,css,bootstrap</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-12">
                        <h2 class="myskills">Education Qualification</h2>
                        <br/>
                        <table class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>SCHOOL</th>
                                    <th>YOP</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10th-Kongu Kalvi Nilayam</td>
                                    <td>2018</td>
                                    <td>96</td>
                                </tr>
                                <tr>
                                    <td>12th-Kongu Kalvi Nilayam</td>
                                    <td>2020</td>
                                    <td>86</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
        
        </body>
        );
    }
}
export default Home;


