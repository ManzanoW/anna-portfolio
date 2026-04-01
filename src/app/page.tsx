import Link from "next/link";
import Image from "next/image";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "formacao", label: "Formação" },
  { id: "experiencia", label: "Experiência" },
  { id: "competencias", label: "Competências" },
  { id: "contato", label: "Contato" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50 text-slate-900">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-emerald-600">
              Portfólio profissional
            </span>
            <span className="text-lg font-semibold">
              Anna Clara Zoppi Perico
            </span>
          </div>
          <nav className="hidden gap-4 text-sm md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Início / Hero */}
        <section
          id="inicio"
          className="border-b bg-gradient-to-b from-emerald-50 via-emerald-50 to-slate-50"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Estudante de Enfermagem · Santa Casa de Santos
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Cuidado, empatia e comunicação no centro da assistência em
                saúde.
              </h1>
              <p className="max-w-xl text-sm text-slate-600 md:text-base">
                Sou estudante de Enfermagem na Universidade Católica de Santos
                (Unisantos) e estagiária na Santa Casa de Santos. Trago uma base
                sólida em atendimento ao cliente, comunicação e empatia, agora
                aplicada ao cuidado integral em saúde.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-800 transition-colors"
                >
                  Entrar em contato
                </a>
                <a
                  href="#experiencia"
                  className="rounded-md border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 bg-white/70 hover:bg-emerald-50 transition-colors"
                >
                  Ver experiência
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative h-48 w-48 md:h-72 md:w-72">
                <div className="absolute inset-0 rounded-full bg-emerald-100 blur-xl" />
                <div className="relative mx-auto h-full w-full rounded-full border-4 md:border-8 border-white bg-slate-200 shadow-lg overflow-hidden">
                  <Image
                    src="/anna-nurse.png"
                    alt="Foto profissional de Anna Clara"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Sobre Anna Clara
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-slate-600 md:text-base">
              Com mais de cinco anos de experiência em vendas e atendimento ao
              público em empresas como Swarovski, PetBoss e Líder Celulares,
              desenvolvi habilidades essenciais de comunicação, escuta ativa e
              resolução de problemas. Hoje, canalizo essa experiência para a
              Enfermagem, unindo empatia, responsabilidade e foco em resultados
              no cuidado ao paciente.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
              Meu objetivo é atuar em instituições de saúde que valorizem o
              cuidado humanizado, o trabalho em equipe multidisciplinar e o
              desenvolvimento contínuo de competências técnicas e
              comportamentais.
            </p>
          </div>
        </section>

        {/* Formação */}
        <section id="formacao" className="border-b bg-emerald-50/60">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Formação acadêmica
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">
                  Bacharelado em Enfermagem
                </p>
                <p className="text-sm text-slate-600">
                  Universidade Católica de Santos (Unisantos)
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Início: fevereiro de 2024 · Previsão de conclusão: dezembro de 2028
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Áreas de interesse: clínica médica, cirúrgica, pronto
                  atendimento, cuidado humanizado e segurança do paciente.
                  (Ajustar conforme o foco real dela.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Experiência
            </h2>

            {/* Saúde */}
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Saúde
              </h3>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">
                  Estagiária de Enfermagem
                </p>
                <p className="text-sm text-slate-600">
                  Santa Casa de Santos · Março de 2025 – atual
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>
                    • Acompanhamento da rotina de enfermagem em (setor/unidade –
                    preencher).
                  </li>
                  <li>
                    • Apoio em cuidados básicos, organização de leitos e
                    acolhimento a pacientes e familiares, sempre sob supervisão
                    profissional.
                  </li>
                  <li>
                    • Desenvolvimento de habilidades em trabalho em equipe,
                    comunicação clara e registro adequado das informações.
                  </li>
                </ul>
              </div>
            </div>

            {/* Atendimento ao cliente */}
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Atendimento ao cliente
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800">
                    Consultora de vendas
                  </p>
                  <p className="text-sm text-slate-600">
                    Swarovski · Julho de 2023 – atual · Santos, SP
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li>
                      • Atendimento ao cliente e relacionamento pós-venda.
                    </li>
                    <li>• Conhecimento de produtos e técnicas de vendas.</li>
                    <li>
                      • Comunicação clara, empatia e foco em experiência do
                      cliente.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-800">
                    Vendedora
                  </p>
                  <p className="text-sm text-slate-600">
                    PetBoss · Fevereiro de 2023 – Maio de 2023 · Santos, SP
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li>• Atendimento ao cliente e suporte em loja.</li>
                    <li>• Reposição de estoque e organização.</li>
                    <li>• Administração de caixa e vendas.</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:col-span-2">
                  <p className="text-sm font-semibold text-slate-800">
                    Vendedora / Vendedora Interna
                  </p>
                  <p className="text-sm text-slate-600">
                    Líder Celulares · Fevereiro de 2019 – Novembro de 2022 ·
                    Santos, SP
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li>• Atendimento ao cliente em loja física.</li>
                    <li>• Reposição de estoque e organização de produtos.</li>
                    <li>• Administração de caixa e fechamento de vendas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competências */}
        <section id="competencias" className="border-b bg-emerald-50/60">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Competências
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-800">
                  Habilidades interpessoais
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>• Comunicação eficaz</li>
                  <li>• Escuta ativa</li>
                  <li>• Empatia e acolhimento</li>
                  <li>• Trabalho em equipe</li>
                </ul>
              </div>

              <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-800">
                  Competências em enfermagem
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>• Rotinas básicas de cuidado ao paciente</li>
                  <li>• Organização de materiais e ambiente</li>
                  <li>• Registro e observação de sinais (sob supervisão)</li>
                  <li>• Compromisso com segurança do paciente</li>
                </ul>
              </div>

              <div className="rounded-lg border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-800">
                  Experiência em atendimento
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>• Vendas e orientação ao cliente</li>
                  <li>• Organização de loja e estoque</li>
                  <li>• Operação de caixa</li>
                  <li>• Foco em qualidade de serviço</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contato</h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
              Para oportunidades de estágio, emprego ou outras formas de atuação
              em Enfermagem, entre em contato pelos canais abaixo.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-medium">E-mail: </span>
                  <a
                    href="mailto:anninhazoppi@gmail.com"
                    className="text-emerald-700 hover:underline"
                  >
                    anninhazoppi@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Telefone: </span>
                  <a
                    href="tel:+5513974238095"
                    className="text-emerald-700 hover:underline"
                  >
                    (13) 97423-8095
                  </a>
                </p>
                <p>
                  <span className="font-medium">LinkedIn: </span>
                  <Link
                    href="https://www.linkedin.com/in/anna-clara-z-49984720a"
                    className="text-emerald-700 hover:underline"
                    target="_blank"
                  >
                    /anna-clara-z-49984720a
                  </Link>
                </p>
                <p className="text-xs text-slate-500">
                  Endereço: Santos, São Paulo, Brasil
                </p>
              </div>

              <form className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Escreva sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-800 transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-emerald-50/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} · Anna Clara Zoppi Perico</span>
          <span>Desenvolvido por João Vytor Manzano</span>
        </div>
      </footer>
    </div>
  );
}
