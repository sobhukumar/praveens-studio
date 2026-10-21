// ==========================================================================
// STORIES.JS — Single Source of Truth for All Portfolio Stories
// ==========================================================================
// To add a new story: copy the object template below, fill in all fields,
// and add it to the STORIES array. The navbar dropdown, portfolio grid and
// story pages are ALL generated from this one file.
//
// Field reference:
//   slug         — URL-safe identifier, e.g. "pallavi-samarth"
//   coupleNames  — Full names, e.g. "Pallavi & Samarth"
//   location     — City or venue, e.g. "Raipur"
//   type         — "wedding" | "pre-wedding"
//   date         — Display date, e.g. "February 2025"
//   description  — ~100-word editorial narrative shown after the photo gallery
//   coverImage   — Cloudinary (or any) URL for the card cover
//   images       — Array of objects { src, alt } for the story gallery
// ==========================================================================

const STORIES = [

  // ─── WEDDING STORIES ────────────────────────────────────────────────────

  {
    slug: 'Chinmay & Priya',
    coupleNames: 'Chinmay & Priya',
    location: 'Bilaspur',
    type: 'wedding',
    date: 'July 1, 2025',
    caption: 'Sacred rituals, trembling marigolds, and a love that Bilaspur will remember for a long time.',
    description: "Every wedding has its own quiet magic, but Chinmay & Priya's celebration in Raipur was woven with an extraordinary grace. From the fragrant marigold mornings of the sacred Haldi to the reverent twilight pheras under a starlit mandap, every fleeting glance between them carried the gentle certainty of a forever promise. As sacred Vedic mantras echoed and floral showers blessed their union, Praveen Studio had the honour of freezing these unscripted whispers, tears of maternal joy, and radiant smiles into timeless heirlooms—capturing not merely rituals, but the deep soul of two families becoming one.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517353/AZ11.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517359/EZ25.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517357/BZ4.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517357/CZ16.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517353/AZ13.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517353/DZ23.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517352/AZ14.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517352/EZ27.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517351/DZ22.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517351/EZ28.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517344/AZ31.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517343/CZ15.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517341/BZ3.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517340/BZ1.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517338/AZ30.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517335/AZ8.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517333/AZ10.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517333/AZ7.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517330/AZ11.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517323/DZ19.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517322/DZ21.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517321/A0.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517320/CZ17_c.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517319/DZ18.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517314/EZ25c.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517310/CZ17.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517308/CZ17c.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517305/BZ33.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517298/D0.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792517298/BZ34.webp', alt: 'Pallavi & Samarth — Sacred Ceremony' },

    ],
  },

  {
    slug: 'Sahil & Heena',
    coupleNames: 'Sahil & Heena',
    location: 'Raipur',
    type: 'wedding',
    date: 'September 23, 2026',
    caption: 'Stolen glances across a rose-lit mandap — Raipur witnessed something quietly beautiful.',
    description: "Under the soft amber glow of Raipur's evening sky, Sahil & Heena's wedding unfolded like poetry in motion. Their celebration was a breathtaking blend of regal heritage and effortless intimacy, where stolen glances across the mandap spoke louder than a thousand words. From the emotional varmala beneath a shower of crimson rose petals to the quiet warmth of their hand-in-hand vows before the sacred fire, every frame tells a story of enduring devotion. Praveen Studio preserved each delicate emotion with artistic honesty, crafting a visual legacy that will whisper their love across generations.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555720/056A7870.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555722/056A7908.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555721/056A7903.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555721/056A6656.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555720/056A7889.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555720/056A7885.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555719/056A7876.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555718/056A6570.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555718/056A6547.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555717/056A6368.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555717/056A6526.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555717/056A6560.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555716/056A6264.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555716/056A6259.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555715/056A6255.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555715/056A6249.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555715/056A6211.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555714/056A6233.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555714/056A6201.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555713/056A7918.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555713/056A6192.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555713/056A6166.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555712/056A6171.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555712/056A7914.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555711/056A7670.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555711/056A7907.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555710/056A7667.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555709/056A7600.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555709/056A7827.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555709/056A7864.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555707/056A7653.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555706/056A6650.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },

      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555706/056A7651.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555705/056A6639.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555705/056A6646.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555704/056A6601.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555703/056A6641.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555702/056A6539.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555700/056A6482.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555699/056A6509.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555699/056A6495.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555699/056A6469.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555698/056A6479.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555696/056A6457.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555696/056A6450.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555695/new_Best.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555695/056A6391.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555694/056A6245.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555694/056A7620.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555694/056A6375.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555693/056A6381.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555691/Best.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555690/056A6216.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555690/056A6214.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555688/056A6174.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555687/056A6189.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555686/056A7681.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555684/056A6632.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555684/056A7643.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555683/056A6451.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555682/056A6489.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792555681/056A6448.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },


    ],
  },

  {
    slug: 'Yogesh & Lata',
    coupleNames: 'Yogesh & Lata',
    location: 'Balodabazar',
    type: 'wedding',
    date: 'january 30, 2026',
    caption: 'Folk rhythms, ancestral blessings, and a father\'s tear that said everything words couldn\'t.',
    description: "Celebrated with boundless heart and joyous traditions in Balodabazar, Yogesh & Lata's wedding was a luminous festival of laughter and heritage. Surrounded by generations of family blessings, the ceremony resonated with heartfelt music, vibrant folk rhythms, and timeless vows. Lata's radiant bridal grace and Yogesh's tender gaze created spontaneous frames of purest love that no choreography could ever replicate. Our cameras moved softly among the celebrations, capturing the sacred fire's warmth, the father's quiet tear, and the ecstatic smiles that marked the beginning of their eternal adventure together.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557145/DSC09993.JPG.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557144/DSC09598.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557143/DSC09583.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557141/DSC09436.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557139/DSC09433.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557137/DSC09222.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557137/DSC09222.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557135/DSC09214.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557133/DSC09212.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557131/DSC09165.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557130/DSC09145.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557129/DSC09140.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557128/DSC08486.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557126/DSC06652_1.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557124/DSC06534.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557122/DSC06304.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557120/DSC06248.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557119/DSC06218.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557118/DSC06183.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557116/DSC06169.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557115/DSC00035.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557113/DSC00021.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557112/DSC09977.JPG.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557111/DSC09587.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557108/DSC09491.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557107/DSC09491_1.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557105/DSC09206.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557104/DSC09179.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557104/DSC08495.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557103/DSC09118_1.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557101/DSC08486_1.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557100/DSC08491.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557096/DSC08340.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557096/DSC06707.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557096/DSC00003.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557094/DSC06666.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557092/DSC06654.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557091/DSC06495.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557091/DSC00118.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557091/DSC06553.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557089/DSC06473.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557085/DSC09472.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557085/DSC00049.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557084/DSC00029.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557084/DSC09415.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557081/DSC09110.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557081/DSC09483.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792557076/DSC00135.webp', alt: 'Heyansh & Bhumika — Twilight Celebration' },
    ],
  },


  // ─── PRE-WEDDING STORIES ─────────────────────────────────────────────────

  {
    slug: 'somesh-shubhangi',
    coupleNames: 'Somesh & Shubhangi',
    location: 'The Green Door,Durg,Chhattishgarh',
    type: 'pre-wedding',
    date: 'March 2025',
    caption: 'Warm afternoon breezes, quiet laughter between steps, and Greendoor bathed in their calmest glow.',
    description: "Amidst the rustic meadows and sun-drenched pathways of The Green Door, Durg, Chhattishgarh, Somesh & Shubhangi's pre-wedding shoot was a tender journey of quiet companionship and effortless laughter. Unburdened by wedding-day rush, they walked hand in hand through golden hour breezes, whispering shared dreams and reveling in the quiet anticipation of their upcoming vows. Our visual narrative embraced soft natural light and genuine, unposed gestures—preserving the fragile, beautiful sweetness of two hearts standing on the threshold of forever.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512606/P34.webp',
    images: [

      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512614/P24.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512608/P19.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512608/P3.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512607/P6.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512606/P18.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512606/P34.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512605/P5.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512605/P9.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512605/P30.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512604/P8.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512603/P4.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512602/P2.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512601/P33.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512602/P2.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512598/P1.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512598/P15.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512595/P10.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512597/P25.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512598/P29.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512594/P13.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512592/P12.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512591/P32.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512585/P28.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512585/P21.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512584/P17.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512583/P20.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512579/P35.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512578/z.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512575/P14.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512571/P26.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512571/P22.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512564/P16.webp', alt: 'Somesh & Shubhangi — Golden Hour' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792512563/P23.webp', alt: 'Somesh & Shubhangi — Golden Hour' },



    ],
  },

  {
    slug: 'Mohit & Nimisha',
    coupleNames: 'Mohit & Nimisha',
    location: 'Banaras',
    type: 'pre-wedding',
    date: 'March 8,2026',
    caption: 'Spontaneous laughter, winding alleyways, and an evening where ancient Banaras softly paused for them.',
    description: "Against the wide boulevards and open skies of Banaras, Mohit & Nimisha shared a modern cinematic pre-wedding story that felt both expansive and deeply personal. Their easy chemistry illuminated every shot—from playful walks in breezy avenues to tender twilight embraces as city lights slowly blinked into life. We focused on capturing the authentic rhythm of their relationship: unfiltered joy, gentle glances, and the quiet comfort of being entirely oneself in the presence of the one you adore.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509953/D21.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510284/D42.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510283/D55.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510282/D43.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510282/D32.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510282/D40.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510280/D52.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510279/D28.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510278/D34.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510278/D16.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510277/D20.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510277/D15.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510276/D23.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510276/D27.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510275/D12.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510274/D9.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510273/D7.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510273/D53.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510273/D46.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510272/D11.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510271/D50.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510271/D8.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510269/D36.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510269/D2.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510268/D39.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510268/D48.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510267/D33.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510266/D26.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510265/D39c.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510265/D29.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510264/D38.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510262/D31.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510259/D19.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792510002/D6.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509954/D4.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509953/D5.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509953/D21.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509952/D1.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509952/D49.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509951/D44.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509951/D37.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509950/D41.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509950/D18.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509949/D35.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509770/D17.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509765/D22.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509765/D14.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509761/D51.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509760/D3.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509760/D10.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509759/D47.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509758/D45.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509758/D13.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509757/D30.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509756/D54.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509756/D25.webp', alt: 'Chinmay & Priya — Timeless Together' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792509756/D24.webp', alt: 'Chinmay & Priya — Timeless Together' },

    ]
  },

  {
    slug: 'Ayush & Rupali',
    coupleNames: 'Ayush & Rupali',
    location: 'Raipur',
    type: 'pre-wedding',
    date: 'September 2026',
    caption: 'Barefoot along the shoreline, sunlit laughter, and the pure comfort of simply belonging together.',
    description: "Along Raipur's sun-kissed coastlines where turquoise waves kiss golden sands, Samarth & Pallavi indulged in a coastal pre-wedding escape filled with breeze, warmth, and unfiltered joy. Far from the busy rhythms of the city, every frame reflects their shared sense of adventure and easy intimacy—splashing in gentle waves, strolling barefoot beneath towering palms, and laughing freely beneath pastel sunset skies. Praveen Studio framed these carefree moments as a timeless prelude to their grand wedding day.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508790/1-4.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508812/508A5732.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508812/508A5909.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508812/508A5722.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508810/7-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508809/4-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508809/508A5926.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508808/508A5920.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508807/4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508805/6-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508805/8-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508805/7-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508804/7.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508803/8.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508803/6.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508801/6-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508800/6-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508800/5-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508799/5-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508797/5-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508797/4-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508797/4-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508795/3-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508795/5.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508794/3-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508794/3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508793/3-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508792/2-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508791/2-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508790/2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508790/2-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508790/1-4.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508790/508A5690.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508788/508A5678.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508788/508A5735.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508786/1-3.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508784/1-2.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792508783/1.webp', alt: 'Samarth & Pallavi — Coastal Breeze' },


    ],
  },

  {
    slug: 'Kaushal & Veena',
    coupleNames: 'Kaushal & Veena',
    location: 'Raipur',
    type: 'pre-wedding',
    date: 'December 25, 2025',
    caption: 'Through forest light and woodland quiet, they found the calmest version of their love.',
    description: "Deep inside the serene forest canopy of Barnawapara, Rishabh & Tanvi's pre-wedding celebration was a tranquil rendezvous with nature and quiet romance. Filtered sunbeams danced through towering sal trees as the couple explored winding woodland trails together. Away from the digital noise, their portraits carry an earthy warmth, gentle stillness, and profound connection that only untouched wilderness can inspire. Each image is a timeless keepsake of love finding its calmest, most poetic expression.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514530/0.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514560/E49.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514558/E62.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514555/E48.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514551/z.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514550/E50.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514544/E36.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514544/E36.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514544/E34.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514541/E15.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514541/D_6.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514541/E19.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514539/E12c_1.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514539/E18.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514537/E16.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514535/D_8.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514535/D_16.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514535/D_10.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514534/D_5.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514532/D_3.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514530/D_13.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514530/E14.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514530/0.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514528/E8.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514525/E7.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514522/E52.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514519/E12c_3_c.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514517/D_17.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514516/E3.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514514/E39.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514510/D_14.webp', alt: 'Rishabh & Tanvi — Forest Romance' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792514507/D_15.webp', alt: 'Rishabh & Tanvi — Forest Romance' },


    ],
  },

  {
    slug: 'Suyash & Neha',
    coupleNames: 'Suyash & Neha',
    location: 'Vizag',
    type: 'pre-wedding',
    date: 'Feb 23, 2026',
    caption: 'Misty ocean air, shared secrets by the tide, and a romance that wrote itself in Vizag.',
    description: "Before the mighty roar and misty spray of Chitrakote Falls, Aditya & Riya's pre-wedding portraits unfolded with awe-inspiring majesty. Known as the Niagara of India, Chitrakote provided an epic, elemental backdrop for their tender love story. The contrast between nature's thunderous cascade and their gentle, whispered laughter resulted in photographs that are both dramatically cinematic and intimately personal. Praveen Studio captured this unforgettable adventure, immortalizing their romance against one of Chhattisgarh's greatest natural wonders.",
    coverImage: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513393/E31.webp',
    images: [
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513400/E37.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513398/E32.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513395/E36.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513394/E35.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513394/E22.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513393/E31.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513393/E27.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513392/E33.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513392/E28.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513390/E25.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513389/E16.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513389/E23.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513389/E24.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513388/E13.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513388/E20.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513387/E21.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513386/E19.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513386/E8.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513385/E14.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513385/E10.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513384/E34.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513384/E3.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513384/E11.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513383/E1.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513383/E9.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513382/E6.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513381/E7.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513380/E30.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513380/E5.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513380/E2.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513379/bbb.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513378/0.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513377/bb.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513377/E29.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513377/b.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513375/E26.webp', alt: 'Aditya & Riya — Majestic Cascade' },
      { src: 'https://res.cloudinary.com/ew4jkfow/image/upload/v1792513374/E18.webp', alt: 'Aditya & Riya — Majestic Cascade' },

    ],
  },

];

// Helper: get story by slug (handles exact slug, couple names, URL-encoded &, and prefix fallback)
function getStoryBySlug(slug) {
  if (!slug) return null;

  var cleanSlug = '';
  try {
    cleanSlug = decodeURIComponent(slug).trim().toLowerCase();
  } catch (e) {
    cleanSlug = String(slug).trim().toLowerCase();
  }

  function normalize(str) {
    return (str || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
  }

  var normTarget = normalize(cleanSlug);

  // 1. Direct match on slug
  var found = STORIES.find(function (s) {
    return s.slug && s.slug.trim().toLowerCase() === cleanSlug;
  });
  if (found) return found;

  // 2. Direct match on coupleNames
  found = STORIES.find(function (s) {
    return s.coupleNames && s.coupleNames.trim().toLowerCase() === cleanSlug;
  });
  if (found) return found;

  // 3. Normalized / slugified match (matches "sahil-heena", "sahil & heena", "sahilandheena")
  found = STORIES.find(function (s) {
    return normalize(s.slug) === normTarget || normalize(s.coupleNames) === normTarget;
  });
  if (found) return found;

  // 4. Fallback: Prefix / split match (in case unencoded & was split by URL parser, e.g. "Sahil " matches "Sahil & Heena")
  var firstWord = cleanSlug.split(/[\s&_-]+/)[0];
  if (firstWord && firstWord.length >= 3) {
    found = STORIES.find(function (s) {
      var sSlug = (s.slug || '').trim().toLowerCase();
      var sNames = (s.coupleNames || '').trim().toLowerCase();
      return sSlug.indexOf(firstWord) === 0 || sNames.indexOf(firstWord) === 0;
    });
    if (found) return found;
  }

  return null;
}

// Helper: get previous story (circular)
function getPrevStory(slug) {
  var story = getStoryBySlug(slug);
  if (!story) return null;
  var idx = STORIES.indexOf(story);
  if (idx === -1) return null;
  return STORIES[(idx - 1 + STORIES.length) % STORIES.length];
}

// Helper: get next story (circular)
function getNextStory(slug) {
  var story = getStoryBySlug(slug);
  if (!story) return null;
  var idx = STORIES.indexOf(story);
  if (idx === -1) return null;
  return STORIES[(idx + 1) % STORIES.length];
}
