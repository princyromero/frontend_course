import { Link } from "react-router-dom"

const StringRendering = () => {
  return (<>
  <div className="bg-violet-400">
    <div className="aligin text-center h-50">
      <h1 className="bg-lime-300 w-50 rounded-2xl p-1">Switzerland <Link to ={"/"}className="bg-white rounded mx-1 w-12 p-1 flex gap-4 ">Back</Link></h1>
      <p >
Interlaken is one of the most beautiful tourist destinations in Switzerland. 
It is located between two stunning lakes, Lake Thun and Lake Brienz, and is surrounded by the magnificent Swiss Alps. 
The place is famous for its natural beauty, crystal-clear lakes, green mountains, and peaceful atmosphere. Visitors can enjoy activities such as boating, paragliding, hiking, and sightseeing. 
Interlaken is an ideal destination for families, couples, and adventure lovers. The best time to visit is from June to September for pleasant weather and outdoor activities. 
Interlaken offers an unforgettable travel experience with breathtaking views and beautiful memories.</p>
</div>
</div>
  </>
  )
}

export default StringRendering