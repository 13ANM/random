import React, { useState, createContext, useEffect } from 'react';

export interface UuidProps {
	upp: any;
	brc: any;
	hyp: any;
}

export const UuidContext = createContext<UuidProps>({
	upp: false,
	brc: false,
	hyp: false,
});

export const UuidProvider = ({ children }: any) => {
	const [uppercase, setUppercase] = useState<boolean>(false);
	const [braces, setBraces] = useState<boolean>(false);
	const [hyphens, setHyphens] = useState<boolean>(false);

	return (
		<UuidContext.Provider
			value={{
				upp: [uppercase, setUppercase],
				brc: [braces, setBraces],
				hyp: [hyphens, setHyphens],
			}}
		>
			{children}
		</UuidContext.Provider>
	);
};
