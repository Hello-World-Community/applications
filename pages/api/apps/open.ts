import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	applications: Array<{ name: string, open: boolean }>
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		applications: [
			{ name: "fluent", open: true },
			{ name: "feedback", open: true },
			{ name: "proficient", open: false },
			{ name: "staff", open: false },
		],
	})
}
