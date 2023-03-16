import { Component } from "react";

let ratingList = [
    {
        iconName: 'icofont-ui-rate-blank',
    },
    {
        iconName: 'icofont-ui-rate-blank',
    },
    {
        iconName: 'icofont-ui-rate-blank',
    },
    {
        iconName: 'icofont-ui-rate-blank',
    },
    {
        iconName: 'icofont-ui-rate-blank',
    },
]

class Rating extends Component {
    render() { 
        return (
            <ul>
                {ratingList.map((val, i) => (
                    <li key={i}><i className={val.iconName}></i></li>
                ))}
            </ul>
        );
    }
}
 
export default Rating;