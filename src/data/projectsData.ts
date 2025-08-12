export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  duration: string;
  budget: string;
  status: string;
  image: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: '1',
    slug: 'luxury-residential-complex',
    title: 'Luxury Residential Complex',
    subtitle: 'Modern living spaces with premium amenities and sustainable design principles. Comprehensive fire safety implementation for 500 premium residential units.',
    client: 'Premium Developers Ltd',
    location: 'Downtown District',
    duration: '24 months',
    budget: '$50M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center',
    description: `<p>This luxury residential complex represents the pinnacle of modern urban living, featuring state-of-the-art amenities and sustainable design principles. The project encompasses multiple towers with a total of 500 premium units, each meticulously designed to provide comfort, luxury, and functionality.</p>

<p>The development includes extensive green spaces, recreational facilities, and smart home technologies integrated throughout. Our team delivered this project on time and within budget, setting new standards for residential construction in the region.</p>

<h3>Key Features</h3>
<ul>
<li>500 premium residential units across 3 towers</li>
<li>Rooftop gardens and recreational facilities</li>
<li>Smart home automation systems</li>
<li>Energy-efficient design with LEED certification</li>
<li>Underground parking for 800 vehicles</li>
<li>24/7 concierge and security services</li>
</ul>`,
    challenges: [
      'Complex foundation work in urban environment',
      'Coordination of multiple building systems',
      'Tight timeline with seasonal constraints',
      'Integration of smart home technologies',
      'Sustainable construction practices'
    ],
    solutions: [
      'Advanced project management methodologies',
      'Prefabricated construction elements',
      'Parallel work streams optimization',
      'Expert technology integration team',
      'Green building certification compliance'
    ],
    outcomes: [
      'Project completed 2 months ahead of schedule',
      '100% unit pre-sales achieved',
      'LEED Gold certification obtained',
      'Zero safety incidents during construction',
      'Client satisfaction rating of 98%'
    ]
  },
  {
    id: '2',
    slug: 'commercial-office-tower',
    title: 'Commercial Office Tower',
    subtitle: 'Grade-A office space with cutting-edge technology and advanced building management systems. 40-story landmark building promoting productivity.',
    client: 'Corporate Solutions Inc',
    location: 'Business District',
    duration: '18 months',
    budget: '$35M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
    description: `<p>A landmark 40-story commercial office tower designed to attract premium corporate tenants. The building features flexible floor plates, advanced building management systems, and exceptional energy efficiency standards.</p>

<p>The project showcases innovative construction techniques and sustainable materials, creating a workspace that promotes productivity and well-being. Our comprehensive approach included everything from initial design consultation to final fit-out coordination.</p>

<h3>Project Highlights</h3>
<ul>
<li>40 floors of premium office space</li>
<li>Total leasable area of 1.2 million sq ft</li>
<li>Advanced HVAC and building automation</li>
<li>High-speed elevator systems</li>
<li>Executive conference and meeting facilities</li>
<li>On-site parking and retail spaces</li>
</ul>`,
    challenges: [
      'High-rise construction in busy commercial area',
      'Complex mechanical and electrical systems',
      'Stringent building code requirements',
      'Coordination with multiple stakeholders',
      'Weather-related construction delays'
    ],
    solutions: [
      'Detailed traffic management plan',
      'Expert MEP engineering team',
      'Regular compliance audits and inspections',
      'Weekly stakeholder coordination meetings',
      'Flexible scheduling and contingency planning'
    ],
    outcomes: [
      'Building achieved 95% occupancy within 6 months',
      'Energy consumption 30% below industry standard',
      'Received Excellence in Construction award',
      'Tenant satisfaction rating of 96%',
      'Project delivered within budget'
    ]
  },
  {
    id: '3',
    slug: 'luxury-resort-complex',
    title: 'Luxury Resort Complex',
    subtitle: 'Comprehensive fire safety solution for premium hospitality environment. 500-room resort with specialized tropical environment protection systems.',
    client: 'Paradise Resorts International',
    location: 'Maldives',
    duration: '20 months',
    budget: '$25M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop&crop=center',
    description: `<p>A comprehensive fire safety solution for a 500-room luxury resort with multiple buildings, pools, and recreational facilities. This project required specialized systems designed for tropical environments and guest safety in hospitality settings.</p>

<p>The resort features overwater villas, beachfront suites, and multiple dining venues, each requiring tailored fire protection solutions. Our team implemented wireless sensor networks and integrated guest notification systems throughout the property.</p>

<h3>Resort Features</h3>
<ul>
<li>500 luxury guest rooms across multiple buildings</li>
<li>Overwater villa fire protection systems</li>
<li>Kitchen and restaurant safety systems</li>
<li>Pool area and spa safety integration</li>
<li>Guest notification and evacuation systems</li>
<li>24/7 monitoring and emergency response</li>
</ul>`,
    challenges: [
      'Tropical environment corrosion protection',
      'Overwater villa accessibility challenges',
      'Guest safety without compromising luxury experience',
      'Multiple building coordination',
      'Remote location logistics'
    ],
    solutions: [
      'Marine-grade corrosion-resistant materials',
      'Specialized overwater access solutions',
      'Discreet integration with luxury design',
      'Centralized monitoring system',
      'Local team training and support'
    ],
    outcomes: [
      'Zero safety incidents since opening',
      'Guest satisfaction maintained at 98%',
      'Resort achieved 5-star safety certification',
      'Emergency response time under 3 minutes',
      'System reliability rate of 99.8%'
    ]
  },
  {
    id: '4',
    slug: 'metropolitan-shopping-center',
    title: 'Metropolitan Shopping Center',
    subtitle: 'Complete fire safety overhaul for major retail complex. 5-level shopping center serving 50,000+ daily visitors with advanced crowd management.',
    client: 'Metropolitan Retail Group',
    location: 'London, UK',
    duration: '15 months',
    budget: '$18M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
    description: `<p>Complete fire safety overhaul for a 5-level shopping complex serving over 50,000 daily visitors with 200+ retail outlets. This project required coordination with ongoing operations while implementing state-of-the-art safety systems.</p>

<p>The shopping center includes major anchor stores, food courts, entertainment venues, and underground parking. Our solution integrated public address systems with crowd management and emergency evacuation protocols.</p>

<h3>Complex Features</h3>
<ul>
<li>5 levels of retail space totaling 1.8M sq ft</li>
<li>200+ individual retail outlets</li>
<li>Food court and restaurant areas</li>
<li>Entertainment and cinema complex</li>
<li>Multi-level parking facilities</li>
<li>High-traffic pedestrian areas</li>
</ul>`,
    challenges: [
      'Operating during business hours',
      'Coordinating with 200+ tenants',
      'High pedestrian traffic management',
      'Complex building layout',
      'Strict regulatory compliance requirements'
    ],
    solutions: [
      'Phased implementation schedule',
      'Dedicated tenant coordination team',
      'Advanced crowd management systems',
      'Zone-based detection and response',
      'Regular compliance audits and testing'
    ],
    outcomes: [
      'No disruption to daily operations',
      '100% tenant compliance achieved',
      'Emergency evacuation time reduced by 40%',
      'Received Shopping Center Safety Award',
      'Customer confidence rating increased to 95%'
    ]
  },
  {
    id: '5',
    slug: 'pharmaceutical-manufacturing-facility',
    title: 'Pharmaceutical Manufacturing Facility',
    subtitle: 'Specialized fire protection for clean room environments and chemical storage. Advanced regulatory compliance for pharmaceutical manufacturing standards.',
    client: 'Global Pharma Solutions',
    location: 'Basel, Switzerland',
    duration: '22 months',
    budget: '$30M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center',
    description: `<p>Specialized fire protection for clean room environments and chemical storage areas with stringent regulatory compliance requirements. This project demanded expertise in pharmaceutical manufacturing safety and contamination prevention.</p>

<p>The facility produces life-saving medications requiring sterile environments and precise temperature controls. Our fire protection systems were designed to activate without compromising product integrity or clean room standards.</p>

<h3>Facility Specifications</h3>
<ul>
<li>Class 10,000 and Class 100 clean rooms</li>
<li>Chemical storage and handling areas</li>
<li>Automated production line protection</li>
<li>Raw material warehouse systems</li>
<li>Quality control laboratory safety</li>
<li>Regulatory compliance monitoring</li>
</ul>`,
    challenges: [
      'Clean room contamination prevention',
      'Chemical-specific fire suppression',
      'Regulatory compliance across multiple jurisdictions',
      'Product integrity protection',
      'Continuous operation requirements'
    ],
    solutions: [
      'Clean room compatible detection systems',
      'Inert gas suppression for sensitive areas',
      'Multi-jurisdiction compliance protocols',
      'Gradual response systems to protect products',
      'Redundant systems for zero downtime'
    ],
    outcomes: [
      'FDA and EMA compliance certification achieved',
      'Zero contamination incidents',
      'Production line availability maintained at 99.9%',
      'Annual safety audit score of 98%',
      'Insurance premiums reduced by 25%'
    ]
  },
  {
    id: '6',
    slug: 'university-campus-modernization',
    title: 'University Campus Modernization',
    subtitle: 'Campus-wide fire safety upgrade for educational excellence. Comprehensive safety systems across 15 buildings serving 25,000 students and faculty.',
    client: 'Metropolitan University',
    location: 'Boston, USA',
    duration: '36 months',
    budget: '$40M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    description: `<p>Campus-wide fire safety upgrade covering 15 buildings including dormitories, laboratories, libraries, and lecture halls. This comprehensive project balanced modern safety requirements with historical building preservation.</p>

<p>The university serves 25,000 students and faculty across diverse facilities including research laboratories, student housing, dining halls, and administrative buildings. Our solution provided unified safety management while respecting architectural heritage.</p>

<h3>Campus Coverage</h3>
<ul>
<li>15 buildings across 200-acre campus</li>
<li>Student dormitories housing 8,000 residents</li>
<li>Research laboratories and chemistry facilities</li>
<li>Historical library and archive protection</li>
<li>Multiple dining and social facilities</li>
<li>Administrative and classroom buildings</li>
</ul>`,
    challenges: [
      'Historical building preservation requirements',
      'Laboratory-specific safety needs',
      'Student housing fire prevention',
      'Minimal disruption to academic schedule',
      'Integration across diverse building types'
    ],
    solutions: [
      'Heritage-sensitive installation techniques',
      'Laboratory-grade detection and suppression',
      'Enhanced dormitory safety protocols',
      'Summer and break period scheduling',
      'Centralized campus-wide monitoring system'
    ],
    outcomes: [
      'Historical preservation awards received',
      'Campus safety rating improved to highest tier',
      'Student satisfaction with safety increased 85%',
      'Research continuity maintained throughout project',
      'Emergency response coordination improved by 60%'
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, limit: number = 3): ProjectData[] => {
  return projectsData.filter(project => project.slug !== currentSlug).slice(0, limit);
};
