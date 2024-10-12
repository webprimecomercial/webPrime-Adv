import { useState } from 'react'
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from './styles'
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io'

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(0)}>
          {openIndex === 0 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Quais são os valores fundamentais da sua advocacia?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 0}>
          Nossa advocacia é construída sobre princípios de ética, transparência e comprometimento com os interesses dos nossos clientes. Valorizamos a confiança e buscamos sempre a excelência em nossos serviços.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(1)}>
          {openIndex === 1 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como funciona o processo de consulta inicial?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 1}>
          A consulta inicial é uma oportunidade para entender suas necessidades. Durante essa reunião, ouvimos atentamente e oferecemos uma análise preliminar, apresentando possíveis caminhos a seguir.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(2)}>
          {openIndex === 2 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Quais são as áreas de especialização da sua equipe?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 2}>
          Nossa equipe é especializada em diversas áreas do direito, incluindo direito civil, comercial, trabalhista e familiar. Estamos preparados para atender a situações complexas e desafiadoras.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(3)}>
          {openIndex === 3 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como a sua equipe se mantém atualizada com as leis?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 3}>
          Nossos advogados participam regularmente de cursos, seminários e conferências. Além disso, mantemos uma biblioteca atualizada e acessamos as últimas publicações e jurisprudências para garantir que estamos sempre informados.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(4)}>
          {openIndex === 4 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Como vocês garantem a confidencialidade das informações?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 4}>
          Levamos a sério a privacidade de nossos clientes. Implementamos rigorosas políticas de confidencialidade e utilizamos tecnologia segura para proteger todas as informações trocadas durante o atendimento.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle onClick={() => toggleAccordion(5)}>
          {openIndex === 5 ? (
            <IoIosArrowDropupCircle size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
          Quais formas de pagamento vocês aceitam?
        </AccordionTitle>
        <AccordionContent isOpen={openIndex === 5}>
          Aceitamos diversas formas de pagamento, incluindo transferência bancária, cartão de crédito e opções de parcelamento. Durante a consulta inicial, discutiremos a melhor forma de atender às suas necessidades financeiras.
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>
  )
}
