import { useState } from 'react';
import { Search, Filter, Grid, List, Heart, MessageCircle, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock car data - would be replaced with real data
  const cars = [
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
      brand: "BMW",
      type: "Sedan",
      badge: "CERTIFIED"
    },
    // ... more cars would be added here
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-surface py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="heading-hero">Our Premium Collection</h1>
              <p className="text-luxury mt-4 max-w-2xl mx-auto">
                Discover certified pre-owned and new vehicles from leading luxury brands
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by brand, model, or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>

                {/* View Toggle */}
                <div className="flex border border-border rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cars Grid/List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">Showing 24 of 156 cars</p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {/* Placeholder message for now */}
              <div className="col-span-full text-center py-20">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-primary mb-2">Cars Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  Our premium car inventory is being prepared. Please check back soon!
                </p>
                <Button className="btn-secondary">
                  Get Notified When Available
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

export default CarsPage;