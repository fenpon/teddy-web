

import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import './Doll_Info.scss';
interface Props_info { Doll: object }
interface state_info { Now_key: string }
class Doll_Info extends Component<Props_info, state_info> {//prop과 state이렇게 인터페이스 빼고 값변경되면 렌더다시해서 갱신한다 바인딩한다. 앵귤러처럼

    data: any;
    
    constructor(ln: any) {
        super(ln);
        this.data = ln;
        console.log("DOll ", this.data["Doll"]);
      
        for (let k in this.data["Doll"]) {
            this.state = { Now_key: k };
           // this.setState({ Now_key: k });
            break;
        }
        console.log("now : ", this.state.Now_key);
    }
    Make_Doll(obj: any) {
        console.log(obj);
        let elements = [];
        for (let k in obj["Doll"]) {
            let this_style = "doll_btn";
            console.log("kk : ", k);
          
            if (obj.Now_key == k)
            {
                this_style += " doll_btn_on";
            }
            // 
            const SStyle = {
             
                backgroundImage: "url('../res/Doll_Menu.png')",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition : "center"
            };

        
 

            elements.push(<div className={this_style} style={SStyle} key={(k + "_")} id={(k)} onClick={obj["onclick"] }>
                <span className="doll_btn_text" id={( k)} >{obj["Doll"][k]["_Name"]}</span>
            </div>);
          
          
        }

        let Now_Doll_List = [];
        for (let now in obj["Doll"][obj.Now_key]["arr"][0]) {
            if (now != "_Name") {
                Now_Doll_List.push(<img className="doll_list" key={now} src={obj["Doll"][obj.Now_key]["arr"][0][now]} />);
            }
            console.log("NN ",now);
        }
        
        return <div>
            <div className="doll_view">{elements}</div>
            <div className="doll_list_view">{Now_Doll_List}</div>
        </div>;
    }
    This_Onclick(e: any) {
        
       
            console.log("SET", e.target.id );
            this.setState({ Now_key: e.target.id});
        
      
    }
    render() {
    

        return (

            <div className="Doll" id="Doll">

                <this.Make_Doll Doll={this.data["Doll"]} Now_key={this.state.Now_key} onclick={(e: any) => this.This_Onclick(e)} />
            </div>
        );
    }

}

export default Doll_Info;