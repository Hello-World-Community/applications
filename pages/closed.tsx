import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function closed() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Application Closed</title>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Application Closed</h1>
				<h2 className={styles.subtitle}>
					This application or form is currently closed and is not accepting any more
					responses.
				</h2>
			</main>
		</div>
	)
}
