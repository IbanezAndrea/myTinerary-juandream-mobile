import { View, Text, Image, Button } from "react-native"
import { useState, useEffect } from "react"
import { useGetItinerariesCommentMutation} from "../features/actions/commentsAPI"
import style from "../styles/commentsStyles"
import { ScrollView } from "react-native-gesture-handler"


export default function Comments(props) {
    let id = props?.itinerary
    const user = props.userId
    
    let [getItinerariesComment,{data: comments}]= useGetItinerariesCommentMutation(id)
    
    useEffect(() => {
        if (!open) {   
            getItinerariesComment(id)
        }
    },[open])

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        open ?
        setOpen(false)
        :setOpen(true)
    }

    const viewComment = (comment) => {
        return (
        <View  key={comment._id} style={style.commentcontainer}>
            <View style={style.usercomment}>
                    <Image source={{uri: comment.user.photo}}  style={{width: 50, height: 50, borderRadius: 20, resizeMode: 'contain'}}alt={comment.user.name}/>
                    <Text style={style.commentname}>{ comment.user.name}</Text>
                    <Text style={style.commentlastname}>{ comment.user.lastname}</Text>
                </View>
            <View style={style.comment}>
                    <Text style={style.commentp}>1
                        {comment.comment}
                    </Text>
                </View>
            </View>
        )
    }


    return (
        <ScrollView>
            {comments?.length?
            <Button style={style.commentsbtn} onPress={handleOpen} title={open? "Close ":"" + 'Comments' } /> 
            : <Text>There are not comments here...</Text> }
                {open ?
            <View >
                    {comments?.map(viewComment)}
            </View>
                    :null
                }
        </ScrollView>
    
    )
}
