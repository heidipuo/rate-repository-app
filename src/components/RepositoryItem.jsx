import { View, Image, StyleSheet } from "react-native-web";
import Text from "./Text";

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    }, 
    flexItemA: {
        flexDirection: 'row',
        padding: 10,
      
    },
    flexItemB:{
        flexDirection: 'column', 
        paddingLeft: 20,
    },
    flexItemC: {
        flexDirection: 'row',
        flexGrow: 0,
        paddingBottom: 10,
    },
    flexItemD: {
        flexDirection: 'column', 
        flexGrow: 1,
        paddingLeft: 20,
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 7   
    }
})

const toDecimal = (num) => (num / 1000).toFixed(1)

const RepositoryItem = ({item}) =>{

    return (
        <View style={styles.flexContainer}>
           <View style={styles.flexItemA}>
              <Image 
                style={styles.logo}
                source={{uri: item.ownerAvatarUrl}}>
              </Image>
            <View style={styles.flexItemB}>
                <View style={styles.flexItemC}><Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text></View>
                <View style={styles.flexItemC}><Text color='textSecondary' >{item.description}</Text></View>
                <View style={styles.flexItemC}><Text backgroundColor='backgroundBlue' style={{padding: 5, borderRadius: 7}}>{item.language}</Text></View>
            </View>
            
            </View>
            <View style={styles.flexItemA}>
                <View style={styles.flexItemD}>
                    <Text fontWeight='bold'>{toDecimal(item.stargazersCount)}k</Text>
                    <Text color='textSecondary'>stars</Text>
                </View>
                <View style={styles.flexItemD}>
                    <Text fontWeight='bold'>{toDecimal(item.forksCount)}k</Text>
                     <Text color='textSecondary'>Forks</Text>
                </View>
                <View style={styles.flexItemD}>
                    <Text fontWeight='bold'>{item.reviewCount}</Text>
                     <Text color='textSecondary'>Reviews</Text>
                </View>
                <View style={styles.flexItemD}>
                    <Text fontWeight='bold'>{item.ratingAverage}</Text>
                     <Text color='textSecondary'>Ratings</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem;