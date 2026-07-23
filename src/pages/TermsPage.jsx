import LegalLayout, { LegalSection } from '../components/LegalLayout'
import Seo from '../components/Seo'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Termos de Uso — HeyFlat"
        description="Termos de uso do HeyFlat: como funciona a assinatura por casa, cancelamento e responsabilidades ao usar o app."
        path="/termos"
      />
      <LegalLayout title="Termos de Uso" updatedAt="20 de julho de 2026">
      <p className="text-sm leading-relaxed">
        Ao criar uma conta ou usar o HeyFlat, você concorda com estes termos. Leia com calma — e
        se tiver dúvida, é só chamar a gente em{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <LegalSection id="servico" title="1. O que é o HeyFlat">
        <p>
          O HeyFlat é uma ferramenta de organização para casas compartilhadas: divisão de contas,
          tarefas, lista de compras e calendário entre moradores. O HeyFlat calcula e registra
          quem deve o quê para quem dentro da casa, mas não processa nem intermedia esses
          pagamentos entre moradores — o acerto de contas entre vocês acontece fora do app.
        </p>
      </LegalSection>

      <LegalSection id="conta" title="2. Conta, casas e assinatura">
        <ul className="list-disc space-y-1 pl-5">
          <li>Você precisa de uma conta válida (com e-mail verificado) para usar o HeyFlat.</li>
          <li>Cada casa é administrada por quem a criou (ou por quem recebeu o cargo de admin), e é cobrada uma assinatura mensal por casa — não por morador.</li>
          <li>Toda assinatura nova começa com um período de teste gratuito; você só é cobrado depois que esse período termina, caso não cancele antes.</li>
          <li>Você pode cancelar a assinatura a qualquer momento direto nas configurações da casa, sem multa.</li>
        </ul>
      </LegalSection>

      <LegalSection id="uso-aceitavel" title="3. Uso aceitável">
        <p>Ao usar o HeyFlat, você concorda em não:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Usar o app para atividades ilegais ou fraudulentas.</li>
          <li>Tentar acessar dados de uma casa da qual você não faz parte.</li>
          <li>Tentar interferir no funcionamento normal do serviço (ex: sobrecarregar, invadir ou fazer engenharia reversa do sistema).</li>
        </ul>
      </LegalSection>

      <LegalSection id="dados-da-casa" title="4. Seus dados e conteúdo">
        <p>
          As informações que você e seus moradores cadastram (contas, tarefas, itens do Cofre,
          etc.) continuam sendo de vocês. O HeyFlat só as usa para operar o serviço, conforme
          descrito na nossa{' '}
          <a href="/privacidade" className="text-brand-600 hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="cancelamento" title="5. Cancelamento e encerramento">
        <p>
          Você pode sair de uma casa, apagar os dados da casa ou deletar a casa inteira a qualquer
          momento, direto no app (ações de admin são permanentes e não podem ser desfeitas). O
          HeyFlat pode suspender ou encerrar contas que violem estes termos.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" title="6. Limitação de responsabilidade">
        <p>
          O HeyFlat é fornecido "como está". Fazemos o possível para manter os cálculos de divisão
          de contas e os dados da sua casa corretos e disponíveis, mas não garantimos operação
          ininterrupta nem nos responsabilizamos por decisões financeiras tomadas com base nos
          dados do app — a divisão registrada é um acordo entre os moradores, não uma transação
          financeira intermediada por nós.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="7. Alterações nestes termos">
        <p>
          Podemos atualizar estes termos conforme o HeyFlat evolui. Mudanças relevantes serão
          avisadas por e-mail ou dentro do app antes de entrarem em vigor.
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  )
}
