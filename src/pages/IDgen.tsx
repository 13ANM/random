import React, { useEffect, useState } from 'react';
import styles from './IDgen.module.scss';

const IDgen: React.FC = () => {
	const [uuid, setUuid] = useState<any>();
	const [uppercase, setUppercase] = useState<boolean>(false);
	const [braces, setBraces] = useState<boolean>(false);
	const [hyphens, setHyphens] = useState<boolean>(false);

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
			<div className={styles.options}>
				<div className={styles.option}>
					<label htmlFor='upp'>
						Uppercase
						<input
							type='checkbox'
							id='upp'
							checked={uppercase}
							onClick={() => setUppercase(!uppercase)}
						/>
					</label>
				</div>
				<div className={styles.option}>
					<label htmlFor='upp'>
						Braces
						<input
							type='checkbox'
							id='upp'
							checked={braces}
							onClick={() => setBraces(!braces)}
						/>
					</label>
				</div>
				<div className={styles.option}>
					<label htmlFor='upp'>
						Hyphens
						<input
							type='checkbox'
							id='upp'
							checked={!hyphens}
							onClick={() => setHyphens(!hyphens)}
						/>
					</label>
				</div>
			</div>

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
