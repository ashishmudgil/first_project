export function DisplayPage(props){
    return (<div className="displayTitle">
        <h1>Popular Show: {props.getPopularShowName}</h1>
        <p>Description: {props.getShowDesc}</p>
    </div>);
}