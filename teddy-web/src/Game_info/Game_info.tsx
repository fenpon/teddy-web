

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './Game_info.scss';
interface Props_info { info_src: Array<Array<string>> }
interface state_info { page: number }
class Game_info extends Component<Props_info, state_info> {//prop과 state이렇게 인터페이스 빼고 값변경되면 렌더다시해서 갱신한다 바인딩한다. 앵귤러처럼
  
    data: any;
    total_Count: number;
    constructor(ln: any) {
        super(ln);
        this.state = { page: 1 };
        this.data = ln;
        this.total_Count = 0;
        for (var now in this.data["info_src"]) {
            console.log("T ", now);
            if (!(this.data["info_src"][now][0] == null && this.data["info_src"][now][1] == null)) {
                this.total_Count++;
            }
        }
        console.log(this.data["info_src"] );
    }
    Make_Info(obj : any) {
      
        
       // const datas = info_src;
        console.log(obj["obj"]["page"]);
        const now = obj["obj"]["page"] - 1;
        let elements = [];
        const style_this = {
            width:"100%"
        }
        elements.push(<img style={style_this} src={obj["obj"]["arr"][now][0]} key={now + "_" + 1} />);
        
       
        return <div className="Game_info_Img" >{elements}</div>;
    }
   
    Make_Button(obj: any) {


        // const datas = info_src;
       
        const Now_Page = obj["page"];
        const total = obj["total"];
        console.log(total);
        let elements = [];
       
        for (let i = 0; i < total; ++i) {
            let key_id = "key_" + i;
            if (i + 1 != Now_Page) {
                elements.push(<img src="../res/btn.png" className=" my_btn" id={key_id} key={i} onClick={obj["onClick"]} />);

            }
            else {
                elements.push(<img src="../res/btn_on.png" className=" my_btn" id={key_id} key={i} onClick={obj["onClick"]} />);

            }
        }

        return <div>{elements}</div>;
    }
    Make_Subline(obj: any) {
        console.log(obj["obj"]["page"]);
        const now = obj["obj"]["page"] - 1;
        let elements = <div className="game_info_subline"><span key={now + "_" + 2} className="game_info_font">{obj["obj"]["arr"][now][1]}</span></div>;
        return elements;
    }
    Set_Page(e: any) {
        const index = Number(e.target.id.split("_")[1]) + 1;
        console.log(index);
        this.setState({ page: index });
    }
 
    render() {
        const Wrapper = { "arr": this.data["info_src"], "page": this.state.page };
       
        return (
            <div className="Game_info_View" id="Game_info_View" >
               
                <this.Make_Subline obj={Wrapper} />
                <div className="game_info_wraper">
                 
                    <this.Make_Info obj={Wrapper} />
                    <img className="game_info_bg" src="../res/game_info_bg.png" />
                </div>
              
                <this.Make_Button page={this.state.page} total={this.total_Count} onClick={(e :any) => this.Set_Page(e)}/>
            </div>

        );
    }

}

export default Game_info;