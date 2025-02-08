import Image from "next/image";

// components/PrincipalMessage.tsx
export function PrincipalMessage() {
  return (
    <div className="max-h-[550px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 text-9xl">❝</div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-20 h-20 rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/images/principal.jpeg"
              alt="Principal"
              className="absolute object-cover inset-0 rounded-full"
              fill
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Mr. Ravi Raj</h3>
            <p className="text-blue-200">{`Principal (Motion Educare School)`}</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-100">
          <p className="text-lg">
            {`Welcome to Motion Educare School, where education goes beyond textbooks to nurture curiosity, creativity, and character. Our institution is dedicated to providing a holistic learning experience, blending academic excellence with strong moral values.`}
          </p>
          <p className="text-lg">
            {`From Playgroup to Class XII, we offer a well-structured curriculum that ensures students develop critical thinking, problem-solving skills, and confidence to face future challenges. Additionally, our specialized preparation programs for competitive exams like Sainik School, Navodaya Vidyalaya, JEE, and NEET help students achieve their career aspirations.`}
          </p>
          <p>{`With modern teaching methods, experienced faculty, and a nurturing environment, we strive to shape young minds into responsible and successful individuals. I invite parents and students to join us on this journey of learning and growth.`}</p>
          <p className="text-lg font-semibold text-white mt-4">
            {`"Education is not preparation for life; education is life itself."`}
          </p>
        </div>

        {/* <img
          src="/signature.png"
          alt="Signature"
          className="mt-6 w-40 opacity-90"
        /> */}
      </div>
    </div>
  );
}
