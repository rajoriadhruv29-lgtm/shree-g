import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'rivet-hinges',
    title: 'Rivet Hinges',
    description: 'High-quality M.S. Rivet Hinges available in various sizes and finishes.',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=Rivet+Hinges'
  },
  {
    id: 'bolt-hinges', // Often referred to as Lorry hinges in context or mixed
    title: 'Bolt & Lorry Hinges',
    description: 'Heavy duty bolt and lorry hinges for industrial applications.',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=Bolt+Hinges'
  },
  {
    id: 'door-hinges',
    title: 'Door Hinges',
    description: 'Standard M.S. Hinges for residential and commercial doors.',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=Door+Hinges'
  },
  {
    id: 't-hinges',
    title: 'T-Hinges',
    description: 'Durable T-Hinges for gates, sheds, and barn doors.',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=T-Hinges'
  },
  {
    id: 'washers',
    title: 'Washers & Kunda',
    description: 'Essential hardware accessories including washers and shutter kunda.',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e3a8a?text=Washers'
  }
];

export const PRODUCTS: Product[] = [
  // Rivet Hinges
  {
    id: 'rivet-5-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 5"',
    description: 'Polished finish rivet hinge suitable for heavy doors.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Rivet+Hinge+5%22',
    specs: {
      itemCode: 'RH-005',
      size: '5 Inch',
      length: '125 mm',
      width: '88 mm',
      thickness: '4.5 mm',
      weight: '550 gms'
    }
  },
  {
    id: 'rivet-6-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 6"',
    description: 'Extra strength rivet hinge for industrial use.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Rivet+Hinge+6%22',
    specs: {
      itemCode: 'RH-006',
      size: '6 Inch',
      length: '145 mm',
      width: '94 mm',
      thickness: '4.5 mm',
      weight: '650 gms'
    }
  },
  // Bolt / Lorry Hinges
  {
    id: 'bolt-3-inch',
    categoryId: 'bolt-hinges',
    name: 'M.S. Bolt Hinges 3 Inch',
    description: 'Compact bolt hinge for smaller cabinets and windows.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Bolt+Hinge+3%22',
    specs: {
      itemCode: 'BH-003',
      size: '3 Inch',
      length: '68 mm',
      width: '60 mm',
      thickness: '2.5 mm',
      weight: '150 gms'
    }
  },
  {
    id: 'bolt-4-inch',
    categoryId: 'bolt-hinges',
    name: 'M.S. Bolt Hinges 4 Inch',
    description: 'Standard size bolt hinge for versatile applications.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Bolt+Hinge+4%22',
    specs: {
      itemCode: 'BH-004',
      size: '4 Inch',
      length: '100 mm',
      width: '68 mm',
      thickness: '2.5 mm',
      weight: '220 gms'
    }
  },
  {
    id: 'lorry-2.5-inch',
    categoryId: 'bolt-hinges',
    name: 'M.S. Lorry Hinges',
    description: 'Wide profile hinge specifically designed for vehicle bodies.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Lorry+Hinge',
    specs: {
      itemCode: 'LH-025',
      size: '2.5 Inch',
      length: '65 mm',
      width: '160 mm',
      thickness: '4 mm',
      weight: '350 gms'
    }
  },
  // T-Hinges
  {
    id: 't-hinge-4',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 4 Inch',
    description: 'Classic T-Hinge design for stability.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=T-Hinge+4%22',
    specs: {
      itemCode: 'TH-004',
      size: '4 Inch',
      length: '145 mm',
      width: 'N/A',
      thickness: '2.5 mm',
      weight: '175 gms'
    }
  },
  {
    id: 't-hinge-5',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 5 Inch',
    description: 'Medium duty T-Hinge.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=T-Hinge+5%22',
    specs: {
      itemCode: 'TH-005',
      size: '5 Inch',
      length: '145 mm',
      width: 'N/A',
      thickness: '2.5 mm',
      weight: '200 gms'
    }
  },
  {
    id: 't-hinge-6',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 6 Inch',
    description: 'Heavy duty T-Hinge for large gates.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=T-Hinge+6%22',
    specs: {
      itemCode: 'TH-006',
      size: '6 Inch',
      length: 'N/A',
      width: 'N/A',
      thickness: '2.5 mm',
      weight: '250 gms'
    }
  },
  // Door Hinges (Butt)
  {
    id: 'door-butt-1',
    categoryId: 'door-hinges',
    name: 'M.S. Hinges Door (Butt/Counter)',
    description: 'Standard butt hinge for interior doors.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Door+Hinge+1',
    specs: {
      itemCode: 'DH-001',
      size: 'Butt/Counter',
      length: '100 mm',
      width: '57 mm',
      thickness: '1.5 mm',
      weight: '100 gms'
    }
  },
   {
    id: 'door-butt-2',
    categoryId: 'door-hinges',
    name: 'M.S. Hinges Door (Heavy)',
    description: 'Heavier gauge butt hinge.',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e3a8a?text=Door+Hinge+2',
    specs: {
      itemCode: 'DH-002',
      size: 'Butt/Counter',
      length: '100 mm',
      width: '57 mm',
      thickness: '2 mm',
      weight: '120 gms'
    }
  }
];