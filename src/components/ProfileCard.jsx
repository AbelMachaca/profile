
import PropTypes from 'prop-types';

const ProfileCard = ({ name, role, image, technologies, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${image})` }} title={name}>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{role}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {technologies && (
        <div className="px-6 pt-4 pb-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
};

export default ProfileCard;
