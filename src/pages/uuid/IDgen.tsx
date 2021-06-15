import React, { useContext } from 'react';
import { UuidContext } from '../../context/UuidContext';
import styles from './IDgen.module.scss';
import Options from './options/Options';
import Result from './result/Result';

const IDgen: React.FC = () => {
	const { cont, generateUuid } = useContext(UuidContext);
	const [uuidsContainer] = cont;

	return (
		<div className={styles.main}>
			<Options />
			<Result />

			<button className={styles.generate} onClick={generateUuid}>
				{uuidsContainer.length === 0 ? 'generate' : 'add more'}
			</button>
		</div>
	);
};

export default IDgen;
