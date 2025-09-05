import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from 'lucide-react';
import { z } from 'zod';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { contactInfo, companyInfo } from '@/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[+]?[\d\s\-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  carInterest: z.string().optional(),
  testDriveDate: z.string().optional(),
  message: z.string().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    carInterest: '',
    testDriveDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Thank You!",
        description: "Our team will get in touch with you shortly.",
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        carInterest: '',
        testDriveDate: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-surface py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="heading-hero">Contact Us</h1>
              <p className="text-luxury mt-4 max-w-2xl mx-auto">
                Ready to find your dream car? Get in touch with our expert team today
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Car of Interest</label>
                      <Select onValueChange={(value) => handleInputChange('carInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a car type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="hatchback">Hatchback</SelectItem>
                          <SelectItem value="luxury">Luxury Cars</SelectItem>
                          <SelectItem value="electric">Electric Vehicles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Test Drive Date</label>
                      <Input
                        type="date"
                        value={formData.testDriveDate}
                        onChange={(e) => handleInputChange('testDriveDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements, budget, or any specific questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-secondary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Showroom Info */}
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Visit Our Showroom</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{companyInfo.name}</p>
                        <p className="text-muted-foreground">{contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-secondary shrink-0" />
                      <a href={`tel:${contactInfo.phone}`} className="text-foreground hover:text-secondary transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-secondary shrink-0" />
                      <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:text-secondary transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-secondary shrink-0" />
                      <div className="text-muted-foreground">
                        <p>Mon-Sat: {contactInfo.businessHours.weekdays}</p>
                        <p>Sunday: {contactInfo.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <Phone className="w-5 h-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Call Now</p>
                        <p className="text-sm text-muted-foreground">Speak with our sales team</p>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsappNumber}`}
                      className="flex items-center p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-success mr-3" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="card-premium">
                  <h3 className="text-xl font-bold text-primary mb-4">Find Us</h3>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Google Maps integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;