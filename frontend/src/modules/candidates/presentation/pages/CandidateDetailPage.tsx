import { useParams } from 'react-router-dom'

export default function CandidateDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-[#08060d]">
        Candidato
      </h1>
      <p className="text-[#6b6375]">Detalhes do candidato {id}.</p>
    </div>
  )
}
