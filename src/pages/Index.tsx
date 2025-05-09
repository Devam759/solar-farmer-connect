
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import FarmerPersona from '../components/FarmerPersona';
import SchemeIdeation from '../components/SchemeIdeation';
import Implementation from '../components/Implementation';
import Impact from '../components/Impact';
import FutureScope from '../components/FutureScope';
import Eligibility from '../components/Eligibility';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <FarmerPersona />
      <SchemeIdeation />
      <Implementation />
      <Impact />
      <FutureScope />
      <Eligibility />
      <Footer />
    </div>
  );
};

export default Index;
