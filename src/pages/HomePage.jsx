import ContentSection from '../components/ContentSection/ContentSection';
import Header from '../components/header/Header';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Header />
        <ContentSection />
      </div>
    </div>
  );
};

export default HomePage;
