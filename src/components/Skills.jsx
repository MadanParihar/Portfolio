import React from 'react';

const SkillIcon = ({ name, iconClass }) => (
    <div className="col-4 col-md-3 col-lg-2 mb-4">
       <div className="skill-badge">
            <i className={`${iconClass} fa-3x mb-2`}></i>
            <p className="mb-0 mt-2">{name}</p>
       </div>
    </div>
);

const Skills = () => {
    const skillsData = [
        { name: "HTML", iconClass: "fab fa-html5" },
        { name: "CSS", iconClass: "fab fa-css3-alt" },
        { name: "JavaScript", iconClass: "fab fa-js-square" },
        { name: "React", iconClass: "fab fa-react" },
        { name: "Node.js", iconClass: "fab fa-node-js" },
        { name: "Bootstrap", iconClass: "fab fa-bootstrap" },
        { name: "MySQL", iconClass: "fas fa-database" },
        { name: "MongoDB", iconClass: "fas fa-database" },
        { name: "Git", iconClass: "fab fa-git-alt" },
        { name: "GitHub", iconClass: "fab fa-github" },
        { name: "Python", iconClass: "fab fa-python" },
        { name: "Express.js", iconClass: "fas fa-server" }
    ];
    return (
        <section id="skills">
            <div className="container">
                <h2 className="text-center mb-5 display-5 fw-bold">Skills</h2>
                <div className="row justify-content-center text-center g-4">
                    {skillsData.map((skill, index) => (
                        <SkillIcon key={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;