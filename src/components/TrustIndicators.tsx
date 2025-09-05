import { Shield, Users, Award, Wrench, CreditCard, MapPin } from 'lucide-react';

const TrustIndicators = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified Pre-Owned",
      description: "Every car passes a rigorous 150-point inspection for quality assurance.",
      color: "text-success"
    },
    {
      icon: CreditCard,
      title: "Easy Financing",
      description: "Flexible loan options and insurance assistance with leading banks.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "2,000+ Happy Customers",
      description: "Trusted by the Delhi-NCR community for transparent service.",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Free Service Support",
      description: "Complimentary maintenance and 24/7 roadside assistance.",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning dealership with multiple certifications.",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located showroom with premium facilities.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section">Why Choose Delhi NCR Cars?</h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Experience premium service with complete transparency and unmatched quality standards
            that have made us the most trusted name in luxury car sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-premium group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br from-background to-muted ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Cars Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Premium Brands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">5</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;