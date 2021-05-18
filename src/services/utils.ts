import fetch from 'cross-fetch';

function partitionArray<T>(array: readonly T[], partitionSize: number): readonly T[][] {
	const workingCopy: T[] = [...array];
	const result: T[][] = [];
	while (workingCopy.length) {
		result.push(workingCopy.splice(0, partitionSize));
	}
	return result;
}

async function http(request: string): Promise<any> {
	return new Promise((resolve) => {
		fetch(request)
			.then(
				(response) => {
					// console.log('received response, reading text body');
					return response.text();
				},
				(error) => {
					console.warn('could not load cards', error, error.message);
				},
			)
			.then((body) => {
				// console.log('sending back body', body && body.length);
				resolve(body);
			});
	});
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export { partitionArray, http, sleep };
