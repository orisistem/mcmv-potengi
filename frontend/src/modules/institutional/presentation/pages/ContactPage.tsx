import { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#003366] to-[#001D3A] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1126px] text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#80D4A6]">
            Contato
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Entre em contato
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#C3C7CF]">
            Tire suas d&uacute;vidas ou solicite mais informa&ccedil;&otilde;es
            sobre o Residencial Novo Potengi.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-[1126px] gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
              Envie sua mensagem
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-[#007A4D] bg-[#D4F0E0] p-6">
                <p className="font-semibold text-[#002112]">
                  Mensagem enviada com sucesso!
                </p>
                <p className="mt-2 text-[#002112]/80">
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#1A1D24]"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-2 border-[#C3C7CF] px-4 py-2.5 text-base text-[#1A1D24] outline-none transition-colors focus:border-[#003366] placeholder:text-[#737880]"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#1A1D24]"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-2 border-[#C3C7CF] px-4 py-2.5 text-base text-[#1A1D24] outline-none transition-colors focus:border-[#003366] placeholder:text-[#737880]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-[#1A1D24]"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="rounded-lg border-2 border-[#C3C7CF] px-4 py-2.5 text-base text-[#1A1D24] outline-none transition-colors focus:border-[#003366] placeholder:text-[#737880]"
                    placeholder="(88) 99999-9999"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#1A1D24]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-lg border-2 border-[#C3C7CF] px-4 py-2.5 text-base text-[#1A1D24] outline-none transition-colors focus:border-[#003366] placeholder:text-[#737880] resize-y"
                    placeholder="Sua d&uacute;vida ou mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-[#003366] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#002244]"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#08060d]">
              Informa&ccedil;&otilde;es de contato
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  label: 'Endere&ccedil;o',
                  value:
                    'Prefeitura Municipal de Potengi &mdash; Centro, Potengi-CE',
                  icon: (
                    <path d="M10 2.5C6.41 2.5 3.5 5.41 3.5 9C3.5 13.5 10 18.5 10 18.5C10 18.5 16.5 13.5 16.5 9C16.5 5.41 13.59 2.5 10 2.5ZM10 11.5C8.62 11.5 7.5 10.38 7.5 9C7.5 7.62 8.62 6.5 10 6.5C11.38 6.5 12.5 7.62 12.5 9C12.5 10.38 11.38 11.5 10 11.5Z" />
                  ),
                },
                {
                  label: 'Telefone',
                  value: '(88) 99999-9999',
                  icon: (
                    <path d="M17.38 14.38L13.88 12.88C13.67 12.79 13.44 12.77 13.22 12.82C13 12.87 12.8 12.99 12.66 13.16L11.44 14.63C9.14 13.53 7.33 11.72 6.23 9.42L7.69 8.2C7.86 8.06 7.98 7.86 8.03 7.64C8.08 7.42 8.06 7.19 7.97 6.98L6.47 3.47C6.36 3.22 6.16 3.03 5.91 2.93C5.67 2.84 5.4 2.84 5.16 2.95L2.66 3.97C2.42 4.07 2.22 4.25 2.1 4.49C1.98 4.73 1.95 5.01 2.02 5.27C2.88 8.2 4.85 10.86 7.5 12.5C9.15 13.57 11.05 14.21 13 14.37C13.25 14.4 13.5 14.34 13.71 14.21C13.92 14.08 14.08 13.89 14.16 13.66L15.18 11.16C15.28 10.91 15.29 10.64 15.2 10.39C15.11 10.14 14.93 9.95 14.69 9.85L11.19 8.35C10.97 8.26 10.74 8.24 10.52 8.29C10.3 8.34 10.1 8.46 9.96 8.63L8.74 10.1" />
                  ),
                },
                {
                  label: 'E-mail',
                  value: 'contato@potengi.ce.gov.br',
                  icon: (
                    <path d="M18 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 8L11 12.5L4 8V6L11 10.5L18 6V8Z" />
                  ),
                },
                {
                  label: 'Hor&aacute;rio de atendimento',
                  value:
                    'Segunda a sexta, das 8h &agrave;s 12h e 13h &agrave;s 17h',
                  icon: (
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D6E6F5]">
                    <svg
                      className="h-5 w-5 text-[#003366]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-[#08060d]"
                      dangerouslySetInnerHTML={{
                        __html: item.label,
                      }}
                    />
                    <p
                      className="text-sm text-[#6b6375]"
                      dangerouslySetInnerHTML={{
                        __html: item.value,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
