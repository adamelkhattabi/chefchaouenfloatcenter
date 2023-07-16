import Layout from '../components/layout/layout.client';
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
          "Save 28.71% on regular price"
        ],
      },
      {
        title: "Introduction Pack",
        currencySymbol: "MAD ",
        price: 1200,
        interval: "Three floats Intro pack (MAD 400/float)",
        features: [
          "Each session lasts 60 minutes",
          "Only for first time clients",
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
  }
]

export default function Pricing() {

  function renderTopContent() {

    return (
      <div>
        <h1>Your fist time at our center?</h1>
        <p>Get yourself our first time floater deal: 60 min introduction float only <b>at 500DH instead of <i>700DH</i></b></p>
      </div>
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
