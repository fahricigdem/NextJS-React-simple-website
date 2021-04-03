import styles from '../../styles/Refugeeks.module.css'
import Link from 'next/link'
import Head from 'next/head'
import slug from 'slug'   // npm i slug (first install in terminal) for better url

export const getStaticProps = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    return {
        // props: { refugeeks: data }
        props: { refugeeks: data.results }
    }
}


const Refugeeks = ({ refugeeks }) => {
    return (
        <>
            <Head>
                <title>Refugeeks | All</title>
                <meta name="keywords" content="refugeeks" />
            </Head>
            <div>
                <h1>All Refugeeks</h1>
                {refugeeks.map(refugeek =>
                    <Link
                        href="/refugeeks/[slug]"
                        as={`/refugeeks/${slug(refugeek.name)}-${refugeek.id}`} key={refugeek.id}>
                        <a className={styles.single}>
                            <h3>{refugeek.name}</h3>
                        </a>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Refugeeks;


{/* <Link href={'/refugeeks/' + refugeek.id} key={refugeek.id}> */ }