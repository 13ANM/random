import React, { useContext, useEffect, useState } from 'react';
import { UuidContext } from '../../context/UuidContext';
import styles from './IDgen.module.scss';
import Options from './options/Options';

const IDgen: React.FC = () => {
	const [uuid, setUuid] = useState<any>();
	const { upp, brc, hyp } = useContext(UuidContext);
	const [uppercase, setUppercase] = upp;
	const [braces, setBraces] = brc;
	const [hyphens, setHyphens] = hyp;

	const randomUuid = () => {
		let u = '',
			i = 0;
		while (i++ < 36) {
			let c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1],
				r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			u += c === '-' || c === '4' ? c : v.toString(16);
		}
		return u;
	};

	useEffect(() => {
		randomUuid();
	}, []);

	return (
		<div className={styles.main}>
			<Options />

			<div className={styles.container}>
				<p className={`${uppercase ? styles.uppercase : styles.number}`}>
					{braces && '{'}
					{uuid}
					{braces && '}'}
				</p>
			</div>

			<button className={styles.generate} onClick={() => setUuid(randomUuid())}>
				generate
			</button>
		</div>
	);
};

export default IDgen;
