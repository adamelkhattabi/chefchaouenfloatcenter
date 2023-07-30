import FirstFloatSteps from '../components/first-float-steps/first-float-steps.client';
import Layout from '../components/layout/layout.client';
import PageTitle from '../components/page-title/page-title.client';
import SectionParagraph from '../components/section-paragraph/section-paragraph.client';
import SectionTitle from '../components/section-title/section-title.client';

const floatingSteps = [
  {
    title: "Pre-Float",
    paragraph: "Our staff will give you a full walkthrough of the process to ensure that you're informed and feel at home in our center"
  },
  {
    title: "Preparing",
    paragraph: "You will enter your private float room and take a shower before starting your session to ensure any oils, dirt, and perfumes are removed"
  },
  {
    title: "Letting Go",
    paragraph: "It will take some time to get used to the unique environment of the float tank so we encourage you to focus on your breath and try to let go.feel free to discuss music and light options with the staff"
  },
  {
    title: "Post-Float Glow",
    paragraph: "You will be notified your session is over by music in the pod. After your session you will shower again to remove any salt and are welcome to enjoy your new state in our relaxation suite"
  }
]

export default function FirstFloat() {
  function renderTopContent() {

    return (
      <>
        <PageTitle title={'Find Out Who You Become With Floating'} />
        <p>
          Here's a guide to your first float experience to help ensure you tap into the deep relaxation and many benefits that it can provide.
        </p>
      </>
    )
  }

  function renderMainContent() {
    return <>
      <div className='container-fluid content-section'>
        <div className='container'>
          <SectionTitle>What should I expect</SectionTitle>
          <SectionParagraph>
            Whether you are looking to recover physically or disconnect, whether you want to improve your sleep or just take the time to meditate, whether you are very tall or claustrophobic, our pods are made for you.
          </SectionParagraph>
        </div>
      </div>
      <div className='container-fluid content-section'>
        <FirstFloatSteps steps={floatingSteps} />
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
