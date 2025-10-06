import { Card } from "@/components/ui/card";
import buildingImage from "@/assets/service-building-new.jpg";
import renovationImage from "@/assets/service-renovation-new.jpg";
import designImage from "@/assets/service-design-new.jpg";
import interiorImage from "@/assets/service-interior-new.jpg";
import fixingImage from "@/assets/service-fixing.jpg";
import paintingImage from "@/assets/service-painting-new.jpg";
const Services = () => {
  const services = [{
    title: "Building Construction",
    image: buildingImage,
    description: "Complete construction solutions from foundation to finishing"
  }, {
    title: "House Renovation",
    image: renovationImage,
    description: "Transform your existing space with modern renovations"
  }, {
    title: "Architecture Design",
    image: designImage,
    description: "Innovative architectural designs tailored to your needs"
  }, {
    title: "Interior Design",
    image: interiorImage,
    description: "Beautiful interior spaces that reflect your style"
  }, {
    title: "Fixing & Support",
    image: fixingImage,
    description: "Professional repair and maintenance services"
  }, {
    title: "Painting",
    image: paintingImage,
    description: "Expert painting services for residential and commercial"
  }];
  return <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">We Provide Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="overflow-hidden group cursor-pointer shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} services by New Star Construction in Pondicherry - ${service.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                  <a 
                    href="https://www.justdial.com/jdmart/Pondicherry/New-Star-Construction-Annamalai-Travels-Pondicherry-Ho/0413PX413-X413-110110104451-J1G1_BZDET/catalogue/services#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-primary text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
                    aria-label={`Learn more about ${service.title} services`}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;