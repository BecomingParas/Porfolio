import React from "react";
import styles from "./Skillsstyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import checkMarkIconLight from "../../assets/checkmark-light.svg"

function Skills() {
    const {theme} = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML'/>
        <SkillList src={checkMarkIcon} skill='CSS'/>
        <SkillList src={checkMarkIcon} skill='JAVASCRIPT'/>
        <SkillList src={checkMarkIcon} skill='TYPESCRIPT'/>
        <SkillList src={checkMarkIcon} skill='NODE'/>
        
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='REACT'/>
        <SkillList src={checkMarkIcon} skill='NEXT JS'/>
        <SkillList src={checkMarkIcon} skill='TAILWIND CSS'/>
        <SkillList src={checkMarkIcon} skill='FIGMA'/>
        
      
        
      </div>
      <hr />
  
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Redux'/>
        <SkillList src={checkMarkIcon} skill='Git'/>
        <SkillList src={checkMarkIcon} skill='Bootstrap'/>
        
        <SkillList src={checkMarkIcon} skill='C++'/>
        <SkillList src={checkMarkIcon} skill='Python'/>
        
      </div>
      

    </section>
  );
}

export default Skills;
