import { Container, Logo, Links } from '@/styles/components/stylesNavBar'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <Container>
            <Link href="/">
                <Logo>
                    <Image
                        src="/images/pokeball.png"
                        width={30}
                        height={30}
                        alt="Imagem da pokebola"
                    />
                    <h1>PokeNext</h1>
                </Logo>
            </Link>
            <Links>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>
                </ul>
            </Links>
        </Container>
    )
}

export default NavBar
