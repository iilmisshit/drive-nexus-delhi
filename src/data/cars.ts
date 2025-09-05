export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  type: 'Sedan' | 'SUV' | 'Hatchback' | 'Luxury';
  engineCC?: number;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: 4200000,
    mileage: "15.2 kmpl",
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "Luxury",
    engineCC: 1998,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop"
    ],
    description: "Experience luxury and performance with the BMW 3 Series. This premium sedan offers exceptional driving dynamics and cutting-edge technology.",
    features: ["Premium Sound System", "Sunroof", "Leather Seats", "Navigation System", "Parking Sensors"],
    specifications: {
      "Engine": "2.0L Turbo Petrol",
      "Power": "255 HP",
      "Torque": "400 Nm",
      "Top Speed": "250 kmph",
      "0-100 kmph": "6.2 seconds"
    }
  },
  {
    id: "2",
    brand: "Audi",
    model: "Q5",
    year: 2021,
    price: 5800000,
    mileage: "13.8 kmpl",
    fuelType: "Diesel",
    transmission: "Automatic",
    type: "SUV",
    engineCC: 1968,
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
    ],
    description: "The Audi Q5 combines versatility with luxury. Perfect for families who demand both comfort and capability.",
    features: ["Quattro AWD", "Virtual Cockpit", "Ambient Lighting", "Panoramic Sunroof", "Bang & Olufsen Audio"],
    specifications: {
      "Engine": "2.0L TDI Diesel",
      "Power": "190 HP",
      "Torque": "400 Nm",
      "Ground Clearance": "200mm",
      "Boot Space": "550L"
    }
  },
  {
    id: "3",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 4800000,
    mileage: "16.1 kmpl",
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "Luxury",
    engineCC: 1496,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
    ],
    description: "Elegant design meets advanced technology in the Mercedes-Benz C-Class. A perfect blend of comfort and performance.",
    features: ["MBUX Infotainment", "Air Suspension", "Burmester Audio", "Wireless Charging", "Active Parking Assist"],
    specifications: {
      "Engine": "1.5L Turbo Petrol",
      "Power": "204 HP",
      "Torque": "300 Nm",
      "Fuel Tank": "66L",
      "Seating": "5 Persons"
    }
  },
  {
    id: "4",
    brand: "Tesla",
    model: "Model Y",
    year: 2023,
    price: 7200000,
    mileage: "507 km range",
    fuelType: "Electric",
    transmission: "Automatic",
    type: "SUV",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
    ],
    description: "Step into the future with Tesla Model Y. All-electric SUV with cutting-edge technology and sustainable luxury.",
    features: ["Autopilot", "Over-the-Air Updates", "Glass Roof", "Premium Audio", "Supercharging Network"],
    specifications: {
      "Motor": "Dual Motor AWD",
      "Power": "384 HP",
      "Range": "507 km",
      "Charging": "0-80% in 27 min",
      "Top Speed": "217 kmph"
    }
  },
  {
    id: "5",
    brand: "Toyota",
    model: "Camry Hybrid",
    year: 2021,
    price: 4100000,
    mileage: "23.1 kmpl",
    fuelType: "Hybrid",
    transmission: "Automatic",
    type: "Sedan",
    engineCC: 2487,
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    ],
    description: "The Toyota Camry Hybrid offers exceptional fuel efficiency without compromising on performance or luxury.",
    features: ["Hybrid Technology", "JBL Audio", "Wireless Charger", "Heads-up Display", "Toyota Safety Sense"],
    specifications: {
      "Engine": "2.5L Hybrid",
      "Power": "218 HP",
      "Torque": "221 Nm",
      "Acceleration": "8.3 seconds",
      "Emissions": "Ultra Low"
    }
  },
  {
    id: "6",
    brand: "Honda",
    model: "CR-V",
    year: 2022,
    price: 3200000,
    mileage: "14.4 kmpl",
    fuelType: "Petrol",
    transmission: "Automatic",
    type: "SUV",
    engineCC: 1498,
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop"
    ],
    description: "Honda CR-V delivers reliability and comfort for your everyday adventures. Spacious, efficient, and well-equipped.",
    features: ["Honda SENSING", "Panoramic Sunroof", "Remote Engine Start", "Hands-free Tailgate", "7 Seats"],
    specifications: {
      "Engine": "1.5L Turbo VTEC",
      "Power": "193 HP", 
      "Torque": "243 Nm",
      "Ground Clearance": "198mm",
      "Seating": "7 Persons"
    }
  }
];