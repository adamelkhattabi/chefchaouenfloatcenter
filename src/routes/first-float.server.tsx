import QuestionAnswers from '../components/questions-answers/questions-answers.client';
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
];

const commonConcerns = [
  {
    question: "What if I'm claustrophobic?",
    answer: "Floats are customized to your comfort. you have the option to float with the lights on, music on, lid open, or however you prefer — you're in control of your float. Floaters report an expansive feeling rather than restricting thanks to our modern spacious tank."
  },
  {
    question: "Can I float if I recently dyed my hair or spray tanned?",
    answer: "No, the spray tan or hair dye can leak into the water and damage the float tanks. You want to make completely sure that no dye is coming out of your hair in the shower or on a towel after washing (usually within a few days to weeks depending on the treatment). Leave a minimum of 48 hours after a spray tan before floating"
  },
  {
    question: "Can I float if I'm pregnant?",
    answer: "Yes! There are many unique benefits that help relieve the pressure and tensions on the body during pregnancy, while also providing a deeper connection to your child. We recommend confirming with your doctor first however."
  },
  {
    question: "Can I float if I have a new tattoo?",
    answer: "You want to make sure it's been at least 30 days (or your tattoo has fully healed) before floating as the salt water can cause painful burning."
  },
  {
    question: "Can I float if I'm menstruating?",
    answer: "Yes, we simply recommend you follow the same protocol you would for a swimming pool."
  }
];

const canIFloatConcerns = [
  {
    question: "Who is unable to float? When can I not float?",
    answer: <>You can’t float if:
      <ul>
        <li>You have open wounds</li>
        <li>You had diarrhea in the past 14 days</li>
        <li>You have recently dyed your hair or applied tanning products</li>
        <li>You have infectious diseases</li>
        <li>You have got a recent tattoo</li>
      </ul>
    </>
  },
  {
    question: "Can I drown if I fall asleep?",
    answer: "No. It's common to fall asleep for parts or sometimes all of your float and the water is so buoyant that you always stay afloat. The worst that can happen is being woken by a little salt water in your eyes, though our non-drip tanks make this unlikely."
  },
  {
    question: "How clean is the water ?",
    answer: "We attach great importance to hygiene. This is why we have chosen the most efficient equipment on the market. In our pods, the materials used for heating, pumps, piping and filters are all food grade. Metal parts are titanium or medical grade stainless steel. The high concentration of Epsom salt in the water kills microorganisms, and the pods are equipped with advanced filtration systems, including exposure to UV-C, oxygenated water, and super-fine filtration (1 micron filter = 75 times finer than a hair). Every client showers before floating and the water is filtered four times after each session, ensuring the highest levels of hygiene and safety."
  },
  {
    question: "Do I need to bring anything?",
    answer: "No. We have some tips and recommendations above to consider the day of your appointment, however we provide everything you need for your session."
  }
];

const faqQuestions = [
  {
    question: "How long are the floats sessions?",
    answer: "Each float session appointment includes 60 minutes for you to be inside of the pod floating, with an additional 25 minutes that allows you to change and shower both before and after the appointment.We ask that you try to keep your showering brief to ensure we have enough time to clean up the room and get it ready for the next appointment. You can freshen up and take your time getting ready in our Vanity Room where we have moisturizer, hair dryers and other amenities. Plus, feel free to keep relaxing for as long as you’d like in our Relaxation Room with tea and some reading materials."
  },
  {
    question: "When should I arrive for my appointment?",
    answer: "For your first float session, we recommend arriving no later than 15 minutes before your scheduled appointment time. This ensures we can give you a full walkthrough beforehand without taking away from your time floating.Any float sessions past your first time, you can arrive 5 minutes before."
  },
  {
    question: "What is your refund or return policy?",
    answer: <>
      <h5>1/ Float Sessions Refund Policy:</h5>
      We understand that sometimes things come up and you may need to cancel or reschedule your float session. To receive a full refund, please cancel or reschedule at least 24 hours before your scheduled session time. Cancellations or rescheduling made less than 24 hours before the scheduled session will be subject to a cancellation fee of 50% of the session price. No-shows or late arrivals (20 minutes or more after the scheduled session start time) will forfeit their session without a refund. Refunds will be issued within 7 business days of cancellation.
      <br /><br />
      <h5>2/ Product Refund Policy:</h5>
      We want you to be completely satisfied with any product you purchase from us. If for any reason you are not satisfied, please return the product within 14 days of purchase for a full refund. The product must be in its original packaging and in new, unused condition. Refunds will be issued within 7 business days of receipt of the returned product.
    </>
  },
  {
    question: "What's the minimum age for floating?",
    answer: "Anyone 16 years old and up is able to float at our center currently."
  },
  {
    question: "What happens if I get the saltwater in my eyes?",
    answer: "It may sting a bit due to the amount of epsom salt in the water, so we recommend you avoid touching your face or placing your hands over your head at any time. Our float tanks are non-drip and we provide a water bottle to help flush out your eyes if this happens."
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
      <div className='container-fluid content-section'>
        <QuestionAnswers title='Common Concerns' concerns={commonConcerns} />
      </div>
      <div className='container-fluid content-section'>
        <QuestionAnswers title='Can I Float' concerns={canIFloatConcerns} />
      </div>
      <div className='container-fluid content-section'>
        <QuestionAnswers title='FAQ' concerns={faqQuestions} />
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
