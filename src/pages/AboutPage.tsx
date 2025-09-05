import { Users, Award, Shield, Target, Heart, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years in automotive industry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Sales Director",
      experience: "12+ years in luxury car sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9ec5a5c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Amit Singh",
      role: "Service Manager",
      experience: "10+ years in automotive service",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Rohit Verma",
      car: "BMW X5",
      rating: 5,
      comment: "Exceptional service and transparent dealings. Found my dream car here!",
      location: "Gurgaon"
    },
    {
      name: "Sneha Gupta",
      car: "Mercedes C-Class",
      rating: 5,
      comment: "Professional team, excellent financing options, and smooth process throughout.",
      location: "Noida"
    },
    {
      name: "Vikash Agarwal",
      car: "Audi A4",
      rating: 5,
      comment: "Best dealership in Delhi NCR. Highly recommend for premium car purchases.",
      location: "Delhi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-surface py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-hero mb-6">Our Story</h1>
              <p className="text-luxury text-xl leading-relaxed">
                For over 5 years, Delhi NCR Cars has been the premier destination for 
                luxury and premium vehicles in the National Capital Region. We've built 
                our reputation on trust, quality, and exceptional customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-section mb-6">Our Mission</h2>
                <p className="text-luxury mb-8">
                  To make the dream of owning a premium car accessible to everyone in Delhi NCR 
                  through transparent pricing, certified quality, and unmatched customer service. 
                  We believe every customer deserves the best car buying experience.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-muted-foreground">Cars Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-muted-foreground">Premium Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">98%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-premium">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-secondary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the most trusted and preferred premium car dealership in North India, 
                        setting industry standards for quality and service.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card-premium">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Our Values</h3>
                      <p className="text-muted-foreground">
                        Integrity, transparency, and customer-first approach guide everything we do. 
                        We build lasting relationships, not just transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-section">Why Choose Delhi NCR Cars?</h2>
              <p className="text-luxury max-w-2xl mx-auto">
                We're not just another car dealership. We're your trusted partners in finding the perfect vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-luxury text-center">
                <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Certified Quality</h3>
                <p className="text-muted-foreground">
                  Every vehicle undergoes our rigorous 150-point inspection process to ensure 
                  the highest quality standards.
                </p>
              </div>
              
              <div className="card-luxury text-center">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Award-Winning Service</h3>
                <p className="text-muted-foreground">
                  Recognized by leading automotive associations for excellence in customer 
                  service and sales practices.
                </p>
              </div>
              
              <div className="card-luxury text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our experienced professionals provide personalized guidance throughout 
                  your car buying journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-section">Meet Our Leadership</h2>
              <p className="text-luxury max-w-2xl mx-auto">
                Our experienced team brings decades of automotive expertise and passion for customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="card-luxury text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-section">What Our Customers Say</h2>
              <p className="text-luxury max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our valued customers have to say about their experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.car} • {testimonial.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-section mb-6">Ready to Find Your Dream Car?</h2>
              <p className="text-luxury mb-8">
                Join thousands of satisfied customers who have found their perfect vehicle with us. 
                Experience the Delhi NCR Cars difference today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-secondary px-8 py-3">
                  Browse Our Inventory
                </Button>
                <Button className="btn-outline px-8 py-3">
                  Visit Our Showroom
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;