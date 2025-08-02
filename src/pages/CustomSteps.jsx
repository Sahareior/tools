import { GrOverview } from "react-icons/gr";
import { useState } from "react";
import Lottie from "lottie-react";
import busAnimation from "../lotties/bus.json"; // Ensure this is inside src/lotties

const CustomSteps = () => {
  const steps = [
    "Course Overview",
    "Ai Coach",
    "Documentation",
    "Exam Simulator",
    "Certification",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const percentage = (currentStep / (steps.length - 1)) * 100;
  console.log('currentstep', currentStep)
  console.log('currentStep', percentage)

  return (
    <div className="relative bg-white w-full max-w-5xl mx-auto py-12 px-4">
      {/* Step Icons */}
      <div className="flex justify-between items-center relative z-10">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${idx <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            <GrOverview size={20} />
          </div>
        ))}
      </div>

      {/* Progress Line with Animated Bus */}
      <div className="relative mt-20 mb-4 h-2 w-full bg-blue-400  rounded-full">
        {/* Blue progress line */}
{/* Blue progress line */}
<div
  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-500"
  style={{ width: `${percentage}%` }}
/>

{/* Bus Animation */}
<div
  className="absolute -top-20 transition-all duration-700 ease-in-out"
  style={{
    left: `calc(min(${percentage}%, 100% - 90px))`,
  }}
>
  <div className="w-28 h-28">
    <Lottie animationData={busAnimation} loop={true} />
  </div>
</div>

      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm font-medium text-center">
        {steps.map((label, idx) => (
          <p
            key={idx}
            className={`w-28 ${currentStep === idx ? "text-blue-600 font-semibold" : "text-gray-500"}`}
          >
            {label}
          </p>
        ))}
      </div>

      {/* Next Step Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default CustomSteps;
