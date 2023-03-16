import { Component } from "react";

const title = "Rajib Raj"
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices."


let SocialList = [
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-behance',
        siteLink: '#',
        className: 'behance',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-vimeo',
        siteLink: '#',
        className: 'vimeo',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
]

class Authors extends Component {
    render() { 
        return ( 
            <div className="authors">
                <div className="author-thumb">
                    <img src="assets/images/blog/author/01.jpg" alt="author" />
                </div>
                <div className="author-content">
                    <h6>{title}</h6>
                    <p>{desc}</p>
                    <div className="social-media">
                        {SocialList.map((val, i) => (
                            <a key={i} href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Authors;