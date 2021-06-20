import React, { useState } from 'react';
import styles from './Nav.module.scss';
import { links } from './data';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
	const [activeLink, setActiveLink] = useState<number>(1);

	console.log(activeLink);

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<ul className={styles.list}>
					{links.map((link) => {
						const { id, text, page } = link;
						return (
							<li key={id}>
								<Link
									to={page}
									onClick={() => setActiveLink(parseInt(id))}
									className={`
							${activeLink === parseInt(id) ? styles.active : styles.link}
								 `}
								>
									{text}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
