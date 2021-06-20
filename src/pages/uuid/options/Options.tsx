import { useContext } from 'react';
import { UuidContext } from '../../../context/UuidContext';
import styles from './Options.module.scss';

const Options: React.FC = () => {
	const { upp, brc, hyp, amtRef, generateUuid } = useContext(UuidContext);
	const [uppercase, setUppercase] = upp;
	const [braces, setBraces] = brc;
	const [hyphens, setHyphens] = hyp;

	return (
		<div className={styles.container}>
			<form className={styles.value} onSubmit={generateUuid}>
				<label htmlFor='amt'>
					How many UUIDs would you like? (1-500)
					<input type='number' min='1' max='500' id='amt' ref={amtRef} />
					<button type='submit'></button>
				</label>
			</form>

			<ul className={styles.options}>
				<li className={styles.option}>
					<label htmlFor='upp'>
						Uppercase
						<input
							type='checkbox'
							id='upp'
							checked={uppercase}
							onChange={() => setUppercase(!uppercase)}
						/>
					</label>
				</li>
				<li className={styles.option}>
					<label htmlFor='brc'>
						Braces
						<input
							type='checkbox'
							id='brc'
							checked={braces}
							onChange={() => setBraces(!braces)}
						/>
					</label>
				</li>
				<li className={styles.option}>
					<label htmlFor='hyp'>
						Hyphens
						<input
							type='checkbox'
							id='hyp'
							checked={!hyphens}
							onChange={() => setHyphens(!hyphens)}
						/>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default Options;
