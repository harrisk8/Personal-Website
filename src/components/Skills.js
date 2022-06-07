import React from 'react';
import ReactDOM from 'react-dom/client';
import './Skills.css';

function Skills() {
    return (
        <div className='Skills' id='Skills'>
            <h1 className='Skills-header'>Skills</h1>
            <h2>Experienced with:</h2>
            <table>
                <tr>
                    <td><div class="skill-container">
                        <img class="img" src="./icons/javascript.svg"></img>
                        <div class="title">JavaScript</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/python.svg"></img>
                        <div class="title">Python</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/swift.svg"></img>
                        <div class="title">Swift</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/firebase.svg"></img>
                        <div class="title">Firebase</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/visual-studio-code.svg"></img>
                        <div class="title">Visual Studio Code</div> 
                    </div></td>
                </tr>
                <tr>
                    <td><div class="skill-container">
                            <img class="img" src="./icons/github-icon.svg"></img>
                            <div class="title">Github</div> 
                    </div></td>
                    <td><div class="skill-container">
                            <img class="img" src="./icons/xcode.png"></img>
                            <div class="title">Xcode</div> 
                    </div></td>
                </tr>
            </table>

            <h2>Familiar with:</h2>
            <table>
                <tr>
                <td><div class="skill-container">
                        <img class="img" src="./icons/java.svg"></img>
                        <div class="title">Java</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/Rstudio.png"></img>
                        <div class="title">RStudio</div> 
                    </div></td>

                    <td><div class="skill-container">
                            <img class="img" src="./icons/Rlogo.png"></img>
                            <div class="title">R</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/html-5.svg"></img>
                        <div class="title">HTML</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/css-3.svg"></img>
                        <div class="title">CSS</div> 
                    </div></td>

                </tr>
                <tr>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/mysql-icon.svg"></img>
                        <div class="title">MySQL</div> 
                    </div></td>

                    <td><div class="skill-container">
                            <img class="img" src="./icons/React-icon.png"></img>
                            <div class="title">React</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/nodejs-icon.svg"></img>
                        <div class="title">Node.js</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/pandas.svg"></img>
                        <div class="title">Pandas</div> 
                    </div></td>

                    <td><div class="skill-container">
                        <img class="img" src="./icons/numpy-icon.svg"></img>
                        <div class="title">NumPy</div> 
                    </div></td>



                </tr>
                
            


            </table>

        </div>
    )
}

export default Skills;