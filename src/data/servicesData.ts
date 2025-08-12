export interface ServiceData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  relatedServices: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    slug: 'fire-safety-consulting',
    name: 'Fire Safety Consulting',
    shortDescription: 'Comprehensive fire safety assessments and strategic planning for buildings and infrastructure. Our certified fire protection engineers provide expert guidance on code compliance, risk assessment, and performance-based design solutions. We work with architects, engineers, and building owners to develop cost-effective fire safety strategies.',
    fullDescription: `<p>Our fire safety consulting services provide expert guidance on fire protection strategies, code compliance, and risk assessment. We work closely with architects, engineers, building owners, and facility managers to develop comprehensive fire safety solutions that protect life and property while ensuring full regulatory compliance. Our team of certified fire protection engineers brings decades of experience across various building types including commercial, industrial, healthcare, educational, and residential facilities.</p>

<p>We specialize in performance-based design approaches that offer innovative and cost-effective alternatives to prescriptive code requirements. Our consulting services include detailed fire risk assessments, egress analysis, smoke management studies, and fire safety strategy development. Whether you're planning a new construction project, renovating an existing facility, or need ongoing fire safety support, our consultants provide the technical expertise and strategic guidance necessary to achieve optimal fire protection outcomes.</p>`,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Fire risk assessments',
      'Code compliance analysis',
      'Fire safety strategy development',
      'Peer review services',
      'Performance-based design',
      'Fire safety management plans'
    ],
    benefits: [
      'Reduced fire risk and liability',
      'Optimized fire protection systems',
      'Regulatory compliance assurance',
      'Cost-effective solutions',
      'Enhanced building safety',
      'Expert technical support'
    ],
    relatedServices: ['fire-detection-systems', 'emergency-response-planning', 'building-code-compliance']
  },
  {
    id: '2',
    slug: 'fire-detection-systems',
    name: 'Fire Detection Systems',
    shortDescription: 'Advanced fire detection and alarm system design, installation, and maintenance for all building types. We implement state-of-the-art detection technologies including addressable systems, smoke detectors, and specialized detection equipment. Our solutions ensure early fire detection while minimizing false alarms.',
    fullDescription: `<p>We design and implement state-of-the-art fire detection systems tailored to your specific building requirements and occupancy characteristics. Our comprehensive solutions include conventional and addressable fire alarm systems, advanced smoke detection technologies, heat detection systems, and specialized detection equipment for unique environments such as data centers, clean rooms, and industrial facilities. Our expert team ensures that every detection system is properly sized, strategically placed, and seamlessly integrated with your building's infrastructure.</p>

<p>Our fire detection systems are designed for early fire detection to minimize damage and maximize occupant safety. We utilize the latest technologies including multi-criteria detectors, aspirating smoke detection systems, and intelligent fire alarm panels that reduce false alarms while providing reliable fire detection. All our installations comply with NFPA standards and local codes, and we provide comprehensive commissioning, testing, and ongoing maintenance services to ensure optimal system performance throughout the system's lifecycle.</p>`,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    features: [
      'Smoke and heat detectors',
      'Addressable fire alarm systems',
      'Mass notification systems',
      'Integration with building systems',
      'Remote monitoring capabilities',
      'Maintenance and testing services'
    ],
    benefits: [
      'Early fire detection',
      'Reduced false alarms',
      'Seamless system integration',
      'Real-time monitoring',
      'Compliance with standards',
      'Reliable system performance'
    ],
    relatedServices: ['fire-safety-consulting', 'fire-suppression-systems', 'emergency-response-planning']
  },
  {
    id: '3',
    slug: 'fire-suppression-systems',
    name: 'Fire Suppression Systems',
    shortDescription: 'Innovative fire suppression solutions including sprinkler systems and specialized suppression technologies. We design and install automatic suppression systems, clean agent systems, and foam suppression for various applications. Our solutions provide effective fire suppression while minimizing property damage.',
    fullDescription: `<p>Our fire suppression systems are engineered to automatically detect and suppress fires with maximum efficiency while minimizing collateral damage to property and the environment. We offer a complete portfolio of suppression solutions including traditional water-based sprinkler systems, clean agent suppression systems, foam suppression, and cutting-edge water mist technology. Each system is custom-designed to address the specific fire hazards and protection requirements of your facility, whether it's a commercial office building, industrial manufacturing plant, data center, or specialty application.</p>

<p>We specialize in advanced suppression technologies for critical environments where water damage must be minimized, such as server rooms, museums, libraries, and electrical equipment areas. Our clean agent systems use environmentally friendly suppression agents that leave no residue and cause no damage to sensitive equipment. For industrial applications, we design specialized foam and dry chemical systems that effectively suppress flammable liquid and gas fires. All our suppression systems are integrated with fire detection systems for rapid response and can be monitored remotely for enhanced reliability and maintenance efficiency.</p>`,
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    features: [
      'Automatic sprinkler systems',
      'Clean agent suppression',
      'Foam suppression systems',
      'Kitchen hood suppression',
      'Industrial suppression solutions',
      'Water mist systems'
    ],
    benefits: [
      'Automatic fire suppression',
      'Minimal water damage',
      'Protection of critical assets',
      'Fast response times',
      'Environmentally friendly options',
      'Reduced insurance premiums'
    ],
    relatedServices: ['fire-detection-systems', 'fire-safety-consulting', 'system-maintenance']
  },
  {
    id: '4',
    slug: 'emergency-response-planning',
    name: 'Emergency Response Planning',
    shortDescription: 'Comprehensive emergency evacuation and response planning for all building types and occupancies. We develop customized emergency plans, conduct staff training programs, and coordinate emergency drills. Our services ensure safe and efficient evacuation during fire emergencies and other critical situations.',
    fullDescription: `<p>We develop comprehensive emergency response plans that ensure safe, organized, and efficient evacuation during fire emergencies and other critical situations. Our customized emergency plans take into account building layout, occupancy characteristics, special needs populations, and potential emergency scenarios to create detailed procedures that can save lives. We work closely with building management, security teams, and local emergency responders to develop integrated emergency response strategies that address communication protocols, evacuation routes, assembly areas, and coordination with first responders.</p>

<p>Our emergency planning services extend beyond documentation to include hands-on training programs, emergency drill coordination, and ongoing plan refinement based on lessons learned and changing conditions. We provide comprehensive staff training on emergency procedures, evacuation assistance for disabled individuals, and crisis communication protocols. Our team conducts regular emergency drills and tabletop exercises to test plan effectiveness and identify areas for improvement. We also assist with emergency equipment selection and placement, including emergency lighting, exit signage, communication systems, and evacuation chairs for multi-story buildings.</p>`,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Evacuation plan development',
      'Emergency communication systems',
      'Staff training programs',
      'Emergency drill coordination',
      'Crisis management protocols',
      'Emergency equipment placement'
    ],
    benefits: [
      'Faster evacuation times',
      'Improved occupant safety',
      'Regulatory compliance',
      'Reduced liability',
      'Enhanced emergency preparedness',
      'Staff confidence and readiness'
    ],
    relatedServices: ['fire-safety-consulting', 'fire-detection-systems', 'building-code-compliance']
  },
  {
    id: '5',
    slug: 'building-code-compliance',
    name: 'Building Code Compliance',
    shortDescription: 'Expert guidance on fire safety code compliance and regulatory requirements for all project phases. Our code specialists provide detailed analysis of local, state, and federal fire safety standards. We ensure your projects meet all applicable building codes and NFPA requirements efficiently.',
    fullDescription: `<p>Navigate the complex landscape of building codes and fire safety regulations with confidence through our expert compliance services. Our team of code specialists provides detailed analysis and interpretation of local, state, and federal fire safety requirements, ensuring your projects meet all applicable standards from the International Building Code (IBC) and International Fire Code (IFC) to NFPA standards and local amendments. We provide comprehensive compliance documentation, plan review services, and ongoing support throughout the design, construction, and occupancy phases of your project.</p>

<p>Staying current with evolving codes and standards is our specialty, and we provide proactive guidance on code changes that may affect your facilities. Our services include variance and equivalency applications when alternative solutions provide equal or superior fire safety performance, liaison services with authorities having jurisdiction (AHJ), and expert witness support for code-related disputes. We also offer code training seminars for design teams and facility managers, helping them understand the rationale behind code requirements and how to implement compliant solutions efficiently and cost-effectively.</p>`,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80',
    features: [
      'Code analysis and interpretation',
      'Compliance documentation',
      'Plan review services',
      'Authority having jurisdiction liaison',
      'Code update notifications',
      'Variance and equivalency support'
    ],
    benefits: [
      'Assured regulatory compliance',
      'Faster permit approvals',
      'Reduced project delays',
      'Expert code interpretation',
      'Risk mitigation',
      'Professional documentation'
    ],
    relatedServices: ['fire-safety-consulting', 'emergency-response-planning', 'system-maintenance']
  },
  {
    id: '6',
    slug: 'system-maintenance',
    name: 'System Maintenance',
    shortDescription: 'Comprehensive maintenance and testing services for all fire protection systems and equipment. Our certified technicians provide scheduled inspections, preventive maintenance, and emergency repairs. We ensure your fire protection systems operate reliably and maintain regulatory compliance.',
    fullDescription: `<p>Ensure your fire protection systems operate at peak reliability and performance with our comprehensive maintenance and testing services. Our certified technicians provide scheduled inspections, preventive maintenance, system testing, and emergency repairs for all types of fire protection equipment including fire alarm systems, sprinkler systems, suppression systems, emergency lighting, and fire pumps. We follow strict industry standards including NFPA 25, NFPA 72, and manufacturer specifications to maintain your systems in optimal condition and ensure regulatory compliance.</p>

<p>Our proactive maintenance approach helps prevent system failures, extends equipment life, and reduces long-term maintenance costs through early detection and correction of potential issues. We provide detailed inspection reports, compliance documentation, and maintenance tracking to support your facility management and insurance requirements. Our emergency repair services are available 24/7 to minimize system downtime and restore fire protection quickly. Additionally, we offer system upgrade and retrofit services to enhance performance, add new capabilities, or ensure compliance with updated codes and standards.</p>`,
    image: 'https://images.unsplash.com/photo-1581094289986-74d5d65c60c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Scheduled inspections',
      'System testing and commissioning',
      'Preventive maintenance',
      'Emergency repair services',
      'System upgrades and retrofits',
      'Compliance reporting'
    ],
    benefits: [
      'Reliable system performance',
      'Extended equipment life',
      'Reduced maintenance costs',
      'Compliance assurance',
      'Minimized downtime',
      'Expert technical support'
    ],
    relatedServices: ['fire-detection-systems', 'fire-suppression-systems', 'building-code-compliance']
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getRelatedServices = (currentSlug: string, relatedSlugs: string[]): ServiceData[] => {
  return servicesData.filter(service => 
    relatedSlugs.includes(service.slug) && service.slug !== currentSlug
  );
};
