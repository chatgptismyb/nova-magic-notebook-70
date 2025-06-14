
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

export const TestimonialBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      story: "Magic Notebook saved my startup! I was drowning in scattered ideas and missed deadlines. Nova organized my chaos into actionable workflows. Now my team follows automated processes that used to take hours of manual coordination.",
      impact: "Increased productivity by 300%",
      avatar: "👩‍💻",
      profession: "Startup Founder"
    },
    {
      name: "Marcus Johnson", 
      location: "Austin, TX",
      story: "As a freelance consultant, I was constantly losing track of client projects and deadlines. Nova turned my messy voice memos into organized project timelines with automated reminders. I haven't missed a deadline since!",
      impact: "Zero missed deadlines in 6 months",
      avatar: "👨‍💼",
      profession: "Freelance Consultant"
    },
    {
      name: "Elena Rodriguez",
      location: "New York, NY", 
      story: "I'm a working mom juggling career and family. Magic Notebook became my life coordinator - from meal planning to school schedules to work projects. Nova anticipates what I need before I even think of it.",
      impact: "Gained 2 hours per day",
      avatar: "👩‍🎓",
      profession: "Marketing Director & Mom"
    },
    {
      name: "David Kim",
      location: "Seattle, WA",
      story: "My ADHD made it impossible to stay organized. Traditional tools felt overwhelming. Nova's gentle automation and smart parsing turned my scattered thoughts into a productivity system that actually works with my brain.",
      impact: "Finally found a system that works",
      avatar: "👨‍🎨",
      profession: "Creative Director"
    },
    {
      name: "Jennifer Walsh",
      location: "Boston, MA",
      story: "Running a remote team across time zones was chaos. Magic Notebook created automated workflows that keep everyone synced. Our team collaboration improved dramatically when we started sharing automation notes.",
      impact: "Team efficiency up 250%",
      avatar: "👩‍💼",
      profession: "Remote Team Lead"
    },
    {
      name: "Alex Thompson",
      location: "Denver, CO",
      story: "As a graduate student, I was overwhelmed with research, deadlines, and thesis writing. Nova transformed my research notes into organized outlines and automated my citation tracking. Defended my thesis 2 months early!",
      impact: "Finished thesis ahead of schedule",
      avatar: "👨‍🔬",
      profession: "PhD Student"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % testimonials.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-yellow-200 p-6 rounded-3xl border-4 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform duration-500 inline-block mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📖</span>
              <span className="text-amber-800 font-bold text-2xl">Magic Notebook Stories</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Real People, Real Magic
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover how Magic Notebook has transformed lives around the world
          </p>
        </div>

        {/* Interactive Book */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Book Container */}
          <div className="relative bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 rounded-3xl border-8 border-amber-400 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
            
            {/* Book Binding */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-500 to-yellow-600 border-r-4 border-amber-600"></div>
            
            {/* Page Content */}
            <div className="pl-16 pr-8 py-12">
              <div className="bg-yellow-50 rounded-2xl border-4 border-amber-300 p-8 min-h-[400px] relative">
                
                {/* Page Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{testimonials[currentPage].avatar}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-800">{testimonials[currentPage].name}</h3>
                      <div className="flex items-center gap-2 text-amber-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{testimonials[currentPage].location}</span>
                      </div>
                      <p className="text-amber-700 text-sm font-medium">{testimonials[currentPage].profession}</p>
                    </div>
                  </div>
                  
                  {/* 5-star rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Story Content */}
                <div className="space-y-6">
                  <blockquote className="text-lg text-amber-800 leading-relaxed italic border-l-4 border-amber-400 pl-6">
                    "{testimonials[currentPage].story}"
                  </blockquote>
                  
                  {/* Impact Highlight */}
                  <div className="bg-gradient-to-r from-amber-200 to-yellow-200 p-4 rounded-xl border-2 border-amber-400">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✨</span>
                      <div>
                        <h4 className="font-bold text-amber-800 text-sm">Life-Changing Impact:</h4>
                        <p className="text-amber-700 font-semibold">{testimonials[currentPage].impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Page decorations */}
                <div className="absolute top-4 right-4 text-amber-400 opacity-30">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="absolute bottom-4 left-4 text-amber-400 opacity-20">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="absolute bottom-6 right-8 flex items-center gap-4">
              
              {/* Page indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentPage 
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-amber-300 hover:bg-amber-400'
                    }`}
                  />
                ))}
              </div>
              
              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={prevPage}
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={nextPage}
                  className="w-10 h-10 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            {/* Page number */}
            <div className="absolute bottom-6 left-20 text-amber-600 text-sm font-medium">
              Page {currentPage + 1} of {testimonials.length}
            </div>
          </div>
          
          {/* Book shadow */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-300/30 rounded-3xl border-8 border-amber-300/50 -z-10"></div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-200 to-amber-200 p-8 rounded-3xl border-4 border-amber-400 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Ready to write your own success story?</h3>
            <p className="text-amber-700 mb-6">Join thousands of users who've transformed their lives with Magic Notebook</p>
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg">
              Start Your Magic Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
