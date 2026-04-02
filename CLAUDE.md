<skills_system priority="1">

## Available Skills

<!-- SKILLS_TABLE_START -->
<usage>
When users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively. Skills provide specialized capabilities and domain knowledge.

How to use skills:
- Invoke: `skillkit read <skill-name>` or `npx skillkit read <skill-name>`
- The skill content will load with detailed instructions on how to complete the task
- Base directory provided in output for resolving bundled resources (references/, scripts/, assets/)

Usage notes:
- Only use skills listed in <available_skills> below
- Do not invoke a skill that is already loaded in your context
- Each skill invocation is stateless
</usage>

<available_skills>

<skill>
<name>ab-test-setup</name>
<description>When the user wants to plan, design, or implement an A/B test or experiment. Also use when the user mentions &quot;A/B test,&quot; &quot;split test,&quot; &quot;experiment,&quot; &quot;test this change,&quot; &quot;variant copy,&quot; &quot;multivariate test,&quot; &quot;hypothesis,&quot; &quot;should I test this,&quot; &quot;which version is better,&quot; &quot;test two versions,&quot; &quot;statistical significance,&quot; or &quot;how long should I run this test.&quot; Use this whenever someone is comparing two approaches and wants to measure which performs better. For tracking implementation, see analytics-tracking. For page-level conversion optimization, see page-cro.</description>
<location>project</location>
</skill>

<skill>
<name>ad-creative</name>
<description>When the user wants to generate, iterate, or scale ad creative — headlines, descriptions, primary text, or full ad variations — for any paid advertising platform. Also use when the user mentions &apos;ad copy variations,&apos; &apos;ad creative,&apos; &apos;generate headlines,&apos; &apos;RSA headlines,&apos; &apos;bulk ad copy,&apos; &apos;ad iterations,&apos; &apos;creative testing,&apos; &apos;ad performance optimization,&apos; &apos;write me some ads,&apos; &apos;Facebook ad copy,&apos; &apos;Google ad headlines,&apos; &apos;LinkedIn ad text,&apos; or &apos;I need more ad variations.&apos; Use this whenever someone needs to produce ad copy at scale or iterate on existing ads. For campaign strategy and targeting, see paid-ads. For landing page copy, see copywriting.</description>
<location>project</location>
</skill>

<skill>
<name>ai-seo</name>
<description>When the user wants to optimize content for AI search engines, get cited by LLMs, or appear in AI-generated answers. Also use when the user mentions &apos;AI SEO,&apos; &apos;AEO,&apos; &apos;GEO,&apos; &apos;LLMO,&apos; &apos;answer engine optimization,&apos; &apos;generative engine optimization,&apos; &apos;LLM optimization,&apos; &apos;AI Overviews,&apos; &apos;optimize for ChatGPT,&apos; &apos;optimize for Perplexity,&apos; &apos;AI citations,&apos; &apos;AI visibility,&apos; &apos;zero-click search,&apos; &apos;how do I show up in AI answers,&apos; &apos;LLM mentions,&apos; or &apos;optimize for Claude/Gemini.&apos; Use this whenever someone wants their content to be cited or surfaced by AI assistants and AI search engines. For traditional technical and on-page SEO audits, see seo-audit. For structured data implementation, see schema-markup.</description>
<location>project</location>
</skill>

<skill>
<name>analytics-tracking</name>
<description>When the user wants to set up, improve, or audit analytics tracking and measurement. Also use when the user mentions &quot;set up tracking,&quot; &quot;GA4,&quot; &quot;Google Analytics,&quot; &quot;conversion tracking,&quot; &quot;event tracking,&quot; &quot;UTM parameters,&quot; &quot;tag manager,&quot; &quot;GTM,&quot; &quot;analytics implementation,&quot; &quot;tracking plan,&quot; &quot;how do I measure this,&quot; &quot;track conversions,&quot; &quot;attribution,&quot; &quot;Mixpanel,&quot; &quot;Segment,&quot; &quot;are my events firing,&quot; or &quot;analytics isn&apos;t working.&quot; Use this whenever someone asks how to know if something is working or wants to measure marketing results. For A/B test measurement, see ab-test-setup.</description>
<location>project</location>
</skill>

<skill>
<name>churn-prevention</name>
<description>When the user wants to reduce churn, build cancellation flows, set up save offers, recover failed payments, or implement retention strategies. Also use when the user mentions &apos;churn,&apos; &apos;cancel flow,&apos; &apos;offboarding,&apos; &apos;save offer,&apos; &apos;dunning,&apos; &apos;failed payment recovery,&apos; &apos;win-back,&apos; &apos;retention,&apos; &apos;exit survey,&apos; &apos;pause subscription,&apos; &apos;involuntary churn,&apos; &apos;people keep canceling,&apos; &apos;churn rate is too high,&apos; &apos;how do I keep users,&apos; or &apos;customers are leaving.&apos; Use this whenever someone is losing subscribers or wants to build systems to prevent it. For post-cancel win-back email sequences, see email-sequence. For in-app upgrade paywalls, see paywall-upgrade-cro.</description>
<location>project</location>
</skill>

<skill>
<name>cold-email</name>
<description>Write B2B cold emails and follow-up sequences that get replies. Use when the user wants to write cold outreach emails, prospecting emails, cold email campaigns, sales development emails, or SDR emails. Also use when the user mentions &quot;cold outreach,&quot; &quot;prospecting email,&quot; &quot;outbound email,&quot; &quot;email to leads,&quot; &quot;reach out to prospects,&quot; &quot;sales email,&quot; &quot;follow-up email sequence,&quot; &quot;nobody&apos;s replying to my emails,&quot; or &quot;how do I write a cold email.&quot; Covers subject lines, opening lines, body copy, CTAs, personalization, and multi-touch follow-up sequences. For warm/lifecycle email sequences, see email-sequence. For sales collateral beyond emails, see sales-enablement.</description>
<location>project</location>
</skill>

<skill>
<name>competitor-alternatives</name>
<description>When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when the user mentions &apos;alternative page,&apos; &apos;vs page,&apos; &apos;competitor comparison,&apos; &apos;comparison page,&apos; &apos;[Product] vs [Product],&apos; &apos;[Product] alternative,&apos; &apos;competitive landing pages,&apos; &apos;how do we compare to X,&apos; &apos;battle card,&apos; or &apos;competitor teardown.&apos; Use this for any content that positions your product against competitors. Covers four formats: singular alternative, plural alternatives, you vs competitor, and competitor vs competitor. For sales-specific competitor docs, see sales-enablement.</description>
<location>project</location>
</skill>

<skill>
<name>content-strategy</name>
<description>When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also use when the user mentions &quot;content strategy,&quot; &quot;what should I write about,&quot; &quot;content ideas,&quot; &quot;blog strategy,&quot; &quot;topic clusters,&quot; &quot;content planning,&quot; &quot;editorial calendar,&quot; &quot;content marketing,&quot; &quot;content roadmap,&quot; &quot;what content should I create,&quot; &quot;blog topics,&quot; &quot;content pillars,&quot; or &quot;I don&apos;t know what to write.&quot; Use this whenever someone needs help deciding what content to produce, not just writing it. For writing individual pieces, see copywriting. For SEO-specific audits, see seo-audit. For social media content specifically, see social-content.</description>
<location>project</location>
</skill>

<skill>
<name>copy-editing</name>
<description>When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions &apos;edit this copy,&apos; &apos;review my copy,&apos; &apos;copy feedback,&apos; &apos;proofread,&apos; &apos;polish this,&apos; &apos;make this better,&apos; &apos;copy sweep,&apos; &apos;tighten this up,&apos; &apos;this reads awkwardly,&apos; &apos;clean up this text,&apos; &apos;too wordy,&apos; or &apos;sharpen the messaging.&apos; Use this when the user already has copy and wants it improved rather than rewritten from scratch. For writing new copy, see copywriting.</description>
<location>project</location>
</skill>

<skill>
<name>copywriting</name>
<description>When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says &quot;write copy for,&quot; &quot;improve this copy,&quot; &quot;rewrite this page,&quot; &quot;marketing copy,&quot; &quot;headline help,&quot; &quot;CTA copy,&quot; &quot;value proposition,&quot; &quot;tagline,&quot; &quot;subheadline,&quot; &quot;hero section copy,&quot; &quot;above the fold,&quot; &quot;this copy is weak,&quot; &quot;make this more compelling,&quot; or &quot;help me describe my product.&quot; Use this whenever someone is working on website text that needs to persuade or convert. For email copy, see email-sequence. For popup copy, see popup-cro. For editing existing copy, see copy-editing.</description>
<location>project</location>
</skill>

<skill>
<name>email-sequence</name>
<description>When the user wants to create or optimize an email sequence, drip campaign, automated email flow, or lifecycle email program. Also use when the user mentions &quot;email sequence,&quot; &quot;drip campaign,&quot; &quot;nurture sequence,&quot; &quot;onboarding emails,&quot; &quot;welcome sequence,&quot; &quot;re-engagement emails,&quot; &quot;email automation,&quot; &quot;lifecycle emails,&quot; &quot;trigger-based emails,&quot; &quot;email funnel,&quot; &quot;email workflow,&quot; &quot;what emails should I send,&quot; &quot;welcome series,&quot; or &quot;email cadence.&quot; Use this for any multi-email automated flow. For cold outreach emails, see cold-email. For in-app onboarding, see onboarding-cro.</description>
<location>project</location>
</skill>

<skill>
<name>form-cro</name>
<description>When the user wants to optimize any form that is NOT signup/registration — including lead capture forms, contact forms, demo request forms, application forms, survey forms, or checkout forms. Also use when the user mentions &quot;form optimization,&quot; &quot;lead form conversions,&quot; &quot;form friction,&quot; &quot;form fields,&quot; &quot;form completion rate,&quot; &quot;contact form,&quot; &quot;nobody fills out our form,&quot; &quot;form abandonment,&quot; &quot;too many fields,&quot; &quot;demo request form,&quot; or &quot;lead form isn&apos;t converting.&quot; Use this for any non-signup form that captures information. For signup/registration forms, see signup-flow-cro. For popups containing forms, see popup-cro.</description>
<location>project</location>
</skill>

<skill>
<name>free-tool-strategy</name>
<description>When the user wants to plan, evaluate, or build a free tool for marketing purposes — lead generation, SEO value, or brand awareness. Also use when the user mentions &quot;engineering as marketing,&quot; &quot;free tool,&quot; &quot;marketing tool,&quot; &quot;calculator,&quot; &quot;generator,&quot; &quot;interactive tool,&quot; &quot;lead gen tool,&quot; &quot;build a tool for leads,&quot; &quot;free resource,&quot; &quot;ROI calculator,&quot; &quot;grader tool,&quot; &quot;audit tool,&quot; &quot;should I build a free tool,&quot; or &quot;tools for lead gen.&quot; Use this whenever someone wants to build something useful and give it away to attract leads or earn links. For downloadable content lead magnets (ebooks, checklists, templates), see lead-magnets.</description>
<location>project</location>
</skill>

<skill>
<name>launch-strategy</name>
<description>When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions &apos;launch,&apos; &apos;Product Hunt,&apos; &apos;feature release,&apos; &apos;announcement,&apos; &apos;go-to-market,&apos; &apos;beta launch,&apos; &apos;early access,&apos; &apos;waitlist,&apos; &apos;product update,&apos; &apos;how do I launch this,&apos; &apos;launch checklist,&apos; &apos;GTM plan,&apos; or &apos;we&apos;re about to ship.&apos; Use this whenever someone is preparing to release something publicly. For ongoing marketing after launch, see marketing-ideas.</description>
<location>project</location>
</skill>

<skill>
<name>lead-magnets</name>
<description>When the user wants to create, plan, or optimize a lead magnet for email capture or lead generation. Also use when the user mentions &quot;lead magnet,&quot; &quot;gated content,&quot; &quot;content upgrade,&quot; &quot;downloadable,&quot; &quot;ebook,&quot; &quot;cheat sheet,&quot; &quot;checklist,&quot; &quot;template download,&quot; &quot;opt-in,&quot; &quot;freebie,&quot; &quot;PDF download,&quot; &quot;resource library,&quot; &quot;content offer,&quot; &quot;email capture content,&quot; &quot;Notion template,&quot; &quot;spreadsheet template,&quot; or &quot;what should I give away for emails.&quot; Use this for planning what to create and how to distribute it. For interactive tools as lead magnets, see free-tool-strategy. For writing the actual content, see copywriting. For the email sequence after capture, see email-sequence.</description>
<location>project</location>
</skill>

<skill>
<name>marketing-ideas</name>
<description>When the user needs marketing ideas, inspiration, or strategies for their SaaS or software product. Also use when the user asks for &apos;marketing ideas,&apos; &apos;growth ideas,&apos; &apos;how to market,&apos; &apos;marketing strategies,&apos; &apos;marketing tactics,&apos; &apos;ways to promote,&apos; &apos;ideas to grow,&apos; &apos;what else can I try,&apos; &apos;I don&apos;t know how to market this,&apos; &apos;brainstorm marketing,&apos; or &apos;what marketing should I do.&apos; Use this as a starting point whenever someone is stuck or looking for inspiration on how to grow. For specific channel execution, see the relevant skill (paid-ads, social-content, email-sequence, etc.).</description>
<location>project</location>
</skill>

<skill>
<name>marketing-psychology</name>
<description>When the user wants to apply psychological principles, mental models, or behavioral science to marketing. Also use when the user mentions &apos;psychology,&apos; &apos;mental models,&apos; &apos;cognitive bias,&apos; &apos;persuasion,&apos; &apos;behavioral science,&apos; &apos;why people buy,&apos; &apos;decision-making,&apos; &apos;consumer behavior,&apos; &apos;anchoring,&apos; &apos;social proof,&apos; &apos;scarcity,&apos; &apos;loss aversion,&apos; &apos;framing,&apos; or &apos;nudge.&apos; Use this whenever someone wants to understand or leverage how people think and make decisions in a marketing context.</description>
<location>project</location>
</skill>

<skill>
<name>onboarding-cro</name>
<description>When the user wants to optimize post-signup onboarding, user activation, first-run experience, or time-to-value. Also use when the user mentions &quot;onboarding flow,&quot; &quot;activation rate,&quot; &quot;user activation,&quot; &quot;first-run experience,&quot; &quot;empty states,&quot; &quot;onboarding checklist,&quot; &quot;aha moment,&quot; &quot;new user experience,&quot; &quot;users aren&apos;t activating,&quot; &quot;nobody completes setup,&quot; &quot;low activation rate,&quot; &quot;users sign up but don&apos;t use the product,&quot; &quot;time to value,&quot; or &quot;first session experience.&quot; Use this whenever users are signing up but not sticking around. For signup/registration optimization, see signup-flow-cro. For ongoing email sequences, see email-sequence.</description>
<location>project</location>
</skill>

<skill>
<name>page-cro</name>
<description>When the user wants to optimize, improve, or increase conversions on any marketing page — including homepage, landing pages, pricing pages, feature pages, or blog posts. Also use when the user says &quot;CRO,&quot; &quot;conversion rate optimization,&quot; &quot;this page isn&apos;t converting,&quot; &quot;improve conversions,&quot; &quot;why isn&apos;t this page working,&quot; &quot;my landing page sucks,&quot; &quot;nobody&apos;s converting,&quot; &quot;low conversion rate,&quot; &quot;bounce rate is too high,&quot; &quot;people leave without signing up,&quot; or &quot;this page needs work.&quot; Use this even if the user just shares a URL and asks for feedback — they probably want conversion help. For signup/registration flows, see signup-flow-cro. For post-signup activation, see onboarding-cro. For forms outside of signup, see form-cro. For popups/modals, see popup-cro.</description>
<location>project</location>
</skill>

<skill>
<name>paid-ads</name>
<description>When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. Also use when the user mentions &apos;PPC,&apos; &apos;paid media,&apos; &apos;ROAS,&apos; &apos;CPA,&apos; &apos;ad campaign,&apos; &apos;retargeting,&apos; &apos;audience targeting,&apos; &apos;Google Ads,&apos; &apos;Facebook ads,&apos; &apos;LinkedIn ads,&apos; &apos;ad budget,&apos; &apos;cost per click,&apos; &apos;ad spend,&apos; or &apos;should I run ads.&apos; Use this for campaign strategy, audience targeting, bidding, and optimization. For bulk ad creative generation and iteration, see ad-creative. For landing page optimization, see page-cro.</description>
<location>project</location>
</skill>

<skill>
<name>paywall-upgrade-cro</name>
<description>When the user wants to create or optimize in-app paywalls, upgrade screens, upsell modals, or feature gates. Also use when the user mentions &quot;paywall,&quot; &quot;upgrade screen,&quot; &quot;upgrade modal,&quot; &quot;upsell,&quot; &quot;feature gate,&quot; &quot;convert free to paid,&quot; &quot;freemium conversion,&quot; &quot;trial expiration screen,&quot; &quot;limit reached screen,&quot; &quot;plan upgrade prompt,&quot; &quot;in-app pricing,&quot; &quot;free users won&apos;t upgrade,&quot; &quot;trial to paid conversion,&quot; or &quot;how do I get users to pay.&quot; Use this for any in-product moment where you&apos;re asking users to upgrade. Distinct from public pricing pages (see page-cro) — this focuses on in-product upgrade moments where the user has already experienced value. For pricing decisions, see pricing-strategy.</description>
<location>project</location>
</skill>

<skill>
<name>popup-cro</name>
<description>When the user wants to create or optimize popups, modals, overlays, slide-ins, or banners for conversion purposes. Also use when the user mentions &quot;exit intent,&quot; &quot;popup conversions,&quot; &quot;modal optimization,&quot; &quot;lead capture popup,&quot; &quot;email popup,&quot; &quot;announcement banner,&quot; &quot;overlay,&quot; &quot;collect emails with a popup,&quot; &quot;exit popup,&quot; &quot;scroll trigger,&quot; &quot;sticky bar,&quot; or &quot;notification bar.&quot; Use this for any overlay or interrupt-style conversion element. For forms outside of popups, see form-cro. For general page conversion optimization, see page-cro.</description>
<location>project</location>
</skill>

<skill>
<name>pricing-strategy</name>
<description>When the user wants help with pricing decisions, packaging, or monetization strategy. Also use when the user mentions &apos;pricing,&apos; &apos;pricing tiers,&apos; &apos;freemium,&apos; &apos;free trial,&apos; &apos;packaging,&apos; &apos;price increase,&apos; &apos;value metric,&apos; &apos;Van Westendorp,&apos; &apos;willingness to pay,&apos; &apos;monetization,&apos; &apos;how much should I charge,&apos; &apos;my pricing is wrong,&apos; &apos;pricing page,&apos; &apos;annual vs monthly,&apos; &apos;per seat pricing,&apos; or &apos;should I offer a free plan.&apos; Use this whenever someone is figuring out what to charge or how to structure their plans. For in-app upgrade screens, see paywall-upgrade-cro.</description>
<location>project</location>
</skill>

<skill>
<name>product-marketing-context</name>
<description>When the user wants to create or update their product marketing context document. Also use when the user mentions &apos;product context,&apos; &apos;marketing context,&apos; &apos;set up context,&apos; &apos;positioning,&apos; &apos;who is my target audience,&apos; &apos;describe my product,&apos; &apos;ICP,&apos; &apos;ideal customer profile,&apos; or wants to avoid repeating foundational information across marketing tasks. Use this at the start of any new project before using other marketing skills — it creates `.agents/product-marketing-context.md` that all other skills reference for product, audience, and positioning context.</description>
<location>project</location>
</skill>

<skill>
<name>programmatic-seo</name>
<description>When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions &quot;programmatic SEO,&quot; &quot;template pages,&quot; &quot;pages at scale,&quot; &quot;directory pages,&quot; &quot;location pages,&quot; &quot;[keyword] + [city] pages,&quot; &quot;comparison pages,&quot; &quot;integration pages,&quot; &quot;building many pages for SEO,&quot; &quot;pSEO,&quot; &quot;generate 100 pages,&quot; &quot;data-driven pages,&quot; or &quot;templated landing pages.&quot; Use this whenever someone wants to create many similar pages targeting different keywords or locations. For auditing existing SEO issues, see seo-audit. For content strategy planning, see content-strategy.</description>
<location>project</location>
</skill>

<skill>
<name>referral-program</name>
<description>When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy. Also use when the user mentions &apos;referral,&apos; &apos;affiliate,&apos; &apos;ambassador,&apos; &apos;word of mouth,&apos; &apos;viral loop,&apos; &apos;refer a friend,&apos; &apos;partner program,&apos; &apos;referral incentive,&apos; &apos;how to get referrals,&apos; &apos;customers referring customers,&apos; or &apos;affiliate payout.&apos; Use this whenever someone wants existing users or partners to bring in new customers. For launch-specific virality, see launch-strategy.</description>
<location>project</location>
</skill>

<skill>
<name>revops</name>
<description>When the user wants help with revenue operations, lead lifecycle management, or marketing-to-sales handoff processes. Also use when the user mentions &apos;RevOps,&apos; &apos;revenue operations,&apos; &apos;lead scoring,&apos; &apos;lead routing,&apos; &apos;MQL,&apos; &apos;SQL,&apos; &apos;pipeline stages,&apos; &apos;deal desk,&apos; &apos;CRM automation,&apos; &apos;marketing-to-sales handoff,&apos; &apos;data hygiene,&apos; &apos;leads aren&apos;t getting to sales,&apos; &apos;pipeline management,&apos; &apos;lead qualification,&apos; or &apos;when should marketing hand off to sales.&apos; Use this for anything involving the systems and processes that connect marketing to revenue. For cold outreach emails, see cold-email. For email drip campaigns, see email-sequence. For pricing decisions, see pricing-strategy.</description>
<location>project</location>
</skill>

<skill>
<name>sales-enablement</name>
<description>When the user wants to create sales collateral, pitch decks, one-pagers, objection handling docs, or demo scripts. Also use when the user mentions &apos;sales deck,&apos; &apos;pitch deck,&apos; &apos;one-pager,&apos; &apos;leave-behind,&apos; &apos;objection handling,&apos; &apos;deal-specific ROI analysis,&apos; &apos;demo script,&apos; &apos;talk track,&apos; &apos;sales playbook,&apos; &apos;proposal template,&apos; &apos;buyer persona card,&apos; &apos;help my sales team,&apos; &apos;sales materials,&apos; or &apos;what should I give my sales reps.&apos; Use this for any document or asset that helps a sales team close deals. For competitor comparison pages and battle cards, see competitor-alternatives. For marketing website copy, see copywriting. For cold outreach emails, see cold-email.</description>
<location>project</location>
</skill>

<skill>
<name>schema-markup</name>
<description>When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions &quot;schema markup,&quot; &quot;structured data,&quot; &quot;JSON-LD,&quot; &quot;rich snippets,&quot; &quot;schema.org,&quot; &quot;FAQ schema,&quot; &quot;product schema,&quot; &quot;review schema,&quot; &quot;breadcrumb schema,&quot; &quot;Google rich results,&quot; &quot;knowledge panel,&quot; &quot;star ratings in search,&quot; or &quot;add structured data.&quot; Use this whenever someone wants their pages to show enhanced results in Google. For broader SEO issues, see seo-audit. For AI search optimization, see ai-seo.</description>
<location>project</location>
</skill>

<skill>
<name>seo-audit</name>
<description>When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions &quot;SEO audit,&quot; &quot;technical SEO,&quot; &quot;why am I not ranking,&quot; &quot;SEO issues,&quot; &quot;on-page SEO,&quot; &quot;meta tags review,&quot; &quot;SEO health check,&quot; &quot;my traffic dropped,&quot; &quot;lost rankings,&quot; &quot;not showing up in Google,&quot; &quot;site isn&apos;t ranking,&quot; &quot;Google update hit me,&quot; &quot;page speed,&quot; &quot;core web vitals,&quot; &quot;crawl errors,&quot; or &quot;indexing issues.&quot; Use this even if the user just says something vague like &quot;my SEO is bad&quot; or &quot;help with SEO&quot; — start with an audit. For building pages at scale to target keywords, see programmatic-seo. For adding structured data, see schema-markup. For AI search optimization, see ai-seo.</description>
<location>project</location>
</skill>

<skill>
<name>signup-flow-cro</name>
<description>When the user wants to optimize signup, registration, account creation, or trial activation flows. Also use when the user mentions &quot;signup conversions,&quot; &quot;registration friction,&quot; &quot;signup form optimization,&quot; &quot;free trial signup,&quot; &quot;reduce signup dropoff,&quot; &quot;account creation flow,&quot; &quot;people aren&apos;t signing up,&quot; &quot;signup abandonment,&quot; &quot;trial conversion rate,&quot; &quot;nobody completes registration,&quot; &quot;too many steps to sign up,&quot; or &quot;simplify our signup.&quot; Use this whenever the user has a signup or registration flow that isn&apos;t performing. For post-signup onboarding, see onboarding-cro. For lead capture forms (not account creation), see form-cro.</description>
<location>project</location>
</skill>

<skill>
<name>site-architecture</name>
<description>When the user wants to plan, map, or restructure their website&apos;s page hierarchy, navigation, URL structure, or internal linking. Also use when the user mentions &quot;sitemap,&quot; &quot;site map,&quot; &quot;visual sitemap,&quot; &quot;site structure,&quot; &quot;page hierarchy,&quot; &quot;information architecture,&quot; &quot;IA,&quot; &quot;navigation design,&quot; &quot;URL structure,&quot; &quot;breadcrumbs,&quot; &quot;internal linking strategy,&quot; &quot;website planning,&quot; &quot;what pages do I need,&quot; &quot;how should I organize my site,&quot; or &quot;site navigation.&quot; Use this whenever someone is planning what pages a website should have and how they connect. NOT for XML sitemaps (that&apos;s technical SEO — see seo-audit). For SEO audits, see seo-audit. For structured data, see schema-markup.</description>
<location>project</location>
</skill>

<skill>
<name>social-content</name>
<description>When the user wants help creating, scheduling, or optimizing social media content for LinkedIn, Twitter/X, Instagram, TikTok, Facebook, or other platforms. Also use when the user mentions &apos;LinkedIn post,&apos; &apos;Twitter thread,&apos; &apos;social media,&apos; &apos;content calendar,&apos; &apos;social scheduling,&apos; &apos;engagement,&apos; &apos;viral content,&apos; &apos;what should I post,&apos; &apos;repurpose this content,&apos; &apos;tweet ideas,&apos; &apos;LinkedIn carousel,&apos; &apos;social media strategy,&apos; or &apos;grow my following.&apos; Use this for any social media content creation, repurposing, or scheduling task. For broader content strategy, see content-strategy.</description>
<location>project</location>
</skill>

<skill>
<name>carl-manager</name>
<description>Manage CARL domains and rules. Auto-activates when user says &quot;make this a rule&quot;, &quot;add this to CARL&quot;, &quot;create a domain for X&quot;, mentions modifying .carl files, or asks which domain something belongs in.</description>
<location>global</location>
</skill>

<skill>
<name>ui-ux-pro-max</name>
<description>UI/UX design intelligence. 67 styles, 96 palettes, 57 font pairings, 25 charts, 13 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient. Integrations: shadcn/ui MCP for component search and examples.</description>
<location>global</location>
</skill>

</available_skills>
<!-- SKILLS_TABLE_END -->

</skills_system>