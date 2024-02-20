import React from 'react'
import { Gear, Wrench } from "@phosphor-icons/react";

const Skill = () => {
  return (
    <>
        <section class="skills" id="skills">
        <div className="skills-text">
            <h3>My Skills</h3>
            <div className="skills-table">
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="HTML5"/>
                    <span>HTML5</span>
                </div>
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS3"/>
                    <span>CSS3</span>
                </div>
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript"/>
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="Bootstrap"/>
                    <span>Bootstrap</span>
                </div>
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="React"/>
                    <span>React</span>
                </div>
                <div className="skill">
                    <img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="Github"/>
                    <span>Github</span>
                </div>
            </div>
        </div>
        <div className="skills-info">
            <p>Tech Stack <Gear weight='bold' className='skills-icon'/>& Tools <Wrench weight='bold' className='skills-icon'/></p>
        </div>
    </section>
    </>
  )
}

export default Skill