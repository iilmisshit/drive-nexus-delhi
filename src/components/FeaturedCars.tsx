import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Eye, MessageCircle, Fuel, Gauge, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredCars = [
    {
      id: 1,
      name: "BMW 3 Series",
      model: "320d Sport Line",
      year: 2022,
      price: "₹28,50,000",
      originalPrice: "₹32,00,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=center",
      mileage: "15,000 km",
      fuelType: "Diesel",
      transmission: "Automatic",
      features: ["Sunroof", "Leather Seats", "Navigation"],
      badge: "CERTIFIED"
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      model: "C200 Progressive",
      year: 2023,
      price: "₹42,75,000",
      originalPrice: "₹45,00,000",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=center",
      mileage: "8,500 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      features: ["AMG Package", "Premium Sound", "Massage Seats"],
      badge: "PREMIUM"
    },
    {
      id: 3,
      name: "Audi A4",
      model: "35 TFSI Premium Plus",
      year: 2021,
      price: "₹31,25,000",
      originalPrice: "₹35,00,000",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center",
      mileage: "22,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      features: ["Virtual Cockpit", "Matrix LED", "Bang & Olufsen"],
      badge: "BESTSELLER"
    },
    {
      id: 4,
      name: "Jaguar XE",
      model: "Pure Petrol",
      year: 2022,
      price: "₹35,50,000",
      originalPrice: "₹38,00,000",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&crop=center",
      mileage: "12,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      features: ["Meridian Audio", "Panoramic Roof", "Adaptive Cruise"],
      badge: "LUXURY"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  const visibleCars = () => {
    const cars = [];
    for (let i = 0; i < 3; i++) {
      cars.push(featuredCars[(currentIndex + i) % featuredCars.length]);
    }
    return cars;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-section">Fresh Arrivals</h2>
            <p className="text-luxury">
              Discover our latest collection of premium certified vehicles
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCars().map((car, index) => (
            <div
              key={`${car.id}-${currentIndex}`}
              className="card-luxury group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Car Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={car.image}
                  alt={`${car.name} ${car.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-secondary text-secondary-foreground font-semibold">
                    {car.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 space-y-2">
                  <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <span className="line-through text-gray-300 text-xs mr-2">
                      {car.originalPrice}
                    </span>
                    <span className="font-bold">{car.price}</span>
                  </div>
                </div>
              </div>

              {/* Car Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground">{car.model}</p>
                </div>

                {/* Key Specs */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Gauge className="w-4 h-4" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="w-4 h-4" />
                    <span>{car.fuelType}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <Button className="flex-1 btn-primary">
                    View Details
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-outline px-8 py-3">
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;