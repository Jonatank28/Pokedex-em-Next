import { Container } from '@/styles/pages/about'
import Image from 'next/image'

const About = () => {
    return (
        <Container>
            <div>
                <h1>Sobre o projeto</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi laudantium cumque laborum quos temporibus quam dolorem
                    quod recusandae ex possimus, aspernatur, in excepturi illo
                    facere deleniti ab consequuntur natus repellendus.
                </p>
            </div>
            <Image
                src="/images/charizard.png"
                alt="Charizard"
                width={350}
                height={350}
            />
        </Container>
    )
}

export default About
