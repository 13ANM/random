import React, { useContext } from 'react';
import { UuidContext } from '../../../context/UuidContext';
import styles from './Result.module.scss';

const Result: React.FC = () => {
	const { cont, upp, brc, hyp } = useContext(UuidContext);
	const [uppercase] = upp;
	const [braces] = brc;
	const [hyphens] = hyp;
	const [uuidsContainer] = cont;

	return (
		<div className={styles.result}>
			<div className={styles.container}>
				{uuidsContainer.map((uuid: any, index: number) => (
					<p
						key={index}
						className={`${uppercase ? styles.uppercase : styles.number}`}
					>
						{braces && '{'}
						{hyphens ? `${uuid.replace(/-/g, '')}` : uuid && uuid}
						{braces && '}'}
					</p>
				))}
			</div>
		</div>
	);
};

export default Result;
