export default function Rubbish() {

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-8">
      <h1 className="text-3xl font-bold">
        ゴミの捨て方
      </h1>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          ゴミの分別
        </h2>

        <p>
          各フロアで溜まったゴミは、
          青・赤のカエル袋へ分別して入れる。
        </p>

        <p className="mt-2">
          袋には「学童保育 Anchor」と記入する。
        </p>

        <div className="mt-4 space-y-2">
          <p>
            <span className="font-bold text-blue-600">
              青袋
            </span>
            ：紙ゴミ・プラごみ・ペットボトル
          </p>

          <p>
            <span className="font-bold text-red-600">
              赤袋
            </span>
            ：カン・ビン
          </p>
        </div>

        <div className="mt-4 rounded-lg bg-red-50 p-4">
          赤袋のゴミは、それぞれ個別の
          カエル袋にまとめる。
        </div>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          ゴミ箱への保管
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            ベース裏のゴミ箱に置くときは、
            ゲージ・バケツから
            はみ出さないように入れる
          </li>

          <li>
            入らないものは倉庫に入れ、
            LINEで入っていることを伝える
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-green-200 bg-green-50 p-6">
        <h2 className="mb-4 text-xl font-bold">
          生ゴミ処理
        </h2>

        <p>
          生ゴミは平屋ガレージにある
          生ゴミ処理機を使用して処理する。
        </p>

        <p className="mt-2 text-sm text-slate-600">
          ※ ゴミ捨て場へそのまま置くと
          液漏れするため
        </p>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理機に投入できるもの
        </h2>

        <ul className="list-disc pl-6">
          <li>
            ごはん
          </li>
          <li>
            麺類
          </li>
          <li>
            肉類
          </li>
          <li>
            魚類
          </li>
          <li>
            野菜くず
          </li>
          <li>
            果物くず
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="mb-4 text-xl font-bold">
          投入できないもの
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>酒類</li>
          <li>大量のかんきつ類</li>
          <li>牛・豚・鶏などの骨</li>
          <li>大量の卵の殻</li>
          <li>ラップ</li>
          <li>割りばし</li>
          <li>アルミホイル</li>
          <li>紙類</li>
          <li>その他、生ゴミ以外のもの</li>
        </ul>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理時の注意
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            水分を十分に切る
          </li>

          <li>
            ネギなどの細長い繊維質の野菜や
            大きいゴミは5cm以下にカットする
          </li>

          <li>
            油分が多すぎるものは、
            他の種類の生ゴミを追加して調整する
          </li>
        </ul>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理後の注意
        </h2>

        <ul className="list-disc pl-6">
          <li>
            ゴミが腐敗しないよう
            早めに処理する
          </li>
        </ul>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理機の操作方法
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>
            「入」ボタンを押す
          </li>
          <li>
            スタート
          </li>
        </ol>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理済みゴミの処分
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>
            処理容器を取り出す
          </li>

          <li>
            ゴミを捨てる
          </li>

          <li>
            平屋の畑へ撒く
          </li>
        </ol>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">
          処理機の清掃
        </h2>

        <h3 className="mb-2 font-semibold">
          処理容器
        </h3>

        <ol className="mb-4 list-decimal space-y-2 pl-6">
          <li>本体から取り出す</li>
          <li>お湯または水に浸す</li>
          <li>スポンジで洗う</li>
        </ol>

        <h3 className="mb-2 font-semibold">
          乾燥室（内側）
        </h3>

        <ul className="list-disc pl-6">
          <li>
            濡らして軽く絞った布で拭き取る
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-yellow-300 bg-yellow-50 p-6">
        <h2 className="mb-2 text-xl font-bold">
          重要
        </h2>

        <p>
          処理機の中に入りきらない場合は、
          バケツに入れて保管し、
          翌日に処理機へ投入する。
        </p>
      </section>
    </div>
  )
}
