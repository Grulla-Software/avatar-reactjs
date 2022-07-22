import * as React from 'react';
import './index.css';
interface Props {
  src?: string,
  name: string,
  backgroundColor?: string
  fontSize: 'smaller'|'medium'|'large'|'larger'|'x-large'|'xx-large',
  fontColor?: string,
  width?: string,
  height?: string,
  borderRadius?: string,
}
class AvatarReactjs extends React.Component<Props> {
  getShortName(name:string|null){
    let shortName = '😀';
    if(name){
      let listName = name.split(' ');
      if(listName.length > 0){
        if(listName.length === 1){
          //Short name by first name
          if(listName[0].length > 2 || name[0].length === 2){
            shortName = listName[0].substring(0,2).toUpperCase();
          }else if(name[0].length === 1){
            shortName = listName[0].substring(0,1).toUpperCase();
          }

        }else if(listName.length > 1){
          //Short name by first name and last name 
          if(listName[0].length > 2 || name[0].length === 2){
            shortName = listName[0].substring(0,1).toUpperCase();
          }else if(name[0].length === 1){
            shortName = listName[0].substring(0,1).toUpperCase();
          }

          if(listName[1].length > 2 || listName[1].length === 2){
            shortName+= listName[1].substring(0,1).toUpperCase();
          }else if(name[1].length === 1){
            shortName+= listName[1].substring(0,1).toUpperCase();
          }

        }
      }
      
    }
    return shortName
  }
  
  render() {
    const { src, name, fontSize, backgroundColor, fontColor, width, height, borderRadius} = this.props;
    return (
      <div>
          {src?
            <img src={src} alt="Avatar" className="avatarImg" title={name?name:''} style={{width: width?width:'100px', height: height?height:'100px', borderRadius: borderRadius?borderRadius:'50%'}}/>:
            <div className="avatarName" title={name?name:''} style={{ backgroundColor: backgroundColor?backgroundColor:'red', width: width?width:'100px', height: height?height:'100px',  borderRadius: borderRadius?borderRadius:'50%'}}>
              <span className='avatarNameContent' style={{fontSize: fontSize?fontSize:'xx-large', color: fontColor?fontColor: 'white'}}>
                {this.getShortName(name)}
              </span>
            </div>
          }
      </div>
    );
  }
}
export default AvatarReactjs;