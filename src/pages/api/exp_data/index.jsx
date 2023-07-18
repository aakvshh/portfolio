import { getExperienceData } from "../../../../lib/mongo/data";

const handler = async (req, res) => {
    if (req.method === 'GET'){
        try{
            const {experience, error} = await getExperienceData()
            if (error) throw new Error(error)

            return res.status(200).json({ experience })
            
        } catch (error) {
            return res.status(500).json({ error: error.message})
        }
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed`)
}

export default handler