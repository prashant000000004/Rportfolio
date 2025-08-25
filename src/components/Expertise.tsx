import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Kotlin",
    "XML",
    "Dart",
    "Python",
    "Sql",
];

const labelsSecond = [
    "Flutter",
    "Android SDK",
    "Room DB",
    "Material Design",
    "Firebase(Auth,Firestore,FCM)",
    "Glide",
];

const labelsThird = [
    "Flutter SDK",
    "Spring Boot",
    "Andorid Studio",
    "VS Code",
    "Postman",
    "Git",
    "IntelliJ",
];
const labelsfourth = [
    "MVVM Architecture",
    "Clean Architecture",
    "Dependency Injection",
    "State Managment in Flutter(Provider, Bloc, setState)",
    "REST APIs",
    "CI/CD Pipelines",
    "Unit Testing",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <h3>Languages: </h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <h3>Mobile Development: </h3>
                    {/* <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
                    <h3>Frameworks & Tools:</h3>
                    {/* <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                   <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <h3>Architecture & Concepts:</h3>
                    {/* <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsfourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;