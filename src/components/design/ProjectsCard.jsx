import "./styles.css"; // Adjust the path as needed

const ProjectsCard = ({ item }) => {
  return (
    <div className="gradient-border">
      <div className="p-4 bg-[#0E0C15] rounded-2xl">
        <div className="content rounded-xl ">
          <img
            src={item.imageUrl}
            alt=""
            width={350}
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl">{item.title}</h3>
          <div className=" inline-block transform hover:scale-105 transition-transform duration-200 ">
            <a href={item.gitURL}>Source Code &#8677;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
