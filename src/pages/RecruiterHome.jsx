import RecruiterBanner from '../components/Recruiter/RecruiterBanner';
import FeaturedRoles from '../components/Recruiter/FeaturedRoles';
import HowItWorks from '../components/Recruiter/HowItWorks';
import WhyHireWithUs from '../components/Recruiter/WhyHireWithUs';
import TrustStrip from '../components/Recruiter/TrustStrip';

export default function RecruiterHome() {
  return (
    <div>
      <RecruiterBanner />
      <FeaturedRoles />
      <HowItWorks />
      <WhyHireWithUs />
      <TrustStrip />
    </div>
  );
}
