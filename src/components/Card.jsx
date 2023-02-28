import { Container } from '../styles/components/stylesCard'
import Image from 'next/image'

const Card = ({ data }) => {
    return (
        <Container>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                width={120}
                height={120}
            />
            <h3>{data.name}</h3>
        </Container>
    )
}

export default Card
