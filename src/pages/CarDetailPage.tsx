import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Phone, MessageCircle, Calendar, Heart, Share2, Fuel, Gauge, Settings, Users, Shield, Award, Cog } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cars } from '@/data/cars';
import { contactInfo } from '@/config';

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const car = cars.find(c => c.id === id);
  
  if (!car) {
    return <Navigate to="/404" replace />;
  }

  const relatedCars = cars.filter(c => 
    c.id !== car.id && (c.brand === car.brand || Math.abs(c.price - car.price) <= 500000)
  ).slice(0, 4);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
                    aria-label="Share this car"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              {car.images.length > 1 && (
                <div className="flex space-x-2">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-secondary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-secondary text-secondary-foreground">CERTIFIED</Badge>
                  <Badge variant="outline">{car.type}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-primary mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-muted-foreground text-lg">{car.year} • {car.mileage}</p>
              </div>

              {/* Price */}
              <div className="card-premium">
                <div className="text-3xl font-bold text-primary mb-2">
                  ₹{car.price.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-muted-foreground">
                  EMI starts from ₹{Math.round(car.price * 0.01).toLocaleString('en-IN')}/month*{' '}
                  <button className="text-secondary hover:underline">Calculate EMI</button>
                </div>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <Gauge className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Mileage</div>
                    <div className="font-semibold">{car.mileage}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <Fuel className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Fuel Type</div>
                    <div className="font-semibold">{car.fuelType}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <Cog className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Transmission</div>
                    <div className="font-semibold">{car.transmission}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Year</div>
                    <div className="font-semibold">{car.year}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full btn-secondary text-lg py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Test Drive
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex-1 btn-outline flex items-center justify-center py-3"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsappNumber}`}
                    className="flex-1 btn-secondary flex items-center justify-center py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Assurance Badges */}
              <div className="flex items-center justify-around p-4 rounded-lg bg-gradient-surface">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-success mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">150-Point Check</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-secondary mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">Certified Quality</div>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-accent mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">Warranty Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">About This Car</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {car.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Brand</div>
                      <div className="font-semibold">{car.brand}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Type</div>
                      <div className="font-semibold">{car.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Engine</div>
                      <div className="font-semibold">{car.engineCC ? `${car.engineCC}cc` : 'Electric'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Fuel</div>
                      <div className="font-semibold">{car.fuelType}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-8">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Features & Equipment</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-8">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(car.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="financing" className="mt-8">
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Financing Options</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-surface">
                      <h4 className="font-semibold mb-2">EMI Calculator</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Calculate your monthly EMI with flexible down payment options
                      </p>
                      <Button className="btn-secondary">
                        Calculate EMI
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary">₹{Math.round(car.price * 0.01).toLocaleString('en-IN')}</div>
                        <div className="text-sm text-muted-foreground">Starting EMI/month</div>
                      </div>
                      <div className="p-4 rounded-lg border border-border">
                        <div className="text-2xl font-bold text-secondary">8.5%</div>
                        <div className="text-sm text-muted-foreground">Interest rate from</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="heading-section mb-12">You may also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedCars.map((relatedCar) => (
                  <Link 
                    key={relatedCar.id} 
                    to={`/car/${relatedCar.id}`}
                    className="card-luxury group hover:shadow-luxury transition-all duration-300"
                  >
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={relatedCar.images[0]} 
                        alt={`${relatedCar.brand} ${relatedCar.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{relatedCar.brand} {relatedCar.model}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{relatedCar.year} • {relatedCar.mileage}</p>
                    <p className="text-secondary font-bold">₹{relatedCar.price.toLocaleString('en-IN')}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailPage;