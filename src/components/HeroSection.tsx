import { ArrowDown, Sun, Leaf, Zap, Users, Award, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-solar-900/5 via-background to-background opacity-90"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-28 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 -left-28 w-72 h-72 bg-solar-200/10 rounded-full filter blur-3xl"></div>
        {/* Add subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
          <div className="h-7"></div>

            {/* Government Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Official Government Scheme</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-balance">
              Solar Energy for <span className="text-gradient">Agricultural Prosperity</span>
            </h1>
            
            {/* Subheading */}
            <p className="mt-6 text-xl text-muted-foreground max-w-lg">
              A flagship initiative by the Government of Rajasthan to transform farming through solar-powered solutions, ensuring sustainable growth and energy independence.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                <span>Up to 60% Subsidy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Quick Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#schemes" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Apply for Scheme
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="#implementation" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                Scheme Guidelines
              </a>
            </div>

            {/* Key Features */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Solar Water Pumps</h3>
                  <p className="text-sm text-muted-foreground">Subsidy on solar pumps for irrigation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Green Farming</h3>
                  <p className="text-sm text-muted-foreground">Sustainable agricultural practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Grid Connection</h3>
                  <p className="text-sm text-muted-foreground">Sell excess power to grid</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Farmer Support</h3>
                  <p className="text-sm text-muted-foreground">Technical & financial guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats and Image */}
          <div className="w-full lg:w-1/2 -mt-40">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="public/media/solar_group.webp" 
                  alt="Farmer with solar installation" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Farmers Benefitted</p>
                    <h3 className="text-2xl font-bold text-primary">250,000+</h3>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Installed Capacity</p>
                    <h3 className="text-2xl font-bold text-primary">1.5 GW</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
