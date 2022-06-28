import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    background-color: green;
    color: white;
    font-size: 40px;
    width: 80%;
    text-align: center;
`;

const App = () => {
    return (
        <Container>
            <Title>Brew Buddy</Title>
            <StatusBar style="auto" />
        </Container>
    );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
