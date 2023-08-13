import FirstFloatSteps from '../components/first-float-steps/first-float-steps.client';
import FirstFloatTips from '../components/first-float-tips/first-float-tips.client';
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

const floatingTips = [
  {
    title: "No Stimulants",
    description: "Avoid caffeine and other stimulants before your float to make it easier for your body and mind to relax.",
    icon: "bold_steamy_coffee"
  },
  {
    title: "Be Hydrated",
    description: "Try to ensure that you are well hydrated before your session, but don't drink too much right beforehand.",
    icon: "filled_glass"
  },
  {
    title: "Eat A Light Meal",
    description: "It's best to have a light meal 60 to 90 mins. before your session, rather than floating with a full or empty stomach.",
    icon: "apple"
  },
  {
    title: "No Shaving Before",
    description: "Please don't shave anywhere on your face or body before your float session as the epsom salt may sting for some time in the beginning making it more difficult to relax and enjoy your float.",
    icon: "shaver"
  },
  {
    title: "Float Nude",
    description: "We recommend floating in the nude to ensure there are no external pressures or restrictions on your body. Our tanks are extremely filtered to ensure cleanliness and the water is kept at skin temperature.",
    icon: "swim_suits"
  },
  {
    title: "Don't Stress Over Time",
    description: "It's fairly common to obsess or stress over time while floating, try to return your focus to your breath and know that our staff and the music in the pod will let you know when your session is over.",
    icon: "clock"
  },
  {
    title: "Focus On Your Breath",
    description: "If your mind is busy, you have difficulty relaxing, or any challenge with the unique environment, it's helpful to focus on your breathing. Take deep breathes and keep your attention on that process.",
    icon: "breathing"
  },
  {
    title: "Try Different Positions",
    description: "Everyone has different preferences: arms above head, pointed up at your side, or down by your body and if you find yourself getting uncomfortable, it can help to switch your arm position.",
    icon: "arm_flex"
  },
  {
    title: "No Expectations",
    description: "There is no 'right' way to float, each and every session is different and it's important to not get caught up thinking you're doing it wrong. Breathe, let go and relax to go deeper.",
    icon: "thoughts"
  },
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
      <div className='container-fluid content-section'>
        <FirstFloatTips tips={floatingTips} />
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
