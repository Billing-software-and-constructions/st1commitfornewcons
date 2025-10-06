import { Wrench, Users, Building2, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Wrench, number: "109", label: "EXPERT WORKERS" },
    { icon: Users, number: "485", label: "HAPPY CLIENTS" },
    { icon: Building2, number: "789", label: "COMPLETED PROJECTS" },
    { icon: Award, number: "890", label: "RUNNING PROJECTS" },
  ];

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-4 rounded-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{stat.number}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
