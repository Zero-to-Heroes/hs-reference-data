function partitionArray<T>(array: readonly T[], partitionSize: number): readonly T[][] {
	const workingCopy: T[] = [...array];
	const result: T[][] = [];
	while (workingCopy.length) {
		result.push(workingCopy.splice(0, partitionSize));
	}
	return result;
}

async function httpWithRetries(request: string, retriesLeft = 1, timeBetweenRetries = 1000): Promise<any> {
	console.log('fetch with retries', request, retriesLeft, timeBetweenRetries);
	if (retriesLeft <= 0) {
		console.error('could not load cards', request);
		return null;
	}

	let result = null;
	try {
		result = await http(request);
		// console.log('loaded cards', result?.length);
	} catch (e) {
		console.warn('Exception while getting cards', e);
	}
	if (!result || result.startsWith('<')) {
		console.log('no result, sleeping');
		await sleep(timeBetweenRetries);
		console.log('retrying');
		return httpWithRetries(request, retriesLeft - 1);
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
					console.warn('could not load cards', error, error.message, JSON.stringify(error));
					return null;
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

export { http, httpWithRetries, partitionArray, sleep };
