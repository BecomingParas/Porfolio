import React from "react";
import styles from "./Skillsstyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import checkMarkIconLight from "../../assets/checkmark-light.svg"
import htmlLogo from "../../assets/htmllogo.png"
import cssLogo from "../../assets/Tailwind_CSS_Logo.svg.png"
import jssLogo from"../../assets/js.webp"
import tsLogo from "../../assets/ts.webp"
import nodeLogo from"../../assets/node.png"
import reactLogo from "../../assets/react.png"
import nextLogo from "../../assets/nextlogo.png"
import tailwindLogo from "../../assets/tailwind.png"

function Skills() {
    const {theme} = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlLogo} skill='HTML'/>
        <SkillList src={cssLogo} skill='CSS'/>
        <SkillList src={jssLogo} skill='JAVASCRIPT'/>
        <SkillList src={tsLogo} skill='TYPESCRIPT'/>
        <SkillList src={nodeLogo} skill='NODE'/>
        
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactLogo} skill='REACT'/>
        <SkillList src={nextLogo} skill='NEXT JS'/>
        <SkillList src={tailwindLogo} skill='TAILWIND CSS'/>
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
