const menuItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Laundry",
    href: "/manual/laundry"
  },
  {
    name: "Emergency",
    href: "/manual/emergency"
  },
  {
    name: "Rubbish",
    href: "/manual/rubbish"
  }
]

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="rounded-lg px-4 py-2 text-white transition hover:bg-white/20"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
