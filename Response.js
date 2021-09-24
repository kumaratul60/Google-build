//  Mocked response from server

export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - Hello world",
        totalResults: "9910000",
        searchTerms: "Hello world",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "881cb6a774ba8ce7e",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - Hello world",
        totalResults: "9910000",
        searchTerms: "Hello world",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "881cb6a774ba8ce7e",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.382284,
    formattedSearchTime: "0.38",
    totalResults: "9910000",
    formattedTotalResults: "9,910,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Hello World Podcast",
      htmlTitle: "<b>Hello World</b> Podcast",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTc0ZjhmNC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "In Hello World Podcast we will explore a range of topics through the lens of some of our favorite subjects, to include: science, history, books, and art!",
      htmlSnippet:
        "In <b>Hello World</b> Podcast we will explore a range of topics through the lens of some of our favorite subjects, to include: science, history, books, and art!",
      cacheId: "22V0klFNxGMJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWu1r26OBq5XXctzkWOyRSVC8toPypnP6juuLM0LpLM-vfeA",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTc0ZjhmNC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World Podcast",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World Podcast",
            "music:creator": "Hello World Podcast",
            title: "Hello World Podcast",
            "og:description":
              "In Hello World Podcast we will explore a range of topics through the lens of some of our favorite subjects, to include: science, history, books, and art! Plus a ton of fun segments that are sure to keep you on your toes! We hope you enjoy!🌍",
            "twitter:creator": "Hello World Podcast",
            "article:author": "Hello World Podcast",
            "twitter:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWu1r26OBq5XXctzkWOyRSVC8toPypnP6juuLM0LpLM-vfeA",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTc0ZjhmNC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWu1r26OBq5XXctzkWOyRSVC8toPypnP6juuLM0LpLM-vfeA",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The HELLO World Podcast",
      htmlTitle: "The <b>HELLO World</b> Podcast",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjQwOGJlMC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "The HELLO World Podcast. Louie Banta. The HELLO World Podcast. Subscribe. Visit website. We started this podcast with these 3 intentions -- To inform, ...",
      htmlSnippet:
        "The <b>HELLO World</b> Podcast. Louie Banta. The <b>HELLO World</b> Podcast. Subscribe. Visit website. We started this podcast with these 3 intentions -- To inform,&nbsp;...",
      cacheId: "Ktz_seXorXEJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rgRo0aQe4C4sHH856obSSrhhED98v9ctLWgpO-lRlHPdkIU",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjQwOGJlMC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "The HELLO World Podcast",
            "og:site_name": "Google Podcasts",
            "og:title": "The HELLO World Podcast",
            "music:creator": "The HELLO World Podcast",
            title: "The HELLO World Podcast",
            "og:description":
              "We started this podcast with these 3 intentions -- To inform, inspire, and ignite actions.\n\nHosted by Louie Banta, we feature discussions/ interviews related to “H.E.L.L.O.” - which is our acronym for the 5 topics that we talk about every episode.\n\nH - ustle/ Habits of Excellence/ Success\nE - ntrepreneurship\nL - eadership\nL - earning\nO - utlook, Mindsets, Behaviors\n\nBeing a training-consulting company for 15 years, with extensive knowledge and experience in each topic in “H.E.L.L.O.”, we created this podcast to bring “H.E.L.L.O.” closer to the WORLD.\n\nNow on its Season 2!",
            "twitter:creator": "The HELLO World Podcast",
            "article:author": "The HELLO World Podcast",
            "twitter:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rgRo0aQe4C4sHH856obSSrhhED98v9ctLWgpO-lRlHPdkIU",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjQwOGJlMC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rgRo0aQe4C4sHH856obSSrhhED98v9ctLWgpO-lRlHPdkIU",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World-Podcasting with Magdalena",
      htmlTitle: "<b>Hello World</b>-Podcasting with Magdalena",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvMTkyNTgwNC9lcGlzb2Rlcy9mZWVk",
      displayLink: "www.google.com",
      snippet:
        "Hello World podcasting with Magdalena, bringing awareness to our reality for conscious living and co-creating. Information highway platform for Global ...",
      htmlSnippet:
        "<b>Hello World</b> podcasting with Magdalena, bringing awareness to our reality for conscious living and co-creating. Information highway platform for Global&nbsp;...",
      cacheId: "Q2H4Q2bYVSgJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9RrWwoev6Khpu8m6-1PUoi-QJXd7lLJGi5mGfvds9_UnexoeZ",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvMTkyNTgwNC9lcGlzb2Rlcy9mZWVk",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World-Podcasting with Magdalena",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World-Podcasting with Magdalena",
            "music:creator": "Hello World-Podcasting with Magdalena",
            title: "Hello World-Podcasting with Magdalena",
            "og:description":
              "Hello World podcasting with Magdalena, bringing awareness to our reality for conscious living and co-creating. Information highway platform for Global community, living in the 21 century and in the Era of Paradigm shift, by sharing information and views from others that can make a difference in the world and help with personal development and align with inner truth. About my services : life coaching, astrology/an energetic signature can be found on my website\nhttp://internationalwellnessnet.com/",
            "twitter:creator": "Hello World-Podcasting with Magdalena",
            "article:author": "Hello World-Podcasting with Magdalena",
            "twitter:image":
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9RrWwoev6Khpu8m6-1PUoi-QJXd7lLJGi5mGfvds9_UnexoeZ",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvMTkyNTgwNC9lcGlzb2Rlcy9mZWVk",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9RrWwoev6Khpu8m6-1PUoi-QJXd7lLJGi5mGfvds9_UnexoeZ",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! Lets Talk About Coding",
      htmlTitle: "<b>Hello World</b>! Lets Talk About Coding",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xNDVjMDc0Yy9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "Hello World! is a podcast about students in the elementary level who express their opinions and experiences about using coding in the classroom.",
      htmlSnippet:
        "<b>Hello World</b>! is a podcast about students in the elementary level who express their opinions and experiences about using coding in the classroom.",
      cacheId: "rcZYp5q2IsYJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbPE6Sl1zWOvOVGokioltXPzKGMgTx_V8JrvZxk70nbO2ivjU",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xNDVjMDc0Yy9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World! Lets Talk About Coding",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World! Lets Talk About Coding",
            "music:creator": "Hello World! Lets Talk About Coding",
            title: "Hello World! Lets Talk About Coding",
            "og:description":
              "Hello World! is a podcast about students in the elementary level who express their opinions and experiences about using coding in the classroom.",
            "twitter:creator": "Hello World! Lets Talk About Coding",
            "article:author": "Hello World! Lets Talk About Coding",
            "twitter:image":
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbPE6Sl1zWOvOVGokioltXPzKGMgTx_V8JrvZxk70nbO2ivjU",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xNDVjMDc0Yy9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbPE6Sl1zWOvOVGokioltXPzKGMgTx_V8JrvZxk70nbO2ivjU",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World Podcast",
      htmlTitle: "<b>Hello World</b> Podcast",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zOGE4NGYyMC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "Hello World Podcast. Joshua Karickal. Hello World Podcast. Subscribe. Visit website. It is about me introducing myself to the world. Available episodes.",
      htmlSnippet:
        "<b>Hello World</b> Podcast. Joshua Karickal. <b>Hello World</b> Podcast. Subscribe. Visit website. It is about me introducing myself to the world. Available episodes.",
      cacheId: "JL2G8-VeVhUJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW04duxYSbEWjqU2ZOz5IbBdazDl-vbonSjyCf-dEA3oV1UU4",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zOGE4NGYyMC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World Podcast",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World Podcast",
            "music:creator": "Hello World Podcast",
            title: "Hello World Podcast",
            "og:description": "It is about me introducing myself to the world.",
            "twitter:creator": "Hello World Podcast",
            "article:author": "Hello World Podcast",
            "twitter:image":
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW04duxYSbEWjqU2ZOz5IbBdazDl-vbonSjyCf-dEA3oV1UU4",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zOGE4NGYyMC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW04duxYSbEWjqU2ZOz5IbBdazDl-vbonSjyCf-dEA3oV1UU4",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World It's Me",
      htmlTitle: "<b>Hello World</b> It&#39;s Me",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "The world has evolved into a struggle between what's good and what's right. Join me every Sunday as I breakdown controversial issues about culture, ...",
      htmlSnippet:
        "The <b>world</b> has evolved into a struggle between what&#39;s good and what&#39;s right. Join me every Sunday as I breakdown controversial issues about culture,&nbsp;...",
      cacheId: "UloBJWbhVwcJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World It's Me",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World It's Me",
            "music:creator": "Hello World It's Me",
            title: "Hello World It's Me",
            "og:description":
              "The world has evolved into a struggle between what's good and what's right.\nJoin me every Sunday as I breakdown controversial issues about culture, politics and race.\nSo if you are a person who cares about the world around them and wants informed opinions this podcast is for you.",
            "twitter:creator": "Hello World It's Me",
            "article:author": "Hello World It's Me",
            "twitter:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! I Exist.",
      htmlTitle: "<b>Hello World</b>! I Exist.",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9jNDE4ZDQ4L3BvZGNhc3QvcnNz",
      displayLink: "www.google.com",
      snippet:
        "Sep 27, 2019 ... Hello World! I Exist. Subscribe. Visit website. In which I create a podcast focused on creating a positive digital footprint.",
      htmlSnippet:
        "Sep 27, 2019 <b>...</b> <b>Hello World</b>! I Exist. Subscribe. Visit website. In which I create a podcast focused on creating a positive digital footprint.",
      cacheId: "cgTct7oxdiEJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIALdvVj8WUTzCgniKf1j2ZT_aLYJ3S7hItvoRgl8S-KcAQ_c",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNDE4ZDQ4L3BvZGNhc3QvcnNz",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hello World! I Exist.",
            "og:site_name": "Google Podcasts",
            "og:title": "Hello World! I Exist.",
            "music:creator": "Hello World! I Exist.",
            title: "Hello World! I Exist.",
            "og:description":
              "In which I create a podcast focused on creating a positive digital footprint.",
            "twitter:creator": "Hello World! I Exist.",
            "article:author": "Hello World! I Exist.",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIALdvVj8WUTzCgniKf1j2ZT_aLYJ3S7hItvoRgl8S-KcAQ_c",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9jNDE4ZDQ4L3BvZGNhc3QvcnNz",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIALdvVj8WUTzCgniKf1j2ZT_aLYJ3S7hItvoRgl8S-KcAQ_c",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World Shopping",
      htmlTitle: "<b>Hello World</b> Shopping",
      link: "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it",
      displayLink: "www.google.com",
      snippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...",
      htmlSnippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...",
      cacheId: "q0-peCHq4tIJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            name: "Hello World Shopping",
            description: "Hello World Shopping",
            url: "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World Shopping",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World Shopping",
            "og:title": "Hello World Shopping",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:description": "Hello World Shopping",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! Processing",
      htmlTitle: "<b>Hello World</b>! Processing",
      link: "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      htmlSnippet:
        "<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      cacheId: "LkrfSTqN6ZAJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            name: "Hello World! Processing",
            description: "Hello World! Processing",
            url: "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World! Processing",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World! Processing",
            "og:title": "Hello World! Processing",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:description": "Hello World! Processing",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "https://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "y14FcUQOGl4J",
      formattedUrl: "https://www.google.com/",
      htmlFormattedUrl: "https://www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
  ],
};
