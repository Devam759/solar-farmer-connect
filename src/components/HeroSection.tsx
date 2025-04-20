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

      <div className="container-custom pt-36">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="h-2"></div>

            {/* Government Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-base font-semibold">Official Government Scheme</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tighter tracking-tight text-balance mb-4">
              Solar Energy for <span className="text-gradient">Agricultural Prosperity</span>
            </h1>
            
            {/* Subheading */}
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl">
              A flagship initiative by the Government of Rajasthan to transform farming through solar-powered solutions, ensuring sustainable growth and energy independence.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-lg font-medium text-foreground/80">
                <Award className="w-6 h-6 text-primary" />
                <span>Up to 60% Subsidy</span>
              </div>
              <div className="flex items-center gap-3 text-lg font-medium text-foreground/80">
                <Clock className="w-6 h-6 text-primary" />
                <span>Quick Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#schemes" 
                className="btn-primary text-lg"
              >
                Apply for Scheme
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#implementation" 
                className="btn-secondary text-lg"
              >
                Scheme Guidelines
              </a>
            </div>

            {/* Key Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="p-2 rounded-lg bg-primary/15">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Solar Water Pumps</h3>
                  <p className="text-base text-foreground/80">Subsidy on solar pumps for irrigation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="p-2 rounded-lg bg-primary/15">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Green Farming</h3>
                  <p className="text-base text-foreground/80">Sustainable agricultural practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="p-2 rounded-lg bg-primary/15">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Grid Connection</h3>
                  <p className="text-base text-foreground/80">Sell excess power to grid</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="p-2 rounded-lg bg-primary/15">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Farmer Support</h3>
                  <p className="text-base text-foreground/80">Technical & financial guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats and Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <img 
                  src="/media/solar_group.webp" 
                  alt="Farmer with solar installation" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground/80 mb-1">Farmers Benefitted</p>
                    <h3 className="text-2xl font-bold text-primary">130,000+</h3>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground/80 mb-1">Installed Capacity</p>
                    <h3 className="text-2xl font-bold text-primary">23 GW</h3>
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
