
import ProfileCard from './ProfileCard';

const profiles = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
    technologies: ['JavaScript', 'React', 'Node.js'],
    description: 'Experienced full-stack developer.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    technologies: ['Agile', 'Scrum', 'Kanban'],
    description: 'Skilled in product development and team management.'
  },
  // Agrega más perfiles aquí
];

const ProfileList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          technologies={profile.technologies}
          description={profile.description}
        />
      ))}
    </div>
  );
};

export default ProfileList;
