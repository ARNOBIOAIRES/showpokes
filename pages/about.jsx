import Image from 'next/image'

import styles from '../styles/About.module.css'


export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Mas um projeto. Esse utilizei o framework NextJS que 
        utiliza ReactJS. Esse framework nos dá a possibilidade de renderizar as páginas
        do lado do servidor - resolve os problemas de SEO -. Outra feature bem interessante
        é o sistema de roteamento de páginas e a criação de páginas dinâmicas.
        Não precisa instalar uma lib externa, o próprio framework resolve.

        Aqui utilizamos uma api externa. Usamos a função getStaticProps e getStaticPaths.
        </p>

      <Image src="/images/charizard.png"
       width="300"
       height="300"
       alt="charizard"
       />

    </div>

  )
}
