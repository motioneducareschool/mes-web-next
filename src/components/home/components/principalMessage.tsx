import React from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{`Principal's Message`}</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <Card className="border-0 shadow-lg p-4">
            {/* Principal's Image Column */}

            {/* Message Column */}
            <div className="md:col-span-3">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Quote className="h-8 w-8 text-green-600 mb-6" />
                  <div className="space-y-4 text-gray-600">
                    <p>Dear Parents and Students,</p>
                    <p>
                      {` Welcome to Motion Educare School. As the Principal, it
                      gives me immense pleasure to lead an institution that
                      stands as a beacon of excellence in education. Our
                      school's philosophy is rooted in the belief that every
                      child is unique and deserves an environment where they can
                      discover their potential and nurture their talents.`}
                    </p>
                    <p>
                      {`At Motion Educare School, we focus not just on academic
                      excellence but on the holistic development of our
                      students. Our dedicated team of educators works tirelessly
                      to create an atmosphere that encourages curiosity,
                      creativity, and critical thinking.`}
                    </p>
                    <p>
                      {` We believe in preparing our students not just for
                      examinations, but for life itself. Our curriculum and
                      teaching methodologies are designed to instill values,
                      build character, and develop leadership qualities that
                      will serve our students well in their future endeavors.`}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <div className=" bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Mr. Ravi Raj</h3>
                    <p className="text-sm">Principal, Motion Educare School</p>
                  </div>
                  {/* <Button 
                      className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                    >
                      Read Full Message
                    </Button> */}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
