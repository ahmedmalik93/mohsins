import { Component } from "react";

const prevLinkText = "Previous Article";
const prevLink = "#";
const nextLinkText = "Next Article";
const nextLink = "#";
const prevText = "Evisculate Parallel Processes via Technica Sound Models Authoritative";
const nextText = "Qvisculate Parallel Processes via Technica Sound Models Authoritative";

class ArticlePagination extends Component {
    render() { 
        return (
            <div className="article-pagination">
                <div className="prev-article">
                    <a href={prevLink}><i className="icofont-rounded-double-left"></i>{prevLinkText}</a>
                    <p>{prevText}</p>
                </div>
                <div className="next-article">
                    <a href={nextLink}>{nextLinkText} <i className="icofont-rounded-double-right"></i></a>
                    <p>{nextText}</p>
                </div>
            </div>
        );
    }
}
 
export default ArticlePagination;