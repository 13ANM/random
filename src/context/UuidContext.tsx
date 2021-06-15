import { useState, createContext, useRef, useEffect } from 'react';

export interface UuidProps {
	upp: any;
	brc: any;
	hyp: any;
	amtRef: any;
	cont: any;
	randomUuid: any;
	generateUuid: any;
}

export const UuidContext = createContext<UuidProps>({
	upp: false,
	brc: false,
	hyp: false,
	amtRef: null,
	cont: [],
	randomUuid: () => [],
	generateUuid: () => [],
});

export const UuidProvider = ({ children }: any) => {
	const [uuidsContainer, setUuidsContainer] = useState<Array<any>>([]);
	const [uppercase, setUppercase] = useState<boolean>(false);
	const [braces, setBraces] = useState<boolean>(false);
	const [hyphens, setHyphens] = useState<boolean>(false);
	const amtRef = useRef<HTMLInputElement>();

	useEffect(() => {
		if (uuidsContainer.length >= 200) {
			uuidsContainer.splice(0, 200);
		}
	}, [uuidsContainer]);

	console.log(uuidsContainer);

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

	const generateUuid = (e: any) => {
		e.preventDefault();
		const uuids = uuidsContainer.slice(0);
		const amount = amtRef.current?.value;
		for (
			let number: number = 1;
			// @ts-ignore: Object is possibly 'null'.
			number <= parseInt(amount) &&
			// @ts-ignore: Object is possibly 'null'.
			parseInt(amount) <= 200;
			number++
		) {
			uuids.push(randomUuid());
			setUuidsContainer(uuids);
		}
	};

	return (
		<UuidContext.Provider
			value={{
				cont: [uuidsContainer, setUuidsContainer],
				upp: [uppercase, setUppercase],
				brc: [braces, setBraces],
				hyp: [hyphens, setHyphens],
				amtRef,
				randomUuid,
				generateUuid,
			}}
		>
			{children}
		</UuidContext.Provider>
	);
};
