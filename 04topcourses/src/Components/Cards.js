import React, { useState } from 'react';
import Card from './Card';
function Cards(props){
    const courses=props.courses;
    const category=props.category;
    function getCourses()
    {
        if(category==='All')
        {
            const courseArray=[];
            for(let key in courses)
            {
                for(let course of courses[key])
                {
                    courseArray.push(course);
                }
            }
            //console.log(courseArray);
            return courseArray;
        }
        else
        {
            return courses[category];
        }
    }
    const [likedCourses,setLikedCourses]=useState([]);
    // console.log(Array.isArray(likedCourses), typeof likedCourses , typeof setLikedCourses);
    return(
        <div>
            {
                getCourses().map((course)=>{
                    return <Card key={course.id} 
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} >
                    </Card>
                })
            }
        </div>
    )
}

export default Cards;