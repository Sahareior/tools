// Certificate.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Certificate = () => {
  const certificateRef = useRef();

  const downloadPDF = async () => {
    const element = certificateRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("azimuth-certificate.pdf");
  };

  return (
<div className="min-h-screen bg-gray-100 py-10 px-4">
  {/* Toolbar */}
  <div className="text-center mb-8">
    <button
      className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      onClick={downloadPDF}
    >
      📥 Download Certificate
    </button>
  </div>

  {/* Certificate Display */}
  <div className="cert-container hidden nonee print-m-0 flex justify-center">
    <div
      id="content2"
      ref={certificateRef}
      className="relative w-[1200px] h-[850px] rounded-xl overflow-hidden shadow-2xl border border-gray-300"
    >
      {/* Background Image */}
      <img
        src="https://edgarsrepo.github.io/certificate.png"
        alt="Certificate Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content on top */}
      <div className="absolute inset-0 z-10 px-12 py-16 flex flex-col justify-center items-center text-black text-center bg-white/10 backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold font-serif text-gray-800 mb-6 tracking-wide">
          🎓 Certificate of Completion
        </h1>

        <h2 className="text-3xl font-semibold text-gray-900 mb-4 underline decoration-wavy decoration-green-500">
          Reginald Bentley
        </h2>

        <p className="text-xl italic font-serif text-gray-700 mb-4">
          has successfully completed the course
        </p>

        <h3 className="text-4xl font-bold text-blue-800 mb-2 tracking-tight">
          Sahareior Sijan
        </h3>
        <p className="text-sm mb-8 text-gray-600">(For Soldiers)</p>

        <p className="text-sm max-w-3xl text-gray-700 leading-relaxed mb-8">
          Completion of the Azimuth Check and review of the Azimuth Check
          recommendations in ArmyFit is worth <strong>1.0 hours</strong> in the
          Electronic Based Distance Learning (EBDL) program for USAR and ARNG
          Soldiers. For more information on the EBDL, see your unit training NCO.
        </p>

        {/* Footer Row */}
        <div className="absolute bottom-[100px] w-full flex justify-between px-24 text-sm font-medium text-gray-800">
          <span>📍 G-1 DAPE-ARR-SF</span>
          <span>📅 Completed on: April 3, 2020</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Certificate;
