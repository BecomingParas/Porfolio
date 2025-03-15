export type Tcard = {
  src: string;
  link: string;
  h3: string;
  p: string;
};
function ProjectCard({ src, link, h3, p }: Tcard) {
  return (
    <a href={link} target="_blank">
      <img
        className="hover"
        src={src}
        alt={`${h3} logo`}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
