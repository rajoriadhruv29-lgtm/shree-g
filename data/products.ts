import { Product, Category } from '../types';

// INSTRUCTIONS:
// 1. Create a folder 'public/images/categories' and 'public/images/products'
// 2. Add images with the filenames specified below.
// 3. For multiple images per product, name them like: 'product-name.jpg', 'product-name-2.jpg', 'product-name-3.jpg'

export const CATEGORIES: Category[] = [
  {
    id: 'rivet-hinges',
    title: 'Rivet Hinges / Kabja',
    title_hi: 'रिवेट हिंज / कब्जा',
    description: 'High-quality M.S. Rivet Hinges available in various sizes and heavy-duty variants.',
    description_hi: 'विभिन्न आकारों और भारी-भरकम वेरियंट्स में उपलब्ध उच्च गुणवत्ता वाले M.S. रिवेट हिंज।',
    coverImage: '/images/categories/rivet-hinges.jpg'
  },
  {
    id: 'fabrication-hinges',
    title: 'Fabrication Hinges / Kabja',
    title_hi: 'फैब्रिकेशन हिंज / कब्जा',
    description: 'Specialized fabrication hinges for industrial welding and structural applications.',
    description_hi: 'औद्योगिक वेल्डिंग और संरचनात्मक अनुप्रयोगों के लिए विशेष फैब्रिकेशन हिंज।',
    coverImage: '/images/categories/fabrication-hinges.jpg'
  },
  {
    id: 'bolt-hinges',
    title: 'Bolt Hinges / Kabja',
    title_hi: 'बोल्ट हिंज / कब्जा',
    description: 'Robust Bolt Hinges designed for secure gate and door mounting.',
    description_hi: 'सुरक्षित गेट और दरवाजे की माउंटिंग के लिए डिज़ाइन किए गए मजबूत बोल्ट हिंज।',
    coverImage: '/images/categories/bolt-hinges.jpg'
  },
  {
    id: 'lorry-hinges',
    title: 'Lorry Hinges / Kabja',
    title_hi: 'लॉरी हिंज / कब्जा',
    description: 'Heavy-duty Lorry Hinges for automotive and transport vehicle body applications.',
    description_hi: 'ऑटोमोटिव और परिवहन वाहन बॉडी अनुप्रयोगों के लिए हेवी-ड्यूटी लॉरी हिंज।',
    coverImage: '/images/categories/lorry-hinges.jpg'
  },
  {
    id: 't-hinges',
    title: 'T-Hinges / Kabja',
    title_hi: 'टी-हिंज / कब्जा',
    description: 'Durable T-Hinges for gates, sheds, and barn doors in multiple sizes.',
    description_hi: 'गेट, शेड और खलिहान के दरवाजों के लिए टिकाऊ टी-हिंज, कई आकारों में।',
    coverImage: '/images/categories/t-hinges.jpg'
  },
  {
    id: 'butt-hinges',
    title: 'Butt Hinges / Kabja',
    title_hi: 'बट हिंज / कब्जा',
    description: 'Versatile M.S. Butt Hinges for doors and cabinets.',
    description_hi: 'दरवाजों और अलमारियों के लिए बहुमुखी M.S. बट हिंज।',
    coverImage: '/images/categories/butt-hinges.jpg'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    title_hi: 'एक्सेसरीज',
    description: 'Essential hardware accessories including Outer, Teen Hole Patti, and Shutter Kunda.',
    description_hi: 'आउटर, तीन होल पट्टी, और शटर कुंडा सहित आवश्यक हार्डवेयर एक्सेसरीज।',
    coverImage: '/images/categories/accessories.jpg'
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
    imageUrl: '/images/products/rivet-3-inch.jpg',
    images: [
      '/images/products/rivet-3-inch.jpg',
      '/images/products/rivet-3-inch-2.jpg',
      '/images/products/rivet-3-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/rivet-4-inch.jpg',
    images: [
      '/images/products/rivet-4-inch.jpg',
      '/images/products/rivet-4-inch-2.jpg',
      '/images/products/rivet-4-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/rivet-5-inch.jpg',
    images: [
      '/images/products/rivet-5-inch.jpg',
      '/images/products/rivet-5-inch-2.jpg',
      '/images/products/rivet-5-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/rivet-6-inch.jpg',
    images: [
      '/images/products/rivet-6-inch.jpg',
      '/images/products/rivet-6-inch-2.jpg',
      '/images/products/rivet-6-inch-3.jpg'
    ],
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

  // --- Fabrication Hinges ---
  {
    id: 'fabrication-3-inch',
    categoryId: 'fabrication-hinges',
    name: 'M.S. Fabrication Hinges 3 Inch',
    name_hi: 'M.S. फैब्रिकेशन हिंज 3 इंच',
    description: 'Precision made 3-inch fabrication hinge for light metal works.',
    description_hi: 'हल्के धातु कार्यों के लिए सटीक निर्मित 3-इंच फैब्रिकेशन हिंज।',
    imageUrl: '/images/products/fabrication-3-inch.jpg',
    images: [
      '/images/products/fabrication-3-inch.jpg',
      '/images/products/fabrication-3-inch-2.jpg',
      '/images/products/fabrication-3-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'FH-3',
        size: '3 Inch',
        length: '75 mm',
        width: '45 mm',
        thickness: '1.5 mm',
        weight: '60 gm'
      }
    ]
  },
  {
    id: 'fabrication-4-inch',
    categoryId: 'fabrication-hinges',
    name: 'M.S. Fabrication Hinges 4 Inch',
    name_hi: 'M.S. फैब्रिकेशन हिंज 4 इंच',
    description: 'Standard 4-inch fabrication hinge for general welding applications.',
    description_hi: 'सामान्य वेल्डिंग अनुप्रयोगों के लिए मानक 4-इंच फैब्रिकेशन हिंज।',
    imageUrl: '/images/products/fabrication-4-inch.jpg',
    images: [
      '/images/products/fabrication-4-inch.jpg',
      '/images/products/fabrication-4-inch-2.jpg',
      '/images/products/fabrication-4-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'FH-4',
        size: '4 Inch',
        length: '100 mm',
        width: '60 mm',
        thickness: '1.5 mm',
        weight: '120 gm'
      }
    ]
  },

  // --- Bolt Hinges ---
  {
    id: 'bolt-3-inch',
    categoryId: 'bolt-hinges',
    name: 'M.S. Bolt Hinges 3 Inch',
    name_hi: 'M.S. बोल्ट हिंज 3 इंच',
    description: 'Robust 3-inch bolt hinge providing secure attachment.',
    description_hi: 'सुरक्षित लगाव प्रदान करने वाला मजबूत 3-इंच बोल्ट हिंज।',
    imageUrl: '/images/products/bolt-3-inch.jpg',
    images: [
      '/images/products/bolt-3-inch.jpg',
      '/images/products/bolt-3-inch-2.jpg',
      '/images/products/bolt-3-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'BH-BLT-3',
        size: '3 Inch',
        length: '68 mm',
        width: '58 mm',
        thickness: '2.5 mm',
        weight: '160 gm'
      }
    ]
  },
  {
    id: 'bolt-4-inch',
    categoryId: 'bolt-hinges',
    name: 'M.S. Bolt Hinges 4 Inch',
    name_hi: 'M.S. बोल्ट हिंज 4 इंच',
    description: 'Heavy duty 4-inch bolt hinge for gates and doors.',
    description_hi: 'गेट और दरवाजों के लिए हेवी ड्यूटी 4-इंच बोल्ट हिंज।',
    imageUrl: '/images/products/bolt-4-inch.jpg',
    images: [
      '/images/products/bolt-4-inch.jpg',
      '/images/products/bolt-4-inch-2.jpg',
      '/images/products/bolt-4-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'BH-BLT-4',
        size: '4 Inch',
        length: '100 mm',
        width: '64 mm',
        thickness: '2.5 mm',
        weight: '200 gm'
      }
    ]
  },

  // --- Lorry Hinges ---
  {
    id: 'lorry-2.5-inch',
    categoryId: 'lorry-hinges',
    name: 'M.S. Lorry Hinges 2.5 Inch',
    name_hi: 'M.S. लॉरी हिंज 2.5 इंच',
    description: 'Durable 2.5-inch lorry hinge specially designed for vehicle bodies.',
    description_hi: 'वाहन निकायों के लिए विशेष रूप से डिज़ाइन किया गया टिकाऊ 2.5-इंच लॉरी हिंज।',
    imageUrl: '/images/products/lorry-2.5-inch.jpg',
    images: [
      '/images/products/lorry-2.5-inch.jpg',
      '/images/products/lorry-2.5-inch-2.jpg',
      '/images/products/lorry-2.5-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'LH-2.5',
        size: '2.5 Inch',
        length: '65 mm',
        width: '160 mm',
        thickness: '3.5 mm',
        weight: '350 gm'
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
    imageUrl: '/images/products/t-hinge-4-inch.jpg',
    images: [
      '/images/products/t-hinge-4-inch.jpg',
      '/images/products/t-hinge-4-inch-2.jpg',
      '/images/products/t-hinge-4-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/t-hinge-5-inch.jpg',
    images: [
      '/images/products/t-hinge-5-inch.jpg',
      '/images/products/t-hinge-5-inch-2.jpg',
      '/images/products/t-hinge-5-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/t-hinge-6-inch.jpg',
    images: [
      '/images/products/t-hinge-6-inch.jpg',
      '/images/products/t-hinge-6-inch-2.jpg',
      '/images/products/t-hinge-6-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/t-hinge-8-inch.jpg',
    images: [
      '/images/products/t-hinge-8-inch.jpg',
      '/images/products/t-hinge-8-inch-2.jpg',
      '/images/products/t-hinge-8-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/t-hinge-10-inch.jpg',
    images: [
      '/images/products/t-hinge-10-inch.jpg',
      '/images/products/t-hinge-10-inch-2.jpg',
      '/images/products/t-hinge-10-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/t-hinge-12-inch.jpg',
    images: [
      '/images/products/t-hinge-12-inch.jpg',
      '/images/products/t-hinge-12-inch-2.jpg',
      '/images/products/t-hinge-12-inch-3.jpg'
    ],
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
    id: 'butt-3-inch',
    categoryId: 'butt-hinges',
    name: 'M.S. Butt Hinges 3 Inch',
    name_hi: 'M.S. बट हिंज 3 इंच',
    description: '3-inch Butt Hinges suitable for lightweight doors and cabinets.',
    description_hi: 'हल्के दरवाजों और अलमारियों के लिए उपयुक्त 3-इंच बट हिंज।',
    imageUrl: '/images/products/butt-3-inch.jpg',
    images: [
      '/images/products/butt-3-inch.jpg',
      '/images/products/butt-3-inch-2.jpg',
      '/images/products/butt-3-inch-3.jpg'
    ],
    variants: [
      {
        variantName: 'Standard',
        itemCode: 'BH-3',
        size: '3 Inch',
        length: '75 mm',
        width: '46 mm',
        thickness: '1.5 mm',
        weight: '50-55 gm'
      }
    ]
  },
  {
    id: 'butt-4-inch',
    categoryId: 'butt-hinges',
    name: 'M.S. Butt Hinges 4 Inch',
    name_hi: 'M.S. बट हिंज 4 इंच',
    description: '4-inch Butt Hinges available in light, medium, and heavy variants for doors.',
    description_hi: 'दरवाजों के लिए हल्के, मध्यम और भारी वेरिएंट में उपलब्ध 4-इंच बट हिंज।',
    imageUrl: '/images/products/butt-4-inch.jpg',
    images: [
      '/images/products/butt-4-inch.jpg',
      '/images/products/butt-4-inch-2.jpg',
      '/images/products/butt-4-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/butt-5-inch.jpg',
    images: [
      '/images/products/butt-5-inch.jpg',
      '/images/products/butt-5-inch-2.jpg',
      '/images/products/butt-5-inch-3.jpg'
    ],
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
    imageUrl: '/images/products/outer.jpg',
    images: [
      '/images/products/outer.jpg'
    ],
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
    imageUrl: '/images/products/teen-hole-patti.jpg',
    images: [
      '/images/products/teen-hole-patti.jpg',
      '/images/products/teen-hole-patti-2.jpg',
      '/images/products/teen-hole-patti-3.jpg'
    ],
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
    imageUrl: '/images/products/shutter-kunda.jpg',
    images: [
      '/images/products/shutter-kunda.jpg'
        ],
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
