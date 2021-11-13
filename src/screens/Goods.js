import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


const GoodsScreen = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };
    
        fetchUsers();
    }, []);

    if (loading) return <Text>로딩중..</Text>;
    if (error) return <Text>에러가 발생했습니다</Text>;
    if (!users) return null;
    return (
      <View style={styles.container}>
        {users.map(user => (
          <Text >
            {user.username}
          </Text>
        ))}
      </View>
    );
    // return (
    //     <View style={styles.container}>
    //         <Text>생활용품!</Text>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GoodsScreen;