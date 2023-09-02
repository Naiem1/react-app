import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';

const CardBox = ({ cardData }) => {
  const { icon, headerText, subHeaderText } = cardData;

  return (
    <div className="icon-box">
      <div>
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <h2 className="icon-box--header">{headerText}</h2>
      <p className="icon-box--subheader">{subHeaderText}</p>
    </div>
  );
};

CardBox.propTypes = {
  cardData: propTypes.shape({
    icon: propTypes.shape(),
    headerText: propTypes.string.isRequired,
    subHeaderText: propTypes.string.isRequired,
  }).isRequired,
};

export default CardBox;
