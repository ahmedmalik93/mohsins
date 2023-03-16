import { Component } from "react";


let msList = [
    {
        imgUrl: 'assets/images/match/social-1.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-2.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-3.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
]

class SocialMedia extends Component {
    render() { 
        return (
            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                {msList.map((val, i) => (
                    <li key={i}><a href={val.siteLink}><img src={`${val.imgUrl}`} alt={val.imgAlt} /></a></li>
                ))}
            </ul>
        );
    }
}
 
export default SocialMedia;