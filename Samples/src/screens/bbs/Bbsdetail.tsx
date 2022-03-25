import React from "react";
import { StyleSheet,  ScrollView, Text } from "react-native";
import { Avatar, Card, Headline, Paragraph } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

function Bbsdetail(props:any){


    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contentContainer}>
        
            <Headline>글 내용</Headline>
            <Card style={styles.card}>

            <Card.Title
            title={props.bbs.title}
            subtitle={"작성자 :" + props.bbs.userid}
            left={props=><Avatar.Text {...props} label="AAA"/>}/>

            <Card.Content>
                <Paragraph style={styles.content}>
                    {props.bbs.content}
                </Paragraph>
                <Text style={{textAlign:"right"}}>
                    조회수:{props.bbs.readcount}
                </Text>

                <Text style={{textAlign:"right"}}>
                    작성일:{props.bbs.wdate}
                </Text>

            </Card.Content>

            </Card>
        
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    contentContainer:{
        padding:16

    },
    card:{
        marginTop:20
    },
    content:{
        fontSize:20
    }

})

export default Bbsdetail