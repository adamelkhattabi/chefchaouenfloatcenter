import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import SectionTitle from "../section-title/section-title.client";
import styles from './questions-answers.module.css';

interface QuestionsAnswersProps {
    title: string,
    concerns: {
        question: string,
        answer: string
    }[]
}

export default function QuestionAnswers({ title, concerns }: QuestionsAnswersProps) {

    return (<div className="container">
        <SectionTitle>{title}</SectionTitle>
        {
            concerns.map((concern, index) => <Accordion key={index}>
                <AccordionSummary><h4 className={styles.question}>{ concern.question }</h4></AccordionSummary>
                <AccordionDetails>
                    <p dangerouslySetInnerHTML={{ __html: concern.answer }}></p>
                </AccordionDetails>
            </Accordion>)
        }
    </div>)
}