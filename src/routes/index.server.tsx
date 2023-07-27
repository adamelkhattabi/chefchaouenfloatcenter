import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';
import VideoFrame from '../components/video-frame/video-frame.client';
import FloatingBenefits from '../components/floating-benefits/floating-benefits.client';
import SectionTitle from '../components/section-title/section-title.client';

export default function Home() {
  function renderTopContent() {

    return (
      <PageTitle title={'Being in a float tank is like relaxing in outer space. Switch off all your senses and escape into the void, restore your health to new levels and relax like never before.'} />
    )
  }

  function renderMainContent() {
    return <>
      <div className='container-fluid content-section'>
        <div className='container'>
          <SectionTitle>About Floating</SectionTitle>
          <VideoFrame videoUrl='https://www.youtube.com/embed/LCQfS3Rhu20' title='some video' />
        </div>
      </div>
      <div className='container-fluid content-section'>
        <FloatingBenefits />
      </div>
    </>
  }
  
  return <div>
    <Layout
      topContent={renderTopContent()}
      mainContent={renderMainContent()}
    />
  </div>;
}
