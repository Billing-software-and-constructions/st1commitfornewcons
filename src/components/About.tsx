import { Button } from "@/components/ui/button";
import experienceImage from "@/assets/experience.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={experienceImage} 
              alt="New Star Construction - 25 Years of Excellence in Building Construction and Renovation in Pondicherry" 
              className="rounded-lg shadow-card w-full"
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="text-primary font-semibold mb-2 tracking-wide">WELCOME TO</p>
            <h2 className="text-4xl font-bold mb-6 text-secondary">25 Years Experience</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              New Star Construction brings over two decades of excellence in building construction and renovation services. Based in Pondicherry, we have successfully completed numerous projects across residential, commercial, and industrial sectors.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our commitment to quality, timely delivery, and customer satisfaction has made us one of the most trusted construction companies in the region. We combine traditional craftsmanship with modern construction techniques to deliver exceptional results.
            </p>
            <Button size="lg" aria-label="Learn more about New Star Construction">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
