import { Bot, Code, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Advanced AI Integration",
    description: "Seamlessly integrate with leading AI models and customize them for your needs",
  },
  {
    icon: Code,
    title: "Developer-First",
    description: "Built with developers in mind, featuring robust APIs and comprehensive documentation",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and efficiency, with real-time processing capabilities",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance features",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features for AI Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};