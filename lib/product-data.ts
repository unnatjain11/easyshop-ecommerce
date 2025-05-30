// Product data for various categories
// Each product has a unique ID and details

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  description?: string;
  features?: string[];
  brand?: string;
  model?: string;
  warranty?: string;
}

export const productData: Record<string, Product[]> = {
  smartphones: [
    {
      id: "sm-001",
      name: "Ultra Slim X Pro",
      price: 59999,
      image: "/products/smartphone.jpg",
      category: "smartphones",
      badge: "New",
      description: "Experience the future with Ultra Slim X Pro. This premium smartphone features a stunning 6.7-inch AMOLED display, 108MP camera, and the latest processor for lightning-fast performance.",
      features: [
        "6.7-inch AMOLED Display (120Hz)",
        "108MP Main Camera with 8K Video",
        "5nm Processor with 12GB RAM",
        "5000mAh Battery with 65W Fast Charging",
        "IP68 Water and Dust Resistance"
      ],
      brand: "TechGiant",
      model: "X Pro 2024",
      warranty: "2 Years"
    },
    {
      id: "sm-002",
      name: "Infinity Edge 5G",
      price: 45999,
      image: "/products/smartphones.jpg",
      category: "smartphones",
      description: "The Infinity Edge 5G pushes boundaries with its edge-to-edge display and next-generation connectivity. Perfect for multimedia consumption and productivity.",
      features: [
        "6.5-inch Bezel-less Display",
        "64MP Quad Camera Setup",
        "5G Connectivity",
        "4500mAh Battery",
        "In-Display Fingerprint Sensor"
      ],
      brand: "MobiTech",
      model: "IE-5G-2024"
    },
    {
      id: "sm-003",
      name: "Pixel Perfect Pro",
      price: 79999,
      image: "/products/smartphone.jpg",
      category: "smartphones",
      badge: "Premium",
      description: "Capture life's moments with unparalleled clarity. The Pixel Perfect Pro features the most advanced camera system on a smartphone, combined with AI enhancements.",
      features: [
        "6.3-inch QHD+ OLED Display",
        "50MP Main Camera with Advanced Night Mode",
        "Neural Processing Unit for AI Photography",
        "Wireless Charging",
        "5 Years of Software Updates"
      ],
      brand: "PixelTech",
      model: "PPP-2024",
      warranty: "3 Years"
    },
    {
      id: "sm-004",
      name: "Budget King 4G",
      price: 14999,
      image: "/products/smartphones.jpg",
      category: "smartphones",
      badge: "Best Value",
      description: "Who says quality has to be expensive? The Budget King 4G offers premium features at an affordable price point without compromising on performance.",
      features: [
        "6.2-inch HD+ Display",
        "48MP Triple Camera",
        "Octa-core Processor",
        "5000mAh Battery",
        "Fast Charging Support"
      ],
      brand: "ValueTech",
      model: "BK-400"
    },
    {
      id: "sm-005",
      name: "Fold Master X",
      price: 149999,
      image: "/products/smartphone.jpg",
      category: "smartphones",
      badge: "Innovative",
      description: "Experience the future of smartphones with the revolutionary Fold Master X. This foldable device transforms from a phone to a tablet in seconds.",
      features: [
        "7.6-inch Foldable AMOLED Main Display",
        "6.2-inch Cover Display",
        "Triple Camera System with Space Zoom",
        "12GB RAM with 512GB Storage",
        "S Pen Support"
      ],
      brand: "FoldTech",
      model: "FMX-2024",
      warranty: "2 Years"
    },
    {
      id: "sm-006",
      name: "Gaming Beast Pro",
      price: 69999,
      image: "/products/smartphones.jpg",
      category: "smartphones",
      description: "Designed for mobile gamers, the Gaming Beast Pro features advanced cooling technology, high refresh rate display, and customizable gaming controls.",
      features: [
        "6.8-inch 165Hz AMOLED Display",
        "Snapdragon Elite Gaming Processor",
        "Liquid Cooling System",
        "6000mAh Battery",
        "Shoulder Triggers for Gaming"
      ],
      brand: "GameTech",
      model: "GBP-Elite",
      warranty: "2 Years"
    },
    {
      id: "sm-007",
      name: "Ultra Secure Crypto",
      price: 89999,
      image: "/products/smartphone.jpg",
      category: "smartphones",
      badge: "Secure",
      description: "The Ultra Secure Crypto smartphone puts security first with hardware encryption, blockchain technology integration, and advanced biometric security.",
      features: [
        "6.1-inch Protected Display",
        "Hardware Encryption Chip",
        "Cryptocurrency Wallet Integration",
        "Multi-factor Authentication",
        "Tamper-proof Hardware"
      ],
      brand: "SecureTech",
      model: "USC-Titan",
      warranty: "3 Years"
    },
    {
      id: "sm-008",
      name: "Camera Master 108",
      price: 54999,
      image: "/products/smartphones.jpg",
      category: "smartphones",
      description: "For photography enthusiasts, the Camera Master 108 offers DSLR-level photography capabilities in a smartphone form factor.",
      features: [
        "6.4-inch AMOLED Display",
        "108MP Main Camera with 1-inch Sensor",
        "10x Optical Zoom",
        "Pro Photography Modes",
        "8K Video Recording"
      ],
      brand: "CameraTech",
      model: "CM-108Pro",
      warranty: "2 Years"
    },
    {
      id: "sm-009",
      name: "Battery Champion 7000",
      price: 32999,
      image: "/products/smartphone.jpg",
      category: "smartphones",
      badge: "Long-lasting",
      description: "Never worry about running out of battery again. The Battery Champion 7000 features a massive battery that lasts multiple days on a single charge.",
      features: [
        "6.5-inch Power-efficient Display",
        "7000mAh Ultra-capacity Battery",
        "30W Fast Charging",
        "Reverse Charging",
        "Power Saving AI"
      ],
      brand: "PowerTech",
      model: "BC-7000",
      warranty: "2 Years"
    },
    {
      id: "sm-010",
      name: "Executive Business Pro",
      price: 59999,
      image: "/products/smartphones.jpg",
      category: "smartphones",
      description: "Designed for business professionals, the Executive Business Pro offers advanced productivity features, secure enterprise integration, and premium build quality.",
      features: [
        "6.3-inch Anti-glare Display",
        "Enterprise-grade Security",
        "Microsoft Office Integration",
        "Noise Cancellation for Calls",
        "Desktop Mode with External Display Support"
      ],
      brand: "BusinessTech",
      model: "EBP-2024",
      warranty: "3 Years"
    }
  ],
  
  laptops: [
    {
      id: "lp-001",
      name: "UltraBook Pro X",
      price: 124999,
      image: "/products/laptop.jpg",
      category: "laptops",
      badge: "Premium",
      description: "Experience extraordinary performance with the UltraBook Pro X. This premium laptop features a stunning 4K display, powerful processor, and all-day battery life.",
      features: [
        "15.6-inch 4K OLED Display",
        "Latest Gen i9 Processor",
        "32GB RAM, 1TB SSD",
        "NVIDIA RTX 4080 GPU",
        "18-hour Battery Life"
      ],
      brand: "TechPro",
      model: "UBP-X2024",
      warranty: "3 Years"
    },
    {
      id: "lp-002",
      name: "Developer Workstation",
      price: 139999,
      image: "/products/laptops.jpg",
      category: "laptops",
      description: "Built for software developers and content creators, the Developer Workstation provides uncompromising performance for the most demanding tasks.",
      features: [
        "17-inch 4K Display with 100% Adobe RGB",
        "Ryzen 9 Processor",
        "64GB RAM, 2TB SSD",
        "NVIDIA RTX 4090 GPU",
        "Multiple Thunderbolt Ports"
      ],
      brand: "DevTech",
      model: "DW-9000",
      warranty: "3 Years"
    },
    {
      id: "lp-003",
      name: "Thin & Light Traveler",
      price: 79999,
      image: "/products/laptop.jpg",
      category: "laptops",
      badge: "Lightweight",
      description: "Perfect for professionals on the go, the Thin & Light Traveler weighs under 1kg while providing excellent performance and connectivity.",
      features: [
        "13.5-inch QHD+ Display",
        "Intel Core i7 Processor",
        "16GB RAM, 512GB SSD",
        "Intel Iris Xe Graphics",
        "Weighs only 980g"
      ],
      brand: "MobileTech",
      model: "TLT-2024",
      warranty: "2 Years"
    },
    {
      id: "lp-004",
      name: "Gaming Beast RTX",
      price: 159999,
      image: "/products/laptops.jpg",
      category: "laptops",
      badge: "Gaming",
      description: "Dominate every game with the Gaming Beast RTX. This high-performance gaming laptop features advanced cooling, RGB lighting, and top-tier graphics.",
      features: [
        "17.3-inch 240Hz Display",
        "Intel Core i9-HX Processor",
        "32GB DDR5 RAM, 2TB NVMe SSD",
        "NVIDIA RTX 4090 16GB GPU",
        "Advanced Thermal Design"
      ],
      brand: "GameTech",
      model: "GB-RTX-Elite",
      warranty: "2 Years"
    },
    {
      id: "lp-005",
      name: "Budget Student Notebook",
      price: 42999,
      image: "/products/laptop.jpg",
      category: "laptops",
      badge: "Best Value",
      description: "Affordability meets functionality in the Budget Student Notebook, perfect for everyday tasks, online learning, and basic productivity.",
      features: [
        "15.6-inch Full HD Display",
        "AMD Ryzen 5 Processor",
        "8GB RAM, 512GB SSD",
        "AMD Radeon Graphics",
        "10-hour Battery Life"
      ],
      brand: "EduTech",
      model: "BSN-500",
      warranty: "1 Year"
    },
    {
      id: "lp-006",
      name: "Business Executive Elite",
      price: 94999,
      image: "/products/laptops.jpg",
      category: "laptops",
      description: "Designed for business professionals, the Business Executive Elite offers advanced security features, premium build quality, and reliable performance.",
      features: [
        "14-inch QHD+ Anti-glare Display",
        "Intel vPro Platform",
        "16GB RAM, 1TB SSD",
        "Windows 11 Pro",
        "Fingerprint Reader and TPM 2.0"
      ],
      brand: "BizTech",
      model: "BEE-2024",
      warranty: "3 Years"
    },
    {
      id: "lp-007",
      name: "Convertible 2-in-1 Touch",
      price: 85999,
      image: "/products/laptop.jpg",
      category: "laptops",
      badge: "Versatile",
      description: "Get the best of both worlds with the Convertible 2-in-1 Touch. Use it as a laptop or tablet with its versatile 360-degree hinge design.",
      features: [
        "14-inch Touchscreen Display",
        "Intel Core i7 Processor",
        "16GB RAM, 512GB SSD",
        "360-degree Hinge",
        "Stylus Support"
      ],
      brand: "FlexTech",
      model: "C2in1-Pro",
      warranty: "2 Years"
    },
    {
      id: "lp-008",
      name: "Creative Studio Pro",
      price: 129999,
      image: "/products/laptops.jpg",
      category: "laptops",
      description: "Built for creative professionals, the Creative Studio Pro offers color-accurate display, powerful graphics, and optimized performance for design applications.",
      features: [
        "16-inch 4K DCI-P3 Display",
        "Intel Core i9 Processor",
        "32GB RAM, 2TB SSD",
        "NVIDIA RTX A5000 Graphics",
        "Calibrated for Adobe Creative Suite"
      ],
      brand: "CreativeTech",
      model: "CSP-X",
      warranty: "3 Years"
    },
    {
      id: "lp-009",
      name: "Rugged Field Pro",
      price: 109999,
      image: "/products/laptop.jpg",
      category: "laptops",
      badge: "Durable",
      description: "Built to withstand the harshest environments, the Rugged Field Pro meets military-grade durability standards while delivering reliable performance.",
      features: [
        "14-inch Sunlight-readable Display",
        "Intel Core i5 Processor",
        "16GB RAM, 1TB SSD",
        "Military-grade Drop Protection",
        "Water and Dust Resistant (IP65)"
      ],
      brand: "DuraTech",
      model: "RFP-Military",
      warranty: "5 Years"
    },
    {
      id: "lp-010",
      name: "AI Developer Edition",
      price: 169999,
      image: "/products/laptops.jpg",
      category: "laptops",
      badge: "Specialized",
      description: "Specifically optimized for AI development and machine learning tasks, the AI Developer Edition features specialized hardware accelerators and software optimizations.",
      features: [
        "16-inch 4K Display",
        "Intel Core i9 with Neural Engine",
        "64GB RAM, 4TB SSD",
        "NVIDIA RTX 4090 with Tensor Cores",
        "Pre-installed AI Development Tools"
      ],
      brand: "AITech",
      model: "AIDE-2024",
      warranty: "3 Years"
    }
  ],
  
  smartwatches: [
    {
      id: "sw-001",
      name: "Active Pro 5",
      price: 34999,
      image: "/products/smartwatch.jpg",
      category: "smartwatches",
      badge: "New",
      description: "Elevate your fitness journey with the Active Pro 5. This advanced smartwatch offers comprehensive health tracking, GPS, and up to 7 days of battery life.",
      features: [
        "1.4-inch AMOLED Display",
        "Heart Rate & ECG Monitoring",
        "GPS with Navigation",
        "100+ Workout Modes",
        "Water Resistant to 50m"
      ],
      brand: "FitTech",
      model: "AP5-2024",
      warranty: "2 Years"
    },
    {
      id: "sw-002",
      name: "Business Time Elite",
      price: 42999,
      image: "/products/smartwatches.jpg",
      category: "smartwatches",
      description: "Designed for professionals, the Business Time Elite combines premium materials with smart features to keep you connected and productive.",
      features: [
        "1.5-inch Sapphire Crystal Display",
        "4G Connectivity",
        "Email and Calendar Integration",
        "Voice Assistant",
        "Premium Stainless Steel Design"
      ],
      brand: "ExecTech",
      model: "BTE-100",
      warranty: "2 Years"
    },
    {
      id: "sw-003",
      name: "Health Monitor Plus",
      price: 29999,
      image: "/products/smartwatch.jpg",
      category: "smartwatches",
      badge: "Health",
      description: "The most advanced health companion, Health Monitor Plus offers comprehensive vitals tracking, sleep analysis, and personalized insights.",
      features: [
        "1.3-inch OLED Display",
        "Blood Oxygen Monitoring",
        "Sleep Analysis with Stages",
        "Stress Tracking",
        "Irregular Heart Rate Alerts"
      ],
      brand: "MediTech",
      model: "HMP-2024",
      warranty: "2 Years"
    },
    {
      id: "sw-004",
      name: "Extreme Sports GPS",
      price: 45999,
      image: "/products/smartwatches.jpg",
      category: "smartwatches",
      badge: "Rugged",
      description: "Built for adventure, the Extreme Sports GPS watch withstands harsh conditions while providing precise tracking for outdoor activities.",
      features: [
        "1.4-inch Transflective Display",
        "Multi-band GPS",
        "Altimeter, Barometer, Compass",
        "Topographic Maps",
        "Military-grade Durability"
      ],
      brand: "AdventureTech",
      model: "ESG-X",
      warranty: "3 Years"
    },
    {
      id: "sw-005",
      name: "Minimalist Classic",
      price: 24999,
      image: "/products/smartwatch.jpg",
      category: "smartwatches",
      description: "The Minimalist Classic combines traditional watch aesthetics with essential smart features for those who prefer a more subtle approach.",
      features: [
        "1.2-inch Circular Display",
        "Basic Health Tracking",
        "Notification Support",
        "2-week Battery Life",
        "Premium Leather Strap"
      ],
      brand: "ClassicTech",
      model: "MC-200",
      warranty: "2 Years"
    },
    {
      id: "sw-006",
      name: "Kids Guardian",
      price: 12999,
      image: "/products/smartwatches.jpg",
      category: "smartwatches",
      badge: "For Kids",
      description: "Designed for children, the Kids Guardian offers location tracking, communication features, and educational apps in a durable, colorful design.",
      features: [
        "1.0-inch Touch Display",
        "GPS Tracking with Geofencing",
        "Two-way Calling",
        "SOS Button",
        "Educational Games"
      ],
      brand: "KidTech",
      model: "KG-Junior",
      warranty: "1 Year"
    },
    {
      id: "sw-007",
      name: "Fashion Forward",
      price: 36999,
      image: "/products/smartwatch.jpg",
      category: "smartwatches",
      badge: "Stylish",
      description: "The Fashion Forward smart watch blends high fashion with technology, featuring customizable designer straps and exclusive watch faces.",
      features: [
        "1.3-inch Circular AMOLED Display",
        "Designer Straps",
        "Exclusive Watch Faces",
        "Basic Health Tracking",
        "Social Media Integration"
      ],
      brand: "FashionTech",
      model: "FF-Luxe",
      warranty: "2 Years"
    },
    {
      id: "sw-008",
      name: "Senior Assist",
      price: 19999,
      image: "/products/smartwatches.jpg",
      category: "smartwatches",
      description: "Designed for seniors, the Senior Assist offers easy-to-use health monitoring, fall detection, and emergency assistance features.",
      features: [
        "1.4-inch High-contrast Display",
        "Fall Detection",
        "Medication Reminders",
        "Emergency SOS",
        "Simplified Interface"
      ],
      brand: "CareTech",
      model: "SA-2024",
      warranty: "2 Years"
    },
    {
      id: "sw-009",
      name: "Dive Master 200",
      price: 49999,
      image: "/products/smartwatch.jpg",
      category: "smartwatches",
      badge: "Specialized",
      description: "Purpose-built for divers, the Dive Master 200 offers depth tracking, underwater heart rate monitoring, and dive log capabilities.",
      features: [
        "1.4-inch Sunlight-visible Display",
        "Water Resistant to 200m",
        "Dive Computer Features",
        "Underwater Heart Rate",
        "Automatic Dive Detection"
      ],
      brand: "OceanTech",
      model: "DM-200",
      warranty: "2 Years"
    },
    {
      id: "sw-010",
      name: "Budget Fitness Tracker",
      price: 8999,
      image: "/products/smartwatches.jpg",
      category: "smartwatches",
      badge: "Best Value",
      description: "Affordable fitness tracking that doesn't compromise on essentials, the Budget Fitness Tracker offers great value for health-conscious users.",
      features: [
        "0.96-inch OLED Display",
        "Heart Rate Monitoring",
        "Sleep Tracking",
        "14-day Battery Life",
        "Water Resistant to 50m"
      ],
      brand: "ValueTech",
      model: "BFT-100",
      warranty: "1 Year"
    }
  ],
  
  luxurywatches: [
    {
      id: "lw-001",
      name: "Grande Complication",
      price: 599999,
      image: "/products/chronograph.jpg",
      category: "luxurywatches",
      badge: "Premium",
      description: "A masterpiece of watchmaking, the Grande Complication features hand-crafted movements, multiple complications, and exquisite finishing.",
      features: [
        "42mm 18K Gold Case",
        "Perpetual Calendar",
        "Minute Repeater",
        "Tourbillon Movement",
        "Alligator Leather Strap"
      ],
      brand: "Swiss Precision",
      model: "GC-Royal",
      warranty: "Lifetime"
    },
    {
      id: "lw-002",
      name: "Navigator Chronograph",
      price: 189999,
      image: "/products/luxurywatches.jpg",
      category: "luxurywatches",
      description: "Inspired by aviation, the Navigator Chronograph combines precise timekeeping with practical functionality in a sophisticated package.",
      features: [
        "45mm Stainless Steel Case",
        "Automatic Movement",
        "Chronograph Function",
        "Rotating Bezel",
        "Sapphire Crystal"
      ],
      brand: "ChronoMaster",
      model: "NC-Pilot",
      warranty: "10 Years"
    },
    {
      id: "lw-003",
      name: "Heritage Automatic",
      price: 259999,
      image: "/products/chronograph.jpg",
      category: "luxurywatches",
      badge: "Classic",
      description: "The Heritage Automatic draws inspiration from vintage designs while incorporating modern watchmaking technology for reliability and precision.",
      features: [
        "40mm Rose Gold Case",
        "In-house Automatic Movement",
        "Vintage-inspired Dial",
        "Exhibition Caseback",
        "Hand-stitched Leather Strap"
      ],
      brand: "TimeCraft",
      model: "HA-1950",
      warranty: "5 Years"
    },
    {
      id: "lw-004",
      name: "Diver Professional 300M",
      price: 159999,
      image: "/products/luxurywatches.jpg",
      category: "luxurywatches",
      badge: "Professional",
      description: "A professional diving instrument, the Diver Professional 300M offers exceptional water resistance, legibility, and reliability under pressure.",
      features: [
        "44mm Titanium Case",
        "300M Water Resistance",
        "Helium Escape Valve",
        "Luminous Dial and Hands",
        "Ceramic Rotating Bezel"
      ],
      brand: "OceanMaster",
      model: "DP-300",
      warranty: "5 Years"
    },
    {
      id: "lw-005",
      name: "Skeleton Art Deco",
      price: 329999,
      image: "/products/chronograph.jpg",
      category: "luxurywatches",
      description: "A blend of art and engineering, the Skeleton Art Deco reveals the intricate movement through a beautifully decorated open-worked dial.",
      features: [
        "39mm White Gold Case",
        "Hand-wound Skeleton Movement",
        "Art Deco Design Elements",
        "Guilloché Decoration",
        "Crocodile Leather Strap"
      ],
      brand: "ArtisanTime",
      model: "SAD-Elite",
      warranty: "10 Years"
    },
    {
      id: "lw-006",
      name: "Annual Calendar Moonphase",
      price: 399999,
      image: "/products/luxurywatches.jpg",
      category: "luxurywatches",
      badge: "Complicated",
      description: "The Annual Calendar Moonphase combines practical complications with elegant design, requiring adjustment only once per year.",
      features: [
        "41mm Platinum Case",
        "Annual Calendar Function",
        "Moonphase Display",
        "Power Reserve Indicator",
        "Hand-finished Movement"
      ],
      brand: "CalendarCraft",
      model: "ACM-Celestial",
      warranty: "10 Years"
    },
    {
      id: "lw-007",
      name: "Sports Elegance Titanium",
      price: 179999,
      image: "/products/chronograph.jpg",
      category: "luxurywatches",
      badge: "Lightweight",
      description: "The Sports Elegance Titanium combines athletic functionality with refined elegance in an ultra-lightweight package.",
      features: [
        "42mm Grade 5 Titanium Case",
        "Integrated Bracelet Design",
        "Anti-magnetic Movement",
        "Super-LumiNova Indications",
        "80-hour Power Reserve"
      ],
      brand: "SportoLuxe",
      model: "SET-Pro",
      warranty: "5 Years"
    },
    {
      id: "lw-008",
      name: "Ladies Diamond Pavé",
      price: 459999,
      image: "/products/luxurywatches.jpg",
      category: "luxurywatches",
      description: "A statement piece of jewelry and timekeeping, the Ladies Diamond Pavé features hundreds of hand-set diamonds in a brilliant display.",
      features: [
        "36mm White Gold Case",
        "Full Diamond Pavé Setting",
        "Mother of Pearl Dial",
        "Quartz Movement",
        "Satin Strap with Diamond Buckle"
      ],
      brand: "DiamondTime",
      model: "LDP-Brilliance",
      warranty: "5 Years"
    },
    {
      id: "lw-009",
      name: "Travel Time Dual Timezone",
      price: 229999,
      image: "/products/chronograph.jpg",
      category: "luxurywatches",
      badge: "Travel",
      description: "Perfect for frequent travelers, the Travel Time Dual Timezone allows easy tracking of two time zones with an intuitive user interface.",
      features: [
        "43mm Stainless Steel Case",
        "Dual Timezone Function",
        "Date Display",
        "Easy-adjust Pushers",
        "Integrated Bracelet"
      ],
      brand: "GlobeTrotter",
      model: "TT-Voyager",
      warranty: "5 Years"
    },
    {
      id: "lw-010",
      name: "Ultra-thin Dress Watch",
      price: 289999,
      image: "/products/luxurywatches.jpg",
      category: "luxurywatches",
      badge: "Elegant",
      description: "The epitome of elegance, the Ultra-thin Dress Watch slips discreetly under a shirt cuff while providing accurate timekeeping.",
      features: [
        "38mm Rose Gold Case",
        "Only 5.9mm Thick",
        "Minimalist Dial Design",
        "Hand-wound Movement",
        "Genuine Alligator Strap"
      ],
      brand: "SlimCraft",
      model: "UT-Elegance",
      warranty: "10 Years"
    }
  ],
  
  audio: [
    {
      id: "au-001",
      name: "Premium Wireless Headphones",
      price: 34999,
      image: "/products/audio.jpg",
      category: "audio",
      badge: "Flagship",
      description: "Experience exceptional sound quality with our Premium Wireless Headphones featuring active noise cancellation and studio-grade audio performance.",
      features: [
        "Active Noise Cancellation",
        "40mm Titanium Drivers",
        "30-hour Battery Life",
        "Bluetooth 5.2",
        "Memory Foam Ear Cushions"
      ],
      brand: "SoundElite",
      model: "PWH-X1",
      warranty: "2 Years"
    },
    {
      id: "au-002",
      name: "True Wireless Earbuds",
      price: 19999,
      image: "/products/earbuds.jpg",
      category: "audio",
      description: "Compact yet powerful, our True Wireless Earbuds deliver immersive sound in a completely cable-free design.",
      features: [
        "10mm Dynamic Drivers",
        "Active Noise Cancellation",
        "8-hour Battery (28 with case)",
        "IPX7 Water Resistance",
        "Touch Controls"
      ],
      brand: "AudioPods",
      model: "TWE-Pro",
      warranty: "1 Year"
    },
    {
      id: "au-003",
      name: "Audiophile Open-Back Headphones",
      price: 42999,
      image: "/products/audio.jpg",
      category: "audio",
      badge: "Studio Quality",
      description: "Designed for audio professionals and enthusiasts, these open-back headphones deliver exceptional sound stage and clarity.",
      features: [
        "50mm Planar Magnetic Drivers",
        "Open-Back Design",
        "Replaceable Velour Ear Pads",
        "Detachable Cable",
        "Wide Frequency Response"
      ],
      brand: "StudioSound",
      model: "APH-Reference",
      warranty: "3 Years"
    },
    {
      id: "au-004",
      name: "Waterproof Bluetooth Speaker",
      price: 12999,
      image: "/products/earbuds.jpg",
      category: "audio",
      badge: "Outdoor",
      description: "Take your music anywhere with this rugged, waterproof Bluetooth speaker that delivers surprising sound quality in any environment.",
      features: [
        "360° Sound Projection",
        "IPX7 Waterproof Rating",
        "20-hour Battery Life",
        "Built-in Microphone",
        "Floating Design"
      ],
      brand: "OutdoorAudio",
      model: "WBS-X200",
      warranty: "2 Years"
    },
    {
      id: "au-005",
      name: "Hi-Fi Streaming Amplifier",
      price: 89999,
      image: "/products/audio.jpg",
      category: "audio",
      description: "Bring your home audio system into the modern era with this high-fidelity streaming amplifier featuring multiple connectivity options.",
      features: [
        "100W per Channel",
        "Built-in DAC",
        "Wi-Fi, Bluetooth, Airplay 2",
        "Multi-room Audio Support",
        "Phono Input for Turntables"
      ],
      brand: "AudioPhase",
      model: "HSA-100",
      warranty: "5 Years"
    },
    {
      id: "au-006",
      name: "Gaming Headset Pro",
      price: 17999,
      image: "/products/earbuds.jpg",
      category: "audio",
      badge: "Gaming",
      description: "Designed for competitive gamers, this headset delivers immersive spatial audio, crystal-clear communication, and all-day comfort.",
      features: [
        "7.1 Surround Sound",
        "Noise-cancelling Microphone",
        "RGB Lighting",
        "Memory Foam Ear Cups",
        "Cross-platform Compatibility"
      ],
      brand: "GameAudio",
      model: "GHP-Tournament",
      warranty: "2 Years"
    },
    {
      id: "au-007",
      name: "Portable Hi-Res Music Player",
      price: 29999,
      image: "/products/audio.jpg",
      category: "audio",
      badge: "Audiophile",
      description: "Experience your music collection in its full glory with this portable high-resolution digital audio player.",
      features: [
        "Dual ES9218P DAC",
        "256GB Storage + MicroSD",
        "3.5-inch HD Touchscreen",
        "DSD and MQA Support",
        "15-hour Battery Life"
      ],
      brand: "SoundFidelity",
      model: "PHRMP-X2",
      warranty: "2 Years"
    },
    {
      id: "au-008",
      name: "Smart Soundbar with Alexa",
      price: 39999,
      image: "/products/earbuds.jpg",
      category: "audio",
      description: "Enhance your TV experience with this smart soundbar featuring voice control, streaming capability, and immersive sound.",
      features: [
        "Dolby Atmos & DTS:X",
        "Built-in Voice Assistant",
        "Wireless Subwoofer",
        "4K HDR Passthrough",
        "Multi-room Audio"
      ],
      brand: "SmartSound",
      model: "SSB-Voice",
      warranty: "2 Years"
    },
    {
      id: "au-009",
      name: "DJ Professional Headphones",
      price: 24999,
      image: "/products/audio.jpg",
      category: "audio",
      badge: "Professional",
      description: "Designed specifically for DJs and music producers, these headphones feature swiveling ear cups, punchy bass, and durability for professional use.",
      features: [
        "50mm Drivers",
        "Rotating Ear Cups",
        "Coiled and Straight Cables",
        "Foldable Design",
        "Replaceable Parts"
      ],
      brand: "BeatMix",
      model: "DJP-500",
      warranty: "3 Years"
    },
    {
      id: "au-010",
      name: "Bone Conduction Sport Headphones",
      price: 14999,
      image: "/products/earbuds.jpg",
      category: "audio",
      badge: "Sport",
      description: "Experience open-ear listening with these bone conduction headphones, perfect for runners and cyclists who need to stay aware of their surroundings.",
      features: [
        "Bone Conduction Technology",
        "8-hour Battery Life",
        "IP67 Sweat & Waterproof",
        "Titanium Frame",
        "Bluetooth 5.0"
      ],
      brand: "SportAudio",
      model: "BCSH-Runner",
      warranty: "2 Years"
    }
  ],
  
  accessories: [
    {
      id: "acc-001",
      name: "Premium Leather Phone Case",
      price: 4999,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "Handcrafted",
      description: "Protect your smartphone in style with our premium leather phone case, handcrafted from genuine full-grain leather that develops a beautiful patina over time.",
      features: [
        "Full-grain Leather",
        "Microfiber Lining",
        "Card Slot Pocket",
        "Wireless Charging Compatible",
        "Available for Multiple Phone Models"
      ],
      brand: "LuxCase",
      model: "Premium Leather Series",
      warranty: "1 Year"
    },
    {
      id: "acc-002",
      name: "65W GaN Charger",
      price: 3999,
      image: "/products/accessories.jpg",
      category: "accessories",
      description: "Charge all your devices with a single compact charger. This 65W GaN charger features multiple ports and fast charging technology.",
      features: [
        "65W Total Output",
        "2x USB-C, 1x USB-A Ports",
        "Power Delivery 3.0",
        "GaN Technology",
        "Foldable Plug"
      ],
      brand: "PowerTech",
      model: "GaN-65",
      warranty: "2 Years"
    },
    {
      id: "acc-003",
      name: "Smart Fitness Tracker Band",
      price: 2499,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "Bestseller",
      description: "Track your fitness goals with this affordable yet feature-packed fitness band featuring heart rate monitoring, sleep tracking, and notifications.",
      features: [
        "Heart Rate Monitor",
        "Sleep Tracking",
        "5 ATM Water Resistance",
        "14-day Battery Life",
        "Smartphone Notifications"
      ],
      brand: "FitLife",
      model: "Tracker Pro",
      warranty: "1 Year"
    },
    {
      id: "acc-004",
      name: "Wireless Charging Pad",
      price: 1999,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "Fast Charge",
      description: "Charge your compatible devices without the hassle of cables. This sleek wireless charging pad supports fast charging and features a non-slip surface.",
      features: [
        "15W Fast Charging",
        "Qi Compatibility",
        "LED Charging Indicator",
        "Non-slip Surface",
        "Over-voltage Protection"
      ],
      brand: "ChargeTech",
      model: "WCP-15",
      warranty: "1 Year"
    },
    {
      id: "acc-005",
      name: "Laptop Sleeve Case",
      price: 2999,
      image: "/products/accessories.jpg",
      category: "accessories",
      description: "Protect your laptop with this stylish yet functional sleeve case featuring water-resistant materials and extra pockets for accessories.",
      features: [
        "Water-resistant Material",
        "Shock-absorbing Padding",
        "Accessory Pockets",
        "Available in Multiple Sizes",
        "Premium YKK Zippers"
      ],
      brand: "TechCarry",
      model: "UltraSleeve",
      warranty: "1 Year"
    },
    {
      id: "acc-006",
      name: "Portable Power Bank 20000mAh",
      price: 3499,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "High Capacity",
      description: "Never run out of battery with this high-capacity power bank featuring fast charging, multiple ports, and a compact design.",
      features: [
        "20000mAh Capacity",
        "18W USB-C PD Output",
        "Dual USB-A Ports",
        "LED Power Indicator",
        "Airline Safe"
      ],
      brand: "PowerMax",
      model: "PB-20K",
      warranty: "18 Months"
    },
    {
      id: "acc-007",
      name: "Bluetooth Tracker Tags",
      price: 1499,
      image: "/products/accessories.jpg",
      category: "accessories",
      description: "Keep track of your valuable items with these compact Bluetooth tracker tags. Attach to keys, bags, or anything important you don't want to lose.",
      features: [
        "Bluetooth 5.0 Technology",
        "200ft Range",
        "Replaceable Battery",
        "Water Resistant",
        "Crowd Finding Network"
      ],
      brand: "FinderTech",
      model: "TrackTag Mini",
      warranty: "1 Year"
    },
    {
      id: "acc-008",
      name: "Premium Braided USB-C Cable",
      price: 1299,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "Durable",
      description: "This premium braided USB-C cable features reinforced stress points, fast charging capability, and a sleek design that won't tangle.",
      features: [
        "10ft/3m Length",
        "Nylon Braided Design",
        "100W Power Delivery",
        "Reinforced Connectors",
        "10,000+ Bend Lifespan"
      ],
      brand: "CablePro",
      model: "Endurance-C",
      warranty: "Lifetime"
    },
    {
      id: "acc-009",
      name: "Adjustable Laptop Stand",
      price: 2499,
      image: "/products/accessories.jpg",
      category: "accessories",
      description: "Improve your posture and laptop cooling with this adjustable aluminum laptop stand featuring multiple height settings and a foldable design.",
      features: [
        "Aluminum Construction",
        "7 Height Adjustments",
        "Foldable Design",
        "Non-slip Silicone Pads",
        "Compatible with 10-17\" Laptops"
      ],
      brand: "ErgoDeck",
      model: "AdjustPro",
      warranty: "2 Years"
    },
    {
      id: "acc-010",
      name: "Smart Key Finder",
      price: 1999,
      image: "/products/accessories.jpg",
      category: "accessories",
      badge: "Smart Home",
      description: "Never lose your keys again with this smart key finder that integrates with your home assistant and features a loud ring and LED light.",
      features: [
        "Voice Assistant Compatible",
        "90dB Ring Volume",
        "LED Flashlight",
        "300ft Bluetooth Range",
        "Replaceable Battery"
      ],
      brand: "SmartFind",
      model: "KeyAlert Pro",
      warranty: "1 Year"
    }
  ]
}; 