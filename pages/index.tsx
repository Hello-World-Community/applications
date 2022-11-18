import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hello World! Forms</title>
				<meta
					name="description"
					content="The main website for Hello World! forms and applications."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello World! Applications</h1>
				<h2 className={styles.subtitle}>
					The main website for Hello World! forms and applications.
				</h2>

				<div className={styles.grid}>
					<Link href="http://s.hello-world.chat/fluentapp" className={styles.card}>
						<h2>Fluent Role</h2>
						<p>
							The Fluent role recognizes active programmers which have a
							intermediate level of understanding and are learning.
						</p>
					</Link>

					<Link href="https://dyno.gg/form/efc86d65" className={styles.card}>
						<h2>Feedback Form</h2>
						<p>
							The feedback form helps the Hello World! team improve the
							community to be more helpful and useful to you.
						</p>
					</Link>

					<Link
						href="/closed"
						className={styles.card}
						style={{ pointerEvents: "none", opacity: 0.5 }}
					>
						<h2>Proficient Role</h2>
						<p>
							The Proficient role recognizes and gives perks to programmers
							which have a high-level of understanding in a topic.
						</p>
					</Link>

					<Link
						href="/closed"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
						style={{ pointerEvents: "none", opacity: 0.5 }}
					>
						<h2>Staff Application</h2>
						<p>
							The Hello World! staff team work as volunteers to help answer
							questions, keep it safe, and make it a better place.
						</p>
					</Link>
				</div>
			</main>
		</div>
	)
}
