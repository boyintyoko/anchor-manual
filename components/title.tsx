type Props = {
  title: string;
}

export default function Title({title}: Props) {
  return (
    <div className="font-bold text-2xl text-blue-300 p-10">{title}</div>
  )
}
