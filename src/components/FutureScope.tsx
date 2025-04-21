const FutureScope = () => {
  const futureInnovations = [
    {
      title: "AI-Powered Monitoring Systems",
      description: "Advanced analytics to optimize energy usage and predict maintenance needs before failures occur.",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Integrated Storage Solutions",
      description: "Affordable battery technologies to store excess energy for use during nighttime operations.",
      image: "public/media/integrated solar battery.webp",
      color: "bg-sunlight-200/20 text-sunlight-800"
    },
    {
      title: "Solar-Powered Agricultural Processing",
      description: "Expansion of solar applications to post-harvest processing and value addition activities.",
      image: "public/media/Slide8.webp",
      color: "bg-solar-200/40 text-solar-700"
    },
    {
      title: "Community Solar Microgrids",
      description: "Shared solar infrastructure allowing smaller farmers to pool resources and access benefits.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      color: "bg-earth-200/40 text-earth-700"
    }
  ];

  const policyDevelopments = [
    {
      title: "Enhanced Financing Models",
      description: "New public-private partnership approaches to further reduce upfront costs for farmers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      )
    },
    {
      title: "Crop-Specific Solar Solutions",
      description: "Tailored programs for different agricultural sectors with unique energy requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 0 5.196 3 3 3 0 0 0-5.196-3Zm1.536-.887a2.165 2.165 0 0 0-1.083-1.838c-.005-.352-.053-.695-.14-1.025m3.384 2.863-2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
        </svg>
      )
    },
    {
      title: "Integration with Smart Farming",
      description: "Connecting solar infrastructure with IoT and precision agriculture technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.204-.107-.397.165-.71.505-.78.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.78-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    },
    {
      title: "Carbon Credit Integration",
      description: "Mechanisms for farmers to monetize carbon reduction through international markets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    }
  ];

  return (
    <section id="future-scope" className="section-spacing bg-solar-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          {/* <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Looking Ahead
          </span> */}
          <h2 className="text-4xl font-bold mb-4">Future Scope & Innovations</h2>
          <p className="text-lg text-muted-foreground">
            Exploring upcoming advancements and expansions in agricultural solar energy programs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureInnovations.map((innovation, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={innovation.image} 
                  alt={innovation.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${innovation.color}`}>
                  Coming Soon
                </div>
                <h3 className="text-2xl font-semibold mb-2">{innovation.title}</h3>
                <p className="text-base text-muted-foreground">{innovation.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Policy Developments</h3>
              <p className="text-lg text-muted-foreground mb-8">
                The government is working on several policy initiatives to enhance the solar agriculture ecosystem:
              </p>

              <div className="space-y-6">
                {policyDevelopments.map((policy, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                      {policy.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-xl mb-1">{policy.title}</h4>
                      <p className="text-base text-muted-foreground">{policy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Expansion Targets</h3>
              
              <div className="space-y-8">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/10 text-primary">
                        Geographical Coverage
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-primary">
                        70%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-3 mb-4 overflow-hidden rounded bg-primary/10">
                    <div style={{ width: "70%" }} className="flex flex-col justify-center rounded bg-primary shadow-none animate-pulse-slow"></div>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Expand from current 320 districts to 500+ districts by 2025
                  </p>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/10 text-primary">
                        Beneficiary Target
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-primary">
                        14%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-3 mb-4 overflow-hidden rounded bg-primary/10">
                    <div style={{ width: "14%" }} className="flex flex-col justify-center rounded bg-primary shadow-none animate-pulse-slow"></div>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Reach 1 million farmer installations by 2026 (currently at 130,000+)
                  </p>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/10 text-primary">
                        Capacity Addition
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-primary">
                        94%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-3 mb-4 overflow-hidden rounded bg-primary/10">
                    <div style={{ width: "94%" }} className="flex flex-col justify-center rounded bg-primary shadow-none animate-pulse-slow"></div>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Increase installed capacity to 25 GW by 2025 (currently at 23 GW)
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/50 rounded-xl">
                <h4 className="font-medium text-xl mb-3">Research Priorities</h4>
                <p className="text-base text-muted-foreground mb-4">
                  The government has allocated ₹450 crore for research in agricultural solar technologies, focusing on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-base">Improved efficiency solar panels for varied climates</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-base">Cost-effective storage technologies for 24/7 operations</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-base">Dual-use technologies for agrivoltaics applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
