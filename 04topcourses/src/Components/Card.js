import React from 'react';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card(props)
{
    const course=props.course;
    const likedCourses=props.likedCourses;
    const setLikedCourses=props.setLikedCourses;
    // console.log(Array.isArray(likedCourses), typeof likedCourses , typeof setLikedCourses);
    function likeHandler()
    {
        if(likedCourses.includes(course.id))
        {
            // const updatedLikedList=[];
            // for(let element in likedCourses)
            // {
            //     if(element!==course.id)
            //     {
            //         updatedLikedList.push(element);
            //     }
            // }
            //setLikedCourses(updatedLikedList);
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning('Item Unliked Successfully!');
            console.log(`Liked of ${course.id} removed Successfully`);
        }
        else
        {
            if(likedCourses.length===0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev)=>[...prev,course.id]);
                // setLikedCourses([...likedCourses,course.id])
            }
            console.log(`Liked ${course.id} course Successfully`);
            toast.success("Item Liked Successfully!")
        }
        console.log(likedCourses);
    }
    

    return(
        <div>
            <div>
                <img src={course.image.url} alt={course.image.alt}></img>
            </div>
            <div>
                <button onClick={likeHandler}>
                {
                    likedCourses.includes(course.id)?
                    (<FcLike></FcLike>):
                    (<FcLikePlaceholder></FcLikePlaceholder>)
                }
                </button>
            </div>
            <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Card;