import {useState} from "react"


const foods = ['cơm rang','cơm','phở bò','bún bò huế']
function Hnag(){
    const [food,setFood] = useState()
    const handleFood = () => {
       const index = Math.floor(Math.random() * foods.length)
       setFood(foods[index])
       console.log(index);
    }
    return(
       
        <div>
            
            <h1>Danh sách món ăn</h1>
            <ul>
                {foods.map((food,index)=>(
                    <li key={index}>{food}</li>
                ))}
                
            </ul>
            <button onClick={handleFood}>Click</button>
            <h2>{food || 'chưa chọn món'}</h2>
        </div>
    )

}
export default Hnag