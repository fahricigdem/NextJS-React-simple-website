import Head from 'next/head'
import slug from 'slug'   // npm i slug (first install in terminal) for better url

export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json()

    // const paths = data.map(refugeek => {
    const paths = data.results.map(refugeek => {
        return {
            params: { slug: `${slug(refugeek.name)}-${refugeek.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.slug.split("-").slice(-1)[0]
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const res = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const data = await res.json()

    return {
        props: { refugeek: data }
    }
}

const Details = ({ refugeek }) => {
    return (
        <>
            <Head>
                <title>Refugeeks | {refugeek.name}</title>
                <meta name="keywords" content="refugeeks" />
            </Head>
            <div><center>
                <h1>{refugeek.name}</h1>
                <img src={refugeek.image} width={180} alt={refugeek.image} />
                <p>status: {refugeek.status}</p>
                <p>species: {refugeek.species}</p>
                <p>gender: {refugeek.gender}</p>
                {/* <p>{refugeek.email}</p>
                <p>{refugeek.website}</p> */}
                {/* <p>{refugeek.address.city}</p> */}
            </center>

            </div>
        </>
    );
}

export default Details;