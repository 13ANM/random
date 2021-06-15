import styles from './Credits.module.scss';
import { links } from './data';

const Credits: React.FC = () => {
	return (
		<div className={styles.credits}>
			<ul>
				{links.map((link) => {
					const { id, href, icon } = link;

					return (
						<li key={id}>
							<a href={href} target='blank'>
								{icon}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Credits;
