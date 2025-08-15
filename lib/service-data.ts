import { Wand2, Cake, Heart, GraduationCap } from "lucide-react"

export interface ServiceData {
  id: string
  title: string
  description: string
  keywords: string
  icon: any
  pitch: string
  durations: string[]
  audienceSizes: string[]
  idealFor: string[]
  addOns: string[]
  packages: {
    name: string
    duration: string
    features: string[]
    price: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  gallery: string[]
}

export const servicesData: Record<string, ServiceData> = {
  "magic-show": {
    id: "magic-show",
    title: "Magic Show",
    description: "Mind-blowing illusions and interactive magic that captivates audiences of all ages",
    keywords: "magic show hyderabad, magician telangana, birthday party magician, school magic show",
    icon: Wand2,
    pitch:
      "Experience the wonder of professional magic with A. Ramesh's captivating illusions and interactive performances that leave audiences spellbound.",
    durations: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
    audienceSizes: ["10-30 guests", "30-60 guests", "60-150 guests", "150+ guests"],
    idealFor: [
      "Birthday Parties",
      "School Events",
      "Corporate Functions",
      "Wedding Receptions",
      "Community Gatherings",
    ],
    addOns: ["Balloon Twisting", "Sound System", "MC/Anchoring", "Photography", "Costume Characters"],
    packages: [
      {
        name: "Basic Magic Show",
        duration: "30 minutes",
        features: ["Classic magic tricks", "Audience participation", "Basic props", "Kid-friendly content"],
        price: "₹ on request",
      },
      {
        name: "Premium Magic Show",
        duration: "45 minutes",
        features: [
          "Advanced illusions",
          "Interactive segments",
          "Professional props",
          "Multilingual performance",
          "Sound system included",
        ],
        price: "₹ on request",
      },
      {
        name: "Grand Magic Show",
        duration: "60 minutes",
        features: [
          "Stage illusions",
          "Audience volunteers",
          "Premium equipment",
          "Professional lighting",
          "MC services",
          "Photo opportunities",
        ],
        price: "₹ on request",
      },
    ],
    faqs: [
      {
        question: "What age groups enjoy the magic show?",
        answer:
          "Our magic shows are designed for all ages, from toddlers to grandparents. We adjust the content and interaction style based on the primary audience.",
      },
      {
        question: "Do you perform in Telugu?",
        answer:
          "Yes! A. Ramesh performs fluently in Telugu, Hindi, and English, making the show accessible to diverse audiences across Telangana and Andhra Pradesh.",
      },
      {
        question: "What space do you need for the performance?",
        answer:
          "We can adapt to various spaces. For indoor shows, we need at least 8x6 feet. For larger audiences, we recommend a small stage or elevated area.",
      },
      {
        question: "Are the magic tricks safe for children?",
        answer:
          "All our props and tricks are child-safe. We use non-toxic materials and avoid any potentially dangerous elements in our performances.",
      },
    ],
    gallery: [
      "/gallery/magic-show-1.jpg",
      "/gallery/magic-show-2.jpg",
      "/gallery/magic-show-3.jpg",
      "/gallery/magic-show-4.jpg",
    ],
  },
  "birthday-parties": {
    id: "birthday-parties",
    title: "Birthday Parties",
    description: "Complete birthday celebration packages with entertainment and decorations",
    keywords: "birthday party entertainment hyderabad, kids birthday party, birthday magician telangana",
    icon: Cake,
    pitch:
      "Make your child's birthday unforgettable with our complete entertainment packages featuring magic, games, and interactive fun.",
    durations: ["2 hours", "3 hours", "4 hours"],
    audienceSizes: ["10-20 kids", "20-40 kids", "40+ kids"],
    idealFor: ["Kids Birthdays", "Teen Parties", "Adult Birthdays", "Milestone Celebrations"],
    addOns: ["Cake Cutting Ceremony", "Balloon Decorations", "Face Painting", "Return Gifts", "Photography"],
    packages: [
      {
        name: "Birthday Basic",
        duration: "2 hours",
        features: ["45-minute magic show", "Game activities", "Balloon twisting", "Basic sound system"],
        price: "₹ on request",
      },
      {
        name: "Birthday Deluxe",
        duration: "3 hours",
        features: [
          "60-minute magic show",
          "Talking doll performance",
          "Game show with prizes",
          "Tattoo booth",
          "Professional anchoring",
          "Premium sound system",
        ],
        price: "₹ on request",
      },
    ],
    faqs: [
      {
        question: "What's included in a birthday party package?",
        answer:
          "Our packages typically include magic show, games, balloon activities, and basic sound system. Premium packages add talking doll shows, tattoo booth, and professional anchoring.",
      },
      {
        question: "Can you help with decorations?",
        answer:
          "Yes! We can arrange balloon decorations and basic party setup as an add-on service to complement the entertainment.",
      },
      {
        question: "Do you provide return gifts?",
        answer:
          "We can arrange return gifts as an additional service. We'll work with you to select age-appropriate gifts within your budget.",
      },
    ],
    gallery: ["/gallery/birthday-1.jpg", "/gallery/birthday-2.jpg", "/gallery/birthday-3.jpg"],
  },
  weddings: {
    id: "weddings",
    title: "Weddings",
    description: "Traditional and modern wedding entertainment including sangeet and reception shows",
    keywords: "wedding entertainment telangana, sangeet entertainment, wedding magician andhra pradesh",
    icon: Heart,
    pitch:
      "Add magical moments to your special day with entertainment that delights guests of all ages during sangeet, mehendi, and reception celebrations.",
    durations: ["3 hours", "4 hours", "6 hours", "Full day"],
    audienceSizes: ["50-100 guests", "100-200 guests", "200-500 guests", "500+ guests"],
    idealFor: ["Sangeet Ceremonies", "Mehendi Functions", "Reception Parties", "Pre-wedding Events"],
    addOns: ["Orchestra Band", "Professional Lighting", "Stage Setup", "Photography", "Videography"],
    packages: [
      {
        name: "Wedding Entertainment",
        duration: "4 hours",
        features: [
          "Grand magic show",
          "Orchestra/Track singing",
          "Professional anchoring",
          "Interactive games",
          "Full sound & lighting setup",
        ],
        price: "₹ on request",
      },
    ],
    faqs: [
      {
        question: "Can you perform during different wedding ceremonies?",
        answer:
          "Yes! We can provide entertainment for sangeet, mehendi, reception, and other pre-wedding events. Each performance is customized for the occasion.",
      },
      {
        question: "Do you work with wedding planners?",
        answer: "We regularly collaborate with wedding planners and can coordinate seamlessly with your existing team.",
      },
    ],
    gallery: ["/gallery/wedding-1.jpg", "/gallery/wedding-2.jpg"],
  },
  "school-college-shows": {
    id: "school-college-shows",
    title: "School and College Shows",
    description: "Educational and entertaining programs designed for academic institutions",
    keywords: "school magic show telangana, college entertainment, educational magic show hyderabad",
    icon: GraduationCap,
    pitch:
      "Engage students with educational entertainment that combines learning with fun, perfect for annual days, cultural events, and special occasions.",
    durations: ["45 minutes", "60 minutes", "90 minutes"],
    audienceSizes: ["50-150 students", "150-300 students", "300+ students"],
    idealFor: [
      "Annual Day Functions",
      "Cultural Events",
      "Prize Distribution",
      "Farewell Parties",
      "Orientation Programs",
    ],
    addOns: ["Educational Content", "Student Participation", "Award Ceremony Support", "Photography"],
    packages: [
      {
        name: "School Show",
        duration: "45 minutes",
        features: ["Educational magic tricks", "Student participation", "Moral lessons", "Interactive segments"],
        price: "₹ on request",
      },
      {
        name: "College Fest",
        duration: "60 minutes",
        features: [
          "High-energy performance",
          "Student volunteers",
          "Comedy elements",
          "Social media moments",
          "Professional sound system",
        ],
        price: "₹ on request",
      },
    ],
    faqs: [
      {
        question: "Are the shows educational?",
        answer:
          "Yes! We incorporate educational elements, moral lessons, and interactive learning into our school shows while keeping them highly entertaining.",
      },
      {
        question: "Can students participate in the show?",
        answer:
          "Student participation is a key element of our school and college shows. We involve students as volunteers and participants throughout the performance.",
      },
    ],
    gallery: ["/gallery/school-1.jpg", "/gallery/school-2.jpg"],
  },
}
