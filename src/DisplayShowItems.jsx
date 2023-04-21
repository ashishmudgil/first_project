import './App.css';

export function DisplayShowItems(a){
    const imageURLsmall = "https://image.tmdb.org/t/p/w300";
    console.log("hi ssss "+imageURLsmall+a.showList.backdrop_path);
    const onClick_ = () => {
        a.onClick(a.showList);
    };
    return (
    <div className="smallImage" onClick={onClick_}>
        <img src={imageURLsmall + a.showList.backdrop_path} alt={a.showList.title} />
        <div className="title">{a.showList.title}</div>
    </div>
    );
}