import Card from '@/components/Card'
import axios from 'axios'
import Image from 'next/image'
import { Container, Titulo, Cards } from '../styles/pages'

export default function Home({ data }) {
    console.log(data)
    return (
        <Container>
            <Titulo>
                <h1>
                    <span>Poke</span>
                    <span>Next</span>
                </h1>
                <Image
                    src="/images/pokeball.png"
                    width={50}
                    height={50}
                    alt="pokeball"
                />
            </Titulo>
            <Cards>
                {data.map((data) => (
                    <Card key={data.id} data={data} />
                ))}
            </Cards>
        </Container>
    )
}

export async function getStaticProps() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const data = await res.data

    data.results.forEach((item, index) => {
        item.id = index + 1
    })

    return {
        props: {
            data: data.results,
        },
    }
}
