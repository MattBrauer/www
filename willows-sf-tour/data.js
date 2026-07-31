const NEIGHBORHOODS = [
  {
    slug: "north-beach",
    name: "North Beach & Telegraph Hill",
    zone: "north",
    vibe: "either",
    tagline: "Beat generation roots, Italian soul",
    history: "San Francisco's Italian immigrant heart since the Gold Rush era. In the 1950s, City Lights Bookstore and Vesuvio Bar made it the nucleus of the Beat movement — Ginsberg, Kerouac, and Ferlinghetti all passed through. The neighborhood retains its village-within-a-city energy.",
    intro: "North Beach is one of my (and to be fair, many others') favorite fun neighborhoods in the City. Its historical, culinary and musical significance are pretty much unmatched by any other neighborhood. The urban hiking opportunities are fantastic, and it's fun to walk around in the day or the evening. The oldest bar in the City (The Saloon) is a tiny blues venue that holds a lot of memories for me. There are probably half a dozen cafes, bars and restaurants that have similar personal significance. (Though I have not spent any time in the strip clubs on Broadway, I appreciate the fact that my step-mom funded the purchase of her first house and her graduate literature degree by working in one of them).",
    /*
    "North Beach is my favorite entry point into SF's layered identity. On the surface it reads as a classic tourist neighborhood — Columbus Avenue, Coit Tower, espresso bars. But spend an afternoon wandering Waverly Place or climbing Telegraph Hill and it reveals something quieter and stranger. The wild parrots nesting on the hill are not a metaphor, but they might as well be. This is a neighborhood that kept its soul through decades of change, and I want you to feel that.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Start at Caffe Trieste", note: "The oldest espresso bar on the West Coast. Sit at a table, order a cappuccino, watch the neighborhood wake up." },
      { time: "10:45 am", stop: "City Lights Bookstore", note: "Browse the basement poetry room. Pick up something by Ferlinghetti or Ginsberg — it'll mean more after you've stood here." },
      { time: "11:15 am", stop: "Vesuvio Bar", note: "Right across the alley. Have a drink even if it's early. Jack Kerouac drank here. Look at the artwork on the walls." },
      { time: "12:00 pm", stop: "Lunch at Molinari Deli", note: "Get a sandwich to go. They've been making them since 1896." },
      { time: "1:00 pm", stop: "Climb Telegraph Hill", note: "Take the Filbert Steps. Stop when you hear the parrots. The view from the top is one of the best in the city." },
      { time: "2:30 pm", stop: "Washington Square Park", note: "Sit for a while. Watch the bocce players, the tai chi practitioners, the dog walkers. This is neighborhood life." }
    ],
    spots: [
      { name: "The Saloon", type: "Club", note: "The oldest bar in San Francisco (c. 1861) and a tiny blues club. I used to see Roy Rogers, Elvin Bishop, Marcia Ball, other luminaries here in the late 80s." },
      { name: "Caffe Trieste", type: "Coffee", note: "Oldest espresso bar on the West Coast. Cash only, no laptop crowd." },
      { name: "City Lights Books", type: "Books", note: "The Beat generation's spiritual home. The basement poetry room is essential." },
      { name: "Vesuvio Bar", type: "Bar", note: "Order the Kerouac. Look at everything on the walls." },
      { name: "Molinari Deli", type: "Food", note: "Italian deli since 1896. Sandwiches only, made to order." },
      { name: "Tony's Pizza Napoletana", type: "Food", note: "Best pizza in the city, full stop. Reserve ahead or wait in line." },
      { name: "Specs' Twelve Adler Museum Café", type: "Bar", note: "A true dive bar with maritime artifacts covering every surface. Cash only." }
    ],
    pairs: "Chinatown (10 min walk south), Embarcadero (20 min walk east)"
  },
  {
    slug: "chinatown",
    name: "Chinatown",
    zone: "east",
    vibe: "daytime",
    tagline: "Oldest Chinatown in North America, dense and alive",
    history: "Established in 1848, this is the oldest Chinatown in North America and was the entry point for generations of Chinese immigrants. It survived the 1906 earthquake and subsequent attempts at forced relocation. Today it's one of the most densely populated urban districts in the US.",
    intro: "",
    /**/
    intro: "Most people walk down Grant Avenue, buy a snow globe, and think they've seen Chinatown. I want to take you to Stockton Street instead — the street that actually feeds the neighborhood, packed with produce vendors, dried seafood shops, and people doing their weekly shopping. Chinatown rewards the person who slows down and pays attention to the details: the paper offerings hung outside doorways, the sound of Cantonese through a half-open window, the fortune cookie factory tucked into a narrow alley. There's 175 years of survival and adaptation packed into six blocks.",
    /**/
    itinerary: [
      { time: "10:00 am", stop: "Enter through the Dragon Gate on Bush St", note: "The formal entrance. Stop and look at it properly — then walk through and notice how immediately the city changes." },
      { time: "10:15 am", stop: "Walk Waverly Place", note: "The 'Street of Painted Balconies.' Three tong association buildings and a temple. Look up." },
      { time: "10:45 am", stop: "Golden Gate Fortune Cookie Factory", note: "56 Ross Alley. Small operation, you can watch the cookies being made. Buy a bag." },
      { time: "11:15 am", stop: "Stockton Street", note: "The working street. Walk from Broadway to Sacramento and just observe. This is not for tourists." },
      { time: "12:00 pm", stop: "Dim sum at Good Mong Kok Bakery", note: "Cash only, no frills, exceptional. Go early or there's a line." },
      { time: "1:30 pm", stop: "Ten Ren Tea", note: "Pick a tea you've never tried, ask for a sample, buy a small bag." }
    ],
    spots: [
      { name: "Good Mong Kok Bakery", type: "Food", note: "The best dim sum per dollar in the city. Cash only, bring patience." },
      { name: "Golden Gate Fortune Cookie Factory", type: "Experience", note: "56 Ross Alley — easy to miss. One of the few remaining fortune cookie factories." },
      { name: "Ten Ren Tea", type: "Shopping", note: "Serious tea shop. The staff will help you find something if you tell them what you like." },
      { name: "R&G Lounge", type: "Food", note: "Old-school Cantonese. Order the salt and pepper crab." },
      { name: "Hing Lung Market", type: "Market", note: "Real neighborhood grocery. Not curated for outsiders." },
      { name: "Tien Hou Temple", type: "Landmark", note: "Fourth floor of 125 Waverly Place. One of the oldest Chinese temples in the US." }
    ],
    pairs: "North Beach (10 min walk north), Union Square (5 min east)"
  },
  {
    slug: "castro",
    name: "The Castro",
    zone: "south",
    vibe: "either",
    tagline: "Heart of LGBTQ+ America, enduring and proud",
    history: "Transformed in the late 1960s–70s as LGBTQ+ residents built one of the first openly gay neighborhoods in the world. Harvey Milk was elected from here in 1977. The AIDS crisis hit the Castro devastatingly; its legacy of activism and community care shaped modern LGBTQ+ rights movements globally.",
    intro: "",
    /**/
        intro: "The Castro is one of the most historically significant neighborhoods in America and I want you to feel that weight alongside the joy. Harvey Milk's camera shop was on Castro Street. The Names Project AIDS Memorial Quilt was organized here. And on any given weekend evening, it's also one of the most alive, warm, and celebratory places in the city. The GLBT History Museum is small but worth an hour — it'll give you context that makes the rest of the neighborhood hit differently. Then walk up to Twin Peaks for the view.",
    /**/
    itinerary: [
      { time: "11:00 am", stop: "Harvey Milk Plaza and the Rainbow Flag", note: "Start here. Read the plaque. The flag is enormous and intentional." },
      { time: "11:30 am", stop: "GLBT Historical Society Museum", note: "Small but essential. An hour here reframes everything else." },
      { time: "1:00 pm", stop: "Lunch on Castro Street", note: "Lots of options. Sit outside if the weather allows — people-watching is the point." },
      { time: "2:30 pm", stop: "Castro Theatre", note: "Walk in even if nothing is playing. The interior is a 1922 movie palace. Look at the ceiling." },
      { time: "3:00 pm", stop: "Twin Peaks", note: "Drive or walk up. The 360° view is among the best in SF. Go at golden hour if possible." },
      { time: "5:00 pm", stop: "Evening on 18th & Castro", note: "The social center of the neighborhood. Have a drink, watch the city." }
    ],
    spots: [
      { name: "Castro Theatre", type: "Landmark", note: "1922 movie palace. Check their schedule — they show classics and host events." },
      { name: "GLBT Historical Society Museum", type: "Museum", note: "Essential context for the neighborhood. Small and well-curated." },
      { name: "Twin Peaks Tavern", type: "Bar", note: "The first gay bar with street-facing windows, opened 1972. Historic." },
      { name: "Eureka!", type: "Food", note: "Good burgers, local beers, reliably excellent." },
      { name: "Cliff's Variety", type: "Shopping", note: "Hardware store turned neighborhood institution. Sells everything." },
      { name: "Twin Peaks", type: "Viewpoint", note: "Best 360° view in the city. Worth the climb or drive." }
    ],
    pairs: "Noe Valley (10 min south), Mission (10 min east)"
  },
  {
    slug: "mission",
    name: "Mission District",
    zone: "south",
    vibe: "either",
    tagline: "Latino culture, murals, and the city's best food block",
    history: "Named for Mission Dolores (1776), SF's oldest building. The Mission became a working-class Latino neighborhood through 20th-century immigration and remains culturally anchored there. The mural tradition — particularly on Balmy Alley — is world-class street art of genuine political weight.",
    intro: "",
    /**/
        intro: "The Mission is where I take people when I want them to understand what SF actually is underneath the tech veneer. It's been fighting gentrification for 25 years and the results are complicated and visible on every block — a taqueria next to a $17 cocktail bar next to a community mural that's been there since 1984. Dolores Park on a sunny Saturday is one of the great urban experiences in America. Balmy Alley will make you stop at every gate. And the food on 24th Street is legitimate — not curated, not trendy, just people who've been feeding the neighborhood for decades.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Mission Dolores", note: "The original 1776 mission. The cemetery in the back is quiet and strange. Allow 45 minutes." },
      { time: "11:00 am", stop: "Dolores Park", note: "Sit on the hill facing the city. Observe the social geography of the park — it's its own thing." },
      { time: "12:30 pm", stop: "Lunch on 24th Street", note: "La Taqueria for the definitive Mission burrito. Or Dandelion Chocolate for something completely different." },
      { time: "2:00 pm", stop: "Balmy Alley", note: "Enter from 24th St between Treat and Harrison. Walk slowly. Read the murals as text." },
      { time: "3:00 pm", stop: "Clarion Alley", note: "Between Mission and Valencia. More contemporary and politically charged than Balmy." },
      { time: "4:00 pm", stop: "Valencia Street", note: "The gentrified spine. Walk from 16th to 24th — bookstores, bars, the tension of the neighborhood is visible." }
    ],
    spots: [
      { name: "La Taqueria", type: "Food", note: "James Beard Award winner. The Mission burrito — no rice, properly done." },
      { name: "Tartine Bakery", type: "Food", note: "The afternoon bread comes out around 5pm. The morning buns are worth the trip alone." },
      { name: "Dandelion Chocolate", type: "Food", note: "Bean-to-bar chocolate factory and cafe. The drinking chocolate is exceptional." },
      { name: "Bi-Rite Creamery", type: "Food", note: "The salted caramel with hot fudge. Don't overthink it." },
      { name: "Dog Eared Books", type: "Books", note: "Good independent bookstore on Valencia. Strong used section." },
      { name: "El Rio", type: "Bar", note: "Neighborhood bar since 1977. Outdoor patio, diverse crowd, no attitude." }
    ],
    pairs: "Castro (10 min west), Bernal Heights (adjacent south)"
  },
  {
    slug: "haight-ashbury",
    name: "Haight-Ashbury",
    zone: "central",
    vibe: "daytime",
    tagline: "Summer of Love ground zero, still counterculture",
    history: "The epicenter of the 1967 Summer of Love. Janis Joplin, the Grateful Dead, and Jefferson Airplane all lived within blocks of here. The Victorian housing stock survived the 1906 earthquake, giving the neighborhood its characteristic painted-lady streetscape.",
    intro: "",
    /**/
        intro: "Haight-Ashbury exists in a strange relationship with its own mythology. The summer of 1967 was real, consequential, and also over in about six months. What's left is a neighborhood that has absorbed that history and done something idiosyncratic with it — part nostalgia trip, part actual counterculture, part vintage shopping destination. I find it most interesting as a place to walk and look at the architecture: the Victorians here are some of the best-preserved in the city, and the Grateful Dead house at 710 Ashbury is just... a house on a street, which is somehow more resonant than a monument would be.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Coffee at Flywheel Coffee", note: "Good neighborhood café, not a chain. Wake up before the Haight demands your attention." },
      { time: "10:30 am", stop: "710 Ashbury Street", note: "The Grateful Dead house. Just stand outside and look at it. Note that it's an ordinary Victorian on an ordinary block." },
      { time: "11:00 am", stop: "Haight Street walk from Masonic to Stanyan", note: "Record stores, head shops, vintage clothing, the full spectrum. Amoeba Music is the anchor." },
      { time: "12:30 pm", stop: "Lunch at Cha Cha Cha", note: "Tapas and sangria. Cash only. The fried plantains are non-negotiable." },
      { time: "2:00 pm", stop: "Buena Vista Park", note: "Climb up. Views of the Bay, the bridge, the Marin headlands. Quieter than the street below." },
      { time: "3:30 pm", stop: "Enter Golden Gate Park at Stanyan", note: "Walk the panhandle west. Transition from urban to park." }
    ],
    spots: [
      { name: "Amoeba Music", type: "Shopping", note: "One of the last great record stores in America. Give yourself time." },
      { name: "Cha Cha Cha", type: "Food", note: "Cuban-inspired tapas. The sangria pitcher is the move." },
      { name: "Wasteland", type: "Shopping", note: "The best vintage clothing store in the Haight. Prices are real, selection is exceptional." },
      { name: "Bound Together Anarchist Book Collective", type: "Books", note: "Worker-run since 1976. Exactly what it sounds like. Worth a browse." },
      { name: "Flywheel Coffee", type: "Coffee", note: "Neighborhood institution. Good espresso, no pretension." },
      { name: "Buena Vista Park", type: "Park", note: "Quieter than GG Park, better views. The eucalyptus grove at the top is eerie in fog." }
    ],
    pairs: "Cole Valley (adjacent south), Golden Gate Park (walkable west)"
  },
  {
    slug: "golden-gate-park",
    name: "Golden Gate Park",
    zone: "west",
    vibe: "daytime",
    tagline: "Urban wilderness bigger than Central Park",
    history: "Developed from sand dunes starting in 1870, largely through the vision of superintendent John McLaren who shaped it over 55 years. At 1,017 acres it's significantly larger than Central Park and functions as the lungs of the west side. It hosted the 1894 Midwinter International Exposition.",
    intro: "",
    /**/
        intro: "Golden Gate Park is one of the great achievements of 19th-century landscape design and most people don't give it the time it deserves. The eastern end is busy and curated — museums, gardens, the bison paddock. The western half gets progressively wilder and emptier until you're walking through windswept dunes above Ocean Beach and it feels nothing like a city at all. I'd suggest the museums on a first visit but on subsequent visits, go west. The Japanese Tea Garden and the de Young are the anchors but the park rewards aimless wandering more than anything.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Japanese Tea Garden", note: "Opens at 9am. Go early before the crowds. Sit at the tea house. The moon bridge is the photograph you'll take." },
      { time: "11:30 am", stop: "de Young Museum", note: "The permanent collection is underrated. The rooftop observation tower has the best interior view of the park." },
      { time: "1:30 pm", stop: "Lunch at the Academy Café or picnic on the Music Concourse", note: "The Concourse is a remarkable urban space — surrounded by museums, usually with something happening." },
      { time: "2:30 pm", stop: "Stow Lake", note: "Rent a rowboat or just walk the perimeter. Huntington Falls is the only artificial waterfall in a US city park." },
      { time: "4:00 pm", stop: "Walk west toward the bison paddock", note: "The park changes character completely. By the time you reach the bison you feel genuinely far from the city." },
      { time: "5:00 pm", stop: "End at Ocean Beach", note: "Walk out to the water. Watch the surfers. Feel the wind." }
    ],
    spots: [
      { name: "Japanese Tea Garden", type: "Garden", note: "Oldest public Japanese garden in the US, dating to 1894. Go early." },
      { name: "de Young Museum", type: "Museum", note: "Strong American art collection. The rooftop tower is free and worth it alone." },
      { name: "California Academy of Sciences", type: "Museum", note: "Aquarium, planetarium, and natural history under a living roof. Book ahead." },
      { name: "Stow Lake", type: "Park", note: "Rowboat rentals available. The island in the middle has a waterfall." },
      { name: "Conservatory of Flowers", type: "Garden", note: "Victorian greenhouse from 1879. The tropical room is remarkable in winter." },
      { name: "Bison Paddock", type: "Experience", note: "In the far western end. A genuinely strange and delightful thing to encounter in an urban park." }
    ],
    pairs: "Haight-Ashbury (east entrance), Outer Sunset (south and west)"
  },
  {
    slug: "japantown",
    name: "Japantown & Western Addition",
    zone: "central",
    vibe: "daytime",
    tagline: "One of three surviving Japantowns in the US",
    history: "Japanese immigrants settled here in the early 1900s. The community was devastated when residents were forcibly relocated to internment camps in 1942. Post-war redevelopment further displaced the Black community of the Western Addition. What remains is resilient and intentional.",
    intro: "",
    /**/
        intro: "Japantown carries a complicated history — dispossession, forced removal, redevelopment — and yet it persists as a genuine living neighborhood rather than a theme park. The Japan Center mall is a bit dated in the best possible way. The Fillmore, a block away, was the center of SF's Black music scene — the 'Harlem of the West' — before urban renewal cleared it. Walking between these two histories on the same afternoon is a useful thing to do in a city that tends toward ahistorical cheerfulness.",
    */
    itinerary: [
      { time: "10:30 am", stop: "Peace Plaza and the Peace Pagoda", note: "The five-tiered pagoda was a gift from Japan in 1968. Sit in the plaza and orient yourself." },
      { time: "11:00 am", stop: "Japan Center indoor mall", note: "Not ironic — genuinely good. Kinokuniya Books, Daiso, small restaurants. Spend an hour." },
      { time: "12:30 pm", stop: "Lunch at Marufuku Ramen", note: "The hakata-style tonkotsu is exceptional. Expect a wait." },
      { time: "2:00 pm", stop: "Kabuki Springs & Spa", note: "Community bathhouse with Japanese bathing traditions. Check the gender schedule. Worth planning around." },
      { time: "3:30 pm", stop: "Walk Fillmore Street", note: "From Sutter to Jackson. The jazz history plaques are on the lampposts. Look for them." },
      { time: "4:30 pm", stop: "Fillmore Auditorium", note: "Walk by even if nothing is on. The psychedelic poster art inside the lobby is visible through the doors." }
    ],
    spots: [
      { name: "Marufuku Ramen", type: "Food", note: "Best ramen in SF. Hakata-style tonkotsu. Get there early or expect a wait." },
      { name: "Kinokuniya Books", type: "Books", note: "Japanese language books, art books, manga, stationery. Two floors." },
      { name: "Kabuki Springs & Spa", type: "Wellness", note: "Community bathhouse. Single-sex days alternate — check before going." },
      { name: "Uji Time Dessert", type: "Food", note: "Matcha soft serve and mochi. The best dessert stop in the neighborhood." },
      { name: "Daiso", type: "Shopping", note: "Japanese dollar store. You will spend more than you expect and buy things you didn't know you needed." },
      { name: "Fillmore Auditorium", type: "Music", note: "Historic venue. Check their calendar — if something is on, go." }
    ],
    pairs: "Alamo Square (10 min walk east), Pacific Heights (adjacent north)"
  },
  {
    slug: "alamo-square",
    name: "Alamo Square & NoPa",
    zone: "central",
    vibe: "either",
    tagline: "Painted Ladies, Victorian blocks, and neighborhood restaurants",
    history: "Alamo Square's row of Victorian houses against the skyline is one of SF's most photographed images. The surrounding NoPa (North of the Panhandle) developed in the post-earthquake rebuild of the early 1900s and has become one of the more livable and food-rich areas of the city.",
    intro: "",
    /**/
        intro: "NoPa is the neighborhood I'd live in if I lived in the central city. Divisadero Street has quietly become one of the best restaurant and bar streets in SF — not the most famous, not the most Instagrammed, just consistently excellent. Alamo Square Park is the place to see the Painted Ladies properly, but linger — the park itself has a great view of the downtown skyline and is worth sitting in. The neighborhood feels genuinely residential in a way that some of SF's more famous neighborhoods don't.",
    */
    itinerary: [
      { time: "9:30 am", stop: "Breakfast at Nopa", note: "They do weekend brunch. The ricotta pancakes. Go early, it fills up." },
      { time: "11:00 am", stop: "Alamo Square Park", note: "The Painted Ladies view is from the top of the park, not the bottom. Sit on the bench at the crest." },
      { time: "12:00 pm", stop: "Walk the Victorian blocks around the park", note: "Steiner, Pierce, Hayes. These are the best-preserved Victorian residential blocks in the city." },
      { time: "1:30 pm", stop: "Ritual Coffee on Divisadero", note: "One of SF's best roasters. Sit and watch the Divisadero foot traffic." },
      { time: "2:30 pm", stop: "Browse Divisadero from Oak to Fell", note: "Books, vintage, food shops. The corridor is walkable and dense." },
      { time: "4:00 pm", stop: "Walk the Panhandle toward GG Park", note: "The linear park connecting NoPa to Golden Gate Park. Good for running or just walking." }
    ],
    spots: [
      { name: "Nopa", type: "Food", note: "The neighborhood's anchor restaurant. Open late, wood-fired, excellent cocktails." },
      { name: "Ritual Coffee", type: "Coffee", note: "SF roasting institution. The Divisadero location is the best one to sit in." },
      { name: "Alamo Square Park", type: "Park", note: "The Painted Ladies view is from the upper bench, not the lower lawn." },
      { name: "Bi-Rite Market", type: "Market", note: "The NoPa outpost of the Mission institution. Best prepared foods in a grocery context." },
      { name: "Nopa Cheese", type: "Food", note: "Small cheese shop on Divisadero. Good for picnic assembly." },
      { name: "The Booksmith", type: "Books", note: "Strong events program. One of SF's best independents." }
    ],
    pairs: "Haight-Ashbury (south), Japantown (east)"
  },
  {
    slug: "embarcadero",
    name: "The Embarcadero & Ferry Building",
    zone: "east",
    vibe: "either",
    tagline: "The city's waterfront spine, farmers market, and bay views",
    history: "SF's original industrial waterfront, lined with working piers through the early 20th century. The elevated Embarcadero Freeway was torn down after the 1989 earthquake, opening up the waterfront and catalyzing what's now a premier civic promenade. The Ferry Building dates to 1898.",
    intro: "",
    /**/
        intro: "The Saturday farmers market at the Ferry Building is one of my favorite things in San Francisco. The building itself is beautiful — restored properly after decades of neglect — and the market wraps around the exterior along the waterfront. Farmers, ranchers, bakers, cheese makers, all in conversation with each other and their customers. Come hungry and plan to graze. Then walk the Embarcadero north toward the piers — it's a long, meditative waterfront walk with the Bay on one side and the city's edge on the other.",
    */
    itinerary: [
      { time: "9:00 am", stop: "Ferry Building Farmers Market (Saturday only)", note: "Come hungry. Blue Bottle Coffee is inside. The Acme bread, Cowgirl Creamery, Dirty Girl Produce — work the whole market." },
      { time: "10:30 am", stop: "Ferry Building interior", note: "The permanent vendors: Cowgirl Creamery, Humphry Slocombe, The Slanted Door. The building itself is worth looking at." },
      { time: "12:00 pm", stop: "Walk the Embarcadero north", note: "All the way to Pier 39 if you like, or turn at Pier 7, which has the best bay views of the waterfront." },
      { time: "1:30 pm", stop: "Lunch at Waterbar or Epic Steak", note: "Both have outdoor seating on the water. Oysters and a glass of white wine is the correct order." },
      { time: "3:00 pm", stop: "Exploratorium (Pier 15)", note: "Adults-only evenings on Thursdays. During the day it's for all ages and genuinely excellent." },
      { time: "4:30 pm", stop: "Watch the ferries come and go", note: "From the Ferry Building dock. The late afternoon light on the bay is remarkable." }
    ],
    spots: [
      { name: "Ferry Building Farmers Market", type: "Market", note: "Saturday 8am–2pm. One of the best farmers markets in the country." },
      { name: "Cowgirl Creamery", type: "Food", note: "SF's best cheese shop. The Mt Tam triple cream is essential." },
      { name: "Blue Bottle Coffee", type: "Coffee", note: "The original kiosk location inside the Ferry Building. Their single origins are excellent." },
      { name: "Exploratorium", type: "Museum", note: "Science museum with genuine wonder. Thursday evenings are 18+." },
      { name: "Pier 7", type: "Viewpoint", note: "Best bay view on the Embarcadero. Walk to the end." },
      { name: "Humphry Slocombe", type: "Food", note: "The most creative ice cream in SF. The Secret Breakfast flavor is legendary." }
    ],
    pairs: "Chinatown (15 min walk west), North Beach (20 min walk north)"
  },
  {
    slug: "soma",
    name: "SoMa & Yerba Buena",
    zone: "east",
    vibe: "evening",
    tagline: "Museums, nightlife, and the city's industrial arts district",
    history: "South of Market was SF's working-class and industrial district through most of the 20th century. The 1990s dot-com boom transformed it with offices and nightclubs. It remains a center of SF nightlife and houses the SFMOMA, Yerba Buena Center for the Arts, and several major museums.",
    intro: "",
    /**/
        intro: "SoMa is less a neighborhood in the traditional sense than an accumulation of zones — the museum district around Yerba Buena, the nightlife corridor on Folsom, the design district, the tech offices. SFMOMA is genuinely world-class and perpetually undervisited by locals. Yerba Buena Gardens is a surprising oasis in the middle of it. For evenings, the area around 11th and Folsom has a density of bars and venues that's unmatched in SF. It's not a place I'd send you to wander aimlessly during the day, but with a destination it rewards the visit.",
    */
    itinerary: [
      { time: "11:00 am", stop: "SFMOMA", note: "Plan 2–3 hours. The permanent collection's third floor (photography and works on paper) is exceptional. The building itself is worth studying." },
      { time: "2:00 pm", stop: "Yerba Buena Gardens", note: "The rooftop gardens above the Moscone Center. Surprisingly peaceful. The Martin Luther King waterfall memorial is powerful." },
      { time: "3:00 pm", stop: "Contemporary Jewish Museum", note: "Small but usually has an excellent rotating exhibition. The Daniel Libeskind building is worth seeing." },
      { time: "4:30 pm", stop: "Museum of the African Diaspora", note: "MoAD. One of the most thoughtful museum experiences in SF. Free on the first Tuesday." },
      { time: "6:30 pm", stop: "Dinner at Bix", note: "Supper club atmosphere, excellent cocktails, lives in a Gold Rush-era alley. One of my favorite rooms in the city." },
      { time: "9:00 pm", stop: "Bar hopping on Folsom", note: "The 11th Street corridor. DNA Lounge if there's something on." }
    ],
    spots: [
      { name: "SFMOMA", type: "Museum", note: "World-class modern and contemporary art. The permanent collection is enormous — prioritize." },
      { name: "Bix", type: "Food", note: "Gold Rush-era alley supper club. Order the artichoke dip, order a martini." },
      { name: "Yerba Buena Center for the Arts", type: "Arts", note: "Good contemporary programming. Check what's on before you go." },
      { name: "DNA Lounge", type: "Music", note: "SF's most storied nightclub. Check the calendar." },
      { name: "Museum of the African Diaspora", type: "Museum", note: "MoAD. Thoughtfully programmed and undervisited." },
      { name: "21st Amendment Brewery", type: "Bar", note: "Good beer, large space, accessible. Good starting point for an evening." }
    ],
    pairs: "Financial District (north), Mission (south)"
  },
  {
    slug: "noe-valley",
    name: "Noe Valley",
    zone: "south",
    vibe: "daytime",
    tagline: "Sunny, strollable, and deeply residential",
    history: "Named after Jose de Jesus Noe, the last Mexican alcalde of San Francisco before California statehood. It was farmland into the late 1800s before being subdivided into Victorian and Edwardian blocks. A microclimate makes it one of SF's sunniest spots, reinforcing its community-oriented character.",
    intro: "",
    /**/
        intro: "Noe Valley is the neighborhood that makes you understand why people who can afford to leave San Francisco don't. It has a microclimate that keeps it sunny when the rest of the city is fogged in. 24th Street is a proper main street — a farmers market on Saturdays, independent bookshops, cafes where people actually know each other. It's comfortable in a way that other SF neighborhoods strain to achieve, and the residential streets climbing the hills in each direction are some of the most beautiful in the city.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Saturday Farmers Market on 24th Street (Saturday only)", note: "Smaller than the Ferry Building market but genuinely neighborhood-scale. This is where Noe Valley feeds itself." },
      { time: "10:30 am", stop: "Martha & Bros Coffee", note: "The neighborhood coffee institution. Get a table outside." },
      { time: "11:30 am", stop: "Omnivore Books", note: "Cookbook-only bookstore. Even if you don't cook, it's a remarkable curation." },
      { time: "12:30 pm", stop: "Lunch at Contigo", note: "Spanish tapas. One of the best restaurants in the neighborhood." },
      { time: "2:00 pm", stop: "Walk the residential streets", note: "Go up Sanchez or Castro toward the hilltops. The Victorian and Edwardian houses on the climbing blocks are exceptional." },
      { time: "3:30 pm", stop: "Walk down to Dolores Park", note: "20 minutes south. End the afternoon in the sun." }
    ],
    spots: [
      { name: "La Ciccia", type: "Food", note: "Authentic Sardinian cuisine, recognized by the Academy of Italian Cuisine."},
      { name: "Omnivore Books", type: "Books", note: "Cookbook-only indie bookstore. New, used, and rare. A singular experience." },
      { name: "Martha & Bros Coffee", type: "Coffee", note: "Neighborhood institution. Good espresso, outdoor seating on 24th." },
      { name: "Contigo", type: "Food", note: "Spanish tapas. The pintxos bar at the counter is excellent." },
      { name: "24th Street Cheese Company", type: "Food", note: "Neighborhood cheese shop. Good for picnic assembly." },
      { name: "Noe Valley Bakery", type: "Food", note: "Neighborhood bakery. The morning buns on weekends." },
      { name: "Valley Tavern", type: "Bar", note: "Good neighborhood bar. Comfortable, unpretentious." }
    ],
    pairs: "Castro (10 min north), Glen Canyon Park (adjacent east)"
  },
  {
    slug: "bernal-heights",
    name: "Bernal Heights",
    zone: "south",
    vibe: "daytime",
    tagline: "The hill with the 360° view and the village feel",
    history: "An independent town until annexed by SF in 1870. Bernal Heights avoided heavy development due to its steep terrain, which paradoxically preserved its village character. The hilltop park offers panoramic sightlines from the bay to the ocean.",
    intro: "",
    /**/
        intro: "Bernal Heights is the neighborhood that rewards going slightly off-script. The hilltop park is remarkable — a genuine open hillside in the middle of the city, with coyotes and hawks and a view that takes in everything from the Bay Bridge to the ocean. Cortland Avenue is a proper neighborhood main street, not polished for visitors. And the Hillary Steps at the summit offer the best spontaneous bouldering in SF. It's the neighborhood that most feels like it belongs to the people who live in it.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Coffee on Cortland Avenue", note: "Pinhole Coffee or Good Weather. Sit outside and watch the neighborhood." },
      { time: "10:45 am", stop: "Precita Eyes Mural Arts", note: "The center for SF's mural tradition. They run walking tours of the Mission murals from here." },
      { time: "11:30 am", stop: "Climb to Bernal Heights Park summit", note: "Take any of the paths from Holly Park Circle. The Hillary Steps are on the north face — worth the scramble." },
      { time: "12:30 pm", stop: "Sit at the summit", note: "The 360° view: Bay Bridge, downtown, Twin Peaks, the Bay, the ocean. Bring lunch." },
      { time: "2:00 pm", stop: "Descend and walk Cortland", note: "From Andover to Folsom. Small restaurants, a hardware store, a florist. Real neighborhood commerce." },
      { time: "3:30 pm", stop: "Walk north to Mission", note: "20 minutes through the flats. The transition between neighborhoods is visible in the architecture." }
    ],
    spots: [
      { name: "Bernal Heights Park", type: "Park", note: "The summit has a 360° view. The Hillary Steps on the north face are climbable." },
      { name: "Precita Eyes Mural Arts", type: "Arts", note: "The organization behind SF's mural tradition. Tours available." },
      { name: "Good Weather Bicycle & Coffee", type: "Coffee", note: "Bike shop and café. The combination makes sense here." },
      { name: "Pinhole Coffee", type: "Coffee", note: "Small, neighborhood-feel, excellent espresso." },
      { name: "Hillside Supper Club", type: "Food", note: "Neighborhood restaurant, good cocktails, reliable." },
      { name: "Holy Land Market", type: "Market", note: "Middle Eastern market on Cortland. Excellent for pantry items and lunch supplies." }
    ],
    pairs: "Mission (adjacent north), Noe Valley (northwest)"
  },
  {
    slug: "richmond",
    name: "Inner Richmond",
    zone: "west",
    vibe: "daytime",
    tagline: "Fog, dim sum, Russian history, and the park's north edge",
    history: "The Richmond developed alongside Golden Gate Park as the city pushed west through the dunes. It became home to Russian immigrants fleeing the Revolution, then waves of Chinese and Southeast Asian immigrants — layers still visible in the food scene and the Russian Orthodox Cathedral.",
    intro: "",
    /**/
        intro: "The Richmond is where SF locals eat. Clement Street is a working food street without tourist markup — dim sum restaurants, Vietnamese pho houses, a Russian deli, a Japanese grocery, a Irish pub that predates the neighborhood's character. Green Apple Books is one of the great independent bookstores in America. And the Lands End trail at the neighborhood's northwestern edge is one of the most dramatic coastal walks in the Bay Area — ruined baths, shipwrecks visible at low tide, and the Golden Gate framed between headlands.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Dim sum on Clement Street", note: "Hong Kong Lounge or Koi Palace. Go early, go hungry, go with an appetite for variety." },
      { time: "11:30 am", stop: "Green Apple Books", note: "Both locations are within a block of each other. The used fiction room in the back of the main store." },
      { time: "1:00 pm", stop: "Walk Clement from 2nd to 10th", note: "The full range of the neighborhood's food culture is visible on this walk." },
      { time: "2:00 pm", stop: "Holy Virgin Cathedral", note: "The Russian Orthodox cathedral at Geary and 26th. The onion domes are visible for blocks. Step inside if it's open." },
      { time: "3:00 pm", stop: "Drive or bus to Lands End", note: "The Sutro Baths ruins first — what's left of a Victorian-era public bathhouse. Then the Lands End trail west toward the bridge." },
      { time: "5:00 pm", stop: "Seal Rock and the view west", note: "The westernmost viewpoint. On a clear day you can see the Farallon Islands. The light is best in late afternoon." }
    ],
    spots: [
      { name: "Green Apple Books", type: "Books", note: "One of the great independent bookstores. Two locations within a block. The used section is exceptional." },
      { name: "Hong Kong Lounge", type: "Food", note: "Excellent dim sum. Arrive early on weekends." },
      { name: "Lands End Trail", type: "Outdoors", note: "Coastal trail from Sutro Baths to the Golden Gate. One of SF's best walks." },
      { name: "Sutro Baths", type: "Landmark", note: "Ruins of a Victorian-era public bathhouse. Dramatic at any time of day, spectacular at sunset." },
      { name: "Holy Virgin Cathedral", type: "Landmark", note: "Russian Orthodox Cathedral. The gilded domes are a neighborhood landmark." },
      { name: "Thanh Long", type: "Food", note: "Vietnamese-Cajun restaurant. The garlic crab is famous and worth it." }
    ],
    pairs: "Golden Gate Park (south), Presidio (north)"
  },
  {
    slug: "presidio",
    name: "The Presidio & Crissy Field",
    zone: "north",
    vibe: "daytime",
    tagline: "Military history, bay views, and one of SF's best walks",
    history: "A military installation for 219 years under three flags — Spanish, Mexican, and American — before being transferred to the National Park Service in 1994. Crissy Field was a military airstrip restored to a tidal marsh in 2001. The transition from army base to park is one of urban America's great civic success stories.",
    intro: "",
    /**/
        intro: "The Presidio is the best argument for the National Park Service. What was a military base for 219 years is now a forest, a marsh, a beach, a trail network, and a collection of repurposed military architecture — all tucked into the northwestern corner of the city with the Golden Gate as a backdrop. The Crissy Field walk is the finest urban waterfront walk I know: you start at the marina, walk through a restored tidal marsh, and end at the base of the Golden Gate Bridge. Do it in the late afternoon when the light comes off the water.",
    */
    itinerary: [
      { time: "9:30 am", stop: "Start at Crissy Field Center", note: "Get oriented. The marsh restoration is visible from the path — look for the egrets and plovers." },
      { time: "10:00 am", stop: "Walk Crissy Field to Fort Point", note: "The full waterfront walk. Fort Point is directly under the bridge. Stand inside and look up at the underside of the span." },
      { time: "11:30 am", stop: "Golden Gate Bridge south tower", note: "Walk out onto the bridge if the weather is good. The views east and west are completely different and both essential." },
      { time: "1:00 pm", stop: "Lunch at Presidio Social Club", note: "In a converted military barracks. Good food, the setting is unlike anywhere else in SF." },
      { time: "2:30 pm", stop: "Walt Disney Family Museum", note: "One of the best biography museums I've encountered. Even if you're ambivalent about Disney, the story is fascinating." },
      { time: "4:00 pm", stop: "Baker Beach", note: "The north end has a dramatic bridge view. Walk south for more privacy." }
    ],
    spots: [
      { name: "Fort Point", type: "Landmark", note: "Civil War-era fort directly under the bridge. The view upward at the span is disorienting and beautiful." },
      { name: "Walt Disney Family Museum", type: "Museum", note: "Serious biography museum, not a Disney store. Genuinely moving." },
      { name: "Presidio Social Club", type: "Food", note: "In a converted military barracks building. Excellent cocktails, good food." },
      { name: "Crissy Field", type: "Outdoors", note: "Restored tidal marsh and waterfront trail. The best urban walk in SF." },
      { name: "Baker Beach", type: "Beach", note: "The north end has the best bridge view from a beach in the city." },
      { name: "Moraga Steps and tiled stairways", type: "Outdoors", note: "The ceramic tile mosaic stairway. Worth the climb." }
    ],
    pairs: "Marina (adjacent east), Richmond (adjacent south)"
  },
  {
    slug: "marina",
    name: "Marina & Cow Hollow",
    zone: "north",
    vibe: "either",
    tagline: "Brunch culture, the bay, and Italianate architecture",
    history: "The Marina was built on fill for the 1915 Panama-Pacific Exposition — the same landfill that liquefied in the 1989 earthquake. Marina homes are recognizable by their Italianate and Mediterranean Revival architecture. Cow Hollow behind it was literally a dairy farming area through the 1890s.",
    intro: "",
    /**/
        intro: "The Marina has a reputation among SF locals as the neighborhood for tech bros and overpriced brunch, and that reputation is not entirely unearned. But it also contains some of the most beautiful architecture in SF, a waterfront green that's one of the best places to watch the bay, and access to the Presidio that makes it an excellent base for a day of exploring. Chestnut Street has good food and a density of people-watching. The Wave Organ at the breakwater is a strange and quietly wonderful acoustic sculpture. And the Palace of Fine Arts is one of the most romantic structures in the city.",
    */
    itinerary: [
      { time: "10:00 am", stop: "Breakfast on Chestnut Street", note: "Mel's, Roam Artisan Burgers, or any of the cafes. The street is at its best in the morning." },
      { time: "11:00 am", stop: "Palace of Fine Arts", note: "Walk around the rotunda. The reflections in the lagoon. Bring a book if you want to linger." },
      { time: "12:00 pm", stop: "Marina Green", note: "Walk the waterfront. The bay view across to Marin is exceptional. Watch the kite flyers." },
      { time: "1:00 pm", stop: "Wave Organ", note: "At the end of the breakwater. Low tide is best. Put your ear to the pipes." },
      { time: "2:00 pm", stop: "Fort Mason Center", note: "Former military port turned arts center. SFMOMA artists gallery, SFJAZZ events, the farmer's market on Sundays." },
      { time: "3:30 pm", stop: "Walk Union Street in Cow Hollow", note: "More residential, older money, good boutiques and restaurants." }
    ],
    spots: [
      { name: "Palace of Fine Arts", type: "Landmark", note: "1915 Exposition survivor. The rotunda and lagoon at any time of day." },
      { name: "Wave Organ", type: "Experience", note: "Acoustic sculpture at the breakwater. Best at high tide. Bring patience." },
      { name: "Fort Mason Center", type: "Arts", note: "Former military port turned arts campus. Check what's on." },
      { name: "Warming Hut", type: "Coffee", note: "Coffee and sandwiches at the Crissy Field end of the Marina Green. Good starting point for a walk." },
      { name: "Izzy's Steaks & Chops", type: "Food", note: "SF institution since 1987. Old school steakhouse on Steiner." },
      { name: "Greens Restaurant", type: "Food", note: "Landmark vegetarian restaurant at Fort Mason with a bay view." }
    ],
    pairs: "Presidio (west), North Beach (east)"
  },
  {
    slug: "outer-sunset",
    name: "Outer Sunset",
    zone: "west",
    vibe: "daytime",
    tagline: "Fog, surf culture, and the city's most underrated restaurant strip",
    history: "Developed in the early 20th century as the city pushed west through the dunes. Long considered a sleepy residential backwater, the Outer Sunset has become a destination in its own right, with a thriving independent restaurant and café scene along Irving and Judah, and a surf culture centered on Ocean Beach.",
    intro: "Unless they're going to the beach, Most San Franciscans think of the Outer Sunset the way they think about Danville. But it has some of the same charms as any beachside town, along with some standout restaurants, bars and shops. This would be fun to do after an overnight at my house, especially in the early Fall when we get our warm season. Also: shorebirds.",
    /**/
        intro: "The Outer Sunset is the SF neighborhood that most surprises people who think they know the city. It's the end of the continent — literally, the last blocks before the Pacific — and it has a quality of light and a pace that feels nothing like downtown. The fog rolls in most afternoons and the wind off the ocean is real. But the restaurant strip along Irving Street has quietly become one of the best in the city, and on a sunny morning (they happen, usually before noon), Ocean Beach is extraordinary. Bring a jacket regardless.",
    /**/
    itinerary: [
      { time: "9:30 am", stop: "Morning walk on Ocean Beach", note: "Go early before the fog burns off — or embrace the fog. The beach at 7am with surfers in the water is a defining SF image." },
      { time: "10:30 am", stop: "Sutro Baths", note: "Walk up from the beach. The ruins of the 1894 public bathhouse are dramatic at any time. The cave at the back." },
      { time: "11:30 am", stop: "Coffee at Andytown", note: "Neighborhood roaster in the Outer Sunset. The Irish Coffee here is excellent even in the morning." },
      { time: "12:30 pm", stop: "Lunch on Irving Street", note: "Outerlands for brunch/lunch (expect a wait, worth it). Or Thanh Long for Vietnamese." },
      { time: "2:30 pm", stop: "Walk Irving from 9th to 25th", note: "The full stretch of the neighborhood's restaurant strip. Look at the surf shops, the bonsai nursery, the strange mix of things." },
      { time: "4:00 pm", stop: "Sunset at Ocean Beach", note: "If the weather cooperates. One of the best sunsets in the Bay Area — the sun drops directly into the Pacific." }
    ],
    spots: [
      { name: "Outerlands", type: "Food", note: "The Sunset's culinary anchor. Seasonal, wood-fired, excellent. Weekend waits are long." },
      { name: "White Cap", type: "Bar", note: "Very nice craft cocktail bar at the ocean-end of Taraval."},
      { name: "Andytown Coffee", type: "Coffee", note: "Neighborhood roaster. The Snowy Plover (sparkling water, Turbinado syrup, espresso) is their signature." },
      { name: "Ocean Beach", type: "Beach", note: "Cold, windy, dramatic, and beautiful. Bring a jacket. The surf is serious." },
      { name: "Sutro Baths", type: "Landmark", note: "Ruins of a 1894 public bathhouse. Free, open always, remarkable." },
      { name: "Java Beach Café", type: "Coffee", note: "At the Great Highway. Surfers, locals, good coffee, casual." },
      { name: "Gus's Community Market", type: "Market", note: "The neighborhood grocery. Good prepared foods section for a picnic." }
    ],
    pairs: "Golden Gate Park (north), Inner Sunset (east)"
  }
];

const MINI_TOURS = [
  {
    slug: "west-portal",
    name: "West Portal",
    zone: "central",
    tagline: "A proper small-town main street inside the city",
    intro: "West Portal is one of those SF neighborhoods that feels like it got misdelivered from somewhere in Marin. It sits at the mouth of the Twin Peaks Tunnel — the portal is literally a feature of the streetscape — and the commercial strip along West Portal Avenue has the unhurried character of a small town main street: an independent bookshop, an old-school candy store, a diner that's been there since your grandparents' era. It's not dramatic. It won't change your life. But on a foggy afternoon with nowhere to be, it's exactly right.",
    spots: [
      { name: "browser books", type: "Books", note: "Small independent bookshop. Carefully curated, genuinely good staff picks." },
      { name: "Squat & Gobble", type: "Food", note: "Crepes and brunch. Reliable, cheerful, exactly what the neighborhood needs." },
      { name: "Chocolate Heaven", type: "Shopping", note: "Old-fashioned candy and chocolate shop. Has been here forever." },
      { name: "West Portal Muni Station", type: "Landmark", note: "The tunnel portal itself is worth a look — trains disappear into the hill. Oddly satisfying." },
      { name: "Out the Door", type: "Food", note: "Good casual Vietnamese from the Slanted Door family. Reliable lunch spot." }
    ],
    pairs: "Forest Hill (adjacent), Twin Peaks (nearby)"
  },
  {
    slug: "pacific-heights",
    name: "Pacific Heights",
    zone: "north",
    tagline: "Old money, grand Victorians, and the best views in the city",
    intro: "Pacific Heights is where San Francisco's old money lives, and the neighborhood shows it in the architecture: Victorians and Edwardians of a scale and ornamentation you don't see elsewhere in the city, on streets that are wide and quiet and maintained with a certain seriousness of purpose. Broadway and Vallejo in the upper blocks have some of the most beautiful residential architecture in California. The views from Broadway looking north across the bay toward Marin are extraordinary. It's not a neighborhood you go to eat or drink — you go to walk and look.",
    spots: [
      { name: "Broadway between Buchanan and Baker", type: "Walk", note: "The finest residential streetscape in SF. Walk slowly and look up." },
      { name: "Alta Plaza Park", type: "Park", note: "Terraced park with bay views. The steps on the north side are a favorite film location." },
      { name: "Fillmore Street (upper)", type: "Walk", note: "From Jackson to Broadway — boutiques, cafes, the better end of Fillmore." },
      { name: "Spreckels Mansion", type: "Landmark", note: "2080 Washington St. The largest private residence in SF. Danielle Steel lives here. Look, don't knock." },
      { name: "Peet's on Fillmore", type: "Coffee", note: "Good perch to sit and watch Pacific Heights go about its day." }
    ],
    pairs: "Japantown (south), Marina (north)"
  },
  {
    slug: "lands-end",
    name: "Lands End",
    zone: "west",
    tagline: "Coastal ruins, shipwrecks, and the city's most dramatic trail",
    intro: "Lands End is technically part of the Golden Gate National Recreation Area rather than a neighborhood, but it deserves its own entry because it's one of the most distinctive places in SF and many people who visit the city never find it. The trail runs along the rocky coast from the Sutro Baths ruins to the Eagle's Point overlook, with views of the Golden Gate, the Marin Headlands, and at low tide, the exposed ribs of ships that wrecked here in the 19th century. The labyrinth on the cliff is a community art installation. The whole thing feels more like Big Sur than San Francisco.",
    spots: [
      { name: "Sutro Baths ruins", type: "Landmark", note: "Start here. The ruins of a 1894 public bathhouse that held six swimming pools. Free, always open." },
      { name: "Lands End Trail", type: "Outdoors", note: "The main trail west from the baths to Eagle's Point. About 1.5 miles. Bring a jacket." },
      { name: "Eagle's Point overlook", type: "Viewpoint", note: "The best view of the Golden Gate from the south shore. The bridge frame between headlands." },
      { name: "Shipwreck viewpoints", type: "Landmark", note: "At low tide look for the metal ribs of the Ohioan and Frank Buck, wrecked in the early 1900s." },
      { name: "Cliff House", type: "Landmark", note: "The building above Sutro Baths has changed hands and concepts recently — check what's operating when you visit." },
      { name: "Louis' Restaurant", type: "Food", note: "Old-school diner above Ocean Beach. The view is worth more than the food, but the food is fine." }
    ],
    pairs: "Inner Richmond (east), Outer Sunset (south)"
  },
  {
    slug: "outer-richmond",
    name: "Outer Richmond",
    zone: "west",
    tagline: "The fog belt's quiet end, where the city runs out of land",
    intro: "The Outer Richmond is where San Francisco stops pretending to be urban and admits it's just a fog-wrapped peninsula pointing into the Pacific. Balboa Street is the main commercial artery here — more modest than Clement, less curated than the Inner Richmond, and better for it. The neighborhood has a significant Russian and Eastern European community (look for the delis and the orthodox churches) alongside a newer layer of Southeast Asian restaurants. At the western end, the Great Highway and Ocean Beach are five minutes away. This is end-of-the-earth SF, in the best sense.",
    spots: [
      { name: "Balboa Street corridor", type: "Walk", note: "From 30th to 40th Ave. The real neighborhood commercial strip — quieter and less polished than Clement." },
      { name: "Cinderella Bakery & Café", type: "Food", note: "Russian bakery on Balboa. The piroshki and the black bread. Has been here since 1953." },
      { name: "Burma Superstar", type: "Food", note: "The original location on Clement St, edge of Outer Richmond. Long waits, worth it. The tea leaf salad." },
      { name: "Coastal Trail to Baker Beach", type: "Outdoors", note: "Walk south from Lands End through the Seacliff neighborhood to Baker Beach. About 2 miles of coastal trail." },
      { name: "Park Chow", type: "Food", note: "Neighborhood restaurant near GG Park. Good burgers, reliable, comfortable." },
      { name: "37th Avenue & Balboa", type: "Landmark", note: "Stand here on a foggy afternoon and look west toward the ocean. This is what the edge of the city feels like." }
    ],
    pairs: "Inner Richmond (east), Lands End (northwest)"
  },
  {
    slug: "cole-valley",
    name: "Cole Valley",
    zone: "central",
    tagline: "A tucked-away village between the Haight and the park",
    intro: "Cole Valley is easy to miss — it sits in a small declivity between the Haight and Twin Peaks, with a main street (Carl Street/Cole Street) that's only a few blocks long. But what blocks they are: a bakery, a café, a bar, a diner, an ice cream shop, all within a short walk of each other, in a neighborhood that feels genuinely insulated from the city around it. The N-Judah streetcar runs through it, which gives it a pleasant urban-village transit energy. Worth a detour when you're coming out of Golden Gate Park.",
    spots: [
      { name: "Reverie Café", type: "Coffee", note: "Small, warm, good coffee. The Cole Valley café." },
      { name: "Zazie", type: "Food", note: "French bistro on Cole. Weekend brunch is a neighborhood institution. The courtyard garden." },
      { name: "Cole Valley Bakery", type: "Food", note: "Simple neighborhood bakery. Good pastries, unpretentious." },
      { name: "Kezar Stadium", type: "Landmark", note: "The old stadium at the edge of GG Park. Catch a local game if something's on." },
      { name: "Parnassus Heights views", type: "Viewpoint", note: "Walk up Belgrave or Shrader above Cole Valley. The views across the city from UCSF territory." }
    ],
    pairs: "Haight-Ashbury (north), Golden Gate Park (west)"
  },
  {
    slug: "potrero-hill",
    name: "Potrero Hill",
    zone: "south",
    tagline: "Sunny, industrial-edge, with views that surprise you",
    intro: "Potrero Hill sits between the Mission and the freeway, overlooking the old industrial waterfront of Dogpatch and the bay. It has a microclimate almost as sunny as Noe Valley, a residential character that's been slowly gentrifying for twenty years, and views from the top that take in the downtown skyline, the bay, and the East Bay hills in one sweep. The design and maker culture that moved into the surrounding industrial spaces has given the hill an interesting creative energy without fully displacing its older neighborhood character. 18th Street is the commercial strip worth walking.",
    spots: [
      { name: "18th Street corridor", type: "Walk", note: "The neighborhood main street. Cafes, a hardware store, restaurants. Walk from Connecticut to Missouri." },
      { name: "Anchor Brewing (historic)", type: "Landmark", note: "The original home of Anchor Steam, America's first craft brewery. The building is still there even if the brewery has changed." },
      { name: "Dogpatch neighborhood (below)", type: "Walk", note: "Walk downhill from Potrero into Dogpatch — the old industrial waterfront reinvented as design studios, restaurants, and breweries." },
      { name: "Connecticut Street views", type: "Viewpoint", note: "From the top of Potrero Hill looking north: the downtown skyline, the bay bridge, the water. Undervisited viewpoint." },
      { name: "Plow", type: "Food", note: "Excellent farm-to-table breakfast and lunch. One of SF's better brunch spots without the SoMa crowds." }
    ],
    pairs: "Mission (west), Dogpatch (east)"
  },
  {
    slug: "glen-park",
    name: "Glen Park",
    zone: "south",
    tagline: "A canyon, a creek, and an unlikely village at the city's geographic center",
    intro: "Glen Park is one of SF's best-kept secrets — a neighborhood built around an actual canyon, with a creek running through it and a BART station that makes it accessible without a car. The village feel of Diamond Street is genuine: a small-town cluster of businesses that serves a neighborhood rather than tourists. Glen Canyon Park behind it is one of the wilder urban spaces in SF — you can walk for an hour on the creek trail and feel entirely out of the city. It's the neighborhood I'd take someone to if I wanted them to understand how strange and varied SF's geography actually is.",
    spots: [
      { name: "Glen Canyon Park", type: "Outdoors", note: "Enter from Elk Street or Bosworth. Follow the creek trail north. One of the city's wildest urban green spaces." },
      { name: "Diamond Street village", type: "Walk", note: "The two-block commercial strip. Glen Park Station Café, the library branch, a hardware store." },
      { name: "Glen Park BART", type: "Transit", note: "One of the deeper BART stations — watch the city disappear as you descend. Good access point from the East Bay." },
      { name: "Gialina", type: "Food", note: "Excellent Neapolitan pizza on Diamond. One of SF's best pizza spots, consistently." },
      { name: "Willows hidden stairs", type: "Walk", note: "The network of public stairways connecting Glen Park to Noe Valley. A walker's secret." }
    ],
    pairs: "Noe Valley (north), Bernal Heights (east)"
  },
  {
    slug: "dogpatch",
    name: "Dogpatch",
    zone: "east",
    tagline: "Industrial waterfront reinvented as SF's design and food district",
    intro: "Dogpatch was a working-class industrial neighborhood through most of the 20th century — shipyards, ironworks, warehouses. The last decade has transformed it into one of SF's most interesting food and design destinations, with the old industrial fabric mostly intact but repurposed. The result is a neighborhood that feels genuinely post-industrial rather than nostalgically themed: the bones are real. Minnesota Street Project is one of the best art gallery spaces in the city. The waterfront trail along the bay gives you a view of the city from an angle most visitors never see.",
    spots: [
      { name: "Minnesota Street Project", type: "Arts", note: "Multi-gallery art space in a converted warehouse. Free, excellent programming, worth a dedicated visit." },
      { name: "Dogpatch Saloon", type: "Bar", note: "Old neighborhood bar that survived the transformation. Unpretentious, cash-friendly, the real thing." },
      { name: "Piccino", type: "Food", note: "Italian café and restaurant. Good coffee, excellent pizza, lovely courtyard." },
      { name: "Third Street corridor", type: "Walk", note: "The main street — a mix of design studios, restaurants, and remnant industrial businesses." },
      { name: "Crane Cove Park", type: "Outdoors", note: "New waterfront park with bay views and the preserved cranes from the old shipyard. The city skyline from the water's edge." }
    ],
    pairs: "Potrero Hill (west), Mission Bay (north)"
  }
];
