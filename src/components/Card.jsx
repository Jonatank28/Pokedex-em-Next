import { Container } from '../styles/components/stylesCard'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ pokemon }) => {
    return (
        <Container>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={120}
                height={120}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <button>
                <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
            </button>
        </Container>
    )
}

export default Card
