import React from 'react';
import {Text, Image, TextInput, View} from 'react-native';
import styled from 'styled-components/native';
const App = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <View style={{flex: 0.25, alignItems: 'center', marginTop: 100}}>
          <Image
            source={require('./public/assets/images/logo.png')}
            style={{width: 300, height: 100, marginBottom: 25}}
          />
          <InputText></InputText>
          <View>
            <Image
              source={require('./public/assets/images/search.png')}
              style={{
                width: 15,
                height: 15,
                position: 'absolute',
                right: 125,
                bottom: 16,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const InputText = styled.TextInput`
  position: relative;
  border: 1px solid gray;
  border-radius: 50px;
  min-height: 50px;
  width: 80%;
  color: white;
  padding-left: 40px;
`;

export default App;
