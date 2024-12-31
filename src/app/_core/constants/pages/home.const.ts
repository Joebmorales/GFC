import { ICard, IStat } from "../../models/generic.model";

export const SERVICES_ITEMS: ICard[] = [
  {
      title: 'Build & Secure Your Wealth',
      description: 'Become a client',
      image: 'assets/images/family1.webp',
      link: 'our-services',
  },
  {
      title: 'Start A Business',
      description: 'Become a partner',
      image: 'assets/images/office1.webp',
      link: 'business-platform',
  },
  {
      title: 'Donate & Contribute',
      description: 'Make an impact',
      image: 'assets/images/hands1.webp',
      link: 'contact',
  }
]

export const JOURNEY_START_POINTS: ICard[] = [
    {
      title: "Financial Education",
      description: "Access valuable financial education resources to enhance your knowledge and decision-making.",
      image: "book", // Icono de Lucide para representación visual de educación financiera
    },
    {
      title: "Expert Guidance",
      description: "Access valuable financial education resources to enhance your knowledge and decision-making.",
      image: "user-check", // Icono de Lucide para guías de expertos
    },
    {
      title: "Diverse Financial Products and Solutions",
      description: "Access valuable financial education resources to enhance your knowledge and decision-making.",
      image: "dollar-sign", // Icono de Lucide para productos financieros
    },
    {
      title: "Customized Strategies",
      description: "Access valuable financial education resources to enhance your knowledge and decision-making.",
      image: "sliders", // Icono de Lucide para estrategias personalizadas
    }
  ];

export const STATS: IStat[] = [
    {
      endValue: 10,
      prefix: '+',
      startValue: 0,
      title: 'Years of experience',
      description:
        'Helping individuals and families achieve financial independence.',
    },
    {
      endValue: 1000,
      startValue: 0,
      title: 'Success Stories',
      description: 'Real lives impacted through our proven strategies.',
    },
    {
      endValue: 10,
      prefix: '+',
      suffix: 'M',
      startValue: 0,
      title: 'Wealth Managed',
      description: 'Securing and growing financial assets worldwide.',
    },
    {
      endValue: 33,
      suffix: '+',
      startValue: 0,
      title: 'Countries',
      description: 'Delivering global financial solutions with a local touch.',
    },
  ];