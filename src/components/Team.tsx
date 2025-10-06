import { Card } from "@/components/ui/card";

const Team = () => {
  const team = [
    { name: "Rajesh Kumar", role: "CEO & Founder", color: "bg-navy" },
    { name: "Priya Sharma", role: "Civil Engineer", color: "bg-primary" },
    { name: "Arun Singh", role: "Interior Designer", color: "bg-navy" },
    { name: "Meera Patel", role: "Architect", color: "bg-primary" },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Meet Our Engineer</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-secondary/10 flex items-center justify-center text-6xl font-bold text-secondary/30">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className={`p-4 text-center ${member.color} text-white`}>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm opacity-90">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
