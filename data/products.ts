import { Product, Category } from '../types';

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
    description: 'The 3-inch M.S. rivet hinge (kabja) is our compact workhorse for cupboard shutters, small doors and light furniture work. Press-formed at 70 x 68 mm with a tight rivet joint, it comes in two clearly separated weight classes: Light at 1.75 mm thickness (110 gm/pair) for budget furniture work, and Heavy at 2.5 mm (160 gm/pair) where the shutter sees daily use. Both variants come off the same die, so leaf alignment and pin fitment stay identical box after box — the consistency dealers need for repeat counter sales.',
    description_hi: '3 इंच M.S. रिवेट हिंज (कब्जा) अलमारी शटर, छोटे दरवाजों और हल्के फर्नीचर के लिए हमारा कॉम्पैक्ट वर्कहॉर्स है। 70 x 68 mm पर प्रेस-निर्मित, दो वजन श्रेणियों में: लाइट 1.75 mm (110 ग्राम/जोड़ी) और हैवी 2.5 mm (160 ग्राम/जोड़ी)। दोनों वेरिएंट एक ही डाई से बनते हैं, इसलिए हर डिब्बे में लीफ अलाइनमेंट और पिन फिटमेंट एक समान रहती है।',
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
        weight: '160 gm'
      }
    ]
  },
  {
    id: 'rivet-4-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 4 Inch',
    name_hi: 'M.S. रिवेट हिंज 4 इंच',
    description: 'Our best-selling rivet hinge size, the 4-inch M.S. rivet kabja covers the full spread of door work with three weight variants: Light (98 x 62 mm, 3.5 mm, 220 gm), Medium (98 x 68 mm, 4 mm, 350 gm) and Heavy (102 x 82 mm, 4 mm, 400 gm/pair). Fabricators pick the variant by door weight; dealers stock all three from one item family. The riveted pin is peened under press pressure — no play, no rattle, and a swing that stays smooth after years of service on room doors and steel almirahs.',
    description_hi: 'हमारा सबसे ज्यादा बिकने वाला साइज़ — 4 इंच M.S. रिवेट कब्जा तीन वजन वेरिएंट में: लाइट (98 x 62 mm, 3.5 mm, 220 ग्राम), मीडियम (98 x 68 mm, 4 mm, 350 ग्राम) और हैवी (102 x 82 mm, 4 mm, 400 ग्राम/जोड़ी)। फैब्रिकेटर दरवाजे के वजन के हिसाब से वेरिएंट चुनते हैं। प्रेस-पीन्ड रिवेट पिन — न ढीलापन, न आवाज़, सालों तक स्मूथ मूवमेंट।',
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
    description: 'When a standard door hinge starts sagging, the 5-inch M.S. rivet hinge is the fix fabricators reach for. At 125 x 90 mm with a substantial 4.5 mm leaf thickness and 550 gm per pair, it carries solid-core doors, workshop doors and heavy steel frames without opening at the pin. One standard variant, one specification — batch-to-batch weight consistency that lets your fabricator customers quote jobs with confidence. Supplied in bulk packing at factory-direct dealer rates.',
    description_hi: 'जब सामान्य कब्जा झुकने लगे, तो फैब्रिकेटर 5 इंच M.S. रिवेट हिंज चुनते हैं। 125 x 90 mm, 4.5 mm मोटाई और 550 ग्राम/जोड़ी — ठोस दरवाजों, वर्कशॉप डोर और भारी स्टील फ्रेम के लिए। एक स्टैंडर्ड वेरिएंट, एक स्पेसिफिकेशन — हर बैच में समान वजन। फैक्ट्री-डायरेक्ट डीलर रेट पर बल्क पैकिंग में उपलब्ध।',
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
        weight: '550 gm'
      }
    ]
  },
  {
    id: 'rivet-6-inch',
    categoryId: 'rivet-hinges',
    name: 'M.S. Rivet Hinges 6 Inch',
    name_hi: 'M.S. रिवेट हिंज 6 इंच',
    description: 'The largest hinge in our rivet family, the 6-inch M.S. rivet kabja is built for industrial doors, godown gates and fabricated steel doors where failure is not an option. Each hinge measures 150 x 96 mm in 4.5 mm thick MS plate, weighing a full 700 gm per pair. The oversized leaves spread the load across more fastener points, preventing the pull-out failures common with undersized hinges on heavy doors. A slow-moving but high-margin SKU every serious hardware counter should carry.',
    description_hi: 'रिवेट परिवार का सबसे बड़ा साइज़ — 6 इंच M.S. रिवेट कब्जा औद्योगिक दरवाजों, गोदाम गेट और फैब्रिकेटेड स्टील डोर के लिए। 150 x 96 mm, 4.5 mm मोटी MS प्लेट, पूरे 700 ग्राम/जोड़ी। बड़ी लीफ ज्यादा फास्टनर पॉइंट्स पर लोड बांटती है, जिससे भारी दरवाजों पर हिंज उखड़ने की समस्या नहीं होती।',
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
    description: 'Made specifically for welded metal work, the 3-inch M.S. fabrication hinge has clean flat leaves (75 x 45 mm, 1.5 mm) that sit flush against angle and pipe sections for a neat weld bead. At just 60 gm, it suits light fabrication: mesh doors, panel boxes, DB covers and small gates. Because we blank these on power presses rather than shearing, edges are burr-free — your fabricator customers spend zero time on grinding before welding. Sold in bulk counts for fabrication workshops.',
    description_hi: 'वेल्डिंग वाले मेटल काम के लिए बना 3 इंच M.S. फैब्रिकेशन हिंज — साफ फ्लैट लीफ (75 x 45 mm, 1.5 mm) जो एंगल और पाइप सेक्शन पर सीधी बैठती है। सिर्फ 60 ग्राम — जाली दरवाजे, पैनल बॉक्स, DB कवर और छोटे गेट के लिए। पावर प्रेस पर ब्लैंक होने से किनारे बर-फ्री रहते हैं — वेल्डिंग से पहले ग्राइंडिंग की जरूरत नहीं।',
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
    description: 'The 4-inch M.S. fabrication hinge is the standard choice for general welding jobs — grill doors, gates, shutters and structural frames. Leaves measure 100 x 60 mm in 1.5 mm MS at 120 gm per piece, giving welders a generous weld surface while keeping the hinge economical for volume work. Flat, parallel leaves and a true pin line mean gates hang straight the first time. Fabrication units buying monthly get consistent supply and stable pricing directly from our factory in Indore.',
    description_hi: '4 इंच M.S. फैब्रिकेशन हिंज सामान्य वेल्डिंग कामों की स्टैंडर्ड पसंद है — ग्रिल दरवाजे, गेट, शटर और स्ट्रक्चरल फ्रेम। 100 x 60 mm लीफ, 1.5 mm MS, 120 ग्राम प्रति पीस — वेल्डिंग के लिए पर्याप्त सतह, वॉल्यूम काम के लिए किफायती। सीधी, समानांतर लीफ से गेट पहली बार में सीधा लटकता है। इंदौर फैक्ट्री से सीधी सप्लाई।',
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
    description: 'The 3-inch M.S. bolt hinge combines a hinge and locking bolt action in one fitting — the traditional choice for windows, cupboards and small gates across central India. Sized at 68 x 58 mm in 2.5 mm MS (160 gm), it is press-formed for uniform bolt travel so the bolt slides home without force even after painting. A steady counter mover in hardware markets, supplied in dealer packing with consistent finish across every batch.',
    description_hi: '3 इंच M.S. बोल्ट हिंज — हिंज और लॉकिंग बोल्ट एक ही फिटिंग में। खिड़कियों, अलमारियों और छोटे गेटों के लिए पारंपरिक पसंद। 68 x 58 mm, 2.5 mm MS (160 ग्राम), प्रेस-निर्मित समान बोल्ट मूवमेंट — पेंट के बाद भी बोल्ट बिना जोर के चलता है। हार्डवेयर बाजारों में लगातार बिकने वाला आइटम।',
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
    description: 'Built for doors and gates that need built-in bolting, the 4-inch M.S. bolt hinge (100 x 64 mm, 2.5 mm, 200 gm) is the heavier partner to our 3-inch model. The longer leaf gives extra screw points on the frame, while the press-formed bolt channel keeps action smooth through years of monsoon and dust. Popular with door fitters and rural hardware counters alike — order alongside our rivet hinges and kunda to fill a mixed dispatch at one freight.',
    description_hi: 'बिल्ट-इन बोल्टिंग वाले दरवाजों और गेटों के लिए 4 इंच M.S. बोल्ट हिंज (100 x 64 mm, 2.5 mm, 200 ग्राम)। लंबी लीफ से फ्रेम पर ज्यादा स्क्रू पॉइंट, और प्रेस-निर्मित बोल्ट चैनल बारिश-धूल में भी सालों स्मूथ चलता है। डोर फिटर और ग्रामीण हार्डवेयर काउंटर दोनों में लोकप्रिय — रिवेट हिंज और कुंडा के साथ एक ही भाड़े में मंगवाएं।',
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
    description: 'Purpose-built for transport body work, the 2.5-inch M.S. lorry hinge uses an elongated 65 x 160 mm profile in 3.5 mm plate (350 gm) that distributes vibration load along the vehicle body — the reason lorry hinges outlast standard hinges on truck tailgates, container doors and trolley bodies. The extended leaf welds along the body frame line for maximum grip. A specialist SKU with steady demand from body builders and transport workshops, available factory-direct in bulk.',
    description_hi: 'ट्रांसपोर्ट बॉडी वर्क के लिए बना 2.5 इंच M.S. लॉरी हिंज — 65 x 160 mm लंबा प्रोफाइल, 3.5 mm प्लेट (350 ग्राम), जो वाहन बॉडी पर कंपन का लोड बांटता है। ट्रक टेलगेट, कंटेनर डोर और ट्रॉली बॉडी पर सामान्य हिंज से कहीं ज्यादा टिकाऊ। बॉडी बिल्डरों और ट्रांसपोर्ट वर्कशॉप की लगातार मांग वाला स्पेशलिस्ट आइटम।',
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
    description: 'The 4-inch M.S. T-hinge is the entry size in our T-hinge series, made for light gates, cabinet doors and shed shutters. The T-profile (100 mm strap, 70 mm cross plate, 2.5 mm, 170 gm) anchors the long strap to the door panel while the cross plate mounts to the frame — spreading load far better than a butt hinge of equal size on plank-style doors. Press-punched screw holes are countersunk and uniformly spaced across every batch we ship.',
    description_hi: 'T-हिंज सीरीज़ का शुरुआती साइज़ — 4 इंच M.S. T-हिंज हल्के गेट, कैबिनेट दरवाजों और शेड शटर के लिए। T-प्रोफाइल (100 mm स्ट्रैप, 70 mm क्रॉस प्लेट, 2.5 mm, 170 ग्राम) — लंबी स्ट्रैप दरवाजे पर, क्रॉस प्लेट फ्रेम पर, जिससे लोड बराबर बंटता है। हर बैच में प्रेस-पंच किए काउंटरसंक स्क्रू होल, एक समान दूरी पर।',
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
    description: 'A general-utility mover, the 5-inch M.S. T-hinge (125 mm strap, 100 mm plate, 2.5 mm, 200 gm) handles the everyday middle ground: courtyard gates, poultry shed doors, storage room doors and workshop panels. The 125 mm strap reaches across enough door surface to stop plank doors twisting at the hinge line. Dealers typically stock 5-inch and 6-inch together as the fastest-moving pair in the T-hinge range — ask for combined pricing.',
    description_hi: 'सामान्य उपयोग का आइटम — 5 इंच M.S. T-हिंज (125 mm स्ट्रैप, 100 mm प्लेट, 2.5 mm, 200 ग्राम) रोज़मर्रा के कामों के लिए: आंगन के गेट, पोल्ट्री शेड दरवाजे, स्टोर रूम और वर्कशॉप पैनल। 125 mm स्ट्रैप दरवाजे की पर्याप्त सतह पकड़ती है जिससे लकड़ी के दरवाजे हिंज लाइन पर मुड़ते नहीं। डीलर 5 और 6 इंच साथ स्टॉक करते हैं — संयुक्त रेट पूछें।',
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
    description: 'For medium-weight gates, the 6-inch M.S. T-hinge steps the strap up to 150 mm (100 mm cross plate, 2.5 mm, 250 gm) — the size most farm gates, godown doors and compound gates actually need. The longer strap adds two more fastening points along the door, sharply reducing the loosening that undersized hinges suffer on gates slammed daily. Uniform press forming means both hinges in a pair sit at identical angles, so gates hang true without shimming.',
    description_hi: 'मध्यम वजन के गेटों के लिए 6 इंच M.S. T-हिंज — 150 mm स्ट्रैप (100 mm क्रॉस प्लेट, 2.5 mm, 250 ग्राम)। खेत के गेट, गोदाम दरवाजे और कंपाउंड गेट के लिए सही साइज़। लंबी स्ट्रैप से दरवाजे पर दो अतिरिक्त फास्टनिंग पॉइंट मिलते हैं, जिससे रोज़ पटकने वाले गेटों पर ढीलापन नहीं आता। एक समान प्रेस फॉर्मिंग से दोनों हिंज एक ही एंगल पर बैठते हैं।',
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
    description: 'The 8-inch M.S. T-hinge (200 mm strap, 125 mm plate, 2.5 mm, 310 gm) moves into serious gate territory — full-height compound gates, warehouse doors and double-leaf farm gates. At 200 mm, the strap crosses multiple planks or frame members, tying the whole door face into the hinge. This is the size fabricators specify when a customer complains their previous gate has dropped — the fix is almost always a longer strap, not a thicker plate.',
    description_hi: '8 इंच M.S. T-हिंज (200 mm स्ट्रैप, 125 mm प्लेट, 2.5 mm, 310 ग्राम) गंभीर गेटों के लिए — पूरी ऊंचाई के कंपाउंड गेट, वेयरहाउस दरवाजे और डबल-लीफ खेत गेट। 200 mm स्ट्रैप कई पट्टियों या फ्रेम मेंबर को एक साथ बांधती है। जब ग्राहक शिकायत करे कि पुराना गेट झुक गया है, तो फैब्रिकेटर यही साइज़ चुनते हैं — इलाज लंबी स्ट्रैप है, मोटी प्लेट नहीं।',
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
    description: 'With a 250 mm strap and 150 mm cross plate (2.5 mm, 350 gm), the 10-inch M.S. T-hinge carries wide, heavy gates that shorter hinges simply cannot hold square — cattle shed gates, industrial compound gates and wide godown doors. The strap length lets installers reach the second or even third frame member of the gate, which is what keeps a 6-foot-wide gate from sagging at the latch end. Consistent hole spacing across batches makes replacement fitting painless.',
    description_hi: '250 mm स्ट्रैप और 150 mm क्रॉस प्लेट (2.5 mm, 350 ग्राम) वाला 10 इंच M.S. T-हिंज चौड़े, भारी गेटों के लिए — पशु शेड गेट, औद्योगिक कंपाउंड गेट और चौड़े गोदाम दरवाजे। स्ट्रैप की लंबाई गेट के दूसरे-तीसरे फ्रेम मेंबर तक पहुंचती है, जिससे 6 फुट चौड़ा गेट लैच की तरफ नहीं झुकता। हर बैच में समान होल स्पेसिंग से रिप्लेसमेंट फिटिंग आसान।',
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
    description: 'The longest hinge we manufacture, the 12-inch M.S. T-hinge stretches a full 300 mm strap (150 mm plate, 2.5 mm, 400 gm) across barn doors, factory shed doors and oversized industrial gates. At this length the hinge becomes part of the door structure itself, bracing the panel against twist as well as carrying its weight. Demand comes mainly from agricultural belts and industrial estates — a differentiating SKU very few counters stock, which is exactly why yours should.',
    description_hi: 'हमारा सबसे लंबा हिंज — 12 इंच M.S. T-हिंज, पूरे 300 mm स्ट्रैप (150 mm प्लेट, 2.5 mm, 400 ग्राम) के साथ, खलिहान दरवाजों, फैक्ट्री शेड और बड़े औद्योगिक गेटों के लिए। इस लंबाई पर हिंज दरवाजे के ढांचे का हिस्सा बन जाता है — वजन उठाने के साथ पैनल को मुड़ने से भी रोकता है। बहुत कम काउंटर यह साइज़ रखते हैं — इसीलिए आपको रखना चाहिए।',
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
    description: 'The 3-inch M.S. butt hinge (75 x 46 mm, 1.5 mm, 55 gm) is the highest-volume furniture hinge in the market — cupboard doors, cabinet shutters, box lids and light interior doors all run on this size. Precision press forming keeps both leaves dead parallel, so shutters close flush without the gap-and-rub complaints cheap mixed-source hinges cause. Sold in bulk dozens at factory rates; the SKU dealers reorder most often, so we keep it in continuous production.',
    description_hi: '3 इंच M.S. बट हिंज (75 x 46 mm, 1.5 mm, 55 ग्राम) बाजार का सबसे ज्यादा बिकने वाला फर्नीचर हिंज है — अलमारी दरवाजे, कैबिनेट शटर, बॉक्स ढक्कन और हल्के दरवाजे। सटीक प्रेस फॉर्मिंग से दोनों लीफ बिल्कुल समानांतर रहती हैं — शटर बिना गैप या रगड़ के बंद होता है। लगातार उत्पादन में रहने वाला हमारा सबसे रीऑर्डर होने वाला आइटम।',
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
        weight: '55 gm'
      }
    ]
  },
  {
    id: 'butt-4-inch',
    categoryId: 'butt-hinges',
    name: 'M.S. Butt Hinges 4 Inch',
    name_hi: 'M.S. बट हिंज 4 इंच',
    description: 'Our 4-inch M.S. butt hinge comes in three graded variants so dealers can serve every price point from one SKU family: Light (1.5 mm, 100 gm) for cupboards, Medium (1.8 mm, 120 gm) for flush doors, and Heavy (2.5 mm, 175 gm) for solid room doors. All three share the 100 mm leaf length and identical hole pattern, so a fitter can upgrade a customer mid-job without re-marking. Consistent gauge within each variant, batch after batch — the exact thing trader-sourced stock cannot promise.',
    description_hi: 'हमारा 4 इंच M.S. बट हिंज तीन ग्रेडेड वेरिएंट में: लाइट (1.5 mm, 100 ग्राम) अलमारियों के लिए, मीडियम (1.8 mm, 120 ग्राम) फ्लश डोर के लिए, हैवी (2.5 mm, 175 ग्राम) ठोस दरवाजों के लिए। तीनों में 100 mm लीफ और एक जैसा होल पैटर्न — फिटर बिना दोबारा निशान लगाए वेरिएंट बदल सकता है। हर वेरिएंट में, हर बैच में एक समान गेज।',
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
        width: '58 mm',
        thickness: '1.5 mm',
        weight: '100 gm'
      },
      {
        variantName: 'Medium / Variant 2',
        itemCode: 'BH-4-M',
        size: '4 Inch',
        length: '100 mm',
        width: '58 mm',
        thickness: '1.8 mm',
        weight: '120 gm'
      },
      {
        variantName: 'Heavy / Variant 3',
        itemCode: 'BH-4-H',
        size: '4 Inch',
        length: '100 mm',
        width: '58 mm',
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
    description: 'For heavier doors, the 5-inch M.S. butt hinge extends the leaf to 125 mm and again offers three thickness grades: Light (1.5 mm, 150 gm), Medium (1.8 mm, 180 gm) and Heavy (2.5 mm, 200 gm). The Heavy variant is the standard recommendation for solid wood main doors, where thinner hinges wear at the knuckle within a couple of years. Because all our butt hinges come off calibrated dies, the pin line is straight and the swing stays silent — no oiling visits for your customers.',
    description_hi: 'भारी दरवाजों के लिए 5 इंच M.S. बट हिंज — 125 mm लीफ, तीन मोटाई ग्रेड: लाइट (1.5 mm, 150 ग्राम), मीडियम (1.8 mm, 180 ग्राम), हैवी (2.5 mm, 200 ग्राम)। ठोस लकड़ी के मुख्य दरवाजों के लिए हैवी वेरिएंट स्टैंडर्ड सिफारिश है। कैलिब्रेटेड डाई से बनने के कारण पिन लाइन सीधी और मूवमेंट हमेशा शांत रहता है।',
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
        width: '65 mm',
        thickness: '1.5 mm',
        weight: '150 gm'
      },
      {
        variantName: 'Medium / Variant 2',
        itemCode: 'BH-5-M',
        size: '5 Inch',
        length: '125 mm',
        width: '65 mm',
        thickness: '1.8 mm',
        weight: '180 gm'
      },
      {
        variantName: 'Heavy / Variant 3',
        itemCode: 'BH-5-H',
        size: '5 Inch',
        length: '125 mm',
        width: '65 mm',
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
    description: 'M.S. outer plates in three ready sizes — 40 mm, 45 mm and 50 mm — press-punched with clean edges and consistent outer diameter across every batch. Outers are the classic ride-along accessory: they sell with hinges and kunda to the same fabricator, in the same bill. Stocking all three sizes costs little shelf space but saves your customer a trip to another counter. Available in kg packing or count packing, and easily added to any hinge dispatch at no extra freight.',
    description_hi: 'M.S. आउटर प्लेट तीन तैयार साइज़ों में — 40 mm, 45 mm और 50 mm — प्रेस-पंच्ड, साफ किनारे और हर बैच में समान व्यास। आउटर क्लासिक साथ-बिकने वाली एक्सेसरी है: हिंज और कुंडा के साथ उसी फैब्रिकेटर को, उसी बिल में। किलो पैकिंग या गिनती पैकिंग में उपलब्ध — किसी भी हिंज डिस्पैच में बिना अतिरिक्त भाड़े के जुड़ जाता है।',
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
    description: 'Our teen hole patti (3-hole MS strip) is press-punched in 3 mm to 4 mm thickness with holes at uniform spacing — no drill burrs, no off-centre holes, no thickness variation between batches. Fabricators use it across grill work, gate bracing, jointing and general structural fixing, making it one of the highest-turnover accessories at any hardware counter. As the manufacturer we hold raw material stock, so patti pricing stays stable week to week — unlike trader supply that swings with every scrap-market move.',
    description_hi: 'हमारी तीन होल पट्टी 3 से 4 mm मोटाई में प्रेस-पंच्ड है — एक समान दूरी पर होल, न ड्रिल बर, न टेढ़े होल, न बैच-दर-बैच मोटाई का फर्क। ग्रिल वर्क, गेट ब्रेसिंग, जॉइंटिंग और सामान्य फिक्सिंग में इस्तेमाल — हर हार्डवेयर काउंटर की सबसे तेज बिकने वाली एक्सेसरी। निर्माता होने के नाते हम कच्चा माल स्टॉक रखते हैं, इसलिए पट्टी का रेट हफ्ते-दर-हफ्ते स्थिर रहता है।',
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
    description: 'Heavy-duty M.S. shutter kunda formed from 4 mm to 5 mm material — the locking backbone for shop shutters, godown doors and gates. At this thickness the kunda resists the prying and repeated slamming that opens up lighter-gauge imitations within months. Uniform bending and clean weld points across every production batch mean the hasp aligns first time, every time. A must-stock item for any counter serving shop-fitters, supplied factory-direct in bulk alongside our full hinge range.',
    description_hi: '4 से 5 mm मटेरियल से बना हैवी-ड्यूटी M.S. शटर कुंडा — दुकान शटर, गोदाम दरवाजों और गेटों की लॉकिंग का आधार। इस मोटाई पर कुंडा खींच-तान और बार-बार पटकने से नहीं खुलता, जबकि हल्के गेज की नकलें महीनों में ढीली हो जाती हैं। हर बैच में एक समान बेंडिंग और साफ वेल्ड — हैस्प हर बार पहली बार में सही बैठता है।',
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

// One flagship SKU per category, shown as the homepage's curated product lineup.
export const FEATURED_PRODUCT_IDS = [
  'rivet-4-inch',
  'fabrication-4-inch',
  'bolt-4-inch',
  'lorry-2.5-inch',
  't-hinge-6-inch',
  'butt-4-inch',
  'shutter-kunda',
];

export const FEATURED_PRODUCTS: Product[] = FEATURED_PRODUCT_IDS
  .map(id => PRODUCTS.find(p => p.id === id))
  .filter((p): p is Product => Boolean(p));