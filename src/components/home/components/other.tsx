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
import PrincipalMessage from "./principalMessage";

const SchoolHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to Motion Educare Public School
              </h2>
              <p className="text-gray-600 mb-6">
                {`The function of education is to teach one to think intensively
                and critically. Intelligence plus character - that is the goal
                of true education.`}
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Discover More
              </Button>
            </div>
            <PrincipalMessage />
            {/* <div>
              <img
                src="/api/placeholder/600/400"
                alt="School Building"
                className="w-full h-auto object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

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

      {/* News & Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-0 shadow-md">
                <img
                  src="/api/placeholder/400/250"
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold mb-2">School Achievement Title</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Brief description of the news or update goes here...
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Students" },
              { number: "100+", label: "Teachers" },
              { number: "50+", label: "Classrooms" },
              { number: "95%", label: "Success Rate" },
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
