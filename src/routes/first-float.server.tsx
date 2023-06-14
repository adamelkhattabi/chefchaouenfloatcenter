import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';

export default function FirstFloat() {
  function renderTopContent() {

    return (
      <PageTitle title={'Whether you are looking to recover physically or disconnect, whether you want to improve your sleep or just take the time to meditate, whether you are very tall or claustrophobic, our pods are made for you.'} />
    )
  }

  function renderMainContent() {
    return <>
      <div className='container-fluid content-section'>
        <div className='container'>
          
        </div>
      </div>
      <div className='container-fluid content-section'>
        
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
