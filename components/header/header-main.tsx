import Title from "./title"
import Menu from "./menu"

export default function HeaderMain() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-8 gap-10">
        <Title />
        <Menu />
      </div>
    </header>
  )
}
