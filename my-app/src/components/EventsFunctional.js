function EventsFunctional(){

    function clickHandler(){
        console.log('clickHandler EventsFunctional')
    }
    return (
        <div>
            <button onClick={clickHandler}> click event - class component</button>
        </div>
    )
}

export  default EventsFunctional;