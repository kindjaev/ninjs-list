import styles from "../../styles/Ninjas.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1 className={styles.main}>Ninjas</h1>
            {ninjas.map(ninja => 
                <div className={styles.single}  key={ninja.id}>
                    <Link href={`/ninjas/${ninja.id}`}>{ninja.name}</Link>
                </div>
             )}
        </div>
     );
}
 
export default Ninjas;