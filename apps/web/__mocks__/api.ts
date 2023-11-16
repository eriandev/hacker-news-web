import type { APINewsResponse } from '@/types/api'

export const mockAPIResponse: APINewsResponse = {
  exhaustive: {
    nbHits: false,
    typo: false
  },
  exhaustiveNbHits: false,
  exhaustiveTypo: false,
  hits: [
    {
      _highlightResult: {
        author: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'Lazare'
        },
        comment_text: {
          fullyHighlighted: false,
          matchLevel: 'full',
          matchedWords: [
            'svelte'
          ],
          value: "I have grave reservations about AI art, but...nope, that doesn't follow.<p>It's true that there are a lot of (human) artists in the US. (Something like 80 million, broadly defined.) And it's also true that the art and media each artist views shapes the art they create, including art and media we see quite incidentally - graffiti, ads on bus <em>shelte</em>rs, paintings in the hallways of office buildings. And in the course of the year each of us will view thousands upon thousands of such pieces of art and meida.<p>So if we had a licensing scheme such that every artist had to make a non-negligible payment to the rights holder of every bit of media they view, then artists, collectively, would be liable for hundreds of billions of dollars in royalty payments. 80m aritsts * 1k pieces of media * $5 license fee is $400b; that's just basic math.<p>This calculation is, very obviously, not an argument that all art is theft. It's just some math about a hypothetical licensing scheme, and that's all a18n were doing too.<p>You may think (and I'm inclined to agree) that a human paging through an artist's ArtStation profile is fundamentally different than an LLM using it as training data, but that's an argument <i>not</i> addressed by a18n in that quote."
        },
        story_title: {
          matchLevel: 'none',
          matchedWords: [],
          value: "Confessions of a Startup Founder's Wife"
        },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer'
        }
      },
      _tags: [
        'comment',
        'author_Lazare',
        'story_38274782'
      ],
      author: 'Lazare',
      comment_text: 'I have grave reservations about AI art, but...nope, that doesn&#x27;t follow.<p>It&#x27;s true that there are a lot of (human) artists in the US. (Something like 80 million, broadly defined.) And it&#x27;s also true that the art and media each artist views shapes the art they create, including art and media we see quite incidentally - graffiti, ads on bus shelters, paintings in the hallways of office buildings. And in the course of the year each of us will view thousands upon thousands of such pieces of art and meida.<p>So if we had a licensing scheme such that every artist had to make a non-negligible payment to the rights holder of every bit of media they view, then artists, collectively, would be liable for hundreds of billions of dollars in royalty payments. 80m aritsts * 1k pieces of media * $5 license fee is $400b; that&#x27;s just basic math.<p>This calculation is, very obviously, not an argument that all art is theft. It&#x27;s just some math about a hypothetical licensing scheme, and that&#x27;s all a18n were doing too.<p>You may think (and I&#x27;m inclined to agree) that a human paging through an artist&#x27;s ArtStation profile is fundamentally different than an LLM using it as training data, but that&#x27;s an argument <i>not</i> addressed by a18n in that quote.',
      created_at: '2023-11-16T00:25:44Z',
      created_at_i: 1700094344,
      objectID: '1',
      parent_id: 38277047,
      story_id: 38274782,
      story_title: "Confessions of a Startup Founder's Wife",
      story_url: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer',
      updated_at: '2023-11-16T01:24:57Z'
    },
    {
      _highlightResult: {
        author: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'pdonis'
        },
        comment_text: {
          fullyHighlighted: false,
          matchLevel: 'full',
          matchedWords: [
            'svelte'
          ],
          value: "<i>&gt; Pit bulls were bred for a specific purpose, to fight until death.</i><p>I think you need to learn more about pit bulls. Even Wikipedia [1] recognizes that the reality is more complicated than your simplistic narrative.<p>As for the kid, I have already pointed out in multiple posts elsewhere in this thread that if these people are worried about their kid, they should find the dog another home. If there isn't a friend or neighbor who will take him, they can take him to a <em>shelte</em>r. It's <i>their</i> fault that they brought a kid into their home where the dog had already lived for three years (which, as I have also pointed out elsewhere in this thread, is stressful for any dog, no matter what breed) and didn't manage the situation properly. Instead of making the dog pay for their mistake, they should let him have another chance in another home.<p>[1] <a href=\"https://en.wikipedia.org/wiki/Pit_bull\" rel=\"nofollow noreferrer\">https://en.wikipedia.org/wiki/Pit_bull</a>"
        },
        story_title: {
          matchLevel: 'none',
          matchedWords: [],
          value: "Confessions of a Startup Founder's Wife"
        },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer'
        }
      },
      _tags: [
        'comment',
        'author_pdonis',
        'story_38277774'
      ],
      author: 'Lazare',
      children: [
        38285861
      ],
      comment_text: '<i>&gt; Pit bulls were bred for a specific purpose, to fight until death.</i><p>I think you need to learn more about pit bulls. Even Wikipedia [1] recognizes that the reality is more complicated than your simplistic narrative.<p>As for the kid, I have already pointed out in multiple posts elsewhere in this thread that if these people are worried about their kid, they should find the dog another home. If there isn&#x27;t a friend or neighbor who will take him, they can take him to a shelter. It&#x27;s <i>their</i> fault that they brought a kid into their home where the dog had already lived for three years (which, as I have also pointed out elsewhere in this thread, is stressful for any dog, no matter what breed) and didn&#x27;t manage the situation properly. Instead of making the dog pay for their mistake, they should let him have another chance in another home.<p>[1] <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Pit_bull" rel="nofollow noreferrer">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Pit_bull</a>',
      created_at: '2023-11-16T00:25:44Z',
      created_at_i: 1700088158,
      objectID: '2',
      parent_id: 38283249,
      story_id: 38277774,
      story_title: "Confessions of a Startup Founder's Wife",
      story_url: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer',
      updated_at: '2023-11-16T04:44:12Z'
    },
    {
      _highlightResult: {
        author: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'pdonis'
        },
        comment_text: {
          fullyHighlighted: false,
          matchLevel: 'full',
          matchedWords: [
            'svelte'
          ],
          value: '<i>&gt; I would not want to be the owner who had a second kid injured from one specific animal. Fool me once, twice, etc.</i><p>If they are really worried about their kid, they can find the dog another home. Either a friend or neighbor, or take him to a <em>shelte</em>r. Not kill him.<p>As for &quot;fool me&quot;, <i>they</i> were the ones who fooled the <i>dog</i>, by having him in their home for six years and gaining his trust, and then proposing to kill him over something that was really <i>their</i> fault. Bringing a kid into a home where a dog already lives is, as I have already pointed out elsewhere in this thread, stressful for a dog no matter what breed. It was their responsibility to manage that situation. They failed. And now they want the dog to pay for their mistake.'
        },
        story_title: {
          matchLevel: 'none',
          matchedWords: [],
          value: "Confessions of a Startup Founder's Wife"
        },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer'
        }
      },
      _tags: [
        'comment',
        'author_pdonis',
        'story_38277774'
      ],
      author: 'Lazare',
      children: [
        38283795
      ],
      comment_text: '<i>&gt; I would not want to be the owner who had a second kid injured from one specific animal. Fool me once, twice, etc.</i><p>If they are really worried about their kid, they can find the dog another home. Either a friend or neighbor, or take him to a shelter. Not kill him.<p>As for &quot;fool me&quot;, <i>they</i> were the ones who fooled the <i>dog</i>, by having him in their home for six years and gaining his trust, and then proposing to kill him over something that was really <i>their</i> fault. Bringing a kid into a home where a dog already lives is, as I have already pointed out elsewhere in this thread, stressful for a dog no matter what breed. It was their responsibility to manage that situation. They failed. And now they want the dog to pay for their mistake.',
      created_at: '2023-11-16T00:25:44Z',
      created_at_i: 1700087794,
      objectID: '3',
      parent_id: 38283238,
      story_id: 38277774,
      story_title: "Confessions of a Startup Founder's Wife",
      story_url: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer',
      updated_at: '2023-11-16T01:40:56Z'
    },
    {
      _highlightResult: {
        author: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'pdonis'
        },
        comment_text: {
          fullyHighlighted: false,
          matchLevel: 'full',
          matchedWords: [
            'svelte'
          ],
          value: "<i>&gt; Entirely within their rights to do</i><p>Legally, you are correct, they are the owners and the dog is at their mercy. But I feel sorry for the dog who is at the mercy of these people.<p><i>&gt; plenty of folks would argue they would be irresponsible and abusive to their kid to not do it</i><p>The irresponsibility was theirs, for not handling the situation properly when they brought a kid into their home where the dog had already been for, by my count, three years.<p>To make the dog pay with his life for their irresponsibility does not strike me as a good choice.<p>If they can't handle having the dog in the house, and don't have a friend or neighbor who will take him, they can take him to a <em>shelte</em>r who will find him another home. He would still be paying for their irresponsibility, but at least he would get a chance to be with better people."
        },
        story_title: {
          matchLevel: 'none',
          matchedWords: [],
          value: "Confessions of a Startup Founder's Wife"
        },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer'
        }
      },
      _tags: [
        'comment',
        'author_pdonis',
        'story_38277774'
      ],
      author: 'Lazare',
      comment_text: '<i>&gt; Entirely within their rights to do</i><p>Legally, you are correct, they are the owners and the dog is at their mercy. But I feel sorry for the dog who is at the mercy of these people.<p><i>&gt; plenty of folks would argue they would be irresponsible and abusive to their kid to not do it</i><p>The irresponsibility was theirs, for not handling the situation properly when they brought a kid into their home where the dog had already been for, by my count, three years.<p>To make the dog pay with his life for their irresponsibility does not strike me as a good choice.<p>If they can&#x27;t handle having the dog in the house, and don&#x27;t have a friend or neighbor who will take him, they can take him to a shelter who will find him another home. He would still be paying for their irresponsibility, but at least he would get a chance to be with better people.',
      created_at: '2023-11-16T00:25:44Z',
      created_at_i: 1700087673,
      objectID: '4',
      parent_id: 38281981,
      story_id: 38277774,
      story_title: "Confessions of a Startup Founder's Wife",
      story_url: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer',
      updated_at: '2023-11-16T01:39:56Z'
    },
    {
      _highlightResult: {
        author: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'object-a'
        },
        comment_text: {
          fullyHighlighted: false,
          matchLevel: 'full',
          matchedWords: [
            'svelte'
          ],
          value: "CPI includes a lot of stuff that's not in PPI (including <em>shelte</em>r and rent), so it would depend on what the components or drivers of inflation are in the CPI.<p>If owner equivalent rent is moving lower (which it was in October), and if prior inflation was caused by supply chain tightness or higher input costs, than a lower PPI could indicate that supply chain tightness has eased, and goods inflation will head lower or stabilize.<p>It's also worth noting that CPI moves slower than PPI because rents make a pretty big percentage of CPI, and rents move slower than PPI due to how the BLS measures them. It is _a_ leading indicator, but not the _sole_ leading indicator."
        },
        story_title: {
          matchLevel: 'none',
          matchedWords: [],
          value: "Confessions of a Startup Founder's Wife"
        },
        story_url: {
          matchLevel: 'none',
          matchedWords: [],
          value: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer'
        }
      },
      _tags: [
        'comment',
        'author_object-a',
        'story_38280862'
      ],
      author: 'Lazare',
      comment_text: 'CPI includes a lot of stuff that&#x27;s not in PPI (including shelter and rent), so it would depend on what the components or drivers of inflation are in the CPI.<p>If owner equivalent rent is moving lower (which it was in October), and if prior inflation was caused by supply chain tightness or higher input costs, than a lower PPI could indicate that supply chain tightness has eased, and goods inflation will head lower or stabilize.<p>It&#x27;s also worth noting that CPI moves slower than PPI because rents make a pretty big percentage of CPI, and rents move slower than PPI due to how the BLS measures them. It is _a_ leading indicator, but not the _sole_ leading indicator.',
      created_at: '2023-11-16T00:25:44Z',
      created_at_i: 1700087405,
      objectID: '5',
      parent_id: 38281736,
      story_id: 38280862,
      story_title: "Confessions of a Startup Founder's Wife",
      story_url: 'https://www.ledger.com/blog/hacking-adhd-strategies-for-the-modern-developer',
      updated_at: '2023-11-15T22:35:27Z'
    }
  ],
  hitsPerPage: 5,
  nbHits: 8790,
  nbPages: 50,
  page: 0,
  params: 'query=svelte&page=0&advancedSyntax=true&analyticsTags=backend',
  processingTimeMS: 9,
  processingTimingsMS: {
    _request: {
      roundTrip: 14
    },
    afterFetch: {
      format: {
        highlighting: 1,
        total: 1
      },
      merge: {
        total: 2
      },
      total: 2
    },
    fetch: {
      query: 5,
      total: 6
    },
    total: 9
  },
  query: 'svelte',
  serverTimeMS: 9
}
