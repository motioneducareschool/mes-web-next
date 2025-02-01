"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Trophy,
  Users,
  Calendar,
  Bell,
  Building2,
} from "lucide-react";

const SchoolHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Students" },
              { number: "50+", label: "Teachers" },
              { number: "20+", label: "Classrooms" },
              { number: "100%", label: "Success Rate" },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-md">
                <h3 className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <Card className="h-full flex flex-col p-4">
            <div>
              <div className="text-2xl font-bold">
                Welcome to Motion Educare School
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className=" flex-grow">
                <p className="text-gray-700">
                  {` The function of education is to teach one to think intensively
                  and critically. Intelligence plus character - that is the goal
                  of true education.`}
                </p>
                <p className="text-gray-700">
                  {` Established in 2021, Motion Educare School has been at the
                    forefront of educational innovation, combining traditional
                    values with modern teaching methodologies. Our
                    state-of-the-art campus provides students with an environment
                    that nurtures both academic excellence and personal growth.`}
                </p>
                <p className="text-gray-700">
                  {` We take pride in our comprehensive curriculum that encompasses
                  academics, sports, arts, and cultural activities. Our students
                  benefit from well-equipped laboratories, a extensive library,
                  modern sports facilities, and specialized activity rooms that
                  cater to various interests and talents.`}
                </p>
                <p className="text-gray-700">
                  {` Our dedicated faculty members are experienced educators who
                  are passionate about teaching and committed to bringing out
                  the best in each student. We maintain an optimal
                  student-teacher ratio to ensure personalized attention and
                  support for every child.`}
                </p>
              </div>
              {/* <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-fit mt-6">
                Discover More
              </button> */}
            </div>
          </Card>

          {/* Right Section */}
          <Card className="h-full flex flex-col p-4">
            <div>
              <div className="text-2xl font-bold">{`Principal's Message`}</div>
            </div>
            <div className="flex-1 flex flex-col ">
              {/* <div className="text-green-600 text-4xl">"</div> */}
              <p className="text-gray-700">Dear Parents and Students,</p>
              <div className=" flex-grow">
                <p className="text-gray-700">
                  {` Welcome to Motion Educare School. As the Principal, it gives
                  me immense pleasure to lead an institution that stands as a
                  beacon of excellence in education. Our school's philosophy is
                  rooted in the belief that every child is unique and deserves
                  an environment where they can discover their potential and
                  nurture their talents.`}
                </p>
                <p className="text-gray-700">
                  {` At Motion Educare School, we focus not just on academic
                    excellence but on the holistic development of our students.
                    Our dedicated team of educators works tirelessly to create an
                    atmosphere that encourages curiosity, creativity, and critical
                    thinking.`}
                </p>
                <p className="text-gray-700">
                  {` We believe in preparing our students not just for
                  examinations, but for life itself. Our curriculum and teaching
                  methodologies are designed to instill values, build character,
                  and develop leadership qualities that will serve our students
                  well in their future endeavors.`}
                </p>
              </div>
              {/* <div className="mt-4 bg-green-600 text-white p-4 w-fit">
                <p className="font-bold">Mr. Ravi Raj</p>
                <p className="text-sm">Principal, Motion Educare School</p>
              </div> */}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Links */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <BookOpen className="h-6 w-6" />, text: "Academics" },
              { icon: <Trophy className="h-6 w-6" />, text: "Sports" },
              { icon: <Users className="h-6 w-6" />, text: "Admissions" },
              { icon: <Calendar className="h-6 w-6" />, text: "Events" },
              { icon: <Bell className="h-6 w-6" />, text: "Notices" },
              { icon: <Building2 className="h-6 w-6" />, text: "Facilities" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer border-0 shadow-md"
              >
                {item.icon}
                <span className="mt-2 font-medium">{item.text}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((event) => (
              <Card key={event} className="flex border-0 shadow-md">
                <div className="w-24 bg-green-600 text-white flex flex-col items-center justify-center p-4">
                  <span className="text-2xl font-bold">15</span>
                  <span className="text-sm">FEB</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Event Title Here</h3>
                  <p className="text-sm text-gray-600">
                    Brief description of the upcoming event...
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="p-6 border-0 shadow-md">
                <p className="text-gray-600 mb-4">
                  {`The school has provided an excellent learning environment for
                  my child. The teachers are dedicated and caring...`}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Parent Name</h4>
                    <p className="text-sm text-gray-600">
                      Parent of Class X Student
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School?</h2>
          <p className="mb-8">Start your journey towards excellence with us</p>
          <Button className="bg-white text-green-600 hover:bg-gray-100">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolHomepage;
