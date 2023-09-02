import propTypes from 'prop-types';

const Subheader = ({ subHeader }) => {
  return (
    <div className="subheader">
      <p>{subHeader}</p>
    </div>
  );
};

Subheader.propTypes = {
  subHeader: propTypes.string.isRequired,
};

export default Subheader;
