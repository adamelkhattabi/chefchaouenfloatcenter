import SectionTitle from "../section-title/section-title.client";
import WhyFloatSection from "../why-float-section/why-float-section.client";

interface FloatingBenefitsProps {
    sections: {
        header: string,
        reasons: {
            title: string,
            content: string,
            image: string
        }[]
    }[]
}

export default function FloatingBenefits({ sections }: FloatingBenefitsProps) {

    return (<div className="container">
        <SectionTitle>Why Float</SectionTitle>
        {
            sections.map((section, index) => <WhyFloatSection {...section} key={index} />)
        }
    </div>)
}