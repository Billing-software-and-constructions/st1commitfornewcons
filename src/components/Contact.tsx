import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">Have a project in mind? Let's discuss how we can help</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <Input id="name" name="name" placeholder="Your Name" className="h-12" aria-label="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <Input id="email" name="email" type="email" placeholder="Your Email" className="h-12" aria-label="Your Email" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <Input id="subject" name="subject" placeholder="Subject" className="h-12" aria-label="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <Textarea id="message" name="message" placeholder="Your Message" rows={6} aria-label="Your Message" />
              </div>
              <Button size="lg" className="w-full" type="submit">Send Message</Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">123 Construction Lane<br />Pondicherry, India 605001</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Call Us</h4>
                  <p className="text-muted-foreground">+91 413 234 5678<br />+91 413 234 5679</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Email Us</h4>
                  <p className="text-muted-foreground">info@newstarconstruction.com<br />projects@newstarconstruction.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
