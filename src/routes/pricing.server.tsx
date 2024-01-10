import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';
import PricingTabs from '../components/pricing-tabs/pricing-tabs.client';

var tabs = [
  {
    header: "Floating Sessions",
    offers: [
      {
        title: "Floating Session",
        currencySymbol: "MAD ",
        price: "300",
        interval: "30 minutes session",
        features: [
          "30 minutes floating session",
          "Discover deeper benefits of floating",
          "Selection of organic herbal teas to enjoy post float"
        ]
      },
      {
        title: "Floating Session",
        currencySymbol: "MAD ",
        price: "400",
        interval: "45 minutes session",
        features: [
          "45 minutes floating session",
          "Discover deeper benefits of floating",
          "Selection of organic herbal teas to enjoy post float",
        ],
      },
      {
        title: "Floating Session",
        currencySymbol: "MAD ",
        price: "500",
        interval: "60 minutes session",
        features: [
          "60 minutes floating session",
          "Discover deeper benefits of floating",
          "Selection of organic herbal teas to enjoy post float",
        ],
      },
    ]
  },
  {
    header: "Massages",
    offers: [
      {
        title: "Relaxing Massage",
        currencySymbol: "MAD ",
        price: "300",
        interval: "45 minutes massage",
        features: [
          "Unwind with a 45 minutes massage",
          "Natural Argan oil soothes and hydrates the skin",
          "Organic essential oils provide deep relaxation",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
      {
        title: "Relaxing Massage",
        currencySymbol: "MAD ",
        price: "400",
        interval: "60 minutes massage",
        features: [
          "Unwind with a 60 minutes massage",
          "Natural Argan oil soothes and hydrates the skin",
          "Organic essential oils provide deep relaxation",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
      {
        title: "Foot Massage",
        currencySymbol: "MAD ",
        price: "200",
        interval: "30 minutes foot massage",
        features: [
          "Indulge in a soothing 30-minute reflexology foot massage",
          "Argan oil and organic essential oils for complete relaxation",
          "Treat your feet to revitalization, reducing stress and restoring physical and mental well-being",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
    ]
  },
  {
    header: 'Packs',
    offers: [
      {
        title: "Floating + Massage",
        currencySymbol: "MAD ",
        price: "500",
        interval: "30 min floating + 30 min massage",
        features: [
          "30 minutes floating",
          "30 minutes relaxing massage",
          "Discover deeper benefits of floating",
          "Save 10% on regular price",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
      {
        title: "Floating + Massage",
        currencySymbol: "MAD ",
        price: "650",
        interval: "45 min floating + 45 min massage",
        features: [
          "45 minutes floating",
          "45 minutes relaxing massage",
          "Discover deeper benefits of floating",
          "Save 100DH on regular price",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
      {
        title: "Floating + Massage",
        currencySymbol: "MAD ",
        price: "800",
        interval: "60 min floating + 60 min massage",
        features: [
          "60 minutes floating",
          "60 minutes relaxing massage",
          "Discover deeper benefits of floating",
          "Save 100DH on regular price",
          "Selection of organic herbal teas to enjoy post massage",
        ]
      },
    ]
  },
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
