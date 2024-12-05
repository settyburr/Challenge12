import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      imageUrl: '/path/to/image1.jpg',
      projectUrl: 'https://projectone.com',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      imageUrl: '/path/to/image2.jpg',
      projectUrl: 'https://projecttwo.com',
    },
    
  ];

  return (
    <section>
      <h2>My Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
