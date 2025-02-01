
import BenefitCard from './BenefitCard.jsx';
import { benefitsData } from './benefitsData.jsx';

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#79D7BE]">
        Benefits of Echargeup
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-16">
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;