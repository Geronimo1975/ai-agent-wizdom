import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Setup Your Project",
    description: "Initialize your AI agent with our simple setup wizard and API keys",
  },
  {
    title: "Configure AI Models",
    description: "Choose and customize AI models that fit your specific use case",
  },
  {
    title: "Deploy & Scale",
    description: "Deploy your agent to production and scale as your needs grow",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start mb-12 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};