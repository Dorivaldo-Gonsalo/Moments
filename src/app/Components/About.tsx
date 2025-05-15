import Image from 'next/image';

const praias = [
  {
    nome: 'Praia do Sancho – Fernando de Noronha (PE)',
    descricao: 'Considerada uma das praias mais bonitas do mundo, com águas cristalinas, rica vida marinha e paisagens intocadas. Ideal para quem busca contato direto com a natureza.',
    imagem: './img/foto2.jpg',
  },
  {
    nome: 'Praia de Lopes Mendes – Ilha Grande (RJ)',
    descricao: 'Conhecida por sua longa faixa de areia branca e águas calmas, perfeita para relaxar ou dar caminhadas. Acesso apenas por trilha ou barco.',
    imagem: './img/foto3.jpg',
  },
  {
    nome: 'Praia do Espelho – Trancoso (BA)',
    descricao: 'Combinação perfeita de falésias, coqueiros e mar tranquilo. Um refúgio paradisíaco para quem busca tranquilidade e charme rústico.',
    imagem: './img/images.jpg',
  },
  {
    nome: 'Praia de Pipa – Tibau do Sul (RN)',
    descricao: 'Charmosa e vibrante, combina natureza exuberante com boa infraestrutura turística. Ótima para relaxar durante o dia e curtir à noite.',
    imagem: './img/foto1.jpg',
  },
  {
    nome: 'Praia da Lagoinha do Leste – Florianópolis (SC)',
    descricao: 'Praia selvagem acessível por trilha. Recompensa os visitantes com uma paisagem deslumbrante e isolamento total da cidade.',
    imagem: './img/foto4.jpg',
  },
];

export default function RelaxarNaPraia() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Relaxe e Renove-se: A Importância de Ter um Tempo na Praia</h1>
      <p style={{ marginBottom: '2rem' }}>
        Em meio à correria do dia a dia, tirar um tempo para si é mais do que um luxo – é uma necessidade. E não há lugar melhor para isso do que a praia.
        O som das ondas, a brisa do mar e o contato com a natureza ajudam a reduzir o estresse, melhorar a saúde mental e física, além de renovar as energias.
        Seja lendo um livro à sombra de um coqueiro, caminhando na areia molhada ou simplesmente observando o horizonte, a praia oferece o cenário ideal
        para desacelerar e reconectar consigo mesmo.
      </p>

      <h2>5 Praias Incríveis para Visitar</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {praias.map((praia, index) => (
          <li key={index} style={{ marginBottom: '2.5rem' }}>
            {/* <Image
              src={praia.imagem}
              alt={praia.nome}
              width={800}
              height={450}
              style={{ borderRadius: '8px', marginBottom: '1rem' }}
            /> */}
            <h3>{praia.nome}</h3>
            <p>{praia.descricao}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
