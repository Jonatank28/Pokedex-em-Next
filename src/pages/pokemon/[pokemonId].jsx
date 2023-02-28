import { Container } from '@/styles/pages/pokemon'
import axios from 'axios'
import Image from 'next/image'

const Pokemon = ({ pokemon }) => {
    let types = pokemon.types
    console.log(pokemon)

    return (
        <Container>
            <h1>{pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={250}
                height={250}
            />
            {types.map((type) => (
                <p key={type.type.name}>{type.type.name}</p>
            ))}
        </Container>
    )
}

export default Pokemon

export const getStaticPaths = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const data = await res.data

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: index.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.data

    return {
        props: { pokemon: data },
    }
}
