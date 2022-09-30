import { View, Text, Image, Pressable, ImageBackground } from "react-native"
import { useState, useEffect } from "react"
import { useGetItinerariesCommentMutation} from "../features/actions/commentsAPI"
import style from "../styles/commentsStyles"
import { ScrollView } from "react-native-gesture-handler"
import { useRoute } from "@react-navigation/native"


export default function Comments(props) {
    const route = useRoute()
    const {id, user} = route.params
    let [getItinerariesComment, { data: comments }] = useGetItinerariesCommentMutation()
    
    useEffect(() => {
        getItinerariesComment(id)
    },[id])

    const viewComment = (comment) => {
        return (
        <View  key={comment._id} style={style.commentcontainer}>
            <View style={style.usercomment}>
                    <Image source={{uri: comment.user.photo}}  style={{width: 60, height: 60, borderRadius: 50, resizeMode: 'contain'}}alt={comment.user.name}/>
                    <Text style={style.commentname}>{ comment.user.name}</Text>
                    <Text style={style.commentlastname}>{ comment.user.lastname}</Text>
                </View>
            <View style={style.comment}>
                    <Text style={style.commentp}>
                        {comment.comment}
                    </Text>
                </View>
            </View>
        )
    }

    const mainBg = {uri:"https://wallpapercave.com/wp/wp1809587.jpg"}
    return (
        <ImageBackground source={mainBg} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <ScrollView style={style.commentMain}>
                {comments?.length ?
                    <View>
                        {comments?.map(viewComment)}
                    </View>
                    : <Text style={style.nocomments}>There are not comments here... ಥ_ಥ</Text>}
            </ScrollView>
        </ImageBackground>
    )
}
