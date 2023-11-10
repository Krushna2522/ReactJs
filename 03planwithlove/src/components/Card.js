import {useState} from 'react';

function Card(props)
{
    const content=props.content;
    console.log(content);
    const id=content.id;
    const image=content.image;
    const info=content.info;
    const name=content.name;
    const price=content.price;

    let description=`${info.substring(0,200)}....`;
    const [flag,setFlag]=useState(true);
    function interestHandler()
    {
        props.updateData(id);
    };
    function descHandler(){
        console.log('Inside the Handler');
        if(flag===true)
            setFlag(false);
        else
            setFlag(true);
    }

    console.log(id,image,info,name,price);
    return(
        <div>
            <div>
                <img src={image} alt={name}></img>
                <div>₹ {price}</div>
                <div>{name}</div>
                <div>
                    {
                        flag ?
                            <div>
                            <div>{description} <span onClick={descHandler}>Read More</span></div>
                            {/* <span onClick={descHandler}>Read More</span> */}
                            </div>
                            :
                            <div>
                            <div>{info} <span onClick={descHandler}>Show Less</span></div>
                            {/* <span onClick={descHandler}>Show Less</span> */}
                            </div>

                    }
                </div>
            </div>
            <div>
                <button onClick={interestHandler}>Not Interested</button>
            </div>
        </div>
    );
};

export default Card;