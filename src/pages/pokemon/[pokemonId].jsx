import { Container, Content, Tipos, AlturaPeso } from '@/styles/pages/pokemon'
import axios from 'axios'
import Image from 'next/image'
import styles from '../../styles/pages/pokemon.module.css'

const Pokemon = ({ pokemon }) => {
    let types = pokemon.types
    console.log(pokemon)

    return (
        <Container>
            <h1>{pokemon.name}</h1>
            <Content>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width={300}
                    height={300}
                />
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
                <h3>Tipo:</h3>
                <Tipos>
                    {types.map((item, index) => (
                        <button
                            className={`${styles['type_' + item.type.name]}`}
                            key={item.type.index}
                        >
                            {item.type.name}
                        </button>
                    ))}
                </Tipos>
                <AlturaPeso>
                    <div>
                        <h3>Altura:</h3>
                        <p>{pokemon.height / 10}m</p>
                    </div>
                    <div></div>
                    <div>
                        <h3>Peso:</h3>
                        <p>{pokemon.weight / 10}kg</p>
                    </div>
                </AlturaPeso>
            </Content>
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
