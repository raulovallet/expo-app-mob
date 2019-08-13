import React,{Component} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default class AppButton extends Component{
    render(){
        const {action, iconName, iconColor, title, bgColor, setWith} = this.props;
        const {width} =  setWith ? Dimensions.get('window').width: {};
        return(
            <Button
                onPress={action}
                buttonStyle={{
                    backgroundColor: bgColor,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    marginBottom: 5,
                    width: width
                }}
                title={title}
                // text={title}
                // icon={
                //     <Icon
                //         name={iconName}
                //         size={15}
                //         color={iconColor}
                //     />
                // }
                icon={{
                    name:iconName,
                    size:15,
                    color:iconColor,
                    type:'font-awesome',
                    marginLeft:5
                }}
                iconRight = {true}
            >

            </Button>
        )
    }

}