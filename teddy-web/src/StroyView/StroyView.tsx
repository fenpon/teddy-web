

import React, { Component } from 'react';

import './StroyView.scss';
interface Props { intro: string}
class StroyView extends Component<Props> {
    data: any;
    constructor(ln: any) {
        super(ln);
        this.data = ln;
    }
    Make_Text(obj: any) {
        let arr = obj["obj"].split("<br>");
        let elements = [];
        for (let i = 0; i < arr.length; ++i) {
            //console.log("C : ", arr[i]);
            elements.push(<div key={("T_"+i )}>{arr[i]}</div>);
        }
       
        return <div>{elements}</div>;
    }

    render() {
        return (
            <div className="Stroy" id="Stroy">
                <div className="Stroy_text">
                    스토리
                </div>
                 
                    <this.Make_Text obj={this.data["intro"]}/>

               
            </div>

        );
    }

}

export default StroyView;