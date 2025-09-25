const ProjectCard = ({ title, image, techStack, description }) => {
  return (
    <div className="border border-secondary hover:shadow-sm shadow-primary rounded-md">
      <div className="h-48 w-full overflow-hidden bg-gray-900 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="p-4">
        <p>{description}</p>

        <p className="my-4">{techStack?.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
