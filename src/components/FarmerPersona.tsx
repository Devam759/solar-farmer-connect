const FarmerPersona = () => {
  const personas = [
    {
      name: "Kishanchand Jat",
      age: "Not specified",
      location: "Barmer district, Rajasthan",
      challenge: "Dependence on electricity and high irrigation costs",
      goal: "To reduce farming costs and improve productivity by using a solar-powered pump",
      image: "public/media/kishanchan_ jat.webp",
      referenceLink: "https://www.business-standard.com/india-news/solar-pump-scheme-helps-29-000-rajasthan-farmers-in-a-year-125010200402_1.html"
    },
    {
      name: "Dr. Amit Yadav",
      age: "35",
      location: "Bhaloji village near Kotputli town, Jaipur",
      challenge: "The farmland was barren and it had lots of ground water.",
      goal: "To turn barren farmland into a profitable solar power source",
      image: "public/media/dr_amit.webp",
      referenceLink: "https://www.newindianexpress.com/thesundaystandard/2021/Sep/12/farmer-family-sets-up-first-farm-based-solar-plant-in-rajasthans-bhaloji-village-2357441.html"
    },
    // {
    //   name: "Sukhwinder Singh",
    //   age: "52",
    //   location: "Punjab",
    //   challenge: "Rising electricity costs affecting profitability",
    //   goal: "Adopt sustainable practices while improving farm income",
    //   image: "https://images.unsplash.com/photo-1588935365857-311043871f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    // }
  ];

  return (
    <section id="farmer-persona" className="section-spacing bg-solar-50 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            User Persona
          </span>
          <h2 className="section-title">Farmers</h2>
          <p className="section-subtitle">
            Understanding the real people who benefit from solar agriculture programs and their unique challenges.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden animate-fade-in hover-scale max-w-md mx-auto"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-85 overflow-hidden">
                <img 
                  src={persona.image} 
                  alt={persona.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{persona.name}</h3>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                  <span>{persona.age} years</span>
                  <span>•</span>
                  <span>{persona.location}</span>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70">Challenge:</h4>
                    <p className="mt-1">{persona.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70">Goal:</h4>
                    <p className="mt-1">{persona.goal}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Solar Scheme Beneficiary</span>
                    </div>
                    <a 
                      href={persona.referenceLink} 
                      className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 glass-card p-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Characteristics</h3>
              <p className="text-muted-foreground mb-4">
                Despite varying demographics, these farmers share several key traits that make them ideal candidates for solar initiatives:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Own farmland of 2+ acres</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>High energy reliance for operations</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Existing electricity/diesel expenditure</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Willingness to adopt new technology</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Long-term agricultural commitments</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Documented agricultural income</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FarmerPersona;
