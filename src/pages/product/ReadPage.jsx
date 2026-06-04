import { useParams } from 'react-router-dom'

function ReadPage() {
  const { no } = useParams()

  return <div>Read Page: {no}</div>
}

export default ReadPage
