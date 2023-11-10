
function Filters(props){
    const filters=props.filters;
    //const category=props.category;
    const setCategory=props.setCategory;
    function categoryHandler(filterName)
    {
        setCategory(filterName);
    }
    //console.log(filters);
    return(
        <div>
            {
                filters.map((filter)=>{
                    return <button key={filter.id} onClick={()=>categoryHandler(filter.title)}>{filter.title}</button>
                })
            }
        </div>
    )
}

export default Filters;