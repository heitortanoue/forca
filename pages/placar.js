import Container from "../components/container";
import { connectToDatabase } from "./api/mongoUtil";

export const getServerSideProps = async (context) => {
    const {db} = await connectToDatabase();
    const collection = db.collection('points');
    const resRanking = await collection.find({}, {projection: {email: false, _id: false}}).sort({points:-1}).toArray()
    const rankingJSON = await JSON.stringify(resRanking)
    return { props: { rankingJSON } }
}

export default function Placar ({ rankingJSON }) {
    const ranking = JSON.parse(rankingJSON)
    return (
        <Container>
            <div className="flex flex-col w-full">
                <div className="styled-font text-5xl text-tertiary text-center
                flex items-center gap-3 mx-auto mb-8">
                    <i className="fas fa-trophy"></i>
                    <div>Ranking</div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        ranking.map((el, ind) => {
                            const first = ind == 0
                            return (
                                <div key={ind}>
                                    <div className={`flex justify-between px-5 items-center
                                    ${first ? "bg-tertiary text-white font-medium rounded-lg" : ""}`}>
                                        <div className="">{ind + 1}</div>
                                        <div className="text-lg">
                                            {el.name}
                                        </div>
                                        <div className="styled-font text-xl">
                                            {el.points}
                                        </div>
                                    </div>
                                    <hr className="border-b-1 border-dark mt-2 opacity-20"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}