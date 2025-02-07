// components/PrincipalMessage.tsx
export function PrincipalMessage() {
  return (
    <div className="h-[500px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 text-9xl">❝</div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/principal.jpg"
              alt="Principal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Mr. Ravi Raj</h3>
            <p className="text-blue-200">Principal</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-100">
          <p className="text-lg">
            {`At Motion Educare, we believe in nurturing young minds through 
            holistic education and character building. Our 98% board results 
            and 15+ years of academic excellence stand testament to our commitment.`}
          </p>
          <p className="text-lg">
            {`As we embrace innovative teaching methodologies, we remain rooted in
            traditional values. Our state-of-the-art infrastructure and
            experienced faculty provide the perfect environment for students to
            excel academically while developing essential life skills.`}
          </p>
          <p className="text-lg font-semibold text-white mt-4">
            {`"Education is not preparation for life; education is life itself."`}
          </p>
        </div>

        <img
          src="/signature.png"
          alt="Signature"
          className="mt-6 w-40 opacity-90"
        />
      </div>
    </div>
  );
}
