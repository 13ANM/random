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
					How many UUIDs would you like? (1-200)
					<input type='number' min='1' max='200' id='amt' ref={amtRef} />
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
							onClick={() => setUppercase(!uppercase)}
						/>
					</label>
				</li>
				<li className={styles.option}>
					<label htmlFor='upp'>
						Braces
						<input
							type='checkbox'
							id='upp'
							checked={braces}
							onClick={() => setBraces(!braces)}
						/>
					</label>
				</li>
				<li className={styles.option}>
					<label htmlFor='upp'>
						Hyphens
						<input
							type='checkbox'
							id='upp'
							checked={!hyphens}
							onClick={() => setHyphens(!hyphens)}
						/>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default Options;
