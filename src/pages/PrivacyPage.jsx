import LegalLayout, { LegalSection } from '../components/LegalLayout'
import Seo from '../components/Seo'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Política de Privacidade — HeyFlat"
        description="Veja quais dados o HeyFlat coleta, para que são usados e quais escolhas você tem sobre suas informações."
        path="/privacidade"
      />
      <LegalLayout title="Política de Privacidade" updatedAt="20 de julho de 2026">
      <p className="text-sm leading-relaxed">
        Esta política explica quais dados o HeyFlat coleta, para que eles são usados e quais
        escolhas você tem sobre eles. Falamos de forma direta, sem economês — se algo não estiver
        claro, escreva pra gente em{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <LegalSection id="coleta" title="1. Quais dados coletamos">
        <p>Coletamos apenas o necessário pra fazer o HeyFlat funcionar pra você e sua casa:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Dados de cadastro: nome, e-mail e senha (usada apenas para autenticação, nunca vemos a senha em texto puro).</li>
          <li>Dados de perfil opcionais: foto, telefone e informações de pagamento (ex: PayID) que você mesmo cadastra.</li>
          <li>Dados da casa: endereço, moradores, contas, tarefas, compras e itens do Cofre da casa que você e seus moradores cadastram.</li>
          <li>Dados de uso técnico: informações básicas de sessão para manter você logado com segurança.</li>
          <li>Dados de cobrança: quando a assinatura da casa estiver ativa, o processamento do pagamento é feito por um provedor terceirizado (ex: Stripe) — o HeyFlat não armazena o número do seu cartão.</li>
        </ul>
      </LegalSection>

      <LegalSection id="uso" title="2. Como usamos esses dados">
        <ul className="list-disc space-y-1 pl-5">
          <li>Fazer o app funcionar: dividir contas, organizar tarefas, mostrar o calendário e os relatórios da sua casa.</li>
          <li>Autenticar seu login e manter sua conta segura.</li>
          <li>Enviar notificações que você ativou (ex: lembrete de conta ou tarefa no dia do vencimento).</li>
          <li>Processar a cobrança da assinatura da casa, quando aplicável.</li>
          <li>Dar suporte quando você entra em contato com a gente.</li>
        </ul>
      </LegalSection>

      <LegalSection id="compartilhamento" title="3. Compartilhamento com terceiros">
        <p>
          Nós não vendemos seus dados. Eles só são compartilhados com prestadores de serviço
          estritamente necessários para o HeyFlat funcionar — hoje, isso é o Supabase (banco de
          dados e autenticação) e, quando a assinatura estiver ativa, um processador de pagamentos
          como o Stripe. Cada um desses parceiros só recebe o dado mínimo necessário pra prestar o
          serviço dele.
        </p>
        <p>
          Dentro da sua casa, seus dados de contas, tarefas e compras são visíveis pelos outros
          moradores — afinal, é uma ferramenta compartilhada. Informações do Cofre da casa (Wi-Fi,
          PayID, dados bancários) também ficam visíveis só para quem mora na casa.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="4. Cookies e armazenamento local">
        <p>
          Usamos apenas o armazenamento local do navegador (localStorage) necessário para manter
          sua sessão logada entre visitas. Não usamos cookies de rastreamento publicitário nem
          vendemos dados de navegação para terceiros.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="5. Segurança">
        <p>
          Seus dados ficam hospedados com criptografia em trânsito e em repouso pelo nosso
          provedor de banco de dados. O acesso aos dados da sua casa é restrito a você e aos
          moradores dela — administradores da casa têm permissões extras (como remover moradores
          ou apagar dados), mas apenas dentro da própria casa.
        </p>
      </LegalSection>

      <LegalSection id="direitos" title="6. Seus direitos e controle sobre os dados">
        <p>Você tem controle direto sobre boa parte dos seus dados, direto no app:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Editar seu perfil e informações de pagamento a qualquer momento.</li>
          <li>Sair de uma casa quando quiser.</li>
          <li>Se for admin, apagar todos os dados da casa ou deletar a casa inteira, permanentemente.</li>
        </ul>
        <p>
          Pra qualquer outra solicitação sobre seus dados — como exportação ou exclusão da sua
          conta de usuário — escreva pra{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="mudancas" title="7. Mudanças nesta política">
        <p>
          Se atualizarmos esta política de forma relevante, vamos avisar por e-mail ou por um
          aviso dentro do app antes da mudança valer.
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  )
}
