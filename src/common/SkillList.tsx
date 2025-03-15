function SkillList({ src, skill }: { src: string; skill: string }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" style={{ width: "45px" }} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
