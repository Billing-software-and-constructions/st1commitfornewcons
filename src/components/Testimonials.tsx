import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Suresh Menon",
      text: "New Star Construction exceeded our expectations in every way. Their attention to detail and commitment to quality is outstanding. Our dream home is now a reality thanks to their professional team.",
      role: "Homeowner, Pondicherry"
    },
    {
      name: "Lakshmi Krishnan",
      text: "We hired them for our commercial building project and were impressed by their project management skills. They completed the work on time and within budget. Highly recommended!",
      role: "Business Owner"
    },
    {
      name: "Vijay Ramesh",
      text: "Professional, reliable, and skilled - that's how I would describe New Star Construction. The renovation of our property was handled with utmost care and precision.",
      role: "Property Developer"
    },
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 p-8 text-white shadow-elegant hover:bg-white/15 transition-all duration-300">
              <Quote className="w-12 h-12 text-primary mb-4" />
              <p className="mb-6 leading-relaxed italic">{testimonial.text}</p>
              <div>
                <p className="font-bold text-lg text-primary">{testimonial.name}</p>
                <p className="text-sm text-white/80">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
