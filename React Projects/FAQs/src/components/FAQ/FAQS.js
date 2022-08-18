import React , {useState} from 'react'

import FAQ from '../FAQ';
import { faqsData } from './data'
import style from './faqs.module.css'

export const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className= {style.container} >
        <section className= {style.faqs} >
           <h1>FaQs</h1>
           
            {faqs.map(faq => <FAQ key={faq.id} {...faq} /> )}
           
        </section>
    </main>
  )
}
