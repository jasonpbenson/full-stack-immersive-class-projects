import { realpathSync } from "fs";


class App extends React.Component{
    constructor(){
        super()
    }
}

render(){
    return(
        <div className="filterableProjectTable">
            <div className="searchBar">
                <form>
                    <input type="text" placeholder="Search...">
                    <input type="checkbox">
                </form>
            </div>
            <div className="productTable">
                <div className="productCategoryRow"></div>
                <div className="productRow"></div>
            </div>
            <div className="productTable">
                <div className="productCategoryRow"></div>
                <div className="productRow"></div>
            </div>
        </div>
    )
}