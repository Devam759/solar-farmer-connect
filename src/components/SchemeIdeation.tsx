
import TimelineItem from './TimelineItem';

const SchemeIdeation = () => {
  const timelineItems = [
    {
      date: "2019",
      title: "Rajasthan Solar Energy Policy 2019",
      description: "The state launched a policy aiming to install 30,000 MW of solar power projects by 2024-25, promoting both grid-connected and off-grid applications."
    },
    {
      date: "2020",
      title: "Commissioning of Bhadla Solar Park",
      description: "Bhadla Solar Park, the world's largest with a capacity of 2,245 MW, was fully commissioned, significantly boosting Rajasthan's solar capacity."
    },
    {
      date: "2021",
      title: "Expansion of Rooftop Solar Initiatives",
      description: "The government promoted rooftop solar systems under net metering schemes, encouraging residential and commercial installations."
    },
    {
      date: "2023",
      title: "Integrated Clean Energy Policy 2024 Drafted",
      description: "A new policy was drafted targeting 125 GW of renewable energy by 2030, including 90 GW from solar power, emphasizing decentralized generation."
    },
    {
      date: "2024",
      title: "Promotion of Virtual and Group Net Metering",
      description: "The state introduced virtual and group net metering schemes to allow consumers without suitable rooftops to benefit from solar energy."
    },
    {
      date: "2025",
      title: "Invitation to Farmers under PM-KUSUM Scheme",
      description: "Rajasthan invited farmers to set up solar power plants on their land under the PM-KUSUM scheme, aiming to enhance farmer income and clean energy production."
    }
  ];
  
    
  const keyPrinciples = [
    {
      title: "Farmer-Centric Design",
      description: "Solutions developed based on real farmer needs and operational realities"
    },
    {
      title: "Economic Viability",
      description: "Focus on positive ROI for farmers within 3-5 years of implementation"
    },
    {
      title: "Technological Appropriateness",
      description: "Systems suited to local environmental conditions and farming methods"
    },
    {
      title: "Scalability",
      description: "Framework that allows gradual expansion from pilot to national implementation"
    },
    {
      title: "Sustainability",
      description: "Environmental and financial sustainability built into core program design"
    }
  ];

  return (
    <section id="scheme-ideation" className="section-spacing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          {/* <span className="inline-block py-1 px-3 rounded-full text-lg font-medium bg-primary/10 text-primary mb-4">
            Program Design
          </span> */}
          <h2 className="section-title">How the Scheme was designed?</h2>
          <p className="section-subtitle text-xl">
            Exploring the thoughtful process behind creating an effective, sustainable solar initiative for agriculture.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Development Timeline</h3>
              <div className="mt-8">
                {timelineItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    isLast={index === timelineItems.length - 1}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Guiding Principles</h3>
              <p className="text-lg text-muted-foreground mb-8">
                The development team adhered to these core principles throughout the design process to ensure program effectiveness.
              </p>

              <div className="space-y-6">
                {keyPrinciples.map((principle, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                        <span className="font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-xl mb-1">{principle.title}</h4>
                        <p className="text-lg text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                    {index < keyPrinciples.length - 1 && (
                      <div className="w-px h-6 bg-border ml-5 my-2"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sunlight-200 flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sunlight-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Continuous Feedback Loop</h4>
                    <p className="text-lg text-muted-foreground">
                      The scheme incorporates ongoing assessment and adaptation mechanisms based on real-world implementation results and farmer feedback.
                    </p>
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

export default SchemeIdeation;
