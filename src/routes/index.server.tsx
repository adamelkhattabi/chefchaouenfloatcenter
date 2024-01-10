import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';
import VideoFrame from '../components/video-frame/video-frame.client';
import FloatingBenefits from '../components/floating-benefits/floating-benefits.client';
import SectionTitle from '../components/section-title/section-title.client';
import ImagesGrid from '../components/images-grid/images-grid.client';

const whyFloatSections = [
  {
    header: "Floating is the ultimate relaxation practice:",
    reasons: [
      {
          title: 'Reduces Anxiety & Stress',
          image: 'headache',
          content: 'Imparts more magnesium in your system and lowers levels of cortisol.in the absence of stimulants you achieve the same relaxation level of a 4 hours REM sleep within an hour of floating.'
      },
      {
          title: 'Promotes mindfulness & deep meditation',
          image: 'yoga',
          content: 'Float tanks can be an ideal environment for meditation practices, as they provide a peaceful and distraction-free space that can help you to focus and achieve a deeper level of relaxation.'
      },
      {
          title: 'Replenishes creativity and focus',
          image: 'arrow_on_target',
          content: 'Explore a dreamy state, The Theta State and deep relaxation of floating allows you to tap into the creative and intellectual power of your subconscious mind.'
      }
    ]
  },
  {
    header: "Floating is the ideal physical pain relief:",
    reasons: [
      {
        title: 'Supports and speeds up recovery :',
        image: 'health_cycle',
        content: 'floating helps reduce pain and muscle soreness in athletes, as well as supports post-op rehabilitation.'
    },
    {
        title: 'Promotes skin health :',
        image: 'magnifying_skin',
        content: 'Floating in high concentrations of high-quality medical grade Epsom salt is beneficial for skin & hair health and conditions like eczema and psoriasis when done on a consistent basis.'
    },
    {
        title: 'alleviate physical discomfort :',
        image: 'dizzy',
        content: 'Floating is a natural anti-inflammatory treatment for cases of joint stiffness; recommended by the Arthritis foundation for reducing symptoms and repeatedly reported to ease joint pains resulting from pregnancy. )'
    }
    ]
  }
]

export default function Home() {
  function renderTopContent() {

    return (
      <PageTitle title={'Switch off all your senses and escape into the Void, restore your health to new levels and relax like never before.'} />
    )
  }

  function renderMainContent() {
    return <>
      <div className='container-fluid content-section'>
        <div className='container'>
          <SectionTitle>About Floating</SectionTitle>
          <VideoFrame videoUrl='https://www.youtube.com/embed/darLHvRHjBY' title='some video' />
        </div>
      </div>
      <div className='container-fluid content-section'>
        <FloatingBenefits sections={whyFloatSections} />
      </div>
    </>
  }

  function renderFooterContent() {
    return <>
      <ImagesGrid />
    </>
  }
  
  return <div>
    <Layout
      topContent={renderTopContent()}
      mainContent={renderMainContent()}
      footerContent={renderFooterContent()}
    />
  </div>;
}
