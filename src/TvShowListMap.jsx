import { DisplayShowItems } from "./DisplayShowItems";
export function TvShowListMap({showList,onclickmeparent}){

    return(<div className="listItem" >
        {showList.map((showList) => { 
            return (
                <span className="spanGapBetween">
                <DisplayShowItems showList={showList} onClick={onclickmeparent} 
                />
                </span>
            );
        })
    }
    </div>);
}