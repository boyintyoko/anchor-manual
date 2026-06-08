import Image from "next/image"

export default function Emergency() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-8">
      <h1 className="text-3xl font-bold">緊急対応・アレルギー対応</h1>

      <section className="flex flex-col gap-5 rounded-xl border p-6">
        <section className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            いおかわ かんな
          </h2>

          <div className="space-y-2">
            <p>
              <strong>食物アレルギー：</strong>
              乳・卵（除去対応）
            </p>

            <p>
              <strong>連絡順：</strong>
              ①母携帯 → ②父携帯 → ③母職場 → ④父職場
            </p>
          </div>
        </section>

        <Image
          src="/laundry-images/Iwao-Kanna.png"
          alt="Iwao Kanna"
          width={500}
          height={500}
          className="aspect-square w-full object-cover rounded-xl border border-slate-200"
        />

        <section className="rounded-xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="mb-3 text-xl font-bold">
            ⭐ エピペン所持
          </h2>

          <p>
            エピペンとは、重いアレルギー症状が起きた際に
            使用するアドレナリン自己注射薬です。
          </p>

          <div className="mt-4">
            <h3 className="font-semibold">
              重いアレルギー症状
            </h3>

            <ul className="mt-2 list-disc pl-6">
              <li>ぜーぜーする</li>
              <li>息苦しい</li>
              <li>ぐったりしている</li>
              <li>何度も嘔吐する</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">
            受け入れ時
          </h2>

          <ul className="list-disc pl-6">
            <li>
              ランドセル内にエピペン・頓服薬入りの
              お薬ポーチがあることを確認する
            </li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">
            昼食時
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>お弁当持参。それ以外は口にしない</li>
            <li>おやつも含めて他のものは食べない</li>
            <li>
              子どもたちには、自分のものだけを食べること、
              あげたりもらったりしないことを伝える
            </li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">
            おやつ
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              成分表を確認し、「乳・卵」の表示がないことを確認
            </li>
            <li>
              ダブルチェックを行い、
              アレルゲンが含まれていないことを確認
            </li>
            <li>
              他フロア・公園・外出先でおやつを食べる際は
              お薬ポーチを持参する
            </li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">
            お薬ポーチについて
          </h2>

          <p>
            リュックやランドセル内に常備。
          </p>

          <p className="mt-2">
            ランドセル外ポケット内の
            黄色のちいかわ巾着ポーチに収納。
          </p>

          <ul className="mt-4 list-disc pl-6">
            <li>エピペン</li>
            <li>頓服薬</li>
          </ul>

          <p className="mt-4">
            ※ 頓服薬の服用方法メモが入っているため確認する
          </p>
        </section>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-bold">
            頓服薬
          </h2>

          <ul className="list-disc pl-6">
            <li>
              口内のかゆみの訴えがあった場合、
              粉薬1包を服用させる
            </li>
            <li>
              スタッフが袋を開け、
              水またはお茶で服用させる
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="mb-4 text-xl font-bold">
            エピペン使用基準
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>過去に使用歴なし</li>
            <li>症状悪化時に使用</li>
            <li>
              発疹・かゆみ・咳など複数症状が出現した場合は
              エピペン使用と救急要請を行う
            </li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-bold">
            ロッカーの場所
          </h2>

          <p>
            ホワイトボード横のロッカー、
            下段1番左
          </p>
        </section>

        <section className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="mb-4 text-xl font-bold">
            土曜保育
          </h2>

          <h3 className="mb-2 font-semibold">
            受け入れ
          </h3>

          <ul className="mb-4 list-disc pl-6">
            <li>
              お弁当・水筒と一緒に
              お薬ポーチがあることを確認
            </li>
            <li>
              緊急連絡先に変更がないか確認
            </li>
          </ul>

          <h3 className="mb-2 font-semibold">
            おやつ
          </h3>

          <ul className="mb-4 list-disc pl-6">
            <li>
              バスの駄菓子ではなく、
              べーすのおやつから提供
            </li>
            <li>
              平日同様に成分確認と
              ダブルチェックを行う
            </li>
            <li>
              外出時はお薬ポーチを持参
            </li>
          </ul>

          <h3 className="mb-2 font-semibold">
            薬の管理
          </h3>

          <ol className="list-decimal pl-6">
            <li>
              登所時にお薬ポーチの場所を確認
            </li>
            <li>
              カバンの場所とポーチの場所を
              当日のスタッフ間で共有する
            </li>
          </ol>
        </section>

      </section>
    </div>
  )
}
