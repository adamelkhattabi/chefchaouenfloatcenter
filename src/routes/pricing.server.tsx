import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';
import PricingTabs from '../components/pricing-tabs/pricing-tabs.client';

var tabs = [
  {
    header: "Single Floats",
    offers: [
      {
        title: "Introduction float",
        currencySymbol: "MAD ",
        price: 500,
        interval: "60 minutes session",
        features: [
          "60 minutes session",
          "One time offer for new customers",
          "Valid for 3 months",
          "Selection of organic herbal teas to enjoy post float",
          "Save 29% on regular price"
        ],
      },
      {
        title: "3 Floats Intro Pack",
        currencySymbol: "MAD ",
        price: 1200,
        interval: "Three floats Intro pack (MAD 400/float)",
        features: [
          "Each session lasts 60 minutes",
          "One time offer for new customers",
          "Individual use",
          "Save 42 % on regular price",
          "Discover deeper benefits of floating",
          "Selection of organic herbal teas to enjoy post float",
          "Valid for 6 months"
        ],
      },
      {
        title: "Single float session",
        currencySymbol: "MAD ",
        price: 700,
        interval: "60 minutes session",
        features: [
          "60 minutes session",
          "Valid 6 months from date of purchase",
          "Selection of organic herbal teas to enjoy post float"
        ]
      },
    ]
  },
  {
    header: "Shareable floats",
    offers: [
      {
        title: "2 Floats Pack",
        currencySymbol: "MAD ",
        price: 900,
        interval: "2 floats (MAD 450/float)",
        features: [
          "Each session lasts 60 minutes",
          "Shareable",
          "Save 35% on regular price",
          "Selection of organic herbal teas to enjoy post float",
          "Valid for 12 months"
        ]
      },
      {
        title: "3 Floats Pack",
        currencySymbol: "MAD ",
        price: 1260,
        interval: "3 floats (MAD 420/float)",
        features: [
          "Each session lasts 60 minutes",
          "Shareable",
          "Save 40% on regular price",
          "Selection of organic herbal teas to enjoy post float",
          "Valid for 12 months"
        ]
      },
    ]
  },
  {
    header: 'Memberships',
    offers: [
      {
        title: "1 float/month : 3 months commitment",
        currencySymbol: "MAD ",
        price: 400,
        interval: "Month",
        features: [
          "One 60 min. float per month",
          "Additional floats for 400 dh",
          "Get 15 % off on 2 and 3 Float Packs or gift cards",
          "Free upgrade to 90 min. floats (Subject to availability)",
          "Discover deeper benefits of floating",
          "Exclusive perks + partner benefits",
          "3 Months minimum term only",
          "Sessions are valid 12 months and unused sessions do roll over",
          "Save 42% on regular price",
          "At cancellation sessions expire after 30 days",
          "Share floats with friends and family",
          "Can be paused/freeze up to 3 months per calendar year"
        ]
      },
      {
        title: "2 floats/month :  3 months commitment",
        currencySymbol: "MAD ",
        price: 700,
        interval: "Month. (MAD350/Float)",
        features: [
          "Two 60 min. float per month",
          "Additional floats for 350 dh",
          "Get 15 % off on 2 and 3 Float Packs or gift cards",
          "Free upgrade to 90 min. floats (Subject to availability)",
          "Discover deeper benefits of floating",
          "Exclusive perks + partner benefits",
          "3 Months minimum term only",
          "Sessions are valid 12 months and unused sessions do roll over",
          "Save 50% on regular price",
          "At cancellation sessions expire after 30 days",
          "Share floats with friends and family",
          "Can be paused/freeze up to 3 months per calendar year",
          "Get one free bonus float when you sign up for the first time. Bonus floats must be used within 30 days"
        ]
      },
      {
        title: "13 floats per year",
        currencySymbol: "MAD ",
        price: 3900,
        interval: "13 floats available during a year (MAD300/float)",
        features: [
          "Free upgrade to 90 min. floats (Subject to availability)",
          "Discover deeper benefits of floating",
          "Exclusive perks + partner benefits",
          "Sessions are valid 12 months and unused session do roll over",
          "At cancellation sessions expire after 30 days",
          "Share floats with friends and family"
        ]
      }
    ]
  },
  {
    header: "Gift Cards",
    offers: [
      {
        title: "Single float voucher",
        currencySymbol: "MAD ",
        price: 700,
        interval: "1 float for (MAD500 only if beneficiary's first float)",
        features: [
          "Valid for 12 months",
          "If it's receiver's first time then the price is MAD500",
        ]
      }
    ]
  }
]

export default function Pricing() {

  function renderTopContent() {

    return (
      <PageTitle
        title={'Your fist time at our center?'}
        paragraph={<>
          Get yourself our first time floater deal: 60 min introduction float only <b>at 500DH instead of <i style={{ textDecoration: "line-through", fontStyle: "unset", textDecorationThickness: "0.2rem"}}>700DH</i></b>
        </>}
      />
    )
  }

  function renderMainContent() {
    return <PricingTabs tabs={tabs} />
  }

  
  return <div>
    <Layout
      topContent={renderTopContent()}
      mainContent={renderMainContent()}
    />
  </div>;
}
