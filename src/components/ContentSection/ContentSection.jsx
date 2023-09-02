import {
  faCube,
  faDisplay,
  faLayerGroup,
  faPenToSquare,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import CardBox from './CardBox';

const data = [
  {
    id: 1,
    headerText: '31 App Screen',
    subHeaderText:
      '1x Resolution 375x812px Screen can be resize and customize anywhere',
    icon: faDisplay,
  },
  {
    id: 2,
    headerText: '100% Vector',
    subHeaderText: 'Maeman Screen is constructed of 100% vector shapes',
    icon: faPenToSquare,
  },
  {
    id: 3,
    headerText: 'Fully Layered',
    subHeaderText:
      'Completely editable layer, well organized with proper names',
    icon: faLayerGroup,
  },
  {
    id: 4,
    headerText: 'Icon Pack',
    subHeaderText:
      'Feather Icons is perfect to create unique design experience',
    icon: faCube,
  },
  {
    id: 5,
    headerText: 'Design & Style',
    subHeaderText:
      'Library and shared text Style makes for an editable everyone',
    icon: faRotate,
  },
];

const ContentSection = () => {
  return (
    <div className="contentSection">
      <div className="icon-box-container">
        {data.map((cardInfo) => (
          <CardBox key={cardInfo.id} cardData={cardInfo} />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
