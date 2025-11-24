import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'rivet-hinges',
    title: 'Rivet Hinges / Kabja',
    title_hi: 'रिवेट हिंज / कब्जा',
    description: 'High-quality M.S. Rivet Hinges available in various sizes and heavy-duty variants.',
    description_hi: 'विभिन्न आकारों और भारी-भरकम वेरियंट्स में उपलब्ध उच्च गुणवत्ता वाले M.S. रिवेट हिंज।',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Rivet+Hinges'
  },
  {
    id: 't-hinges',
    title: 'T-Hinges / Kabja',
    title_hi: 'टी-हिंज / कब्जा',
    description: 'Durable T-Hinges for gates, sheds, and barn doors in multiple sizes.',
    description_hi: 'गेट, शेड और खलिहान के दरवाजों के लिए टिकाऊ टी-हिंज, कई आकारों में।',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e293b?text=T-Hinges'
  },
  {
    id: 'butt-hinges',
    title: 'Butt Hinges / Kabja',
    title_hi: 'बट हिंज / कब्जा',
    description: 'Versatile M.S. Butt Hinges for doors and cabinets.',
    description_hi: 'दरवाजों और अलमारियों के लिए बहुमुखी M.S. बट हिंज।',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Butt+Hinges'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    title_hi: 'एक्सेसरीज',
    description: 'Essential hardware accessories including Outer, Teen Hole Patti, and Shutter Kunda.',
    description_hi: 'आउटर, तीन होल पट्टी, और शटर कुंडा सहित आवश्यक हार्डवेयर एक्सेसरीज।',
    coverImage: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Accessories'
  }
];

export const PRODUCTS: Product[] = [
  // --- Rivet Hinges ---
  {
    id: 'rivet-3-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 3 Inch',
    name_hi: 'M.S. रिवेट हिंज 3 इंच',
    description: 'Compact rivet hinges suitable for smaller applications. Available in 2 weight variants.',
    description_hi: 'छोटे अनुप्रयोगों के लिए उपयुक्त कॉम्पैक्ट रिवेट हिंज। 2 वजन वेरिएंट में उपलब्ध।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Rivet+Hinge+3%22',
    variants: [
      {
        variantName: 'Light',
        itemCode: 'RH-3-L',
        size: '3 Inch',
        length: '70 mm',
        width: '68 mm',
        thickness: '1.75 mm',
        weight: '110 gm'
      },
      {
        variantName: 'Heavy',
        itemCode: 'RH-3-H',
        size: '3 Inch',
        length: '70 mm',
        width: '68 mm',
        thickness: '2.5 mm',
        weight: '150-160 gm'
      }
    ]
  },
  {
    id: 'rivet-4-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 4 Inch',
    name_hi: 'M.S. रिवेट हिंज 4 इंच',
    description: 'Versatile 4-inch rivet hinges available in multiple weights for various load requirements.',
    description_hi: 'विभिन्न भार आवश्यकताओं के लिए कई वजन में उपलब्ध बहुमुखी 4-इंच रिवेट हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Rivet+Hinge+4%22',
    variants: [
      {
        variantName: 'Light',
        itemCode: 'RH-4-L',
        size: '4 Inch',
        length: '98 mm',
        width: '62 mm',
        thickness: '3.5 mm',
        weight: '220 gm'
      },
      {
        variantName: 'Medium',
        itemCode: 'RH-4-M',
        size: '4 Inch',
        length: '98 mm',
        width: '68 mm',
        thickness: '4 mm',
        weight: '350 gm'
      },
      {
        variantName: 'Heavy',
        itemCode: 'RH-4-H',
        size: '4 Inch',
        length: '102 mm',
        width: '82 mm',
        thickness: '4 mm',
        weight: '400 gm'
      }
    ]
  },
  {
    id: 'rivet-5-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 5 Inch',
    name_hi: 'M.S. रिवेट हिंज 5 इंच',
    description: 'Heavy-duty 5-inch rivet hinge for robust applications.',
    description_hi: 'मजबूत अनुप्रयोगों के लिए हेवी-ड्यूटी 5-इंच रिवेट हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Rivet+Hinge+5%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'RH-5-S',
        size: '5 Inch',
        length: '125 mm',
        width: '90 mm',
        thickness: '4.5 mm',
        weight: '550-600 gm'
      }
    ]
  },
  {
    id: 'rivet-6-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 6 Inch',
    name_hi: 'M.S. रिवेट हिंज 6 इंच',
    description: 'Extra strong 6-inch rivet hinge for industrial use.',
    description_hi: 'औद्योगिक उपयोग के लिए अतिरिक्त मजबूत 6-इंच रिवेट हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Rivet+Hinge+6%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'RH-6-S',
        size: '6 Inch',
        length: '150 mm',
        width: '96 mm',
        thickness: '4.5 mm',
        weight: '700 gm'
      }
    ]
  },

  // --- T Hinges ---
  {
    id: 't-hinge-4-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 4 Inch',
    name_hi: 'M.S. टी-हिंज 4 इंच',
    description: '4-inch T-Hinge for light gates and cabinets.',
    description_hi: 'हल्के गेट और कैबिनेट के लिए 4-इंच टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+4%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-4',
        size: '4 Inch',
        length: '100 mm',
        width: '70 mm',
        thickness: '2.5 mm',
        weight: '170 gm'
      }
    ]
  },
  {
    id: 't-hinge-5-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 5 Inch',
    name_hi: 'M.S. टी-हिंज 5 इंच',
    description: '5-inch T-Hinge for general utility.',
    description_hi: 'सामान्य उपयोग के लिए 5-इंच टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+5%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-5',
        size: '5 Inch',
        length: '125 mm',
        width: '100 mm',
        thickness: '2.5 mm',
        weight: '200 gm'
      }
    ]
  },
  {
    id: 't-hinge-6-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 6 Inch',
    name_hi: 'M.S. टी-हिंज 6 इंच',
    description: '6-inch T-Hinge for medium-weight gates.',
    description_hi: 'मध्यम वजन वाले गेटों के लिए 6-इंच टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+6%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-6',
        size: '6 Inch',
        length: '150 mm',
        width: '100 mm',
        thickness: '2.5 mm',
        weight: '250 gm'
      }
    ]
  },
  {
    id: 't-hinge-8-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 8 Inch',
    name_hi: 'M.S. टी-हिंज 8 इंच',
    description: '8-inch T-Hinge for larger doors and gates.',
    description_hi: 'बड़े दरवाजों और गेटों के लिए 8-इंच टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+8%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-8',
        size: '8 Inch',
        length: '200 mm',
        width: '125 mm',
        thickness: '2.5 mm',
        weight: '310 gm'
      }
    ]
  },
  {
    id: 't-hinge-10-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 10 Inch',
    name_hi: 'M.S. टी-हिंज 10 इंच',
    description: '10-inch heavy T-Hinge for substantial support.',
    description_hi: 'पर्याप्त समर्थन के लिए 10-इंच भारी टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+10%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-10',
        size: '10 Inch',
        length: '250 mm',
        width: '150 mm',
        thickness: '2.5 mm',
        weight: '350 gm'
      }
    ]
  },
  {
    id: 't-hinge-12-inch',
    categoryId: 't-hinges',
    name: 'M.S. T Hinges 12 Inch',
    name_hi: 'M.S. टी-हिंज 12 इंच',
    description: '12-inch extra long T-Hinge for heavy barn doors and industrial gates.',
    description_hi: 'भारी खलिहान दरवाजों और औद्योगिक गेटों के लिए 12-इंच अतिरिक्त लंबा टी-हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=T-Hinge+12%22',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'TH-12',
        size: '12 Inch',
        length: '300 mm',
        width: '150 mm',
        thickness: '2.5 mm',
        weight: '400 gm'
      }
    ]
  },

  // --- Butt Hinges ---
  {
    id: 'butt-4-inch',
    categoryId: 'butt-hinges',
    name: 'M.S. Butt Hinges 4 Inch',
    name_hi: 'M.S. बट हिंज 4 इंच',
    description: '4-inch Butt Hinges available in light, medium, and heavy variants for doors.',
    description_hi: 'दरवाजों के लिए हल्के, मध्यम और भारी वेरिएंट में उपलब्ध 4-इंच बट हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Butt+Hinge+4%22',
    variants: [
      {
        variantName: 'Light / Variant 1',
        itemCode: 'BH-4-L',
        size: '4 Inch',
        length: '100 mm',
        width: '57 mm',
        thickness: '1.5 mm',
        weight: '100 gm'
      },
      {
        variantName: 'Medium / Variant 2',
        itemCode: 'BH-4-M',
        size: '4 Inch',
        length: '100 mm',
        width: '57 mm',
        thickness: '1.8 mm',
        weight: '120 gm'
      },
      {
        variantName: 'Heavy / Variant 3',
        itemCode: 'BH-4-H',
        size: '4 Inch',
        length: '100 mm',
        width: '-',
        thickness: '2.5 mm',
        weight: '175 gm'
      }
    ]
  },
  {
    id: 'butt-5-inch',
    categoryId: 'butt-hinges',
    name: 'M.S. Butt Hinges 5 Inch',
    name_hi: 'M.S. बट हिंज 5 इंच',
    description: '5-inch Butt Hinges providing superior strength for heavier doors.',
    description_hi: 'भारी दरवाजों के लिए बेहतर ताकत प्रदान करने वाले 5-इंच बट हिंज।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Butt+Hinge+5%22',
    variants: [
      {
        variantName: 'Light / Variant 1',
        itemCode: 'BH-5-L',
        size: '5 Inch',
        length: '125 mm',
        width: '-',
        thickness: '1.5 mm',
        weight: '150 gm'
      },
      {
        variantName: 'Medium / Variant 2',
        itemCode: 'BH-5-M',
        size: '5 Inch',
        length: '125 mm',
        width: '-',
        thickness: '1.8 mm',
        weight: '180 gm'
      },
      {
        variantName: 'Heavy / Variant 3',
        itemCode: 'BH-5-H',
        size: '5 Inch',
        length: '125 mm',
        width: '-',
        thickness: '2.5 mm',
        weight: '200 gm'
      }
    ]
  },

  // --- Accessories ---
  {
    id: 'outer',
    categoryId: 'accessories',
    name: 'Outer',
    name_hi: 'आउटर (Outer)',
    description: 'High quality Outer plates available in multiple sizes.',
    description_hi: 'कई आकारों में उपलब्ध उच्च गुणवत्ता वाली आउटर प्लेटें।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Outer',
    variants: [
      {
        variantName: '40mm',
        itemCode: 'OUT-40',
        size: '40 mm',
        length: '-',
        width: '-',
        thickness: '-',
        weight: '-'
      },
      {
        variantName: '45mm',
        itemCode: 'OUT-45',
        size: '45 mm',
        length: '-',
        width: '-',
        thickness: '-',
        weight: '-'
      },
      {
        variantName: '50mm',
        itemCode: 'OUT-50',
        size: '50 mm',
        length: '-',
        width: '-',
        thickness: '-',
        weight: '-'
      }
    ]
  },
  {
    id: 'teen-hole-patti',
    categoryId: 'accessories',
    name: 'Teen Hole Patti',
    name_hi: 'तीन होल पट्टी',
    description: 'Durable Teen Hole Patti for fabrication.',
    description_hi: 'फैब्रिकेशन के लिए टिकाऊ तीन होल पट्टी।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Teen+Hole+Patti',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'THP-01',
        size: 'Standard',
        length: '-',
        width: '-',
        thickness: '3mm to 4mm',
        weight: '-'
      }
    ]
  },
  {
    id: 'shutter-kunda',
    categoryId: 'accessories',
    name: 'Shutter Kunda',
    name_hi: 'शटर कुंडा',
    description: 'Heavy duty Shutter Kunda for secure locking.',
    description_hi: 'सुरक्षित लॉकिंग के लिए हेवी ड्यूटी शटर कुंडा।',
    imageUrl: 'https://placehold.co/600x600/f8fafc/1e293b?text=Shutter+Kunda',
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'SK-01',
        size: 'Standard',
        length: '-',
        width: '-',
        thickness: '4mm to 5mm',
        weight: '-'
      }
    ]
  }
];