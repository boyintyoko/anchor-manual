import fs from "fs"
import path from "path"
import Image from "next/image"

type LaundryItem = {
  file: string
  title: string
  description?: string
}

export default function Laundry() {
  const baseDir = path.join(
    process.cwd(),
    "public",
    "laundry-images"
  )

  const floors = fs.readdirSync(baseDir)

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-bold">
        洗濯物
      </h1>

      <div className="mt-8 space-y-10">
        {floors.map((floor) => {
          const floorDir = path.join(baseDir, floor)

          if (!fs.statSync(floorDir).isDirectory()) {
            return null
          }

          const dataPath = path.join(floorDir, "data.json")

          if (!fs.existsSync(dataPath)) {
            return null
          }

          const items: LaundryItem[] = JSON.parse(
            fs.readFileSync(dataPath, "utf-8")
          )

          return (
            <section
              key={floor}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-bold capitalize text-slate-800">
                  {floor}
                </h2>

                <p className="text-sm text-slate-500">
                  {items.length} items
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item) => (
                  <div
                    key={item.file}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-lg"
                  >
                    <Image
                      src={`/laundry-images/${floor}/${item.file}`}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="aspect-square w-full object-cover"
                    />

                    <div className="space-y-2 p-4">
                      <h3 className="font-semibold text-slate-800">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
