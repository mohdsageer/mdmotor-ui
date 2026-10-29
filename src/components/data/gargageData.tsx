
export interface GarageInfo {
    name: string;
    tagline: string;
    phone: string;
    whatsappNumber: string;
    email: string;
    address: string;
    whatsappMessage: string;
    aboutTitle: string;
    aboutDescription: string;
    bookingTitle: string;
    bookingDescription: string;
}

export interface NavigationLink {
    label: string;
    href: string;
}

export interface HeroSlide {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
    primaryButton: string;
    primaryLink: string;
    secondaryButton: string;
    secondaryLink: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface WhyChooseUsItem {
    id: string;
    title: string;
    description: string;
}

export interface SectionContent {
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    contactEyebrow: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface OurWorkContent {
    eyebrow: string;
    title: string;
    description: string;
    youtubeUrl: string;
}

export interface WorkVideo {
    id: string;
    youtube?: string;
    title: string;
    videoId: string;
}

export const garageInfo:GarageInfo = {
    name: "MD Motors",
    tagline: "Premium Automotive Care",
    phone: "+91 72598 28411",
    whatsappNumber: "917259828411",
    email: "mdmotors@gmail.com",
    address: "60 Feet Road, Near bulb Factory Sahara Shadi mahal raod, Chickmagalur -577101, Karnataka,  India",
    whatsappMessage: "Hello MD Motors, I would like to book a car service.",
    aboutTitle: "Your Car Deserves the Best",
    aboutDescription:
        "MD Motors provides reliable automotive servicing, maintenance, diagnostics and repair solutions. Our focus is quality workmanship, transparent communication and dependable service.",
    bookingTitle: "Ready to Book Your Service?",
    bookingDescription:
        "Contact our team to discuss your vehicle's service requirements.",
};

export const navigationLinks:NavigationLink[] = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our-work" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const heroSlides:HeroSlide[] = [
    {
        id: "premium-cars",
        eyebrow: "WELCOME TO MD MOTORS",
        title: "Your Car.",
        highlight: "Our Care.",
        description:
            "Professional car servicing, repairs, diagnostics and maintenance — all in one place.",
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85",
        primaryButton: "Book a Service",
        primaryLink: "#contact",
        secondaryButton: "Explore Services",
        secondaryLink: "#services",
    },
    {
        id: "workshop",
        eyebrow: "EXPERT AUTOMOTIVE CARE",
        title: "Expert Service.",
        highlight: "Every Time.",
        description:
            "Keep your vehicle running smoothly with professional maintenance and trusted repairs.",
        image:
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85",
        primaryButton: "Book a Service",
        primaryLink: "#contact",
        secondaryButton: "Our Services",
        secondaryLink: "#services",
    },
    {
        id: "performance",
        eyebrow: "DRIVE WITH CONFIDENCE",
        title: "Better Care.",
        highlight: "Better Drive.",
        description:
            "From routine maintenance to complex repairs, give your car the attention it deserves.",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85",
        primaryButton: "Contact Us",
        primaryLink: "#contact",
        secondaryButton: "Explore Services",
        secondaryLink: "#services",
    },
];

export const services:Service[] = [
    {
        id: "general-service",
        icon: "🔧",
        title: "General Service",
        description:
            "Regular maintenance to keep your vehicle performing reliably.",
    },
    {
        id: "engine-repair",
        icon: "⚙️",
        title: "Engine Repair",
        description:
            "Professional engine inspection, diagnostics and repair.",
    },
    {
        id: "brake-service",
        icon: "🛞",
        title: "Brake Service",
        description:
            "Brake inspections and maintenance for dependable stopping.",
    },
    {
        id: "car-diagnostics",
        icon: "🖥️",
        title: "Car Diagnostics",
        description:
            "Identify vehicle issues with modern diagnostic equipment.",
    },
    {
        id: "ac-service",
        icon: "❄️",
        title: "AC Service",
        description:
            "Air-conditioning inspection and maintenance for comfortable drives.",
    },
    {
        id: "battery-service",
        icon: "🔋",
        title: "Battery Service",
        description:
            "Battery testing, replacement guidance and electrical checks.",
    },
    {
        id: "Tinkering-service",
        icon: "💥🚗",
        title: "Tinker Service",
        description:
            "Removing the Dents, Accident vehical complete work",
    },
    {
        id: "Panting-service",
        icon: "🎨",
        title: "Panting Service",
        description:
            "High Quality Painting Services is available",
    },
    {
        id: "Interior Cleaning Service",
        icon: "✇",
        title: " Interior Cleaning Service",
        description:
            "Complete interior cleaning services available",
    },
];

export const whyChooseUs: WhyChooseUsItem[] = [
    {
        id: "experienced-team",
        title: "Experienced Team",
        description: "Skilled technicians focused on quality workmanship.",
    },
    {
        id: "transparent-service",
        title: "Transparent Service",
        description: "Clear communication about your vehicle's service needs.",
    },
    {
        id: "quality-parts",
        title: "Quality Focus",
        description: "Careful workmanship and attention to detail.",
    },
    {
        id: "customer-support",
        title: "Customer Support",
        description: "Helpful support throughout your service experience.",
    },
];

export const sectionContent: SectionContent = {
    servicesEyebrow: "WHAT WE DO",
    servicesTitle: "Our Automotive Services",
    servicesDescription:
        "Complete vehicle care, from routine maintenance to diagnostics and repairs.",
    aboutEyebrow: "ABOUT MD MOTORS",
    whyTitle: "Why Choose MD Motors?",
    whyDescription:
        "We focus on dependable service, clear communication and customer care.",
    contactEyebrow: "GET IN TOUCH",
};

export const footerSections :FooterSection[] = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "About Us", href: "#about" },
            { label: "Contact", href: "#contact" },
        ],
    },
];


export const socialLinks:SocialLink[] = [
 { label: "Instagram", href: "https://instagram.com/md_motors2121?cplk=MXMyZDM0MXMzOHE4" }
];

export const ourWorkContent :OurWorkContent= {
    eyebrow: "OUR WORK",
    title: "See MD Motors in Action",
    description:
        "Watch our automotive work, repairs, and workshop videos.",
    youtubeUrl: "https://www.youtube.com/@Mdmotors2121",
};

export const workVideos: WorkVideo[] = [
    {
        id: "video-1",
        youtube:"youtube",
        title: "MD Motors Workshop",
        videoId: "0BznHZsLhQg",
    },
    {
        id: "video-2",
        youtube:"youtube",
        title: "Automotive Repair",
        videoId: "jTHqAUP_5u8",
    },
    {
        id: "video-3",
        title: "Our Latest Work",
        videoId: "j1jV68vrkvw",
    },
];