import { Link } from "react-router-dom"
import "./CategoryContent.scss"

const CategoryContent = ({data,title}) => {
  return (
    <div className="category__content">
        <div className="category__head">
            <h2>{title}</h2>
            <button>See All</button>
        </div>
        <div className="category__content-main">
            {
                data?.map(x=>
                        <div key={x.id} className="category__content-item">
                            <Link to={`/playlist/${x.id}`}>
                            <img src={x.images[0].url} alt="" />
                            </Link>
                            <h4>{x.name.length>16?x.name.slice(0,15)+"...":x.name}</h4>
                            <p>{x.description.length>30?x.description.slice(0,30)+"...":x.description}</p>
                        </div>
                    )
            }
        </div>
    </div>
  )
}

export default CategoryContent