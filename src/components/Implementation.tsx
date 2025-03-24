
const Implementation = () => {
  const implementationSteps = [
    {
      number: "01",
      title: "Application & Assessment",
      description: "Farmers submit applications through local agricultural offices or online portals. Officials assess eligibility based on land ownership, energy needs, and financial standing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    // {
    //   number: "02",
    //   title: "System Design & Quotation",
    //   description: "Approved applicants receive site visits from certified solar vendors who design customized systems based on energy requirements, land availability, and budget constraints.",
    //   image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    // },
    {
      number: "02",
      title: "Financial Arrangement",
      description: "Farmers choose between upfront subsidy models or financing options with partner banks. Documentation for subsidies and loans is processed through a single-window system.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
    },
    {
      number: "03",
      title: "Installation & Commissioning",
      description: "Approved vendors install systems according to standardized quality guidelines. Officials conduct inspections to ensure compliance before commissioning.",
      image: "public/media/installation_commissioning.webp"
    },
    {
      number: "04",
      title: "Training & Handover",
      description: "Farmers receive comprehensive training on system operation, basic maintenance, and troubleshooting. Documentation and warranty information is provided.",
      image: "public/media/Solar_Practical.webp"
    },
    {
      number: "05",
      title: "Monitoring & Support",
      description: "Ongoing performance monitoring through smart meters and periodic maintenance visits ensure optimal system operation and longevity.",
      image: "public/media/Smart_Solar_Monitoring_System.webp"
    },
  ];

  return (
    <section id="implementation" className="section-spacing bg-solar-50 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            Implementation Process
          </span>
          <h2 className="section-title">Prototyping & Implementation</h2>
          <p className="section-subtitle">
            From concept to reality: How the solar scheme is implemented on farms across the country.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8">
          {implementationSteps.map((step, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden animate-fade-in" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-60 md:h-auto overflow-hidden">
                  <img 
                    src={step.image}
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12- rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Quality Assurance Measures</h3>
              <p className="text-muted-foreground mb-6">
                The implementation includes robust quality control mechanisms to ensure long-term performance:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Certified equipment with minimum 5-year warranties</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Multi-stage inspection protocol during installation</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Performance monitoring for subsidy release</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Third-party audits of installed systems</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Challenges & Adaptations</h3>
              <p className="text-muted-foreground mb-6">
                The program has evolved to address implementation challenges:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span><strong>Documentation complexity</strong> - Simplified application process with assistance from local agricultural extension officers</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span><strong>Technical expertise gaps</strong> - Expanded training programs and establishment of local support centers</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span><strong>Geographical variations</strong> - Regional adaptations to system designs based on climate and agricultural patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
