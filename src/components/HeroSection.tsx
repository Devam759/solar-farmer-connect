
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sunlight-50 via-background to-background opacity-80"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-28 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 -left-28 w-72 h-72 bg-sunlight-200/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Empowering Rural Energy Independence
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-balance">
              Transforming Agriculture with <span className="text-gradient">Solar Energy</span>
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground max-w-lg">
              Government initiatives bringing sustainable energy solutions to farmers across the nation.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#problem-solution" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Explore Schemes
              </a>
              <a 
                href="#impact" 
                className="inline-flex items-center gap-2 bg-transparent border border-primary/20 text-foreground px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/5"
              >
                View Impact
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="glass-card overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  src="public\media\solar_group.webp" 
                  alt="Solar panels in a farm field" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Clean Energy</p>
                    <p className="text-xs text-muted-foreground">100% Renewable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#problem-solution" aria-label="Scroll down">
            <ArrowDown className="text-primary/80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
