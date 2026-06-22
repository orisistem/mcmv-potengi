export function Footer() {
  return (
    <footer className="border-t border-[#e5e4e7] bg-[#fafcff]">
      <div className="mx-auto flex max-w-[1126px] flex-col items-center gap-2 px-4 py-8 text-center text-sm text-[#737880]">
        <p>
          &copy; {new Date().getFullYear()} Residencial Novo Potengi &mdash;
          Programa Minha Casa, Minha Vida
        </p>
        <p>
          Prefeitura Municipal de Potengi &mdash; Cear&aacute;
        </p>
      </div>
    </footer>
  )
}
