import {useState} from 'react';
import Card from './Card.js';



function Cards(props){
    const originalData=props.data;
    const [data,setData]=useState(props.data);
    console.log(data);
    console.log(Array.isArray(data));
    function updateData(id){
        let updatedData=data.filter((data)=>{
            return data.id !== id;
        });
        setData(updatedData);
    }
    function refereshHandler(){
        setData(originalData);
    }
    return(
        <div>
        {
            (data.length===0) ?
            <div>
                <div>No Options are Remaining</div>
                <button onClick={refereshHandler}>Refresh</button>
            </div>
            :
            <div>
                <h1>Plan With Love</h1>
                {
                    data.map((content)=>{
                        return <Card content={content} updateData={updateData}></Card>
                    })
                }   
            </div>
        }
        </div>
    );
};

export default Cards;